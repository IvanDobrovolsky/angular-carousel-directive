(function () {
    "use strict";

    //Creating the angular carousel directive
    angular.module("carousel")
        .directive('carousel', function () {
            return {
                restrict: 'E',                                      //the directive has to be define as a HTML tag <carousel></carousel>
                templateUrl: 'app/carousel/carousel.template.html', //carousel template url
                controller: 'CarouselController as vm',
                scope: {                                            //carousel attributes
                    slides: '=',                                    //slides - set of image urls defined in AppController
                    delay: '@'                                      //delay - auto-play time delay
                },
                bindToController: true                               //Binding to each directive to isolate controller
            };
        })
}());