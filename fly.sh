      #!/bin/bash
    fly --target ladf login --team-name ladf --concourse-url https://concourse.platform.manulife.io --insecure
    fly -t ladf set-pipeline -p pipeline-demo -c pipeline.yml -l config.yml
    fly -t ladf unpause-pipeline -p pipeline-demo