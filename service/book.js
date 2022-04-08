const bookDAO = require('../dao/book');

class BookService {
    createBook(bookDto){
        const {isbn,title}=bookDto;
        return bookDAO.createBook(isbn,title);
    }
}

module.exports = new BookService();