import { Path, PUT, PathParam, FormParam } from "typescript-rest";
import { Inject } from "typescript-ioc";
import { BalanceService } from "../services/BalanceService";

@Path('/balance/')
export class BalanceController {

    @Inject
    private balanceService!: BalanceService;

    @Path(":userId/deposit")
    @PUT
    async deposit(
        @PathParam('userId') userId: string,
        @FormParam("amount") amount: number
    ) : Promise<boolean> {
        return this.balanceService.deposit(userId, amount);
    }

    @Path(':fromUserId/to/:toUserId')
    @PUT
    async transfer(
        @PathParam('fromUserId') fromUserId: string,
        @PathParam('toUserId') toUserId: string,
        @FormParam("amount") amount: number
    ) : Promise<boolean> {
        return this.balanceService.transfer(fromUserId, toUserId, amount);       
    }
}