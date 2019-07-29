const builder = require('./build');
const compile = require('./compile');
//You sir are a gut

module.exports = body => {
  try {
    const { config, assemble, pipeline, pushDemo, flyScript } = builder(body);
    return compile(config, assemble, pipeline, flyScript, pushDemo);
  } catch (error) {}
};
