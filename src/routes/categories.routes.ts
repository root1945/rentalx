import { Router } from "express";
import multer from "multer";

import createCategoryController from "../modules/cars/useCases/createCategory";
import { importCategoryController } from "../modules/cars/useCases/importCategory";
import { listCategoriesController } from "../modules/cars/useCases/listCategories";

const categoriesRoutes = Router();

const upload = multer({ dest: "./tmp" });

categoriesRoutes.post("/create", (request, response) =>
  createCategoryController().handle(request, response)
);

categoriesRoutes.get("/", (request, response) =>
  listCategoriesController.handle(request, response)
);

categoriesRoutes.get("/import", upload.single("file"), (request, response) =>
  importCategoryController.handle(request, response)
);

export { categoriesRoutes };
