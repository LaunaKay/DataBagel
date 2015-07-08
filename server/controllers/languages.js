var Language = mongoose.model('Language');

module.exports = (function()
{
    return{
        index: function(request, response)
        {
            console.log("Server / CTL / Language - Index")
            Language.find({}).limit(10).exec(function(err, languages)
            {
                if(err)
                {
                    console.log(err);
                }
                else
                {
                    console.log('languages', languages);
                    response.json(languages);
                }
            })
        }
    }
})();