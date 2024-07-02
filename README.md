# [Fastify SWC Server Bootstrap CLI Tool](https://www.npmjs.com/package/fastify-swc-typescript-server-bootstrap-cli)

## Overview

This [CLI](https://en.wikipedia.org/wiki/Command-line_interface) tool streamlines the creation of new server projects using [Fastify](https://fastify.dev/) with [SWC](https://swc.rs/) and [Jest](https://jestjs.io/).

## Install globally

### npm

```bash
npm i -g fastify-swc-typescript-server-bootstrap-cli
```

## Usage

After installation, bootstrap a new Fastify SWC server project using the command:

```bash
fastify-swc-server [project-name]
```

Replace `[project-name]` with the name you wish to give to your new project. This command will create a new directory with the specified name, clone the Fastify SWC server setup, and configure the project accordingly.

### Example

To create a new project named `my-server-app`, run:

```bash
fastify-swc-server my-server-app
```

## What it Does Currently

- Clones a Fastify SWC server template from [this repository](https://github.com/mattfsourcecode/fastify-swc-typescript-server).
- Removes the original `.git` directory from the cloned repository and initializes a new git repository, allowing for a clean version control start.
- Updates the `package.json` with the specified project name and clears the author field.
- Implements a testing suite using [Mocha](https://mochajs.org/) and [Chai](https://www.chaijs.com/), integrating [Husky](https://typicode.github.io/husky/) as a pre-commit hook, ensuring that all tests must pass successfully before changes can be committed.
- More customizations to be added...
