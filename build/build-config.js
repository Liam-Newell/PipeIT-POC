module.exports = body => {
  try {
    const config = {
      CF_DEV_ORG: body.env.includes('DEV') ? `${body.segment}-${body.region}-DEV` : '',
      CF_UAT_ORG: body.env.includes('UAT') ? `${body.segment}-${body.region}-UAT` : '',
      CF_PROD_ORG: body.env.includes('PROD') ? `${body.segment}-${body.region}-PROD` : '',
      MY_ENV_VAR: '',
      GIT_SSH_URI: body.gitRepo || '',
      GIT_PRIVATE_KEY: body.gitKey || ''
    };
    return config;
  } catch (error) {
    throw Error(`Theres was an error building the config ${error}`);
  }
};
