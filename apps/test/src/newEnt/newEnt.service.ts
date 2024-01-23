import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { NewEntServiceBase } from "./base/newEnt.service.base";

@Injectable()
export class NewEntService extends NewEntServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
