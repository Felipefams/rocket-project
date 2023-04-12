import express from 'express';
const app = express();
const PORT = process.env.PORT || 3000;
// const rocketApi = require("../routes/api/rocketApi")
import rocketApi from "../routes/api/rocketApi"
import crewApi from "../routes/api/crewApi"
import crewmanApi from "../routes/api/crewmanApi"
import launchApi from "../routes/api/launchApi"


app.use(express.json())
app.use("/rockets", rocketApi);
app.use("/crews", crewApi);
app.use("/crewman", crewmanApi);
app.use("/launchApi", launchApi);

app.listen(PORT, () => console.log(`server running at port ${PORT}`));