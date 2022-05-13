import Express,{Request,Response} from 'express'

import TodoModel from '../Databases/Model/TodoModel';

const route=Express.Router();

route.get("/",async(req:Request,res:Response)=>{
try {
    
    const result= await TodoModel.find()
    res.json(result)
} catch (error) {
    return res.json({message:error}) 
}
})
route.get("/:id",async(req:Request,res:Response)=>{

    try {
        const result= await TodoModel.find({_id:req.params.id})
        res.json(result);
    } catch (error) {
        
    }
})
route.post("/",async(req:Request,res:Response)=>{
    try {
        const todoModel=new TodoModel(req.body);
        const NewTodo= await todoModel.save();       
        res.json(NewTodo);
    } catch (error) {
        return res.json({message:error}) 
    }
})
route.delete("/:id",async(req:Request,res:Response)=>{
    try {
        await TodoModel.deleteOne({_id:req.params.id});
    } catch (error) {
        return res.json({message:error}) 
    }
})
route.put("/:id",async(req:Request,res:Response)=>{
    try {
        const newTodo= await TodoModel.updateOne({_id:req.params.id},req.body);
        res.json(newTodo);
    } catch (error) {
       return res.json({message:error}) 
    }
})

export default route;