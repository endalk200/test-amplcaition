import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { NewEntModuleBase } from "./base/newEnt.module.base";
import { NewEntService } from "./newEnt.service";
import { NewEntController } from "./newEnt.controller";
import { NewEntResolver } from "./newEnt.resolver";

@Module({
  imports: [NewEntModuleBase, forwardRef(() => AuthModule)],
  controllers: [NewEntController],
  providers: [NewEntService, NewEntResolver],
  exports: [NewEntService],
})
export class NewEntModule {}
