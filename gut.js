const builder = require('./build');
const compile = require('./compile');
//You sir are a gut

module.exports = body => {
  try {
    const { config, assemble, pipeline } = builder(body);
    const [configFile, assembleFile, pipelineFile] = compile(
      config,
      assemble,
      pipeline
    );
    console.log(JSON.stringify(fileObjects));
    return fileObjects;
  } catch (error) {}
};
