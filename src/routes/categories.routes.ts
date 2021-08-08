import { Router } from "express";

import { CategoriesRepository } from "../modules/cars/repositories/CategoriesRepository";
import { CreateCategoryService } from "../modules/cars/services/CreateCategoryService";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.get("/", (request, response) => {
    const category = categoriesRepository.list();

    return response.status(201).json({ category });
});

categoriesRoutes.post("/", (request, response) => {
    const { name, description } = request.body;

    const categoryService = new CreateCategoryService(categoriesRepository);

    categoryService.excute({ name, description });

    return response.status(201).send();
});

export { categoriesRoutes };
