import app from "./app";

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Node running on port ${port}...`);
});