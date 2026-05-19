const app = require("./src/app");
const connectToDatabase = require("./src/Database/Database");
connectToDatabase();
app.listen(3001,()=>{
    console.log("The server is running on port 3001");
    console.log("Connected to the database successfully");
})