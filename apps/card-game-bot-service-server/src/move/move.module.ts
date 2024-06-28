import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MoveModuleBase } from "./base/move.module.base";
import { MoveService } from "./move.service";
import { MoveController } from "./move.controller";
import { MoveResolver } from "./move.resolver";

@Module({
  imports: [MoveModuleBase, forwardRef(() => AuthModule)],
  controllers: [MoveController],
  providers: [MoveService, MoveResolver],
  exports: [MoveService],
})
export class MoveModule {}
