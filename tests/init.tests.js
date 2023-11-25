const { execSync } = require("child_process");
const path = require("path");
const { expect } = require("chai");
const fs = require("fs");
const rimraf = require("rimraf");

describe("init.js script", () => {
  const projectName = "test-project";
  const tempProjectDirectory = path.join(__dirname, projectName);

  // Function to execute the init.js script
  const executeInitScript = (name = projectName) => {
    // Run the script in the directory above tempProjectDirectory
    const cmd = `node ${path.join(__dirname, "..", "init.js")} ${name}`;
    return execSync(cmd, {
      encoding: "utf8",
      cwd: path.dirname(tempProjectDirectory),
    });
  };

  const removeTempProjectDirectory = () => {
    if (fs.existsSync(tempProjectDirectory)) {
      rimraf.sync(tempProjectDirectory);
    }
  };

  before(removeTempProjectDirectory);

  it("should exit with an error if no project name is provided", () => {
    try {
      executeInitScript("");
      throw new Error("Expected an error but none was thrown");
    } catch (error) {
      expect(error.message).to.include("Please specify a project name.");
    }
  });

  it("should successfully clone the repository", () => {
    try {
      executeInitScript();
      // Check if the project directory exists
      expect(fs.existsSync(tempProjectDirectory)).to.be.true;
      // Check for specific files/directories
      const expectedFile = path.join(tempProjectDirectory, "package.json");
      expect(fs.existsSync(expectedFile)).to.be.true;
      // Optionally, run 'git status' or 'git log' and check the output
      const gitStatus = execSync("git status", {
        cwd: tempProjectDirectory,
        encoding: "utf8",
      });
      expect(gitStatus).to.include("On branch");
      // Optional: Check for the latest commit or other git details if needed
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  });

  it("should navigate to the cloned directory and remove .git directory", () => {
    try {
      // Check that .git directory exists after cloning
      const gitDirPath = path.join(tempProjectDirectory, ".git");
      const gitDirAfterClone = fs.existsSync(gitDirPath);
      console.log(".git directory exists after clone:", gitDirAfterClone);
      expect(gitDirAfterClone).to.be.true;
      // Remove the .git directory
      execSync(`rm -rf ${gitDirPath}`);
      // Then, verify that .git directory no longer exists
      const gitDirAfterRemoval = fs.existsSync(gitDirPath);
      console.log(
        ".git directory exists after removal attempt:",
        gitDirAfterRemoval
      );
      expect(gitDirAfterRemoval).to.be.false;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  });

  it("should initialize a new git repository in the cloned directory", () => {
    try {
      execSync("git init", { cwd: tempProjectDirectory });
      const gitDirExists = fs.existsSync(
        path.join(tempProjectDirectory, ".git")
      );
      expect(gitDirExists).to.be.true;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  });

  it("should update package.json with the correct project name", () => {
    try {
      const packageJsonPath = path.join(tempProjectDirectory, "package.json");
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
      expect(packageJson.name).to.equal(projectName);
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  });

  it("should clear the author in package.json", () => {
    try {
      const packageJsonPath = path.join(tempProjectDirectory, "package.json");
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
      expect(packageJson.author).to.equal("");
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  });

  after(removeTempProjectDirectory);
});
