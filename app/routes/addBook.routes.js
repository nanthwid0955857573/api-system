const controller = require("../controllers/addBook.controller");
const { verifyAddBook } = require("../middleware");
module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
          "Access-Control-Allow-Headers",
          "x-access-token, Origin, Content-Type, Accept",
        ); 
        next();
        // json: true,
        // body: arr
      }
      );
    app.post("/api/book/addBook",[verifyAddBook.checkDuplicateBook],controller.addBook);
};