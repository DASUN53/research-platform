import express from "express";

import { protect, adminOnly } from "../middleware/authMiddleware.js";

import {
  getAllUsers,
  deleteUser,
  getAllPosts,
  deletePost,
  archivePost,
  getAllComments,
  deleteComment,
  getAllSolutions,
  deleteSolution,
  getAllFields,
  createField,
  updateField,
  deleteField,
  getArchive,
  restoreArchivePost,
} from "../controllers/adminController.js";

