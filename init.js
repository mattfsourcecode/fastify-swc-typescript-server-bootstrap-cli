#!/usr/bin/env node
const shell = require("shelljs");
const fs = require("fs");
const path = require("path");

const projectName = process.argv[2]; // Get project name from command line argument

if (!projectName) {
  console.error("Please specify a project name.");
  process.exit(1);
}

// Clone the repository
shell.exec(
  `git clone git@github.com:mattfsourcecode/fastify-swc-typescript-server.git ${projectName}`
);

// Navigate to the cloned directory
shell.cd(projectName);

// Remove the original .git directory
shell.rm("-rf", ".git");

// Initialize a new git repository
shell.exec("git init");

// Update package.json
const packageJsonPath = path.join(process.cwd(), "package.json");
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
packageJson.name = projectName; // Update the project name
packageJson.author = ""; // Clear the author

fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2)); // Write back to package.json
