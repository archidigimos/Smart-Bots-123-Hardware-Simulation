/// <reference path="angular.min.js" />

var myApp = angular.module("myModule",[]);

myApp.controller("headerController",function($scope){
	$scope.header_title = "Shri Dayanand College of Engineering";
	$scope.header_details = "Established 1974, Privately Owned";
	$scope.header_address = "BANGALORE, KARNATAKA";
	$scope.header_website = "www.shridce.com";
});

myApp.controller("basicInfoController",function($scope){
	$scope.foundations = 12;
	$scope.affiliations = "08";
	$scope.affiliatedColleges = 24;
	$scope.university = "Visvesvaraya University\n(No. of colleges)";
});

myApp.controller("areaController",function($scope){
	$scope.totalArea = "73 ha";
	$scope.constructed = "25 ha";
	$scope.locality = "Urban";
	$scope.airports = "02";
	$scope.railway = "04";
	$scope.banks = "04";
	$scope.postOffice = "YES";
});

myApp.controller("infraController",function($scope){
	$scope.learningSpaces = [
	{
		name : "LAB",
		no : "02"
	},
	{
		name : "AUDITORIUM",
		no : "03"
	},
	{
		name : "LABS",
		no : "04"
	},
	{
		name : "COMPUTER LAB",
		no : "01"
	},
	{
		name : "CONFERENCE",
		no : "02"
	},
	{
		name : "LIBRARY",
		no : "01"
	}
	];

	$scope.recreations = [
	{
		name : "THEATRE",
		no : "02"
	},
	{
		name : "INDOOR STADIUM",
		no : "03"
	},
	{
		name : "PLAYGROUND",
		no : "04"
	},
	{
		name : "GYMNASIUM",
		no : "01"
	},
	{
		name : "GIRL'S ROOM",
		no : "02"
	}
	];

	$scope.utility = [
	{
		name : "COMMON ROOM",
		no : "02"
	},
	{
		name : "CAFETERIA",
		no : "03"
	},
	{
		name : "GUEST HOUSE",
		no : "04"
	},
	{
		name : "HEALTH CENTER",
		no : "01"
	},
	{
		name : "CONNECTIVITY",
		no : "02"
	},
	{
		name : "SOLAR POWER",
		no : "NA"
	}
	];
});

myApp.controller("admissionController",function($scope){ 
	$scope.application_ends = '9th \nDEC 2016';
	$scope.test_dates = '16th - 27th \nDEC 2016';
	$scope.results = '6th \nJAN 2017';
	$scope.selection_briefings = '20th - 30th \nJAN 2017';
	
	$scope.courses = [
	{
		name : "Aerospace Engineering",	
		seat : "45",
		duration : "5 yrs",
		category :	"general",
		color : "#e1e0e0"
	},
	{
		name : "Aerospace Engineering",	
		seat : "45",
		duration : "5 yrs",
		category :	"general",
		color : "white"
	},
	{
		name : "Aerospace Engineering",	
		seat : "45",
		duration : "5 yrs",
		category :	"general",
		color : "#e1e0e0"
	},
	{
		name : "Aerospace Engineering",	
		seat : "45",
		duration : "5 yrs",
		category :	"general",
		color : "white"
	},
	{
		name : "Aerospace Engineering",	
		seat : "45",
		duration : "5 yrs",
		category :	"general",
		color : "#e1e0e0"
	},
	{
		name : "Aerospace Engineering",	
		seat : "45",
		duration : "5 yrs",
		category :	"general",
		color : "white"
	},
	{
		name : "Aerospace Engineering",	
		seat : "45",
		duration : "5 yrs",
		category :	"general",
		color : "#e1e0e0"
	}
	];

	$scope.cutoffs = [
	{
	name : "Chemical Engineering",
	opening : "1906",
	closing : "3000	",
	category : "General",
	color : "#e1e0e0"
	},
	{
	name : "Chemical Engineering",
	opening : "1906",
	closing : "3000	",
	category : "General",
	color : "#FFFFFF"
	},
	{
	name : "Chemical Engineering",
	opening : "1906",
	closing : "3000	",
	category : "General",
	color : "#e1e0e0"
	},
	{
	name : "Chemical Engineering",
	opening : "1906",
	closing : "3000	",
	category : "General",
	color : "#FFFFFF"
	},
	{
	name : "Chemical Engineering",
	opening : "1906",
	closing : "3000	",
	category : "General",
	color : "#e1e0e0"
	},
	{
	name : "Chemical Engineering",
	opening : "1906",
	closing : "3000	",
	category : "General",
	color : "#FFFFFF"
	},
	{
	name : "Chemical Engineering",
	opening : "1906",
	closing : "3000	",
	category : "General",
	color : "#e1e0e0"
	}
	];
});

