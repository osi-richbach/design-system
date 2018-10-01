const { execSync } = require('child_process');
const gitInfo = execSync('git rev-parse --abbrev-ref HEAD', {
  encoding: 'utf8',
}).trim();
const lernaInfo = JSON.parse(
  execSync('npx lerna ls --json', {
    encoding: 'utf8',
  })
).filter(({ private }) => private !== true);

module.exports = () => {
  return {
    code: `module.exports = {
      buildDate: ${JSON.stringify(new Date())},
      gitInfo: ${JSON.stringify(gitInfo)},
      lerna: ${JSON.stringify(lernaInfo)}
    }`,
  };
};
