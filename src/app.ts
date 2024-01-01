import express, { Request, Response } from "express";
import cors, { CorsOptions } from "cors";
import { InvRoute, FolderRoute, ProductRoute } from "./apps";

type name = "fo" | "in" | "pr";

function endpoint(name: name) {
  const entry_point = "/api/pos";
  if (name === "fo") {
    return `${entry_point}/folder`;
  }
  if (name === "in") {
    return `${entry_point}/inventory`;
  }
  if (name === "pr") {
    return `${entry_point}/product`;
  } else {
    return entry_point;
  }
}

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
app.use("/", (_req: Request, res: Response) => res.send("Mart Pos - API POS"));
app.use(endpoint("fo"), FolderRoute);
app.use(endpoint("in"), InvRoute);
app.use(endpoint("pr"), ProductRoute);
