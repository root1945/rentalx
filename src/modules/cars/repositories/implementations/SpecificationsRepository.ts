import { Specification } from "../../model/Specification";
import {
  ISpecificationsDTO,
  ICreateSpecificationDTO,
} from "../ISpecificationsRepository";

class SpecificationsRepository implements ISpecificationsDTO {
  private specifications: Specification[];

  // eslint-disable-next-line no-use-before-define
  private static INSTANCE: SpecificationsRepository;

  private constructor() {
    this.specifications = [];
  }

  public static getInstance(): SpecificationsRepository {
    if (!this.INSTANCE) {
      this.INSTANCE = new SpecificationsRepository();
    }
    return this.INSTANCE;
  }

  create({ name, description }: ICreateSpecificationDTO): void {
    const specification = new Specification();

    Object.assign(specification, {
      name,
      description,
      created_at: new Date(),
    });

    this.specifications.push(specification);
  }

  findByName(name: string): Specification {
    return this.specifications.find((specification) => {
      return specification.name === name;
    });
  }
}

export { SpecificationsRepository };
