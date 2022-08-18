const db = require("../models");
const Book = db.book;
 
  checkDuplicateBook = (req, res, next) => {
    Book.findOne({
        where: {
            b_id: req.body.b_id
        }
    }).then(book =>{
        console.log("Checking duplicate book",book?.b_id)

        if (book) {
                res.status(400).send({
                  message: "Failed! Book is duplicate!"
                });
            return;
          }
        next();
    });
  
};
const verifyAddBook = {
    checkDuplicateBook:checkDuplicateBook
}
module.exports = verifyAddBook;