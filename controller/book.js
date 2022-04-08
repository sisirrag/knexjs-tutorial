const bookService = require('../service/book');
class BookController{
   async createBook(req,res){
       try{
           const id=await bookService.createBook(req.body);
           res.status(201).json(id);
       }
       catch(err){
           console.error(err); 
       }

   } 
}
module.exports= new BookController();