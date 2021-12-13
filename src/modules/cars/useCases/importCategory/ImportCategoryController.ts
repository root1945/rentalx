import { Request, Response } from "express";

import { ImportCategoryService } from "./ImportCategoryService";

class ImportCategoryController {
  private importCategoryService;

  constructor(importCategoryService: ImportCategoryService) {
    this.importCategoryService = importCategoryService;
  }

  handle(request: Request, response: Response): Response {
    const { file } = request;

    this.importCategoryService.execute(file);

    return response.status(200).send();
  }
}

export { ImportCategoryController };
