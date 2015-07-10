var mongoose = require('mongoose');
var Language = mongoose.model('Language');
var https = require('https');
var http = require('http');

module.exports = (function()
{
    return{
        index: function(request, response)
        {
            console.log('inside index');

            Language.find({ViewCount: {$gt:50000}}).sort({ViewCount:-1}).limit(100).exec(function(err, languages)
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
        },

        dojo: function(request, response)
        {
            console.log("Server / CTL / Language - DOJO");
            var options =
            {
                host:"api.github.com",
                path:'/search/repositories?q=coding_dojo&sort=star&order=desc',
                method: 'GET',
                headers: {'User-Agent':'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0)'}
            };

            https.get(options, function (http_res)
            {
                // initialize the container for our data
                var data = "";

                // this event fires many times, each time collecting another piece of the response
                http_res.on("data", function (chunk)
                {
                    // append this chunk to our growing `data` var
                    data += chunk;
                });
                // this event fires *one* time, after all the `data` events/chunks have been gathered
                http_res.on("end", function ()
                {
                    // you can use res.send instead of console.log to output via express
                    console.log('returned data', data);
                    response.send(data);
                });
            });
        },
    }
})();

