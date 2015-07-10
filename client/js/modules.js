var app = angular.module('app', ['ngRoute', 'ngResource', 'chart.js']);

app.config(function (ChartJsProvider) {
	// Configure all charts
	ChartJsProvider.setOptions({
	  colours: ['#97BBCD', '#DCDCDC', '#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'],
	  responsive: true
	});
	// Configure all doughnut charts
	ChartJsProvider.setOptions('Doughnut', {
	  animateScale: true
	});
});