import { Response, Request } from "express";

import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

class CreateCategoryController {
    private categoryService: CreateCategoryUseCase;

    constructor(categoryService: CreateCategoryUseCase) {
        this.categoryService = categoryService;
    }

    handle(request: Request, response: Response): Response {
        const { name, description } = request.body;

        this.categoryService.excute({ name, description });

        return response.status(201).send();
    }
}

export { CreateCategoryController };
