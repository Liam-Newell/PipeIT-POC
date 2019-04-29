#!/bin/bash
    set -o errexit
    set -o xtrace
    cd ../../../target
    cf push -f manifest-dev.yml --no-start -------- we need the manifest created already I think
    cf set-env app-demo MY_ENV_VAR $MY_ENV_VAR
    cf start app-demo