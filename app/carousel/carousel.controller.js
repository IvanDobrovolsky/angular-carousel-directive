(function () {
    "use strict";

    //Registering CarouselController with carousel module
    angular.module('carousel').controller('CarouselController', ['$element', '$interval',   CarouselController]);

    function CarouselController($element, $interval) {

        var vm = this;

        var elementNode = $element[0];

        //Implementing the delay feature
        if(vm.delay){
            $interval(function () {
                switchSlide('right');
            }, vm.delay);
        }

        vm.switchSlide = switchSlide;

        //Function which takes a node and a node lists and returns a next element which goes after the node of the node list
        function getNext(slide, slides){
            var nextSlide, n = slides.length;

            for(var i = 0; i < n; i++){
                if(slides[i] == slide){
                    if(i == n-1){
                        nextSlide = slides[0];
                    }else{
                        nextSlide = slides[i+1];
                    }
                }
            }
            return nextSlide;
        }

        //Function which takes a node and a node lists and returns a previous element which goes before the node of the node list
        function getPrevious(slide, slides){
            var previousSlide, n = slides.length;

            for(var i = 0; i < n; i++){
                if(slides[i] == slide){
                    if(i == 0){
                        previousSlide = slides[n-1];
                    }else{
                        previousSlide = slides[i-1];
                    }
                }
            }
            return previousSlide;
        }

        //Animating function
        function animate(carousel){
            carousel.classList.remove('transitioned');
            setTimeout(function () {
                carousel.classList.add('transitioned');
            }, 50);
        }

        //Reordering function
        function reorder(slides, newSlide){
            newSlide.classList.add('marker');
            newSlide.style.order = 1;

            for(var i = 1; i < slides.length; i++){
                newSlide = getNext(newSlide, slides);
                newSlide.style.order = i + 1;
            }
        }

        //Function which switches slides in either right or left directions
        function switchSlide(direction){

            var slides = Array.prototype.slice.call(elementNode.getElementsByClassName('slide')),
                slidesContainer = elementNode.querySelector('.slides'),
                currentReference = elementNode.querySelector('.marker'),
                newSlide;


            currentReference.classList.remove('marker');

            if(direction === 'right'){
                newSlide = getNext(currentReference, slides);
                slidesContainer.classList.remove('reversed');
            }else if (direction === 'left'){
                newSlide = getPrevious(currentReference, slides);
                slidesContainer.classList.add('reversed');
            }
            reorder(slides, newSlide);
            animate(slidesContainer);
        }
    }

}());