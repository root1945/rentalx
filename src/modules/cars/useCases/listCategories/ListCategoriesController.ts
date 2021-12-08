import { Request, Response } from "express";

import { ListCategoriesService } from "./ListCategoriesService";

class ListCategoriesController {
  private listCategoriesService;

  constructor(listCategoriesService: ListCategoriesService) {
    this.listCategoriesService = listCategoriesService;
  }

  handle(request: Request, response: Response): Response {
    const all = this.listCategoriesService.execute();

    return response.json({ all });
  }
}

export { ListCategoriesController };
