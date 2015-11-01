(function () {
    "use strict";

    //Registering AppController with carouselApp module
    angular.module('carouselApp')
        .controller("AppController", [AppController]);

    function AppController(){
        var vm = this;

        //Custom set of images 1
        vm.slides1 = [
            "assets/images/1.jpg",
            "assets/images/2.jpg",
            "assets/images/3.jpg",
            "assets/images/4.jpg",
            "assets/images/5.jpg",
            "assets/images/6.jpg"
        ];


        //Custom set of images 2
        vm.slides2 = [
            "http://www.visitsydneyaustralia.com.au/images/Night-Kings-Wharf.jpg",
            "http://www.edmnightlife.com/wp-content/uploads/2014/03/imf_fest.jpg",
            "http://santiago365.com/wp-content/uploads/2014/12/POST-NIGHTLIFE.jpg",
            "http://nirvanadmc.com/wp-content/uploads/2014/06/nightlife-cairo.jpg",
            "https://cn-production.s3.amazonaws.com/blog-image/lanternheader.jpg"
        ];

    }

}());