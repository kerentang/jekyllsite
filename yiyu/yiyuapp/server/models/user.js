const db = require('../config/db.js')
const userModel = '../schema/user.js'
const DygraduateDb = db.Dygraduate
// 用sequelize的import方法引入表结构，实例化了user
const User = DygraduateDb.import(userModel)
const getUserById = async function (id) {
  const userInfo = await User.findOne({
    where: {
      id: id
    }
  })
  return userInfo
}

module.exports = {
  getUserById
}
