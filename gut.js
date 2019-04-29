const builder = require('./build');
//You sir are a gut

module.exports = body => {
  try {
    const fileObjects = builder(body);
    console.log(JSON.stringify(fileObjects));
    return fileObjects;
  } catch (error) {}
};
