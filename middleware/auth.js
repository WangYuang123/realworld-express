const { verify } = require('../util/jwt')
const { jwtSecret } = require('../config/config.default')
const { User } = require('../model')

module.exports = async (req, res, next) => {
	// 从请求头获取token数据
	let token = req.headers.authorization
	// console.log(token)
	// 验证token是否存在
	// token = token ? token.split('Token')[1] : null
	// 如果不存在，发送响应401结束响应
	if(!token) {
		res.status(401).end()
	}
	
	try {
		// 验证token是否有效
		const decodedToken = await verify(token, jwtSecret)
		// 将信息挂载到请求对象上
		req.user = await User.findById(decodedToken.userId)
		next()
	} catch(err) {
		return res.status(401).end()
	}
}