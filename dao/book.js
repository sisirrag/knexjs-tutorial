const db= require('../db/db');

class BookDAO{
    async createBook(isbn,title,author,publisher,pages){

        const [id] =await db('book')
        .insert({
            isbn,
            title,
            author,
            publisher,
            pages,

        }).returning('id');

        return id;

    }
}

module.exports = new BookDAO();