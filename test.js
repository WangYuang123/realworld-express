const jwt = require('jsonwebtoken')

jwt.sign(
	{
		name: 'wangyuan',
	},
	'wangyuan',
	(err, token) => {
		if(err) return console.log('生成 token失败')
		console.log('生成 token 成功', token)
	}
)

jwt.verify(
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoid2FuZ3l1YW4iLCJpYXQiOjE2ODEzNzYyODd9.zQcJIRNr1jpyzKT-Zy5rRnN6vzXJ4gNDPQbjnP3u2ns11',
	'wangyuan',
	(err, res) => {
		if(err) return console.log('token 认证失败')
		console.log('认证成功')
	}
)