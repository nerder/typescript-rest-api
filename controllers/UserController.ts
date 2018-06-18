import { GET, POST, Path, PathParam, FormParam, PUT } from 'typescript-rest';
import { Inject } from 'typescript-ioc';
import { UserService } from '../services/UserService';
import { User } from '../entities/User';
import { Balance } from '../entities/Balance';

@Path('/user/')
export class UserController {

    @Inject
    private userService!: UserService;

    @Path('create')
    @POST
    async create(@FormParam("name") name: string ) : Promise<boolean> {
        return await this.userService.createUser(name);
    }

    @Path(':userId')
    @GET
    async getUser(@PathParam('userId') userId: string): Promise<User> {
        return await this.userService.getUser(userId);
    }

    @Path(':userId/getBalance')
    @GET
    async getBalance(@PathParam('userId') userId: string ): Promise<Balance> {
        return this.userService.getUserBalance(userId);
    }

}