# Virtual360-Tour Guide
The 360 Degree Virtual Tour Guide is compatible with PC, VR, and SmartPhones). 
This web application project consists of three rooms in which, each room is allocated for one country (Italy, Australia, and France). Each room has two
different cities with two different circles notifiers, where the user can opt one of the city by moving into a particular circle
pointer which directed to a new page that has a different types of interactions( Boxes, clicking, mouse pointer) also,
displays current time and temperature of that particular city. On clicking box interactions the user can get the information
about a particular place and also, redirects to a 360-degree video of that city to get an immersive experience.
We have also used voice recognition (Annanyang Framework) to integrate voice into our project.By simply saying
START/STOP user can play the 360 degree video which is the background of the each city page.
# Technology Used

You can access the application by this URL: https://360-tourguide.herokuapp.com

You can watch the video of how the application works by using this link: https://www.youtube.com/watch?v=QVfPqELR_O8&feature=youtu.be

NOTE: Since we use NodeJS server in heroku, the PHP code doesn't work since you need a apache server to run the PHP code.

But when you deploy the code with the necessary setting(your API Key) the application will work as I mentioned.

FrontEnd: HTML,CSS,JavaScript(A-Frame),AJAX

Backend: PHP

Code optimization: SONARLINT

Here we use a TRAVEL API from SYGIC to get the access for POI https://github.com/sygic-travel/js-sdk It gives some 10000 calls per month which you would more enough. Just sign in and get your API Key. replace it in th PHP file with your API key.

To get the weather data, I have used this API http://openweathermap.org/current. Here you can register for free and get an API key.

You can replace the API key in public/county/js/main.js file.

We have used Annanyang JS for the Voice recognization.

# Deployment
The Source code can found under the public directory which is needed for our project. you can just replace the API key from the js and php codes and it should work in your local system.
It is very easier to configure. Since I have directly linked my githib to my heroku account. so, I used node_modules. but we are not using NodeJs anywhere inside the project.

# Referance
https://github.com/aframevr-userland/aframe-cli/tree/master/templates/aframe-360-tour-template
https://github.com/lmalave/aframe-speech-command-component
https://ottifox.com/examples/city-views/index.html

