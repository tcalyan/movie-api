module.exports = (sequelize, DataTypes) =>
{
    const Comments = sequelize.define('Comments',
    {
        id:
        {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true

        },
        comment:
        {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }

    );
    return Comments;
};



