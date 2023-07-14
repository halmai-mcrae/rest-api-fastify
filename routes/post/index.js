import { posts } from '../../data/index.js'

const PostSchema = {
  type: 'object',
  properties: {
    id: { type: 'number' },
    title: { type: 'string' },
    content: { type: 'string' },
    date: { type: 'string' },
    author: { type: 'string' },
  },
}

export default async function (fastify, opts) {
  fastify.get(
    '/',
    {
      schema: {
        response: {
          default: {
            type: 'array',
            items: PostSchema,
          },
        },
      },
    },
    async function (request, reply) {
      reply.send(posts)
    }
  )
}
