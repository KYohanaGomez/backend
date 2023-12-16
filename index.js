require("dotenv").config();
const initializeSizes = require("./src/utilities/initAllSizes");
const initializeProducts = require("./src/utilities/initAllProducts");

const { sequelize } = require("./src/db");
const app = require("./src/app");
const PORT = process.env.PORT || 3005;

initializeSizes(); // inicializa la tabla de sizes.
//initializeProducts();
sequelize

  .sync({ force: false })

  .then(() => {
    app.listen(PORT, () => {
      console.log(`server listening on port ${PORT}`);
    });
  })
  .catch((error) => console.error(error.message));
