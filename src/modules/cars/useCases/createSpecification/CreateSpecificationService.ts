import { inject, injectable } from "tsyringe";

import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateSpecificationService {
  constructor(
    @inject("SpecificationsRepository")
    private spectificationsRepository: ISpecificationsRepository
  ) { }

  async execute({ name, description }: IRequest): Promise<void> {
    const specificationAlreadyExists =
      await this.spectificationsRepository.findByName(name);

    if (specificationAlreadyExists)
      throw new Error("Specification Already exists! ");

    await this.spectificationsRepository.create({ name, description });
  }
}

export { CreateSpecificationService };
