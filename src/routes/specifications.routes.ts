import { Router } from "express";

import { createSpecificationController } from "../modules/cars/useCases/createSpecification";

const specificationsRoutes = Router();

specificationsRoutes.post("/create", (request, response) => {
  return createSpecificationController.handle(request, response);
});

export { specificationsRoutes };
