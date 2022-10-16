'use strict'
module.exports = {
    types: [
        { value: 'feat', name: '✨  Features | 新功能' },
        { value: 'fix', name: '🐛  Bug Fixes | 修复' },
        { value: 'style', name: '💄  Styles | 代码样式' },
        { value: 'refactor', name: '🔨  Code Refactoring | 代码重构' },
        { value: 'ci', name: '💚  Fixing CI Build | CI 配置' },
        { value: 'revert', name: '⏪  Revert | 回退' },
        { value: 'build', name: '📦  Build System | 打包构建' },
        { value: 'chore', name: '🗯   Chore | 构建/工程依赖/工具' },
        { value: 'test', name: '✅  Tests | 测试' },
        { value: 'docs', name: '📝  Documentation | 文档变更' },
        { value: 'init', name: '🚀  Init | 初始化' },
    ],

    messages: {
        type: '选择一种你的提交类型:',
        subject: '短说明:',
        confirmCommit: '确定提交说明(yes/no)',
    },
    allowCustomScopes: false,
    skipQuestions: ['customScope', 'body', 'footer'],
    subjectLimit: 100,
}
