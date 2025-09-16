// lib/userStore.js
// Temporary in-memory user store (replace with DB)

let users = []; // { id, name, email, passwordHash }

export function addUser(user) {
  users.push(user);
}

export function findUserByEmail(email) {
  return users.find((u) => u.email === email);
}
