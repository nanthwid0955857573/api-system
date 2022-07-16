const db = require("../models");
const Book = db.book;


exports.addBook = (req, res) => {
    console.log('insert in controller');
            Book.create({
                b_id: req.body.b_id,
                b_name: req.body.b_name
            }).then(()=> {
                res.status(200).send({massage:'Adding Book Success'})
                
 }).catch(err =>{
    res.status(500).send({ message: err.message });
 })
}
