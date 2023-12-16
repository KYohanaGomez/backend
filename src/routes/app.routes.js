const { Router } = require("express");
const router = Router();
const postProduct = require("../controllers/product/postProduct");
const getProductByPk = require("../controllers/product/getProductByPk");
const getProduct = require("../controllers/product/getProduct");
const deleteProductByPk = require("../controllers/product/deleteProductByPk");
const putProductbyID = require("../controllers/product/putProductbyID");
const searchProduct = require("../controllers/product/searchProduct");
const postRegister = require("../controllers/User/postRegister");
const postLogin = require("../controllers/User/postLogin");

const PostRegisterGoogle = require("../controllers/User/postRegisterGoogle");



const getUser = require("../controllers/User/getUser");
const getProductAdmin = require("../controllers/Product/getProductAdmin");

// RUTAS de Productos

router.post("/product", postProduct);

router.get("/product", getProduct);
router.get("/search/:product", searchProduct);
router.get("/detail/:id", getProductByPk);

router.get("/admin", getProductAdmin);

router.delete("/deleteProduct/:id", deleteProductByPk);

router.put("/product/:id", putProductbyID);



// Rutas de Usuarios


router.post("/userRegister", postRegister);
router.post("/google", PostRegisterGoogle);
router.post("/login", postLogin);

router.get("user/:id", getUser);

module.exports = router;
