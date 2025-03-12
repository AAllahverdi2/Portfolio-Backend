const express=require("express")
const router=express.Router()
const {PortfolioController}=require("../controller/PortfoliController")
router.get("/",PortfolioController.getAll)
router.get("/:id",PortfolioController.getById)
router.post("/",PortfolioController.Post)
router.delete("/:id",PortfolioController.delete)
module.exports=router