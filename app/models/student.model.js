module.exports = (sequelize, Sequelize) => {
    const Student = sequelize.define("student", {
        

        id:{
            type: Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement: true,
        },

        s_id: {
            type: Sequelize.STRING
       },
       s_major:{
        type: Sequelize.STRING
       },
       s_faculty:{
        type: Sequelize.STRING
       },
       s_group:{
        type: Sequelize.STRING
       },
       s_name:{
        type: Sequelize.STRING
       },
       s_lastname:{
        type: Sequelize.STRING
       },
       createdAt:{
        type:Sequelize.DATE
       },
       updatedAt:{
        type:Sequelize.DATE
       }

    });
    return Student;
};