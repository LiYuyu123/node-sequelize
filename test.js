const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('ling', 'root', '123456', {
    dialect: 'mysql'
});

//创建User模型
class User extends Model {}

//初始化User
User.init({
    username: DataTypes.STRING,
    birthday: DataTypes.DATE
}, { sequelize, modelName: 'user' });

//同步到数据库
sequelize.sync()
    //创建一条记录
    .then(() => User.create({
        username: 'janedoe',
        birthday: new Date(1980, 6, 20)
    }))
    //打印结果
    .then(jane => {
        console.log(jane.toJSON());
    });



async function run(){
    User.destroy({
        where:{
            id:1
        }
    })

    //查看user表
    const users=await User.findAll()
    console.log(JSON.stringify(users))
    //结束2
    sequelize.close()
}
run()