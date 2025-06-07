# Express TypeScript Starter

Starter template for creating Express + TypeScript based apps or APIs

## Features

- Node.js 22, Express 5.
- ESLint with recommended settings.
- Uses `ts-node-dev` for dev server restarts.
- Env config on `Shared/config/envs.ts` reads by default from `.env`.
- Jest + Supertest for testing.

## Usage

### Install 

    $ cp .env.example .env
    $ nvm use
    $ npm i

### Run dev server

    $ npm run dev

### Run tests, lint, etc

    $ npm run test
    $ npm run lint
    $ npm run lint:fix
