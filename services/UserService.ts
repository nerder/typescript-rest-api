import { AutoWired, Inject, Singleton } from "typescript-ioc";
import { Balance } from "../entities/Balance";
import { User } from "../entities/User";
import { BalanceRepository } from "../repositories/BalanceRepository";
import { UserRepository } from "../repositories/UserRepository";

@Singleton
@AutoWired
export class UserService {

  @Inject
  private userRepository!: UserRepository;

  @Inject
  private balanceRepository!: BalanceRepository;

  public async createUser( name: string ): Promise<boolean> {
    const balance = new Balance();
    balance.amount = 0;

    const user = new User();
    user.name = name;
    user.balance = balance;

    return await !!this.userRepository.save(user);
  }

  public async getUser(userId: string): Promise<User> {
    return await this.userRepository.findOne(userId);
  }

  public async getUserBalance( userId: string ): Promise<Balance> {
    const user = await this.getUser(userId);
    return user.balance;
  }
}
