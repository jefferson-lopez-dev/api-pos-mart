import express from "express";
import cors, { CorsOptions } from "cors";
import {
  RoutesInventory as RI,
  RoutesBoxes as RB,
} from "./inventory/infrastructure/routes";

export const app = express();

const corsConfig: CorsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
};

app.use(cors(corsConfig));
app.use(express.json());
app.use("/boxes", RB.Boxes, RB.Sales);
app.use("/inventory", RI.Inventory, RI.Folder, RI.Product, RI.AssignedBoxes);
