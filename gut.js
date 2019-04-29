const builder = require('./build');
//You sir are a gut

module.exports = body => {
  try {
    const fileObjects = builder(body);
<<<<<<< HEAD
    // console.log(JSON.stringify(fileObjects));
=======
    console.log(JSON.stringify(fileObjects));
    return fileObjects;
>>>>>>> 7df54aad68613514e9c0a16bb4c09d53518482d0
  } catch (error) {}
};
