import { SpecificationsRepository } from "../repositories/SpecificationsRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateSpecificationservice {
    private specificationRepository: SpecificationsRepository;

    constructor(specificationRepository: SpecificationsRepository) {
        this.specificationRepository = specificationRepository;
    }

    execute({ name, description }: IRequest): void {
        const specificationAlredyExists =
            this.specificationRepository.findByName(name);

        if (specificationAlredyExists) {
            throw new Error("Specification Alredy exists!");
        }

        this.specificationRepository.create({
            name,
            description,
        });
    }
}

export { CreateSpecificationservice };
