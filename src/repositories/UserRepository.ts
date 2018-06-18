import { AutoWired, Singleton } from "typescript-ioc";
import { User } from "../entities/User";
import { BaseRepository } from "./BaseRepository";
import { IRead } from "./interfaces/IRead";
import { IWrite } from "./interfaces/IWrite";

@Singleton
@AutoWired
export class UserRepository extends BaseRepository<User> implements IRead<User>, IWrite<User> {
  constructor() {
    super("User");
  }
  public async save(item: User): Promise<User> {
    return await this._repository.save(item);
  }

  public async find(item: User): Promise<User[]> {
    return await this._repository.find(item);
  }

  public async findOne(id: string): Promise<User> {
    return await this._repository.findOneOrFail(id);
  }

  public async create(item: User): Promise<boolean> {
    return await !!this._repository.insert(item);
  }

  public async update(id: string, item: User): Promise<boolean> {
    return await this.update(id, item);
  }

  public async delete(id: string): Promise<boolean> {
    return true;
  }
}
