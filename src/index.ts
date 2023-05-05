import 'reflect-metadata'
import express from 'express';
// import "./database"
// import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
// dotenv.config()
const app = express();
const PORT = process.env.PORT || 8080;

import RocketApi from "./routes/api/RocketApi"
import CrewApi from "./routes/api/CrewApi"
import CrewmanApi from "./routes/api/CrewmanApi"
import LaunchApi from "./routes/api/LaunchApi"
import AppDataSource from './data-source';


AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
        initializeApp();
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })

function initializeApp() {
    app.use(express.json())
    app.use("/rocket", RocketApi);
    app.use("/crew", CrewApi);
    app.use("/crewman", CrewmanApi);
    app.use("/launch", LaunchApi);

    app.listen(PORT, () => console.log(`server running at port ${PORT}`));
}