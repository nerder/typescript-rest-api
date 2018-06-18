import { getRepository, Repository } from "typeorm";

export abstract class BaseRepository<T> {

  // tslint:disable-next-line:variable-name
  public readonly _repository: Repository<T>;

  constructor(entityName: string) {
    this._repository = getRepository(entityName);
  }

// A LOT OF CODE REPETITION CAN BE AVOIDED HERE USING GENERICS
// but TypeScript. DEP https://github.com/Microsoft/TypeScript/issues/21592
// I SPEND A LOT OF TIME FOLLOW THIS APPROACH BUT AT THE END I HAD TO FALLBACK TO THE BAD ONE.
// THIS WILL BE REFACTORED EVENTUALLY ONCE TYPESCRIPT V3 IS OUT.

// async find(item: T): Promise<T[]> {
//     return Promise.resolve(new Array());
// }
// async findOne(id: string): Promise<T> {
//     return await this._repository.findOneOrFail(id);
// }
// async create(item: T): Promise<boolean> {
//     return await !!this._repository.insert(item);
// }
// async update(id: string, item: T): Promise<boolean> {
//     return await this.delete(id).then(() => this.create(item));
// }
// async delete(id: string): Promise<boolean> {
//     return true;
// }
}
