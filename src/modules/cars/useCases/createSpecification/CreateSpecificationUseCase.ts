import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateSpecificationUseCase {
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

export { CreateSpecificationUseCase };
