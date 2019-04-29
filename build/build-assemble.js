module.exports = body => {
  return {
    platform: body.platform || 'linux',

    image_resource: {
      type: body.type || '',
      source:
        ' # NOTE: It is important that this Docker image contains the cf command line utility as it is used by the task # which the Enterprise Pipeline intercepts and will be the context in which the deploy script will run',
      repository: body.gitRepo
    },

    inputs: [{ name: 'source' }],

    outputs: [{ name: 'target' }],

    run: { path: 'source/concourse/scripts/assemble.sh' }
  };
};
