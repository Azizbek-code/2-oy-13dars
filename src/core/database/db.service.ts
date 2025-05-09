import { OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

export class DbService extends PrismaClient implements OnModuleInit {
    onModuleInit() {
        this.$connect()
        console.log('db connected');
    }
}