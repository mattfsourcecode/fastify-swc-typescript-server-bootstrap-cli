#!/usr/bin/env node
const { execaSync } = require("execa");
const fs = require("fs");
const path = require("path");

const projectName = process.argv[2]; // Get project name from command line argument

if (!projectName) {
  console.error("Please specify a project name.");
  process.exit(1);
}

// Clone the repository
execaSync(
  "git",
  [
    "clone",
    "git@github.com:mattfsourcecode/fastify-swc-typescript-server.git",
    projectName,
  ],
  { stdio: "inherit" }
);

// Navigate to the cloned directory
process.chdir(projectName);

// Remove the original .git directory
fs.rmSync(".git", { recursive: true, force: true });

// Initialize a new git repository
execaSync("git", ["init"], { stdio: "inherit" });

// Update package.json
const packageJsonPath = path.join(process.cwd(), "package.json");
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
packageJson.name = projectName; // Update the project name
packageJson.author = ""; // Clear the author

fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2)); // Write back to package.json
