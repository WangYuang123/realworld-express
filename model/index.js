const mongoose = require('mongoose');
const { dbURI } = require('../config/config.default.js')
// 连接数据库
mongoose.connect(dbURI, {
	useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection
db.on('error', (err) => {
	console.log('mongoDB数据库连接失败', err)
})
db.once('opne', function() {
	console.log('mongoDB数据库连接成功')
})

module.exports = {
	User: mongoose.model('User', require('./user')),
	Article: mongoose.model('Article', require('./article'))
}