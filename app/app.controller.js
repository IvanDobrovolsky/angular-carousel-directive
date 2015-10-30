(function () {
    "use strict";

    angular.module('carouselApp')
        .controller("AppController", [AppController]);

    function AppController(){
        var vm = this;

        vm.slides1 = [
            "assets/images/1.jpg",
            "assets/images/2.jpg",
            "assets/images/3.jpg",
            "assets/images/4.jpg",
            "assets/images/5.jpg",
            "assets/images/6.jpg"
        ];

        vm.slides2 = [
            "assets/images/5.jpg",
            "assets/images/6.jpg",
            "assets/images/1.jpg",
            "assets/images/2.jpg",
            "assets/images/3.jpg",
            "assets/images/4.jpg"
        ];

    }

}());