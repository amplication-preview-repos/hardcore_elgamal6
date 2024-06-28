import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MoveService } from "./move.service";
import { MoveControllerBase } from "./base/move.controller.base";

@swagger.ApiTags("moves")
@common.Controller("moves")
export class MoveController extends MoveControllerBase {
  constructor(
    protected readonly service: MoveService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
