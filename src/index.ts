import express from 'express';
const app = express();
const PORT = process.env.PORT || 3000;
// const rocketApi = require("../routes/api/rocketApi")
import rocketApi from "../routes/api/rocketApi"
import crewApi from "../routes/api/crewApi"


app.use(express.json())
app.use("/rockets", rocketApi);
app.use("/crews", crewApi);

app.listen(PORT, () => console.log(`server running at port ${PORT}`));