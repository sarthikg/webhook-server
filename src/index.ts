import { server } from "./app.js";
import dotenv from "dotenv";

console.log("This ran");

dotenv.config();

server(parseInt(process.env.PORT));
