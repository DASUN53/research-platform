import db from "../config/db.js";
import { createNotificationIfAllowed } from "../utils/notificationUtils.js";

// ================= USERS =================

const getAllUsers = async (req, res) => {
  try {
    const [users] = await db.query(
      "SELECT user_id, name, email, role, created_at FROM users ORDER BY created_at DESC",
    );

    res.json({ users });
  } catch (error) {
    res.status(500).json({
      message: "Failed to get users",
      error: error.message,
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    await db.query("DELETE FROM users WHERE user_id = ? AND role != 'admin'", [
      id,
    ]);

    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete user",
      error: error.message,
    });
  }
};

export { getAllUsers, deleteUser };
