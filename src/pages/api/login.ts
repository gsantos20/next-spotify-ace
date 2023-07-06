/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { RandomString } from '../../utils/utils'
import type { NextApiRequest, NextApiResponse } from 'next'

export default function Login(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const clientId = process.env.CLIENT_ID || ''
    const redirectUri = 'http://localhost:8000/api/callback'

    const state = RandomString(16)
    const scope = 'user-read-private user-read-email'

    const queryString = new URLSearchParams({
      response_type: 'code',
      client_id: clientId,
      scope: scope,
      redirect_uri: redirectUri,
      state: state
    }).toString()

    res.redirect('https://accounts.spotify.com/authorize?' + queryString)
  } else {
    res.status(404)
    res.redirect(307, '/')
  }
  res.end()
}
