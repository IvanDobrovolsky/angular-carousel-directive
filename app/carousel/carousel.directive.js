(function () {
    "use strict";

    angular.module("carousel")
        .directive('carousel', function () {
            return {
                restrict: 'EA',
                templateUrl: 'app/carousel/carousel.template.html',
                controller: 'CarouselController as vm',
                scope: {
                    slides: '=',
                    delay: '@'
                },
                bindToController: true
            };
        })
}());