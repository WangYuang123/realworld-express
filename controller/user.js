const { User } = require('../model')
const _ = require('lodash');
const { jwtSecret } = require('../config/config.default')
const jwt = require('../util/jwt')

// 用户注册
exports.register = async(req, res, next) => {
	try{	
		let user = new User(req.body.user)
		await user.save()
		
		user = user.toJSON()
		delete user.password
		
		res.status(200).json({
			code: 200,
			msg: '注册成功',
			data: {
				...user
			}
		})
	}catch(err){
		next(err);
	}
}


// 用户登录
exports.login = async(req, res, next) => {
	try {
		const user = req.user.toJSON()
		// 生成token
		const token = await jwt.sign(
			{
				userId: user._id
			},
			jwtSecret,
			{
				expiresIn: 60 * 60 * 24,
			}
		)
		
		// 移除密码属性
		delete user.password
		
		res.status(200).json({
			code: 200,
			msg: '登录成功',
			data: {
				...user,
				token
			}
		})
	} catch(err) {
		next(err);
	}
}

//  获取当前用户
exports.getCurrentUser =  async(req, res, next) => {
	try{
		const user = req.user.toJSON()
		res.status(200).json({
			code: 200,
			msg: '获取成功',
			data: {
				...user
			}
		})
	}catch(err){
		next(err);
	}
}

// 更新用户
exports.updateUser = async(req, res, next) => {
	try{
		const { _id } = req.user
		const user = req.body.user
		
		const result = await User.updateOne({ _id }, user)
		
		if(result.modifiedCount > 0) {
			const updateAfterUser = await User.findById(_id)
			res.status(200).json({
				code: 200,
				msg: '更新成功',
				data: {
					...updateAfterUser
				}
			})
		} else {
			res.status(404).json({
				code: 10005,
				msg: '更新失败'
			})
		}
	}catch(err){
		next(err);
	}
}