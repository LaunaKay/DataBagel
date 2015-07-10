app.controller('DataController',['DataFactory', function(DataFactory, $scope)
{
    console.log('DataController Loaded');
    var that = this;

    var getLanguages = function()
    {
        DataFactory.getLanguages(function(languages)
        {
            that.languages = languages;
            console.log('ctrl.data', that.languages);
        })

    }
    console.log('exuecting getlanguages');
    getLanguages();

    // var getDojos = function()
    // {
    //     DataFactory.getDojos(function(dojos)
    //     {
    //             that.dojos = dojos;
    //             console.log('ctrl.dojos', that.dojos);
    //     });
    // }

    // console.log('executing getDojos');
    // getDojos();

}]);