# angular-carousel-directive

DEMO:
http://geekid.com.ua/carousel/

Usage:
In order to use this custom directive you need to copy carousel directory to your app folder,
and inject "carosuel" dependency in the main application module.
Then using npm or bower install angular and angular-touch and add it to your index.html file.
Type npm install (package.json already has needed dependencies)
Once it's done, you are ready to use the carousel. Almost...
Well, you need to have the model defined in your main application controller.
So, please simply define an array of images urls and here we go!


<carousel slides="/*img_array*/" delay="/*time delay in milliseconds*/"></carousel>

You can ignore delay attribute so then the carousel will not switch its slides by its own.

