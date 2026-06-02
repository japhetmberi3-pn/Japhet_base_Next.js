import { User } from "../types/user";
import { CreateUserData } from "../types/create_user_data";

const APP_URL = "https://61937nxr-8000.uks1.devtunnels.ms/";

//Récuperer tous les utilisateurs
export async function getUser(): Promise<User[]> {
  const response = await fetch(`${APP_URL}api/v1/users/`);

  if (!response.ok) {
    throw new Error("Failed to fetch user data");
  }
  const json = await response.json();

  return json.data;
}

// Récuperer un utilisateur par son ID
export async function getUserById(id: number): Promise<User> {
  const response = await fetch(`${APP_URL}api/v1/users/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch user");
  }

  const json = await response.json();

  return json.data;
}

// Créer un nouvel utilisateur
export async function createUser(data: CreateUserData): Promise<User> {
  const response = await fetch(`${APP_URL}api/v1/users/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to create user");
  }

  const json = await response.json();

  return json.data;
}

// Mettre à jour un utilisateur existant
export async function updateUser(id: number, data: Partial<CreateUserData>): Promise<User> {
  const response = await fetch(`${APP_URL}api/v1/users/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to update user");
  }

  const json = await response.json();

  return json.data;
}

// Supprimer un utilisateur
export async function deleteUser(id: number): Promise<void> {
  const response = await fetch(`${APP_URL}api/v1/users/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete user");
  }
}
