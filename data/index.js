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
]

export let posts = [
  {
    id: faker.number.int(),
    title: faker.lorem.words(5),
    content: faker.lorem.text(250),
    date: faker.date.past(),
    author:
      authors[0].firstName +
      ' ' +
      authors[0].lastName,
  },
  {
    id: faker.number.int(),
    title: faker.lorem.words(5),
    content: faker.lorem.text(250),
    date: faker.date.past(),
    author:
      authors[1].firstName +
      ' ' +
      authors[1].lastName,
  },
]
