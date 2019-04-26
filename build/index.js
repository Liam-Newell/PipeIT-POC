const config = require('./build-config');
const assemble = require('./build-assemble');
const pipeline = require('./build-pipeline');

module.exports = body => {
  return {
    config: config(body),
    assemble: assemble(body),
    pipeline: pipeline(body)
  };
};
