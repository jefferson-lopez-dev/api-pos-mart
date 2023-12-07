import { Router } from "express";
import { MongoRepository } from "../../repository/mongo";
import { InventoryUseCase } from "../../../application/use-case";
import { InventoryController } from "../../controllers/ctrl";

export const Inventory = Router();

const MongoInventoryRepository = new MongoRepository();

const inventoryUseCase = new InventoryUseCase(MongoInventoryRepository);

const { createInventory } = new InventoryController(inventoryUseCase);

Inventory.get("/", () => {});
Inventory.post("/", createInventory);
Inventory.put("/", () => {});
Inventory.delete("/", () => {});
