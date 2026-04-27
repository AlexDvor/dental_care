module.exports = {
  root: true,
  extends: '@react-native',
  plugins: ['simple-import-sort'],
  rules: {
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          ['^react$', '^react-native'],
          ['^@?\\w'],
          ['^@'],
          ['^\\.(?!.*\\.style$)(?!.*\\.styles$)'],
          ['\\.style$', '\\.styles$'],
        ],
      },
    ],
  },
};
