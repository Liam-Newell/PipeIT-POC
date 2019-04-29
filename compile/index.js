const yamlParser = require('js-yaml');
const AdmZip = require('adm-zip');
const fs = require('fs');

const zip = AdmZip();
module.exports = (config, assemble, pipeline, flyScript, pushDemo) => {
  try {
    const configFile = yamlParser.dump(config, 'utf-8');
    const assemFile = yamlParser.dump(assemble, 'utf-8');
    const pipeFile = yamlParser.dump(pipeline, 'utf-8');

    fs.writeFileSync('config.yml', configFile);
    fs.writeFileSync('assemble.yml', assemFile);
    fs.writeFileSync('pipeline.yml', pipeFile);
    fs.writeFileSync('fly.sh', flyScript);
    fs.writeFileSync('push.sh', pushDemo);

    zip.addLocalFile(__dirname + '/../config.yml');
    zip.addLocalFile(__dirname + '/../pipeline.yml');
    zip.addLocalFile(__dirname + '/../assemble.yml');
    zip.addLocalFile(__dirname + '/../fly.sh');
    zip.addLocalFile(__dirname + '/../push.sh');
    zip.writeZip(__dirname + '/../concourse.zip');

    return [configFile, assemFile, pipeFile];
    console.log('yammmmmmling', getYaml);
  } catch (err) {
    console.log(err);
  }
};
