# COOKBOOK

This is COOKBOOK, a project for searching, saving and writing recipes.

## Features

- Search recipes online with various filters, the search engine is based on [Spoonacular](https://spoonacular.com/food-api), an api for recipes with countless methods and options.
- Save recipes you like to easily find them later.
- Add your own recipes and save them to yourself and edit them.
- Easily modify ingredients amounts according to requested amount af servings.

## Features In Progress

- Admin panel to allow for admin-only functions, feedback reading and more.
- Make your own recipes public, to allow other users find your recipes along with the regular search results.
- Using Next.js API routes to merge frontend and API to a single project and deploy on a single domain.
- Add filtering options to use Spoonacular different search options (cuisines, similar recipes and more).

## Technologies

- Next.js - mentioned below.
- CSS Modules - CSS files that are imported for their respective components individualy, removing the problems of class conflicts throughout the project and managing each component styles separatly.
- Zustand - state manager that makes it easier to use react useState hook between different parts of the project, with simple and short coding for states and state mutations.
- Axios - a promise based library for making easy requests to api, setting a base for any requests, built in error handler and informative and organized response.

## Next.js

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
Next.js extends React.js with more features such as:

- Server components - components that are pre rendered on the server for faster loading times.
- Middleware - running code before any page request for correct behavior depending on current state.
- Turbopack - an incremental bundler for JS and TS, the next gen of webpack with significant lower loading times.
- App Router - added on Next.js 13 (Experimental), adding the app directory for easier site structuring, layout pages for shared components around the app and more.

## Deployment

The project is deployed on [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js, for easy deployment that lets you deploy straight from you GitHub repositories, make several deployments for different branches, auto redeploy after pushing new commits, logs and analytics and more.

### Links

- [Deployed app on Vercel Platform](https://cookbook-project.vercel.app/)
- [API GitHub Repo](https://github.com/yotam-yakov/cookbook-api)
- [API domain](https://cookbook-project-api.vercel.app/)
