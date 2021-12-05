import { Router } from "express";

import { SpecificationsRepository } from "../modules/cars/repositories/SpecificationsRepository";
import { CreateSpecificationService } from "../modules/cars/services/CreateSpecificationService";

const specificationsRoutes = Router();
const specificationsRespositoy = new SpecificationsRepository();

specificationsRoutes.post("/create", (request, response) => {
  const { name, description } = request.body;

  const specificationCategory = new CreateSpecificationService(
    specificationsRespositoy
  );

  specificationCategory.execute({ name, description });

  return response.status(201).send();
});

export { specificationsRoutes };
