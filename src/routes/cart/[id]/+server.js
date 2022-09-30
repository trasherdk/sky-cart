import { error } from '@sveltejs/kit'
import serialize from '$lib/serializers/cart'
import * as service from '$lib/services/cart'

export async function GET({ params, request }) {
  const token = request.headers.get('authorization')
  const cart = await service.get({ publicId: params.id, token })

  if (cart == null) {
    throw error(404)
  }

  return serialize(cart)
}
