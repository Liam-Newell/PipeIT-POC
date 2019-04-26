module.exports.assemble.pipeline = body => {
    try {
        const resource_types = {
            name: 'enterprise-pipeline-api',
            type: 'docker-image',
            source: {
                repository: 'docker.artifactory.platform.manulife.io/concourse-enterprise-pipeline-http-api-resource',
                tag: 'latest'
            }
        };
const resource = [
    {
        name: '',
    type: '',
    source: {
        branch: '',
        uri: '{{GIT_SSH_URI}}',
        private_key: '{{GIT_PRIVATE_KEY}}',
        skip_ssl_verification: true,
    },
    {
        name: '',
        type: '',
        source: {
            
        }
    }
];


    - name: cf-push-dev
  type: enterprise-pipeline-api
  source:
    api: fly
    method: POST
    debug: true
    ssl_verify: false
    json:
      buildTeamName: "{BUILD_TEAM_NAME}"         #populated automatically
      buildId: "{BUILD_ID}"                      #populated automatically
      buildName: "{BUILD_NAME}"                  #populated automatically
      buildJobName: "{BUILD_JOB_NAME}"           #populated automatically
      buildPipelineName: "{BUILD_PIPELINE_NAME}" #populated automatically
      org: {{CF_DEV_ORG}}

      #Full path to script which will execute 'cf push' and optionally 'cf create-service' commands
      #the 'source' folder name here should match with the name specified in the 'get' in the src-dev git resource below
      deploy_script: "source/concourse/scripts/push-acceptance.sh"

      #Specifies the PCF environment
      division: "CAC"

      #This should just be the same as the name of this resource
      buildTaskName: "cf-push-dev"
    env_vars:
      MY_ENV_VAR: {{MY_ENV_VAR}}

};
    } catch(error) {

    }
};
