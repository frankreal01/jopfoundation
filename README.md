# JOP Foundation — V4 (MERN + Next.js + Clerk)

Your V3 design, rebuilt as a multi-page full-stack app. `style.css` and `react-components.css` are carried over unchanged (fonts, colours, layout). New UI lives in `client/app/premium.css` and reuses the same tokens.

```
client/   Next.js (App Router) + React + Clerk   -> http://localhost:3000
server/   Express + Mongoose (MongoDB) + Clerk   -> http://localhost:5000
```

## Pages
`/` Home · `/about` · `/philosophy` (with the interactive Foundation Architecture module) · `/direction` · `/programs` · `/founder` · `/journal` · `/contact` · `/sign-in` · `/sign-up` · `/dashboard` (members only)

## Setup
1. `npm install` then `npm run install:all`
2. Create a Clerk app (clerk.com), a MongoDB database (Atlas or local).
3. `cp client/.env.example client/.env.local` and `cp server/.env.example server/.env`, then fill in the keys.
4. `npm run dev`

## How it fits together
- **Clerk** handles sign up / sign in. `client/middleware.js` protects `/dashboard`.
- The dashboard sends the Clerk session token to the API (`Authorization: Bearer`). The Express server verifies it with `@clerk/express`.
- On first visit, `POST /api/users/sync` creates the member in MongoDB (with a sequential member number). `PUT /api/users/me` saves the profile.
- **Optional webhook:** in Clerk → Webhooks, point `user.created`, `user.updated`, `user.deleted` at `https://<your-api>/api/webhooks/clerk` and set `CLERK_WEBHOOK_SECRET`. Use a tunnel (e.g. ngrok) locally.
- `/contact` posts to `POST /api/contact` (validated, rate-limited, honeypot) and stores messages in MongoDB.

## Deploy
Client on Vercel (set `NEXT_PUBLIC_API_URL` to your API URL). Server on Render/Railway/Fly (set `CLIENT_URL` to your site URL).

## Not included yet
Email notifications for contact messages, an admin view for messages/members, and a CMS for the Journal.
