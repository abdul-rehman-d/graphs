# Cali Graphs

A platform to create and save beautiful graphs for [Excalidraw](https://excalidraw.com/)

## NOTE:

This thing is entirely useful. Excalidraw has [a way](https://www.linkedin.com/posts/excalidraw_how-to-create-charts-in-excalidraw-activity-7102261258560659457-_BSl) to add graphs natively and I will not continue to make this ;-; (Date: 25/Nov/2025)

## Todo

- [ ] Actually make the graph work
- [ ] Add Dark Mood
- [ ] Add the _Buy me a Coffee_ thing or some payment thing.

## Technologies

- Nextjs - Framework
- Tailwind - Styling
- Shadcn - Components
- Turso (SQLite) - Database
- Drizzle - ORM
- Vercel - Deployment
- Clerk - Authentication

## To Run locally

- Make sure you have a Clerk setup
- Create `.env` file from `.env.example`.
- Paste Clerk keys into the `.env`
- Create a DB on Turso and copy the URL and Token to the `.env`
  OR
- Just have turso CLI installed and run `turso dev --db-file ./db/dev.db` and use `http://127.0.0.1:8080` as DB URL.

## Contributers

- [Me](https://github.com/abdul-rehman-d)
