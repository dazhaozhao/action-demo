module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'type-enum': [
            2,
            'always',
            [
                'feat',
                'fix',
                'style',
                'refactor',
                'ci',
                'revert',
                'build',
                'chore',
                'test',
                'docs',
                'init',
            ],
        ],
    },
}
