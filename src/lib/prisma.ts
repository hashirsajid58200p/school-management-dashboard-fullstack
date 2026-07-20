import { PrismaClient } from '@prisma/client'

const prismaClientSingleton = () => {
  return new PrismaClient()
}

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

// Force reload database model schemas by resetting the in-memory dev client cache
if (globalThis.prismaGlobal) {
  try {
    (globalThis.prismaGlobal as any).$disconnect();
  } catch (e) {}
  // @ts-ignore
  globalThis.prismaGlobal = undefined;
}

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma