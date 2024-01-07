import { Router } from "express";
import { MongoRepository as Repository } from "../repository/mongo";
import { FoldersUseCase as UseCase } from "../../app/useCase";
import { FolderController as Controllers } from "../controllers";

export const FolderRoute = Router();

const MongoFolderRepository = new Repository();
const folderUseCase = new UseCase(MongoFolderRepository);
const {
  SearchAFolder,
  SearchForAnInventoryFolder,
  SearchInventoryFolders,
  searchAllFolders,
  createFolder,
  updateFolder,
  deleteFolder,
} = new Controllers(folderUseCase);

FolderRoute.post("/search/allFolders", searchAllFolders);
FolderRoute.post("/search/aFolder", SearchAFolder);
FolderRoute.post("/search/forAnInventoryFolder", SearchForAnInventoryFolder);
FolderRoute.post("/searchInventoryFolders", SearchInventoryFolders);
FolderRoute.post("/", createFolder);
FolderRoute.put("/", updateFolder);
FolderRoute.delete("/:folder_uuid", deleteFolder);
