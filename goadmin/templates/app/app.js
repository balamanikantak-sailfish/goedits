/**
 * Created by Dell on 02/17/2017.
 */
var app = angular.module('goApp', [ 'ui.router']);
app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider.otherwise('/home');
    $locationProvider.html5Mode(!0);
    $locationProvider.hashPrefix('!');
    $stateProvider.state('home', {
        url: '/home',
        views: {
            'header': {
                templateUrl: 'templates/layout/header.html'
            },
            'content': {
                templateUrl: 'templates/content/home.html'
            },
            'footer': {
                templateUrl: 'templates/layout/footer.html'
            }
        }
    })
        .state('compare', {
            url: '/compare',
            views: {
                'header': {
                    templateUrl: 'templates/layout/header.html'
                },
                'content': {
                    templateUrl: 'templates/content/compare.html'
                },
                'footer': {
                    templateUrl: 'templates/layout/footer.html'
                }
            }
        })
        .state('service', {
            url: '/service',
            views: {
                'header': {
                    templateUrl: 'templates/layout/header.html'
                },
                'content': {
                    templateUrl: 'templates/content/service.html'
                },
                'footer': {
                    templateUrl: 'templates/layout/footer.html'
                }
            }
        })
		 .state('pricing', {
            url: '/pricing',
            views: {
                'header': {
                    templateUrl: 'templates/layout/header.html'
                },
                'content': {
                    templateUrl: 'templates/content/pricing.html'
                },
                'footer': {
                    templateUrl: 'templates/layout/footer.html'
                }
            }
        })
		.state('contact', {
            url: '/contact',
            views: {
                'header': {
                    templateUrl: 'templates/layout/header.html'
                },
                'content': {
                    templateUrl: 'templates/content/contact.html'
                },
                'footer': {
                    templateUrl: 'templates/layout/footer.html'
                }
            }
        })
		
		.state('faq', {
            url: '/faq',
            views: {
                'header': {
                    templateUrl: 'templates/layout/header.html'
                },
                'content': {
                    templateUrl: 'templates/content/faq.html'
                },
                'footer': {
                    templateUrl: 'templates/layout/footer.html'
                }
            }
        })

}]);