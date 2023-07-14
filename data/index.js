import { faker } from '@faker-js/faker'

export let authors = [
  {
    id: faker.number.int(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
  },
  {
    id: faker.number.int(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
  },
  {
    id: faker.number.int(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
  },
]

export let posts = [
  {
    id: faker.number.int(),
    title: faker.hacker.adjective(1),
    content: faker.hacker.phrase(),
    date: faker.date.past(),
    author:
      authors[0].firstName +
      ' ' +
      authors[0].lastName,
  },
  {
    id: faker.number.int(),
    title: faker.hacker.adjective(1),
    content: faker.hacker.phrase(),
    date: faker.date.past(),
    author:
      authors[1].firstName +
      ' ' +
      authors[1].lastName,
  },
  {
    id: faker.number.int(),
    title: faker.hacker.adjective(1),
    content: faker.hacker.phrase(),
    date: faker.date.past(),
    author:
      authors[2].firstName +
      ' ' +
      authors[2].lastName,
  },
]

export const postsHandler = {
  get: (id) => {
    const post = posts.find(
      (post) => post.id === id
    )

    return post
  },
}
