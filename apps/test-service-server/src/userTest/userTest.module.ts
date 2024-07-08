import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { UserTestModuleBase } from "./base/userTest.module.base";
import { UserTestService } from "./userTest.service";
import { UserTestController } from "./userTest.controller";
import { UserTestResolver } from "./userTest.resolver";

@Module({
  imports: [UserTestModuleBase, forwardRef(() => AuthModule)],
  controllers: [UserTestController],
  providers: [UserTestService, UserTestResolver],
  exports: [UserTestService],
})
export class UserTestModule {}
