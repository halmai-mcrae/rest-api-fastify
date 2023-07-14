import {
  posts,
  postsHandler,
} from '../../data/index.js'

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

  fastify.get(
    '/:id',
    {
      schema: {
        params: {
          type: 'object',
          properties: {
            id: { type: 'number' },
          },
        },
        response: {
          default: PostSchema,
        },
      },
    },
    async function (request, reply) {
      const post = postsHandler.get(
        request.params.id
      )

      reply.send(post)
    }
  )
}
