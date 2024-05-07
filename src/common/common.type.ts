import { PrismaService } from "@app/prisma/prisma.service";

 export type Tpx = Omit<
    PrismaService,
    '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'
 >;