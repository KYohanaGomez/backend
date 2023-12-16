const { User } = require("../../db");

const getUserByID = async (userId) => {
  try {
    const user = await User.findByPk(userId, {
      attributes: { exclude: ['password'] }, // Excluir la contraseña de la respuesta
    });
    return user;
  } catch (error) {
    throw error;
  }
};

module.exports = getUserByID;
