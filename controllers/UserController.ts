import { Inject } from "typescript-ioc";
import { FormParam, GET, Path, PathParam, POST, PUT } from "typescript-rest";
import { Balance } from "../entities/Balance";
import { User } from "../entities/User";
import { UserService } from "../services/UserService";

@Path("/user/")
export class UserController {

  @Inject
  private userService!: UserService;

  @Path("create")
  @POST
  public async create(
    @FormParam("name") name: string,
  ): Promise<boolean> {
    return await this.userService.createUser(name);
  }

  @Path(":userId")
  @GET
  public async getUser(
    @PathParam("userId") userId: string,
  ): Promise<User> {
    return await this.userService.getUser(userId);
  }

  @Path(":userId/getBalance")
  @GET
  public async getBalance(
    @PathParam("userId") userId: string,
  ): Promise<Balance> {
    return this.userService.getUserBalance(userId);
  }

}
