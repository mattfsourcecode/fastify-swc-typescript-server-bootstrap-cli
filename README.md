# [Fastify SWC Server Bootstrap CLI](https://www.npmjs.com/package/fastify-swc-typescript-server-bootstrap-cli)

## Overview

A command-line interface tool for streamlining the creation of new server projects using [Fastify](https://fastify.dev/) with [SWC](https://swc.rs/) and [Jest](https://jestjs.io/).

## Install globally

```bash
npm i -g fastify-swc-typescript-server-bootstrap-cli
```

## Usage

After installation, bootstrap a new Fastify SWC server project using the command:

```bash
fastify-swc-server [project-name]
```

Replace `[project-name]` with the name for your new project. This creates a new directory with the specified name, clones the Fastify SWC server setup, and configures the project accordingly.

## What it Does Currently

- Clones a Fastify SWC Jest server boilerplate from [this repository](https://github.com/mattfsourcecode/fastify-swc-typescript-server).
- Removes the original `.git` directory from the cloned repository and initializes a new git repository, allowing for a clean version control start.
- Updates the `package.json` with the specified project name and clears the author field.
- More customizations to be added...

_The module's codebase uses a testing suite with [Mocha](https://mochajs.org/) and [Chai](https://www.chaijs.com/), integrating [Husky](https://typicode.github.io/husky/) as a pre-commit hook, ensuring that all tests must pass successfully before changes can be committed._
