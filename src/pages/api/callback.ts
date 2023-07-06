/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable camelcase */
import type { NextApiRequest, NextApiResponse } from 'next'
import { useEffect, useState } from 'react'

export default async function Callback(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const clientId = process.env.CLIENT_ID || ''
    const clientSecret = process.env.CLIENT_SECRET || ''
    const redirect_uri = 'http://localhost:8000/api/callback'
    const code = req.query.code.toString()
    const state = req.query.state.toString()

    if (state === null) {
      res.status(500).json({
        error: 'state_mismatch'
      })
    } else {
      const credentials = Buffer.from(`${clientId}:${clientSecret}`).toString(
        'base64'
      )

      const data = new URLSearchParams()
      data.append('code', code)
      data.append('redirect_uri', redirect_uri)
      data.append('grant_type', 'authorization_code')

      const options = {
        method: 'POST',
        headers: {
          Authorization: `Basic ${credentials}`,
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: data.toString()
      }
      try {
        const response = await fetch(
          'https://accounts.spotify.com/api/token',
          options
        )
        const data = await response.json()
        // Handle the response
        console.log(data)

        // localStorage.setItem('Token', btoa(JSON.stringify(data)))
        // JSON.parse(localStorage.atob('Token'))
      } catch (error) {
        // Handle the error
        console.error(error)
        res.status(500).json({ error: 'An error occurred' })
      }
    }
  } else {
    res.status(404)
    res.redirect(307, '/')
  }
  res.end()
}
