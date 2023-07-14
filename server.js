import fastifyAutoload from '@fastify/autoload'
import fastifyCors from 'fastify-cors' // Update the import statement
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default async function (fastify, opts) {
  fastify.register(fastifyCors) // Register the fastify-cors plugin

  fastify.register(fastifyAutoload, {
    dir: join(__dirname, 'routes'),
    options: { prefix: '/api' },
  })
}

// testing my commits
