$name = $env:npm_config_name
Write-Host "Migration name: $name"
npm run typeorm migration:create "./src/migrations/$name"