module.exports = body => {
  try {
    const pipeline = {
      resource_types: {
        name: 'enterprise-pipeline-api',
        type: 'docker-image',
        source: {
          repository:
            'docker.artifactory.platform.manulife.io/concourse-enterprise-pipeline-http-api-resource',
          tag: 'latest'
        }
      },
      resources: [
        {
          name: 'src-dev',
          type: 'git',
          source: {
            branch: 'develop',
            uri: '{{GIT_SSH_URI}}',
            private_key: '{{GIT_PRIVATE_KEY}}',
            skip_ssl_verification: true
          }
        }
        // {
        //   name: 'cf-push-dev',
        //   type: 'enterprise-pipeline-api',
        //   source: {
        //     api: 'fly',
        //     method: 'POST',
        //     debug: true,
        //     ssl_verify: false,
        //     json: {
        //       buildTeamName: '{BUILD_TEAM_NAME}',
        //       buildId: '{BUILD_ID}',
        //       buildName: '{BUILD_NAME}',
        //       buildJobName: '{BUILD_JOB_NAME}',
        //       buildPipelineName: '{BUILD_PIPELINE_NAME}',
        //       org: '{{CF_DEV_ORG}}',
        //       deploy_script: 'source/concourse/scripts/push-acceptance.sh',
        //       division: body.region,
        //       buildTaskName: 'cf-push-dev'
        //     },
        //     env_vars: {
        //       MY_ENV_VAR: '{{MY_ENV_VAR}}'
        //     }
        //   }
        // }
      ],
      jobs: [
        {
          name: 'test-dev',
          serial: 'true',
          public: 'true',
          plan: [
            {
              aggregate: {
                get: 'source',
                trigger: 'true',
                //  passed: [push-dev],
                resource: 'src-dev'
              },
              task: 'test-linux',
              file: 'source/concourse/tasks/test-linux.yml',
              params: {
                TERM: xterm
              }
            }
          ]
        },
        {
          name: 'deploy-dev',
          serial: 'true',
          public: 'true',
          plan: [
            {
              aggregate: {
                get: 'source',
                resource: 'src-dev',
                passed: ['test-dev'],
                trigger: 'true'
              }
            },
            {
              task: 'assemble',
              file: 'source/concourse/tasks/assemble.yml',
              params: {
                TERM: 'xterm',
                PCF_API: '{{pcf_dev_api}}',
                PCF_USER: '{{pcf_dev_user}}',
                PCF_PASSWORD: '{{pcf_dev_pass}}',
                PCF_ORG: '{{dev_org}}',
                PCF_SPACE: '{{dev_space}}}'
              }
            }
          ]
        }
      ]
    };
    return pipeline;
  } catch (error) {
    throw Error(`Error: ${error}`);
  }
};
