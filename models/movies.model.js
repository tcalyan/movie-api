
module.exports = (sequelize, DataTypes) =>
{
    const Movies = sequelize.define('Movies',
    {
        Title:
        {
            type: DataTypes.TEXT,
            allowNull : false
        },
        Year:
        {
            type: DataTypes.TEXT,
            allowNull : false
        },
        Rated:
        {
            type: DataTypes.TEXT,
            allowNull : false
        },
        Released:
        {
            type: DataTypes.TEXT,
            allowNull : false
        },
        Genre:
        {
            type: DataTypes.TEXT,
            allowNull : false
        },
        Director:
        {
            type: DataTypes.TEXT,
            allowNull : false
        },
        Writer:
        {
            type: DataTypes.TEXT,
            allowNull : false
        },
        Actors:
        {
            type: DataTypes.TEXT,
            allowNull : false
        },
        Plot:
        {
            type: DataTypes.TEXT,
            allowNull : false
        },
        Language:
        {
            type: DataTypes.TEXT,
            allowNull : false
        },
        Country:
        {
            type: DataTypes.TEXT,
            allowNull : false
        },
        Awards:
        {
            type: DataTypes.TEXT,
            allowNull : false
        },
        Poster:
        {
            type: DataTypes.TEXT,
            allowNull : false
        },
        Ratings:
        {
            type: DataTypes.JSON,
            allowNull : false
        },
        Metascore: 
        {
            type: DataTypes.TEXT,
            allowNull : false
        },
        imdbRating:
        {
            type: DataTypes.TEXT,
            allowNull : true
        },
        imdbVotes:
        {
            type: DataTypes.TEXT,
            allowNull : false
        },
        imdbID:
        {
            type: DataTypes.TEXT,
            allowNull : false,
            primaryKey : true
        },
        Type:
        {
            type: DataTypes.TEXT,
            allowNull : false
        },
        DVD:
        {
            type: DataTypes.TEXT,
            allowNull : false
        },
        BoxOffice:
        {
            type: DataTypes.TEXT,
            allowNull : false
        },
        Production:
        {
            type: DataTypes.TEXT,
            allowNull : false
        },
        Website:
        {
            type: DataTypes.TEXT,
            allowNull : false
        },
        Response:
        {
            type: DataTypes.TEXT,
            allowNull : false
        }

    });
    return Movies;
};


