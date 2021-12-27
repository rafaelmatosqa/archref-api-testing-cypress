/// <reference types='cypress' />


const fs = require("fs-extra");
const path = require("path");


function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve(
    ".",
    "cypress",
    "config",
    `${file}.json`
  );
  return fs.readJson(pathToConfigFile);
}

module.exports = (on, config) => {

  const file = config.env.fileConfig || "dev";
  return getConfigurationByFile(file);
};
