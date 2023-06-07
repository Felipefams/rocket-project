import 'reflect-metadata'
import express from 'express';
import YAML from 'yamljs';
import swaggerui from 'swagger-ui-express';
import * as Sentry from '@sentry/node';

const app = express();
const PORT = process.env.PORT || 8080;

import RocketApi from "./routes/api/RocketApi"
import CrewApi from "./routes/api/CrewApi"
import CrewmanApi from "./routes/api/CrewmanApi"
import LaunchApi from "./routes/api/LaunchApi"
import AppDataSource from './data-source';
import { corsConfig } from './config/cors-config';

Sentry.init({
    dsn: "https://22f456971be1441e81d6f3f1edab3f16@o4505092894031872.ingest.sentry.io/4505092906942464",
    integrations: [
        new Sentry.Integrations.Http({ tracing: true }),
    ],
    tracesSampleRate: 1.0,
});
app.use(Sentry.Handlers.requestHandler() as express.RequestHandler);
app.use(Sentry.Handlers.tracingHandler());

const swaggerDocument = YAML.load('./swagger.yaml');

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
        initializeApp();
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })

function initializeApp() {
    app.use(corsConfig);
    app.use(express.json())
    app.use("/rocket", RocketApi);
    app.use("/crew", CrewApi);
    app.use("/crewman", CrewmanApi);
    app.use("/launch", LaunchApi);
    app.use("/api-docs", swaggerui.serve, swaggerui.setup(swaggerDocument));
    app.use(Sentry.Handlers.errorHandler() as express.ErrorRequestHandler);

    app.get("/debug-sentry", function mainHandler(req, res) {
        throw new Error("My first Sentry error!");
    });

    app.listen(PORT, () => console.log(`server running at port ${PORT}`));
}