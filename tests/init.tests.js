const chai = require("chai");
const expect = chai.expect;
const { exec } = require("child_process");
const path = require("path");

describe("init.js script", () => {
  it("should clone repository and update package.json", (done) => {
    exec(
      `node ${path.join(__dirname, "..", "init.js")} testProject`,
      (error, stdout, stderr) => {
        expect(error).to.be.null;
        done();
      }
    );
  });

  it("should exit with error if no project name is provided", (done) => {
    exec(
      `node ${path.join(__dirname, "..", "init.js")}`,
      (error, stdout, stderr) => {
        expect(error).to.not.be.null;
        done();
      }
    );
  });
});
