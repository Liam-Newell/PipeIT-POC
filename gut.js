const builder = require('./build');
//You sir are a gut

module.exports = body => {
  try {
    const fileObjects = builder(body);
  } catch (error) {}
};
