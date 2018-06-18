import { AutoWired, Inject, Singleton } from "typescript-ioc";
import { BalanceRepository } from "../repositories/BalanceRepository";
import { UserRepository } from "../repositories/UserRepository";

@Singleton
@AutoWired
export class BalanceService {

  @Inject
  private repository!: BalanceRepository;

  @Inject
  private userRepository!: UserRepository;

  public async deposit( userId: string, amount: number): Promise<boolean> {
    const user = await this.userRepository.findOne(userId);
    if (amount > 0) {
      user.balance.amount += amount;
      return !!this.userRepository.save(user);
    }
    return false;
  }

  public async transfer(fromUserId: string, toUserId: string, amount: number): Promise<boolean> {
    const from = await this.userRepository.findOne(fromUserId);
    const to = await this.userRepository.findOne(toUserId);
    if (from.balance.amount > 0 && from.balance.amount >= amount) {
      from.balance.amount -= amount;
      to.balance.amount += amount;
      this.userRepository.save(from);
      this.userRepository.save(to);

      return true;
    }

    return false;
  }

}
