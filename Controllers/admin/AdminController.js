const UserModel = require('../../models/user')

class AdminController {
    static dashboard =async(req,res)=>{
        try{
            res.render("admin/dashboard")

        }catch(error)
        {
            console.log(error)
        }
    }
    static StudentDisplay =async(req,res)=>{
        try{
            const data = await UserModel.find()
           // console.log (data)
            res.render("admin/studentDisplay" , {d:data})

        }catch(error)
        {
            console.log(error)
        }
    }
    static StudentView =async(req,res)=>{
        try{
        //  console.log(req.params.id) 
        const id = req.params.id
        const data = await UserModel.findById(id)
        // console.log(data)
        res.render('admin/StudentView',{d:data})

        }catch(error)
        {
            console.log(error)
        }
    }
    static StudentDelete =async(req,res)=>{
        try{
        //  console.log(req.params.id) 
        const id = req.params.id
        const data = await UserModel.findByIdAndDelete(id)
        // console.log(data)
        res.redirect('/admin/StudentDisplay')

        }catch(error)
        {
            console.log(error)
        }
    }
    static StudentEdit =async(req,res)=>{
        try{
        //  console.log(req.params.id) 
        const id = req.params.id
        const data = await UserModel.findById(id)
        // console.log(data)
        res.render('admin/StudentEdit',{d:data})

        }catch(error)
        {
            console.log(error)
        }
    }
    static StudentUpdate =async(req,res)=>{
        try{
    //   console.log(req.body)
    let id=req.params.id
    const {name,email,password}=req.body
    await UserModel.findByIdAndUpdate(id,{
        name,
        email,
        password
    })
    res.redirect('/admin/StudentDisplay')


        }catch(error)
        {
            console.log(error)
        }
    }
}

module.exports= AdminController