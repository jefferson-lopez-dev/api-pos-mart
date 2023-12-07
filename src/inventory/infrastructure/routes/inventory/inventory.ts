import { Router } from "express";
import { MongoRepository } from "../../repository/mongo";
import { InventoryUseCase } from "../../../application/use-case";
import { InventoryController } from "../../controllers/ctrl";

export const Inventory = Router();

const MongoInventoryRepository = new MongoRepository();

const inventoryUseCase = new InventoryUseCase(MongoInventoryRepository);

const { createInventory, updateInventory, findInventoryById, deleteInventory } =
  new InventoryController(inventoryUseCase);

Inventory.get("/", findInventoryById);
Inventory.post("/", createInventory);
Inventory.put("/", updateInventory);
Inventory.delete("/", deleteInventory);
