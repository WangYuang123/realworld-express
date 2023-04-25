const { body } = require('express-validator')
const validate = require("../middleware/validate");
const { User } = require("../model");
const md5 = require('../util/md5')

// 注册
exports.register = validate([
	body('user.username').notEmpty().withMessage('用户名不能为空')
	.custom(async username => {
		const user = await User.findOne({ username })
		if(user) {
			return Promise.reject('用户名已存在')
		}
	}),
	body('user.email').notEmpty().withMessage('邮箱不能为空')
	.isEmail().withMessage('邮箱格式不正确')
	.bail()
	.custom(async email => {
		const user = await User.findOne({ email })
		if(user) {
			return Promise.reject('邮箱已存在')
		}
	}),
	body('user.password').notEmpty().withMessage('密码不能为空'),
])

// 登录
exports.login = [
	// 校验必填
	validate([
		body('user.email')
			.notEmpty().withMessage('邮箱不能为空')
			.isEmail().withMessage('邮箱格式不正确'),
		body('user.password')
			.notEmpty().withMessage('密码必填')
	]),
	
	// 校验用户是否存在
	async (req, res, next) => {
		const { email } = req.body.user
		const user = await User.findOne({ email }).select([
			'email',
			'username',
			'password',
			'bio',
			'image'
		])
		
		if(!user) {
			res.status(400).json({
				msg: '用户不存在',
				code: 10001
			})
		}
		
		req.user = user
		next()
	},
	
	// 校验密码是否正确
	async (req, res, next) => {
		const { password } = req.body.user
		const user = req.user
		
		if(md5(password) !== user.password) {
			res.status(400).json({
				msg: '密码错误',
				code: 10002
			})
		}
		
		next()
	}
]


// 更新用户
exports.updateUser = [		
	// 校验输入的内容 TODO:
]
