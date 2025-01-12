# Deno React/tRPC Template

This is a template repo for setting up a full-stack Deno monorepo with React and TanStack Router for the frontend and tRPC for the backend.
It is meant as a good starting point which includes the tweaks necessary to make everything work together.

### Architecture

- The UI package is set up with TanStack Router running React as a SPA, but SSR can be configured.
- The API package is set up with Deno's built-in web server and tRPC to make calling from the UI a breeze.

## Quick start

- Clone the repo
- Install the [Deno](https://deno.com/) runtime
- Run `deno install` to fetch the depenencies
- Run `deno task dev` from both `packages/api` and `packages/dev`
- Open `http://localhost:3000` in your browser


## Included tweaks
- [deno-vite-plugin](https://github.com/denoland/deno-vite-plugin) is used to make Deno workspace imports work from the UI.
- TanStack Router is configured to [include extensions](https://tanstack.com/router/latest/docs/framework/react/guide/file-based-routing#options) when importing from generated files.
- Deno's `jsx` compiler is configured for React.