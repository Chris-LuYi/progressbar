import { rest } from 'msw'

export const handlers = [
  rest.post('/api/login', (req, res, ctx) => {
    return res(ctx.json({ token: 'fake_user_token' }))
  }),
]
