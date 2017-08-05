const Sequelize = require('sequelize');

// 使用连接的形式进行连接的话，注意将root: 后面的XXXX改成自己数据库的密码
const Dygraduate = new Sequelize('mysql://root:hchtxf24@localhost/dygraduate', {
  define: {
    timestamps: false // 取消Sequelzie自动给数据表加入时间戳（createdAt以及updatedAt）
  }
})

module.exports = {
  Dygraduate
}

