module.exports = (sequelize, Sequelize) => {
    const student = sequelize.define("student", {
       id:{
           type: Sequelize.INTEGER,
           primaryKey:true
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
       }
    });
    return student;
};