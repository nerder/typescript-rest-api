import { AutoWired, Singleton, Inject } from "typescript-ioc";
import { UserRepository } from "../repositories/UserRepository";
import { User } from "../entities/User";
import { Balance } from "../entities/Balance";
import { BalanceService } from "./BalanceService";
import { BalanceRepository } from "../repositories/BalanceRepository";

@Singleton
@AutoWired
export class UserService {
    
    @Inject
    private userRepository!: UserRepository;

    @Inject
    private balanceRepository!: BalanceRepository;

    async createUser( name: string ): Promise<boolean> {
        const balance = new Balance​​();
        balance.amount = 0;
        
        const user = new User();
        user.name = name;
        user.balance = balance;

        return await !!this.userRepository.save(user);
    }

    async getUser(userId: string): Promise<User> {
        return await this.userRepository.findOne(userId);
    }

    async getUserBalance( userId: string ) : Promise<Balance> {
        const user = await this.getUser(userId);
        return user.balance;
    }
}