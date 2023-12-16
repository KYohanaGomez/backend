// const PORT = process.env.PORT;
// const LOCALHOST = process.env.LOCALHOST;

const PORT = 3005;

const URL_FONT = "";
const SECRETKEY = "sportvibe";

// const NODE_ENV = process.env.NODE_ENV || true;

const clientID = "";

const DB_USER = process.env.DB_USER || "postgres";
const DB_PASSWORD = process.env.DB_PASSWORD || "admin";
const DB_HOST = process.env.DB_HOST || "localhost";
const DB_NAME = process.env.DB_NAME || "ecommerce";
const DB_PORT = process.env.DB_PORT || 5432;
const DB_URL = `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`;

module.exports = {
  SECRETKEY,
  URL_FONT,
  PORT,

  DB_URL,
};
