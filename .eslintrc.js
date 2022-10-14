module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        'standard-with-typescript',
        'plugin:prettier/recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    overrides: [],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['tsconfig.json'],
    },
    plugins: ['react'],

    /**
     * 이곳에서 룰 추가 / 권한 변경을 통해 커스텀 가능
     * - 0 or off : 사용하지 않음
     * - 1 or wran : 경고
     * - 2 or error : 에러 표시
     * **/
    rules: {
        'arrow-body-style': 'off',
        'prefer-arrow-callback': 'off',
        'react/jsx-filename-extension': [
            'warn',
            {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        ],
        'prettier/prettier': 'error', // 프리티어 설정
        'no-unused-vars': 'warn', //안쓰는 변수 경고
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
    },
}
