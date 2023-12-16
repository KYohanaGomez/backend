const getUserByID = require("../../handlers/User/getUserByID");

const getUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await getUserByID(userId);

    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    res.status(200).json({
      data: user,
    });
  } catch (error) {
    console.error("Error al obtener usuario:", error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = getUser;
