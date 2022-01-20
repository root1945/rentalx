import { inject, injectable } from "tsyringe";

import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateSpecificationService {
  constructor(
    @inject("SpectificationsRepository")
    private spectificationsRepository: ISpecificationsRepository
  ) { }

  execute({ name, description }: IRequest): void {
    const specificationAlreadyExists =
      this.spectificationsRepository.findByName(name);

    if (specificationAlreadyExists)
      throw new Error("Specification Already exists! ");

    this.spectificationsRepository.create({ name, description });
  }
}

export { CreateSpecificationService };
