const db = require('../utils/database');
var request = require('request');
const Movies = db.movies;
const Comments = db.comments;
const { Op } = db.Sequelize;
const seq = db.sequelize;
const apiKey = "&apikey=62cae7c5"


function getMovieFromAPI(url)
{
    return new Promise((resolve, reeject)=>
    {
        request(url, (error, response, body) => {
            resolve(JSON.parse(body));
        });
    })
}


exports.createMovie = async (movieName) =>
{
    const url = "http://www.omdbapi.com/?t=".concat(movieName.concat(apiKey));
    // const getMovie = getMovieFromAPI(url);
    const movie = await getMovieFromAPI(url);
    if(movie.Response == "False")
    {
        return {"Response":"Movie not found by API"}
    }
    
    const isExist = Movies.findOne({where:{Title:movieName}});

    if(isExist === null)
    {
        Movies.create(movie);
    }
    else
    {
        console.log("Movie already exist in DB !!!!");
    }
    
    return movie ;
}

exports.addCommentByMovieId = (comment) =>
{
    return Comments.create({        
            MovieImdbID: comment.imdbID,
            comment: comment.comment,})
            .then((comments) =>
            {
                return comments;
            }
            )
            .catch((err)=>
            {
                console.log("Error adding comment to DB: ", err);
            });    
}

exports.getAllMovies = async (filters) =>
{
    let query = "";
    if(filters.Year)
    {
        query = query.concat("\"Year\">=".concat("'"+filters.Year+"'"));
    }
    if(filters.Genre)
    {
        if(query)
        {
            query = query.concat(" AND ");  
            query = query.concat("\"Genre\" LIKE ".concat("'%" + filters.Genre + "%'"));        
        }
        else
        {
            query = query.concat("\"Genre\" LIKE ".concat("'%" + filters.Genre + "%'"));
            // query = query.concat(" ");
        }

    }
    if(filters.imdbRating)
    {           
        if(query)
        {
            query = query.concat(" AND "); 
            query = query.concat("\"imdbRating\">=".concat("'"+filters.imdbRating+"'"));
                       
        }
        else
        {
            query = query.concat("\"imdbRating\"=".concat("'"+filters.imdbRating+"'"));
            // query = query.concat(" ");
        }

    }
    if(query)
    {
        query = query.trimEnd();
        query = "WHERE ".concat(query);
    }
    query = "SELECT * FROM \"Movies\" ".concat(query);
    console.log(query);
    const movie = seq.query(query,
        {
            type:seq.QueryTypes.SELECT
        });
    return movie;

}

exports.getCommentByMovieId = (movieId) =>
{
    return Movies.findByPk(movieId, {include: ["comments"]});
  
};

exports.getMovieById = (movieId) =>
{
    return Movies.findOne({where: {imdbID: movieId}})
    .then((movie) =>{
        return movie;
    })
    .catch((err) =>
    {
        console.log("Error while finding comment: ", err);
    }
    ); 
}


