/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { NewEnt } from "./NewEnt";
import { NewEntCountArgs } from "./NewEntCountArgs";
import { NewEntFindManyArgs } from "./NewEntFindManyArgs";
import { NewEntFindUniqueArgs } from "./NewEntFindUniqueArgs";
import { DeleteNewEntArgs } from "./DeleteNewEntArgs";
import { NewEntService } from "../newEnt.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => NewEnt)
export class NewEntResolverBase {
  constructor(
    protected readonly service: NewEntService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "NewEnt",
    action: "read",
    possession: "any",
  })
  async _newEntsMeta(
    @graphql.Args() args: NewEntCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [NewEnt])
  @nestAccessControl.UseRoles({
    resource: "NewEnt",
    action: "read",
    possession: "any",
  })
  async newEnts(@graphql.Args() args: NewEntFindManyArgs): Promise<NewEnt[]> {
    return this.service.newEnts(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => NewEnt, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "NewEnt",
    action: "read",
    possession: "own",
  })
  async newEnt(
    @graphql.Args() args: NewEntFindUniqueArgs
  ): Promise<NewEnt | null> {
    const result = await this.service.newEnt(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => NewEnt)
  @nestAccessControl.UseRoles({
    resource: "NewEnt",
    action: "delete",
    possession: "any",
  })
  async deleteNewEnt(
    @graphql.Args() args: DeleteNewEntArgs
  ): Promise<NewEnt | null> {
    try {
      return await this.service.deleteNewEnt(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
