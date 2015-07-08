app.controller('DataController',['DataFactory', function(DataFactory)
{
    console.log('DataController Loaded');
    var that = this;

    var getLanguages = function()
    {
        DataFactory.getLanguages(function(languages)
        {
            that.languages = languages;
            console.log('ctrl.data', that.languages);
        });
    }
    console.log('executing getLanguages');
    getLanguages();
}]);