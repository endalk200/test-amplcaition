import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { NewEntService } from "./newEnt.service";
import { NewEntControllerBase } from "./base/newEnt.controller.base";

@swagger.ApiTags("newEnts")
@common.Controller("newEnts")
export class NewEntController extends NewEntControllerBase {
  constructor(
    protected readonly service: NewEntService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
