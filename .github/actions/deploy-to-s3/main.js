const core = require('@actions/core')
// const github = require('@actions/github')
const { exec } = require('@actions/exec')

function run() {
  core.notice('🚀 Deploying to S3 from custom JS action')

  const bucket = core.getInput('bucket', { required: true })
  const region = core.getInput('region', { required: true })
  const distFolder = core.getInput('dist-folder', { required: true })

  console.log(bucket, region, distFolder)

  exec(`aws s3 sync ${distFolder} s3://${bucket} --region ${region}`)

  core.notice('✅ Successfully Deployed to S3 from custom JS action')
}

run()
