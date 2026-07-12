import API_BASE_URL from "./api";
import { getToken } from "./authService";

const getHeaders = () => {
  const token = getToken();
  return {
    "content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
};

// USERS
export const getAdminUsers = async () => {
  const response = await fetch(`${API_BASE_URL}/admin/users`, {
    headers: getHeaders(),
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Failed to fetch users");
  }
  return data.users || [];
};

export const deleteAdminUser = async (id) => {
  const response = await fetch(`${API_BASE_URL}/admin/users/${id}`, {
    method: "DELETE",
    headers: getHeaders(),
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Failed to delete user");
  }
  return data;
};

// ================= POSTS =================
export const getAdminPosts = async () => {
  const response = await fetch(`${API_BASE_URL}/admin/posts`, {
    headers: getHeaders(),
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Failed to fetch posts");
  }
  return data.posts || [];
};

//post

export const deleteAdminPost = async (id) => {
  const response = await fetch(`${API_BASE_URL}/admin/posts/${id}`, {
    method: "DELETE",
    headers: getHeaders(),
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Failed to delete post");
  }
  return data;
};

export const archiveAdminPost = async (id) => {
  const response = await fetch(`${API_BASE_URL}/admin/posts/${id}/archive`, {
    method: "PUT",
    headers: getHeaders(),
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Failed to archive post");
  }
  return data;
};
