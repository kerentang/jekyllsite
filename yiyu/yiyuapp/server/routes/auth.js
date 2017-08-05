const auth = require('../controllers/user.js')
const router = require('koa-router')()
router.get('/user/:id', auth.getUserInfo)
module.exports = router
