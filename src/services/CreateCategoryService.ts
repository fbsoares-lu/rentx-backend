import { CategoriesRepository } from "../repositories/CategoriesRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateCategoryService {
    private categoriesRepository: CategoriesRepository;

    constructor(categoriesRepository: CategoriesRepository) {
        this.categoriesRepository = categoriesRepository;
    }

    excute({ description, name }: IRequest): void {
        const categoryAlredyExists = this.categoriesRepository.findByName(name);

        if (categoryAlredyExists) {
            throw new Error("Category Alredy exists!");
        }

        this.categoriesRepository.create({ name, description });
    }
}

export { CreateCategoryService };
