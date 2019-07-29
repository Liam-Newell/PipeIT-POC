const yamlParser = require('js-yaml');
const AdmZip = require('adm-zip');
const fs = require('fs');

const zip = AdmZip();
module.exports = async (config, assemble, pipeline, flyScript, pushDemo) => {
  try {
    const configFile = yamlParser.dump(config, 'utf-8');
    const assemFile = yamlParser.dump(assemble, 'utf-8');
    const pipeFile = yamlParser.dump(pipeline, 'utf-8');

    zip.addFile('config.yml', Buffer.alloc(configFile.length, configFile));
    zip.addFile('assemble.yml', Buffer.alloc(assemFile.length, assemFile));
    zip.addFile('pipeline.yml', Buffer.alloc(pipeFile.length, pipeFile));
    zip.addFile('fly.sh', Buffer.alloc(flyScript.length, flyScript));
    zip.addFile('push.sh', Buffer.alloc(pushDemo.length, pushDemo));

    // fs.writeFileSync('config.yml', configFile);
    // fs.writeFileSync('assemble.yml', assemFile);
    // fs.writeFileSync('pipeline.yml', pipeFile);
    // fs.writeFileSync('fly.sh', flyScript);
    // fs.writeFileSync('push.sh', pushDemo);

    // const sConfig = fs.createWriteStream('config');
    // const sAssem = fs.createWriteStream('assemble');
    // const sPipe = fs.createWriteStream('pipeline');
    // const sFly = fs.createWriteStream('flyScript');
    // const sPush = fs.createWriteStream('pushScript');

    // sConfig.write(configFile);
    // sAssem.write(assemFile);
    // sPipe.write(pipeFile);
    // sFly.write(flyScript);
    // sPush.write(chunk)

    // const a = AdmZip();

    // zip.addLocalFile(__dirname + '/../config.yml');
    // zip.addLocalFile(__dirname + '/../pipeline.yml');
    // zip.addLocalFile(__dirname + '/../assemble.yml');
    // zip.addLocalFile(__dirname + '/../fly.sh');
    // zip.addLocalFile(__dirname + '/../push.sh');
    // zip.writeZip(__dirname + '/../concourse.zip');

    return zip.toBuffer();
    console.log('yammmmmmling', getYaml);
  } catch (err) {
    console.log(err);
  }
};
