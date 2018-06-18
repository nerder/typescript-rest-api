import { AutoWired, Singleton } from "typescript-ioc";
import { Balance } from "../entities/Balance";
import { BaseRepository } from "./BaseRepository";

@Singleton
@AutoWired
export class BalanceRepository extends BaseRepository<Balance> {
  constructor() {
    super("Balance");
  }

  public async save(item: Balance): Promise<Balance> {
    return await this._repository.save(item);
  }

  public async find(item: Balance): Promise<Balance[]> {
    return await this._repository.find(item);
  }

  public async findOne(id: string): Promise<Balance> {
    return await this._repository.findOneOrFail(id);
  }

  public async create(item: Balance): Promise<boolean> {
    return await !!this._repository.insert(item);
  }

  public async update(id: string, item: Balance): Promise<boolean> {
    return await this.update(id, item);
  }

  public async delete(id: string): Promise<boolean> {
    return true;
  }
}
