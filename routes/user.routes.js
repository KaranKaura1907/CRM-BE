const userController= require("../controllers/user.controller")
const authJwt= require("../middlewares/authjwt")
module.exports= function(app)
{
  app.get('/crm/api/users/',[authJwt.verifyToken,authJwt.isAdmin],userController.findAll)
  app.get('/crm/api/users/:userId',[authJwt.verifyToken,authJwt.isAdmin],userController.findById)
  app.put('/crm/api/users/:userId',[authJwt.verifyToken,authJwt.isAdmin],userController.update)
}