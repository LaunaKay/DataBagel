module.exports = function (app)
{
    var languages = require('../controllers/languages.js');

    app
    .get('/languages', function(request, response)
    {
        console.log('routes.get languages');
        languages.index(request,response);
    })
};