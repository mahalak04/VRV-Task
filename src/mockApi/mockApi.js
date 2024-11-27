let users = [
  { id: 1, name: "Harsh", email: "harsh@mail.com", role: "Admin" },
  { id: 2, name: "Harry", email: "harry@mail.com", role: "Editor" },
];

export const getUsers = () => Promise.resolve(users);

export const addUser = (user) => {
  user.id = Date.now();
  users.push(user);
  return Promise.resolve(user);
};

export const deleteUser = (id) => {
  users = users.filter((user) => user.id !== id);
  return Promise.resolve();
};

export const updateUser = (id, updatedData) => {
  const userIndex = users.findIndex((user) => user.id === id);
  if (userIndex > -1) {
    users[userIndex] = { ...users[userIndex], ...updatedData };
    return Promise.resolve(users[userIndex]);
  }
  return Promise.reject("User not found");
};


export const getRoles = () => Promise.resolve([
  { id: 1, name: "Admin", permissions: ["Read", "Write", "Delete"] },
  { id: 2, name: "Editor", permissions: ["Read", "Write"] },
  { id: 3, name: "Viewer", permissions:["Read"] }
]);

export const addRole = (role) => {
  role.id = Date.now();
  return Promise.resolve(role);
};
