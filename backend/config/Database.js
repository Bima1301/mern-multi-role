import { Sequelize } from "sequelize";

const db = new Sequelize("postgres", "postgres", "E1UOhclCiSYRIY0c", {
  host: "db.crknjxwdswsetdngvngh.supabase.co",
  dialect: "postgres",
  port: 5432,
  ssl: true,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

export default db;
