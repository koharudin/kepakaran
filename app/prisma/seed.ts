const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Menambahkan data ke tabel 'User'
  const user1 = await prisma.Publisher.create({
    data: {
      name: 'John Doe'
    }
  });

  console.log(`User created: ${user1.name}`);

}
// Menjalankan fungsi main dan menutup koneksi Prisma
main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
