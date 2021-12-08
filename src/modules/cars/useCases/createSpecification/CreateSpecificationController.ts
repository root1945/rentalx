import { Request, Response } from "express";

import { CreateSpecificationService } from "./CreateSpecificationService";

class CreateSpecificationController {
  private createSpecificationService;

  constructor(createSpecificationService: CreateSpecificationService) {
    this.createSpecificationService = createSpecificationService;
  }

  handle(request: Request, response: Response): Response {
    const { name, description } = request.body;

    this.createSpecificationService.execute({ name, description });

    return response.status(201).send();
  }
}

export { CreateSpecificationController };
