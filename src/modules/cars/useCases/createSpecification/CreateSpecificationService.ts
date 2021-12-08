import { ISpecificationsDTO } from "../../repositories/ISpecificationsRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationService {
  private spectificationsRepository;

  constructor(spectificationsRepository: ISpecificationsDTO) {
    this.spectificationsRepository = spectificationsRepository;
  }

  execute({ name, description }: IRequest): void {
    const specificationAlreadyExists =
      this.spectificationsRepository.findByName(name);

    if (specificationAlreadyExists)
      throw new Error("Specification Already exists! ");

    this.spectificationsRepository.create({ name, description });
  }
}

export { CreateSpecificationService };
