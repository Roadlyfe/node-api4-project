let id = 0

function getId() {
  return ++id
}

let users = [
  { id: getId(), name: 'Captain', weight: 25, username: "woof", password: "1234" },
  { id: getId(), name: 'usergo', weight: 13, username: "rover", password: "4331" },
]

module.exports = {
  async findAll() {
    // SELECT * FROM users;
    return users
  },

  async findById(id) {
    // SELECT * FROM users WHERE id = 1;
    const user = users.find(d => d.id == id)
    return user
  },

  async add({name, username, password}) {
    const newUser = { id: getId(), name, username, password}
    users.push(newUser)
    return newUser
  },

 
}
