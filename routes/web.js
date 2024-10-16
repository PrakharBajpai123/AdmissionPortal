const express = require('express')
const FrontController = require('../Controllers/FrontController')
const AdminController = require('../Controllers/admin/AdminController')
const route = express.Router()


route.get('/register',FrontController.register)
route.get('/',FrontController.login)
route.get('/dashboard',FrontController.dashboard)
route.get('/about',FrontController.about)
route.get('/contact',FrontController.contact)
route.get('/profile',FrontController.profile)

//insert data
route.post('/registerStudent',FrontController.Studentregister)

//Admincontroller
route.get('/admin/dashboard',AdminController.dashboard)
route.get('/admin/StudentDisplay',AdminController.StudentDisplay)
route.get('/admin/StudentView/:id',AdminController.StudentView)
route.get('/admin/StudentDelete/:id',AdminController.StudentDelete)
route.get('/admin/StudentEdit/:id',AdminController.StudentEdit)
route.post('/admin/StudentUpdate/:id',AdminController.StudentUpdate)


module.exports=route