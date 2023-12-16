const { Product, Image, Stock, Size, Color } = require("../../db");

const updateProduct = async ({
  id,
  title,
  description,
  category,
  subCategory,
  brand,
  sizes,
  price,
  discount,
  images,
  gender,
  color,
  available,
}) => {
  try {
    const productEdit = await Product.findByPk(id);

    productEdit.title = title;
    productEdit.description = description;
    productEdit.category = category;
    productEdit.subCategory = subCategory;
    productEdit.brand = brand;
    productEdit.price = price;
    productEdit.discount = discount;
    productEdit.available = available;
    productEdit.gender = gender;

    await productEdit.setImages([]);
    await productEdit.setColors([]);

    const createdImages = await Promise.all(images.map((img) => Image.create({ url: img })));
    await productEdit.addImages(createdImages);

    for (const colorName of color) {
      const [existingColor, colorCreated] = await Color.findOrCreate({
        where: { name: colorName.toUpperCase() },
      });
      await productEdit.addColor(existingColor);
    }

    await Stock.destroy({ where: { product_id: id } });
    for (const stockInfo of sizes) {
      const [size, created] = await Size.findOrCreate({
        where: { name: stockInfo.size },
      });

      await Stock.create({
        product_id: productEdit.id,
        size_id: size.id,
        quantity: stockInfo.stock,
      });
    }

    await productEdit.save();

    return "El Producto se actualizó correctamente";
  } catch (error) {
    return error;
  }
};
module.exports = updateProduct;
