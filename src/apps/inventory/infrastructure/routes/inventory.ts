import { Router } from "express";
import { MongoRepository as Repository } from "../repository/mongo";
import { InventoryUseCase as UseCase } from "../../app/use-case";
import { InventoryController as Controllers } from "../controllers/ctrl";

export const InvRoute = Router();

const MongoInventoryRepository = new Repository();
const inventoryUseCase = new UseCase(MongoInventoryRepository);
const {
  createInventory: Create,
  updateInventory: Update,
  findInventoryById: FindById,
  deleteInventory: Delete,
  findAllInventories: findAlls,
} = new Controllers(inventoryUseCase);

InvRoute.post("/alls", findAlls);
InvRoute.get("/:id/:create_by", FindById);
InvRoute.post("/", Create);
InvRoute.put("/", Update);
InvRoute.delete("/:id", Delete);
