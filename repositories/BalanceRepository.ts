import { BaseRepository } from "./BaseRepository";
import { Balance } from "../entities/Balance";
import { AutoWired, Singleton } from "typescript-ioc";

@Singleton
@AutoWired
export class BalanceRepository extends BaseRepository​​<Balance​​> {
    constructor() {
        super('Balance');
    }

    async save(item: Balance): Promise<Balance> {
        return await this._repository.save(item);
    }

    async find(item: Balance): Promise<Balance[]> {
        return await this._repository.find(item);
    }

    async findOne(id: string): Promise<Balance> {
        return await this._repository.findOneOrFail(id);
    }

    async create(item: Balance): Promise<boolean> {
        return await !!this._repository.insert(item);
    }

    async update(id: string, item: Balance): Promise<boolean> {
        return await this.update(id, item);
    }

    async delete(id: string): Promise<boolean> {
        return true;
    }
}