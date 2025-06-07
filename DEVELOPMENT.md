# How Node.js was setup for TypeScript

Installed dev dependencies
    
    $ npm i -D tsx @types/express 
    $ npm i -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin


Generated tsconfig.json:

    $ npx tsc --init
    $ npx eslint --init # It installs @eslint/js, globals, typescript-eslint


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
- .env based config
