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

const getAllPosts = async (req, res) => {
  try {
    const [posts] = await db.query(`
      SELECT 
        p.post_id,
        p.title,
        p.description,
        p.status,
        p.is_archived,
        p.created_at,
        u.name AS author_name,
        f.name AS field_name
        FROM posts p
        LEFT JOIN users u ON p.user_id = u.user_id
        LEFT JOIN fields f ON p.field_id = f.field_id
        ORDER BY p.created_at DESC
      `);
    res.json({ posts });
  } catch (error) {
    res.status(500).json({
      message: "Failed to get posts",
      error: error.message,
    });
  }
};


export { getAllUsers, deleteUser };
