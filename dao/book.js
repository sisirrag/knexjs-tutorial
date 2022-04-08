const db= require('../db/db');

class BookDAO{
    async createBook(isbn,title){

        const [id] =await db('book')
        .insert({
            isbn,
            title,

        }).returning('id');

        return id;

    }
}

module.exports = new BookDAO();