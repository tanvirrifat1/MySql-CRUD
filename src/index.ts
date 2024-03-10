import { PrismaClient } from "@prisma/client";
import app from "./app";

// Prisma Client
const prisma = new PrismaClient();

// Port
const port = process.env.PORT || 5005;

async function main() {
  app.listen(port, () => {
    console.log(`Raise-Up server is running ${port}`);
  });
}

main();
