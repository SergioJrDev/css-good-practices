const mockUsers = [
  { _id: '4342534636', name: 'John' },
  { _id: '1234545210', name: 'James' },
]

const mockBooks = [
  { _id: '5223434215', book: 'Harry Potter' },
  { _id: '1914180032', name: 'Animals' },
]

export const fetchUsers = (id) => new Promise((resolve) => {
  setTimeout(() => { resolve({mockUsers, id}) }, 1000)
})

export const fetchBooks = (id) => new Promise((resolve) => {
  setTimeout(() => { resolve({mockBooks, id}) }, 500)
})