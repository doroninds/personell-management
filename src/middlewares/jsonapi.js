import pgjson from '../../package.json'
import env from '../config/env.js'

const DEFAULT_ERROR_CODE = 101

const isProduction = env.NODE_ENV === 'production'

export default async (ctx, next) => {
  try {
    await next()
    const { status, body } = decorate(ctx.body, null)
    ctx.status = status
    ctx.body = body
  } catch (err) {
    const { status, body } = decorate(null, err)
    ctx.status = status
    ctx.body = body
  }
}
/**
 * JSON API v 1.1 Decorator - https://jsonapi.org/format/1.1/
 * @param data jsonapi data
 * @param e jsonapi error
 */
function decorate(data, e) {
  const jsonapi = {
    version: pgjson.version,
  }
  const error = e ? decorateError(e) : null

  return {
    status: getStatus(data, e),
    body: {
      jsonapi,
      data,
      error,
      meta: {
        NODE_ENV: env.NODE_ENV || null,
        service_name: pgjson.service_name,
      },
    },
  }
}

/**
 * Get status
 * @param data jsonapi data
 * @param e jsonapi error
 */
function getStatus(data, e) {
  if (e === null) {
    return data !== undefined ? 200 : 204
  }
  return e.status || 500
}

/**
 * Decorate error
 * @param e Error
 */
function decorateError(e) {
  return {
    stack: isProduction ? null : e.stack,
    origin: e.origin,
    message: e.message,
    code: e.code || DEFAULT_ERROR_CODE,
    status: e.status,
  }
}
