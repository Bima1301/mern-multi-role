-- CreateTable
CREATE TABLE "Home" (
    "id" SERIAL NOT NULL,
    "displayName" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "contact" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Home_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Headline" (
    "id" SERIAL NOT NULL,
    "headline" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "homeId" INTEGER NOT NULL,
    "aboutId" INTEGER,

    CONSTRAINT "Headline_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "About" (
    "id" SERIAL NOT NULL,
    "story" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "About_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Biodata" (
    "id" SERIAL NOT NULL,
    "age" INTEGER NOT NULL,
    "address" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "recidence" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "aboutId" INTEGER NOT NULL,

    CONSTRAINT "Biodata_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Home" ADD CONSTRAINT "Home_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Headline" ADD CONSTRAINT "Headline_homeId_fkey" FOREIGN KEY ("homeId") REFERENCES "Home"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Headline" ADD CONSTRAINT "Headline_aboutId_fkey" FOREIGN KEY ("aboutId") REFERENCES "About"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "About" ADD CONSTRAINT "About_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Biodata" ADD CONSTRAINT "Biodata_aboutId_fkey" FOREIGN KEY ("aboutId") REFERENCES "About"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
