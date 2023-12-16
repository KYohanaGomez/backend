const { Product, Stock, Image, Color, Size } = require("../../db");

const getProductAdmin = async (req, res) => {
  try {
    const products = await Product.findAll({
      where: {
        available: true,
      },
      include: [
        {
          model: Stock,
          include: [{ model: Size, attributes: ["name"] }],
        },
        { model: Image, attributes: ["url"], through: { attributes: [] } },
        { model: Color, attributes: ["name"], through: { attributes: [] } },
      ],
    });

    if (products.length === 0) {
      return res.status(404).json({ error: "Productos no encontrados" });
    }
    const modifiedProducts = products.map((product) => {
      // Crear un nuevo objeto para cada producto
      const modifiedProduct = { ...product.toJSON() };
      // Modificar el array de imágenes

      modifiedProduct.Images = modifiedProduct.Images.map((image) => image.url);
      // modifiedProduct.Sizes = modifiedProduct.Sizes.map((Size) => Size.name);

      // Verificar si existe la propiedad Color antes de mapear
      if (modifiedProduct.Colors) {
        modifiedProduct.Colors = modifiedProduct.Colors.map(({ name }) => name);
      }

      // Modificar el array de tallas y cantidades (stock)
      modifiedProduct.Stocks = modifiedProduct.Stocks?.map((stock) => ({
        [stock.Size?.name]: stock.quantity,
      }));

      // Eliminar la propiedad 'Size' si no es necesaria en este punto
      delete modifiedProduct.Size;

      return modifiedProduct;
    });
    return res.status(200).json({ modifiedProducts });
  } catch (error) {
    console.error("Error in getProductAdmin:", error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = getProductAdmin;
