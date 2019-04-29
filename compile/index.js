const yamlParser = require('js-yaml');
const fs = require('fs');
module.exports = (config, assemble, pipeline) => {
  try {
    const configFile = yamlParser.dump(config, 'utf-8');
    const assemFile = yamlParser.dump(assemble, 'utf-8');
    const pipeFile = yamlParser.dump(pipeline, 'utf-8');

    fs.writeFileSync('config.yml', configFile);
    fs.writeFileSync('assemble.yml', assemFile);
    fs.writeFileSync('pipeline.yml', pipeFile);

    return [configFile, assemFile, pipeFile];
    console.log('yammmmmmling', getYaml);
  } catch (err) {
    console.log(err);
  }
};
