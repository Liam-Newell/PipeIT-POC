module.exports = body => {
  try {
    const pipeline = {
      resource_types: {
        name: 'enterprise-pipeline-api',
        type: 'docker-image',
        source: {
          repository: body.gitRepo || '',
          tag: 'latest'
        }
      },
      resource: [
        {
          name: 'src-dev',
          type: 'git',
          source: {
            branch: 'develop',
            uri: '{{GIT_SSH_URI}}',
            private_key: '{{GIT_PRIVATE_KEY}}',
            skip_ssl_verification: true
          }
        },
        {
          name: 'cf-push-dev',
          type: 'enterprise-pipeline-api',
          source: {
            api: 'fly',
            method: 'POST',
            debug: true,
            ssl_verify: false,
            json: {
              buildTeamName: '{BUILD_TEAM_NAME}',
              buildId: '{BUILD_ID}',
              buildName: '{BUILD_NAME}',
              buildJobName: '{BUILD_JOB_NAME}',
              buildPipelineName: '{BUILD_PIPELINE_NAME}',
              org: '{{CF_DEV_ORG}}',
              deploy_script: 'source/concourse/scripts/push-acceptance.sh',
              division: body.division,
              buildTaskName: 'cf-push-dev'
            },
            env_vars: {
              MY_ENV_VAR: '{{MY_ENV_VAR}}'
            }
          }
        }
      ]
    };
    return pipeline;
  } catch (error) {
    throw Error(`Error: ${error}`);
  }
};
