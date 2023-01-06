import type { IndyVdrPool } from 'indy-vdr-test-nodejs'

import { DID, setupPool } from './utils'

import { AttribRequest } from 'indy-vdr-test-nodejs'

describe('AttribRequest', () => {
  let pool: IndyVdrPool

  beforeAll(() => (pool = setupPool()))

  test('Submit request', async () => {
    const request = new AttribRequest({
      submitterDid: DID,
      targetDid: DID,
      raw: '{ "endpoint": { "ha": "127.0.0.1:5555" } }',
    })

    await expect(pool.submitRequest(request)).rejects.toThrowError('MissingSignature()')
  })
})
