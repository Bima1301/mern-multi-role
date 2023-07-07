import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await prisma.user.findUnique({ where: { id } });
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID, // Ganti dengan ID klien Anda
      clientSecret: process.env.GOOGLE_CLIENT_SECRET, // Ganti dengan rahasia klien Anda
      callbackURL: "http://localhost:5000/auth/google/callback", // Ganti dengan URI pengalihan OAuth Anda
    },
    async (accessToken, refreshToken, profile, done) => {
      const email = profile.emails[0].value;
      const user = await prisma.user.findUnique({ where: { email } });
      if (user) {
        done(null, user);
      } else {
        // Buat user baru jika belum ada
        const newUser = await prisma.user.create({
          data: {
            name: profile.displayName,
            email,
            // Setel password secara acak atau berdasarkan preferensi Anda
            password: Math.random().toString(36).slice(-8),
            roleId: 2,
          },
        });
        done(null, newUser);
      }
    }
  )
);

export default passport;
