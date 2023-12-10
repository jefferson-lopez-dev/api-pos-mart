import express from "express";
import cors, { CorsOptions } from "cors";
import { InvRoute, FolderRoute } from "./apps";

export const app = express();

const corsConfig: CorsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
};

//MIDDLEWARES
app.use(cors(corsConfig));
app.use(express.json());

//ROUTES
app.use("/folder", FolderRoute);
app.use("/inventory", InvRoute);
