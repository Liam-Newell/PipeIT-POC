module.exports = body => {
  try {
    const config = {
      CF_DEV_ORG: '',
      CF_UAT_ORG: '',
      CF_PROD_ORG: '',
      MY_ENV_VAR: '',
      GIT_SSH_URI:
        'ssh://git@git.platform.manulife.io:2222/geesoffice/enterprise-pipeline-prod-demo.git',
      GIT_PRIVATE_KEY: ''
    };
    return config;
  } catch (error) {
    throw Error(`Theres was an error building the config ${error}`);
  }
};