myApp.controller("feeController",function($scope){
	$scope.totalCost = "Rs 3.2 LPA";
	$scope.scholarship = "YES";
});

myApp.controller("rankingController",function($scope){
	$scope.award = "312";
	$scope.rating = "3";

	$scope.affiliations = [
		{
			name : "In QS World University Rankings of 201",
			rank : 321,
			color : "#e1e0e0"
		},
		{
			name : "In QS World University Rankings of 201",
			rank : 321,
			color : "#FFFFFF"
		},
		{
			name : "In QS World University Rankings of 201",
			rank : 321,
			color : "#e1e0e0"
		},
		{
			name : "In QS World University Rankings of 201",
			rank : 321,
			color : "#FFFFFF"
		}
	];
});

myApp.controller("facultyController",function($scope){
	$scope.no = 512;
	$scope.ratio = "1 : 15";
	$scope.sexRatio = "3:1";
	$scope.quaters = 54;
});

myApp.controller("diversityController",function($scope){
	$scope.reservation = "30%";
	$scope.discipline = "UG & PG";
	$scope.sexRatio = "3:2";
	$scope.age = 20;
	$scope.foreignNationals = "YES"
});

myApp.controller("placementController",function($scope){
	$scope.highest = "Rs 24 LPA";
	$scope.lowest = "Rs 4 LPA";
	$scope.no = "15000";
});

myApp.controller("recruitersController",function($scope){
	$scope.recruiters = [
	{
		path : 'image/nike_logo.png',
	},
	{
		path : 'image/nike_logo.png',
	},
	{
		path : 'image/nike_logo.png',
	},
	{
		path : 'image/nike_logo.png',
	},
	{
		path : 'image/nike_logo.png',
	},
	{
		path : 'image/nike_logo.png',
	}
	];
});

myApp.controller("alumniController",function($scope){
	$scope.alumni = [
	{
		name: "ABCDEF",
		description: "Lorem ipsum dolor sitamet,vitae faucibusurna. Donecpellentesque molestietortor, ac auctor exinterdum et.",
		imagePath: 'image/albert.jpg'
	},
	{
		name: "ABCDEF",
		description: "Lorem ipsum dolor sitamet, consecteturadipiscing elit. Namposuere mollis maurisfringilla dignissim.Integer vitae faucibusurna. Donecpellentesque molestietortor, ac auctor exinterdum et.",
		imagePath: 'image/albert.jpg'
	},
	{
		name: "ABCDEF",
		description: "Lorem ipsum dolor sitamet, consecteturadipiscing elit. Namposuere mollis maurisfringilla dignissim.Integer molestietortor, ac auctor exinterdum et.",
		imagePath: 'image/albert.jpg'
	},
	{
		name: "ABCDEF",
		description: " Namposuere mollis maurisfringilla dignissim.Integer vitae faucibusurna. Donecpellentesque molestietortor, ac auctor exinterdum et.",
		imagePath: 'image/albert.jpg'
	}
	];	
});
