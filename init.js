#!/usr/bin/env node
const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const projectName = process.argv[2]; // Get project name from command line argument

if (!projectName) {
  console.error("Please specify a project name.");
  process.exit(1);
}

let gitUrl;

// Try cloning using SSH first
try {
  console.log("Attempting to clone via SSH...");
  gitUrl = `git@github.com:mattfsourcecode/fastify-swc-typescript-server.git`;
  execSync(`git clone ${gitUrl} ${projectName}`, { stdio: "inherit" });
} catch (sshError) {
  // If SSH fails, fall back to HTTPS
  console.error("SSH cloning failed, falling back to HTTPS...");
  gitUrl = `https://github.com/mattfsourcecode/fastify-swc-typescript-server.git`;
  execSync(`git clone ${gitUrl} ${projectName}`, { stdio: "inherit" });
}

// Navigate to the cloned directory
process.chdir(projectName);

// Remove the original .git directory
fs.rmSync(".git", { recursive: true, force: true });

// Initialize a new git repository
execSync("git init", { stdio: "inherit" });

// Update package.json
const packageJsonPath = path.join(process.cwd(), "package.json");
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
packageJson.name = projectName; // Update the project name
packageJson.author = ""; // Clear the author

fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2)); // Write back to package.json

console.log(`Project "${projectName}" has been successfully bootstrapped.`);
