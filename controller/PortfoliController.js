const {Portfolio}=require("../schema/Protfolio.schema")
const PortfolioController={
    getAll:async(req,res)=>{
        try{
            const target=await Portfolio.find()
            res.send(target)

        }catch(error){
            res.send("item is not found")
        }
    },
    getById:async(req,res)=>{
        try{
            const {id}=req.params
            const ali=await Portfolio.findById(id)
            res.send(ali)

        }catch(error){
            res.send("item is not found")
        }
    },
    Post:async(req,res)=>{
        try{
            const {name,desc,price,image}=req.body
            const NewProduct=new Portfolio({name,desc,price,image})
             await NewProduct.save()
             res.send(NewProduct)

        }catch(error){
            res.send("item is not found")
        }
    },
    delete:async(req,res)=>{
        try{
            const{id}=req.params
            await Portfolio.findByIdAndDelete(id)
            res.send("deleted")
        }catch(error){
            res.send("item is not found")
        }
    },
}
module.exports={PortfolioController}