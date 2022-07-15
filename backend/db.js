const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  password: "toor",
  host: "localhost",
  port: 5432,
  database: "node_postgres",
});

module.exports = pool;
