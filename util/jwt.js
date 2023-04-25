const jwt = require('jsonwebtoken')
const { promisify } = require('util')

// 解析 jwt异步不是promise形式的，可以转成prmise形式的
exports.sign = promisify(jwt.sign)

// 验证
exports.verify = promisify(jwt.verify)

// 不验证直接解析
exports.decode = promisify(jwt.decode)