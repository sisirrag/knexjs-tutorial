const bookDAO = require('../dao/book');

class BookService {
    createBook(bookDto){
        const {isbn,title,author,publisher,pages}=bookDto;
        return bookDAO.createBook(isbn,title,author,publisher,pages);
    }
}

module.exports = new BookService();