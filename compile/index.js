const yamlParser = require('js-yaml');
module.exports = (config, assemble, pipeline) => {
  try {
    const configFile = yamlParser.dump(config, 'utf-8');
    const assemFile = yamlParser.dump(assemble, 'utf-8');
    const pipeFile = yamlParser.dump(pipeline, 'utf-8');
    return [configFile, assemFile, pipeFile];
    console.log('yammmmmmling', getYaml);
  } catch (err) {
    console.log(err);
  }
};
