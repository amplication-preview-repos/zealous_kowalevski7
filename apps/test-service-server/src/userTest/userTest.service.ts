import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserTestServiceBase } from "./base/userTest.service.base";

@Injectable()
export class UserTestService extends UserTestServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
