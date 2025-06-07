import app from "./app";
import envs from "./config/envs";

const nodeEnv = envs.NODE_ENV || 'dev';
const port = envs.PORT || 8080;

app.listen(port, () => {
    console.log(`Node running on port ${port}, "${nodeEnv}" environment.`);
    //console.log(process.env)
});