const builder = require('./build');
//You sir are a gut

module.exports = body => {
  const fileObjects = builder(body);
};
