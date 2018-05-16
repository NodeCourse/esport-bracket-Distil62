const Sequelize = require('sequelize');

const db = new Sequelize('sql2238241', 'sql2238241', 'vY4*bY9!', {
    host : 'sql2.freemysqlhosting.net',
    dialect : 'mysql'
});

let getAllArticles = (next)=>{
    return Article
        .findAll()
        .then((res) => {
            next(res);
        });
}

let getAllResponse = (next) => {
    return Response
        .findAll()
        .then((res)=> {
            next(res);
        });
}

let createArticle = (article)=>{
    return Article
        .sync()
        .then(()=>{
            Article.create({
                author : article.author,
                imgSrc : article.imgSrc,
                description : article.description
            });
        });
}

let createResponse = (response)=>{
    return Response
        .sync()
        .then(()=> {
            Response.create({
                articleId : response.articleId,
                authorRes : response.authorRes,
                contentRes : response.contentRes
            })
        })
}

module.exports = 
{
    db : db,
    Article : Article,
    Response : Response,
    getAllArticles : getAllArticles,
    getAllResponse : getAllResponse,
    createArticle : createArticle,
    createResponse : createResponse
};