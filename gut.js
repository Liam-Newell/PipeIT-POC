const builder = require('./build');
const compile = require('./compile');
//You sir are a gut

module.exports = body => {
  try {
    const { config, assemble, pipeline } = builder(body);
    return ([configFile, assembleFile, pipelineFile] = compile(
      config,
      assemble,
      pipeline
    ));
  } catch (error) {}
};
