module.exports = body => {
  const flyDemo = `#!/bin/bash
    fly --target ${body.teamName} login --team-name ${
    body.teamName
  } --concourse-url https://concourse.platform.manulife.io --insecure
    fly -t ${
      body.teamName
    } set-pipeline -p ${body.appName} -c pipeline.yml -l config.yml
    fly -t ${body.teamName} unpause-pipeline -p pipeline-demo`;
  return flyDemo;
};
