import cors from "cors";

const corsWhiteList = ['https://www.google.com', 'null', 'http://localhost:5500', "http://127.0.0.1:5500", 'http://localhost:5173'];

const corsOptions: cors.CorsOptions = {
    origin: (origin, callback) => {
        if (origin == undefined || corsWhiteList.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    },
    optionsSuccessStatus: 200
};

export const corsConfig = cors(corsOptions);

