import { server } from "./app.js";
import dotenv from "dotenv";

dotenv.config();

server(parseInt(process.env.PORT));
