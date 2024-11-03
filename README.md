# [Fastify SWC Server Bootstrap CLI](https://www.npmjs.com/package/fastify-swc-typescript-server-bootstrap-cli)

## Overview

A command-line tool for creating new server projects using [Fastify](https://fastify.dev/) with [SWC](https://swc.rs/) and [Jest](https://jestjs.io/).

**Note: This module requires SSH access to GitHub to clone [this repository](https://github.com/mattfsourcecode/fastify-swc-typescript-server). If you do not already have SSH configured for GitHub, please follow the instructions on GitHub's [Connecting to GitHub with SSH](https://docs.github.com/en/authentication/connecting-to-github-with-ssh) documentation to set up SSH keys for your account.**

## Install globally

```bash
npm i -g fastify-swc-typescript-server-bootstrap-cli
```

## Usage

After installation, bootstrap a new Fastify SWC server project using the `fastify-swc-server` command:

```bash
fastify-swc-server [project-name]
```

Replace `[project-name]` with the intended name for the project. This creates a new directory with the specified name, clones the Fastify SWC server repo, and configures the project accordingly.

## Current Features

- Clones a boilerplate from [this repository](https://github.com/mattfsourcecode/fastify-swc-typescript-server).
- Removes the original `.git` directory and initializes a new git repository for a clean version control start.
- Updates the `package.json` with the specified project name and resets the author value to an empty string.
- More customizations to be added...

<br>
<img width="300" alt="logo" src="https://github.com/user-attachments/assets/a6907512-87a4-45de-9188-cdc494dfe5a8">

## Contributions and Issues

Contributions are welcome! If you have ideas for improvements, please open an issue first for discussion before submitting a pull request.

NOTE: The [npm module's codebase](https://github.com/mattfsourcecode/fastify-swc-typescript-server-bootstrap-cli) uses a testing suite with [Mocha](https://mochajs.org/) and [Chai](https://www.chaijs.com/), integrating [Husky](https://typicode.github.io/husky/) as a pre-commit [git hook](https://git-scm.com/book/ms/v2/Customizing-Git-Git-Hooks) to ensure all tests pass before staged changes can be committed.

You can report issues or start discussions here: [Open an issue](https://github.com/mattfsourcecode/fastify-swc-typescript-server-bootstrap-cli/issues)

For contributions and issues regarding the [codebase cloned](https://github.com/mattfsourcecode/fastify-swc-typescript-server) with the `fastify-swc-server` command, [open an issue here](https://github.com/mattfsourcecode/fastify-swc-typescript-server/issues).
