module.exports = {
  '*.+(js|jsx|ts|tsx)': ['eslint --fix', 'git add'],
  '*.+(json|css|md|yaml)': ['prettier --write', 'git add'],
}
