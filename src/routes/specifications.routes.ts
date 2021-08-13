import { Router } from "express";

import { createSpecificationController } from "../modules/cars/useCases/createSpecification";

const specificationsRoutes = Router();

specificationsRoutes.post("/", (request, response) => {
    console.log("olas  ");
    return createSpecificationController.handle(request, response);
});

export { specificationsRoutes };
