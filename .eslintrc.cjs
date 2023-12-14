const { init } = require('@fullstacksjs/eslint-config/init');

module.exports = init({
	modules: {
		auto: true,
		cspell: false,
	},
	root: true,
	env: { browser: true, es2020: true },
	plugins: ['prettier', 'react-refresh', '@tanstack/query', '@typescript-eslint'],
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react-hooks/recommended', 'prettier'],
	ignorePatterns: ['dist', '.eslintrc.cjs', 'node_modules', 'postcss.config.js'],
	parser: '@typescript-eslint/parser',
	settings: {
		'import/resolver': {
			typescript: {
				alwaysTryTypes: true,
				project: './tsconfig.json',
			},
		},
	},
	rules: {
		'prettier/prettier': ['error'],
		'react-refresh/only-export-components': 'off',
		'no-console': ['error', { allow: ['warn', 'error'] }],
		'import/extensions': [
			'error',
			'ignorePackages',
			{
				js: 'never',
				jsx: 'never',
				ts: 'never',
				tsx: 'never',
			},
		],
		'simple-import-sort/imports': 'off',
		'simple-import-sort/exports': 'off',
		'no-shadow': 'off',
		'@typescript-eslint/no-shadow': 'error',
		'no-return-await': 'off',
		'react/no-array-index-key': 'off',
		'import/no-extraneous-dependencies': 'off',
		'react-hooks/exhaustive-deps': 'off',
	},
});
