module.exports = {
  '*.js': ['eslint', 'jest --findRelatedTests --config=packages/react-skeleton/jest.config.js'],
  '*.+(js|jsx|json|yml|yaml|css|less|scss|ts|tsx|md|graphql|mdx)': [
    'prettier --write',
  ],
};
