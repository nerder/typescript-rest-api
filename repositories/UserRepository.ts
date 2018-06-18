import { BaseRepository } from "./BaseRepository";
import { User } from "../entities/User";
import { Singleton, AutoWired } from "typescript-ioc";
import { ReadInterface } from "./interfaces/ReadInterface";
import { WriteInterface } from "./interfaces/WriteInterface";

@Singleton
@AutoWired
export class UserRepository extends BaseRepository​​<User> implements ReadInterface<User>, WriteInterface<User> {
    constructor() {
        super('User');
    }
    async save(item: User): Promise<User> {
        return await this._repository.save(item);
    }

    async find(item: User): Promise<User[]> {
        return await this._repository.find(item);
    }

    async findOne(id: string): Promise<User> {
        return await this._repository.findOneOrFail(id);
    }

    async create(item: User): Promise<boolean> {
        return await !!this._repository.insert(item);
    }

    async update(id: string, item: User): Promise<boolean> {
        return await this.update(id, item);
    }

    async delete(id: string): Promise<boolean> {
        return true;
    }
}