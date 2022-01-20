import { getRepository, Repository } from "typeorm";

import { Category } from "../../entities/Category";
import { Specification } from "../../entities/Specification";
import {
  ISpecificationsRepository,
  ICreateSpecificationDTO,
} from "../ISpecificationsRepository";

class SpecificationsRepository implements ISpecificationsRepository {
  private repository: Repository<Category>;

  private constructor() {
    this.repository = getRepository(Category);
  }

  // public static getInstance(): SpecificationsRepository {
  //   if (!this.INSTANCE) {
  //     this.INSTANCE = new SpecificationsRepository();
  //   }
  //   return this.INSTANCE;
  // }

  async create({ name, description }: ICreateSpecificationDTO): Promise<void> {
    const specification = this.repository.create({
      description,
      name,
    });

    await this.repository.save(specification);
  }

  findByName(name: string): Specification {
    // return this.repository.find((specification) => {
    //   return specification.name === name;
    // });
    return null;
  }
}

export { SpecificationsRepository };
