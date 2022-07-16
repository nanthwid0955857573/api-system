module.exports = (sequelize, Sequelize) => {
    const Book = sequelize.define("books", {
        

        id:{
            type: Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement: true,
        },

        b_id: {
            type: Sequelize.INTEGER
       },
       b_name:{
        type: Sequelize.STRING
       },
    //    },
    //    s_faculty:{
    //     type: Sequelize.STRING
    //    },
    //    s_group:{
    //     type: Sequelize.STRING
    //    },
    //    s_name:{
    //     type: Sequelize.STRING
    //    },
    //    s_lastname:{
    //     type: Sequelize.STRING
    //    },

       createdAt:{
        type:Sequelize.DATE
       },
       updatedAt:{
        type:Sequelize.DATE
       }

    });
    return Book;
};