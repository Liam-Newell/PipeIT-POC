const config = require('./build-config');
const assemble = require('./build-assemble');
const pipeline = require('./build-pipeline');
const pushScript = require('./build-push');
const flyScript = require('./build-fly');

module.exports = body => {
  return {
    config: config(body),
    assemble: assemble(body),
    pipeline: pipeline(body),
    pushDemo: pushScript(body),
    flyScript: flyScript(body)
  };
};
