module.exports = body => {
  try {
    const config = {
      CF_DEV_ORG: (body.enviro.includes('dev') && `${body.org}-DEV`) || '',
      CF_UAT_ORG: (body.enviro.includes('uat') && `${body.org}-UAT`) || '',
      CF_PROD_ORG: (body.enviro.includes('prod') && `${body.org}-PROD`) || '',
      MY_ENV_VAR: '',
      GIT_SSH_URI: body.gitRepo || '',
      GIT_PRIVATE_KEY: body.getKey || ''
    };
    return config;
  } catch (error) {
    throw Error(`Theres was an error building the config ${error}`);
  }
};
