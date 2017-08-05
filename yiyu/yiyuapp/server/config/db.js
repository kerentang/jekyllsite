const Sequelize = require('sequelize');
const Dygraduate = new Sequelize('mysql://root:hchtxf24@localhost/dygraduate', {
  define: {
    timestamps: false
  }
})

module.exports = {
  Dygraduate
}
