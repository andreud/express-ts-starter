# How Node.js was setup for TypeScript

## Installed dev dependencies

Basic:     

    $ npm i -D tsx @types/express 

Jest, supertest:

    $ npm i -D ts-jest
    $ npm i -D @jest/globals
    $ npm i -D @types/jest #  Third party alternative to @jest/globals, desnt need to be implictly imported.
    $ npm i -D @types/supertest
    
ESLint:

    $ npm i -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
    

### Generated config files:

    $ npx tsc --init
    $ npx eslint --init # It installs @eslint/js, globals, typescript-eslint
    $ npm init jest@latest


## Notes on ESLint related packages

- @typescript-eslint/parser - The parser that enables ESLint to understand TypeScript syntax
- @typescript-eslint/eslint-plugin - Plugin contains TypeScript-specific linting rules
- @eslint/js - Provides core ESLint rules for JavaScript
- globals - Provides global variables definitions
- typescript-eslint - This is a new monorepo package, but you still need the specific parser and plugin

# To-Do

- Compiler script with tsc
- Demo entities
- Demo tests
- Docker image
