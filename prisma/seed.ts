import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const categories = [
    { slug: "best", name: "BEST", order: 0 },
    { slug: "blackout", name: "암막커튼", order: 1 },
    { slug: "set", name: "암막+속커튼 세트", order: 2 },
    { slug: "shape", name: "형상기억커튼", order: 3 },
    { slug: "inner", name: "이너커튼", order: 4 },
    { slug: "blind", name: "블라인드", order: 5 },
    { slug: "fast", name: "빠른배송", order: 6 },
    { slug: "rod", name: "커튼봉/부자재", order: 7 },
  ];

  for (const cat of categories) {
    await prisma.category.upsert({
      where: { slug: cat.slug },
      update: {},
      create: cat,
    });
  }

  console.log("Seed completed.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
