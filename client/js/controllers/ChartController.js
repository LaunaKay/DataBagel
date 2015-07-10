app.controller('MenuCtrl', function ($scope)
{
    $scope.isCollapsed = true;
    $scope.charts = ['Line', 'Bar', 'Doughnut', 'Pie', 'Polar Area', 'Radar', 'Base'];
});

  app.controller('LineCtrl', ['$scope', '$timeout', function ($scope)
  {
    $scope.labels = ['JS', 'Python', 'Ruby', 'PHP'];
    $scope.series = ['2010-13', '2013-15'];
    $scope.data = [
      [4000, 1000, 1300, 3000],
      [4766, 2920, 1054, 2201]
    ];
    $scope.onClick = function (points, evt) {
      console.log(points, evt);
    };
    $scope.onHover = function (points) {
      if (points.length > 0) {
        console.log('Point', points[0].value);
      } else {
        console.log('No point');
      }
    };

    // $timeout(function () {
    //   $scope.labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    //   $scope.data = [
    //     [28, 48, 40, 19, 86, 27, 90],
    //     [65, 59, 80, 81, 56, 55, 40]
    //   ];
    //   $scope.series = ['Series C', 'Series D'];
    // }, 3000);
  }]);

  app.controller('BarCtrl', ['$scope', '$timeout', function ($scope)
  {
      $scope.getData = function () {
      // initialize the model
      $scope.ruby = 50;
      $scope.php = 50;
      $scope.js = 50;
      $scope.python = 50;
      console.log($scope.ruby);

      $scope.options = { scaleShowVerticalLines: false };
      $scope.labels = ['Python', 'PHP', 'Javascript', 'Ruby'];
      $scope.series = ['2014', '2015'];
      $scope.data = [
        [$scope.ruby, $scope.php, $scope.js, $scope.python],
        [28, 48, 40, 19]
      ];
    }();
  }]);

  app.controller('DoughnutCtrl', ['$scope', '$timeout', function ($scope)
  {
    $scope.labels = ['Comment on JSON File', 'Best CRLF?', 'Valid JS char for var'];
    $scope.data = [292, 134, 128];
  }]);

app.controller('MainCtrl', function($scope, myService) {
  myService.getFooOldSchool(function(data) {
     $scope.foo = data;
  });
});

  app.controller('PieCtrl', function ($scope) {
    $scope.labels = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
    $scope.data = [300, 500, 100];
  });

  app.controller('PolarAreaCtrl', function ($scope) {
    $scope.labels = ['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'];
    $scope.data = [300, 500, 100, 40, 120];
  });

  app.controller('BaseCtrl', function ($scope) {
    $scope.labels = ['Download Sales', 'Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'];
    $scope.data = [300, 500, 100, 40, 120];
    $scope.type = 'PolarArea';

    $scope.toggle = function () {
      $scope.type = $scope.type === 'PolarArea' ?  'Pie' : 'PolarArea';
    };
  });

  app.controller('RadarCtrl', function ($scope) {
    $scope.labels = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];

    $scope.data = [
      [65, 59, 90, 81, 56, 55, 40],
      [28, 48, 40, 19, 96, 27, 100]
    ];

    $scope.onClick = function (points, evt) {
      console.log(points, evt);
    };
  });

  app.controller('StackedBarCtrl', function ($scope) {
    $scope.labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    $scope.type = 'StackedBar';

    $scope.data = [
      [65, 59, 90, 81, 56, 55, 40],
      [28, 48, 40, 19, 96, 27, 100]
    ];
  });

  app.controller('DataTablesCtrl', function ($scope) {
    $scope.labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    $scope.data = [
      [65, 59, 80, 81, 56, 55, 40],
      [28, 48, 40, 19, 86, 27, 90]
    ];
    $scope.colours = [
      { // grey
        fillColor: 'rgba(148,159,177,0.2)',
        strokeColor: 'rgba(148,159,177,1)',
        pointColor: 'rgba(148,159,177,1)',
        pointStrokeColor: '#fff',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(148,159,177,0.8)'
      },
      { // dark grey
        fillColor: 'rgba(77,83,96,0.2)',
        strokeColor: 'rgba(77,83,96,1)',
        pointColor: 'rgba(77,83,96,1)',
        pointStrokeColor: '#fff',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(77,83,96,1)'
      }
    ];
    $scope.randomize = function () {
      $scope.data = $scope.data.map(function (data) {
        return data.map(function (y) {
          y = y + Math.random() * 10 - 5;
          return parseInt(y < 0 ? 0 : y > 100 ? 100 : y);
        });
      });
    };
  });

  app.controller('TicksCtrl', ['$scope', '$interval', function ($scope, $interval) {
    var maximum = document.getElementById('container').clientWidth / 2 || 300;
    $scope.data = [[]];
    $scope.labels = [];
    $scope.options = {
      animation: false,
      showScale: false,
      showTooltips: false,
      pointDot: false,
      datasetStrokeWidth: 0.5
    };

    // Update the dataset at 25FPS for a smoothly-animating chart
    $interval(function () {
      getLiveChartData();
    }, 40);

    function getLiveChartData () {
      if ($scope.data[0].length) {
        $scope.labels = $scope.labels.slice(1);
        $scope.data[0] = $scope.data[0].slice(1);
      }

      while ($scope.data[0].length < maximum) {
        $scope.labels.push('');
        $scope.data[0].push(getRandomValue($scope.data[0]));
      }
    }
  }]);

  function getRandomValue (data) {
    var l = data.length, previous = l ? data[l - 1] : 50;
    var y = previous + Math.random() * 10 - 5;
    return y < 0 ? 0 : y > 100 ? 100 : y;
  }