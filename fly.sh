      #!/bin/bash
    fly --target GEES login --team-name GEES --concourse-url https://concourse.platform.manulife.io --insecure
    fly -t GEES set-pipeline -p pipeline-demo -c pipeline.yml -l config.yml
    fly -t GEES unpause-pipeline -p pipeline-demo