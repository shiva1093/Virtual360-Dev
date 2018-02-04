// play video when user enters room. Pause when leaving
//$('.ml11').hide();

const rvideo = document.getElementById('video');
rvideo.pause();
var fuse = document.querySelector('#fuse-cursor');
var fuseProgress = document.querySelector('#fuse-progress');
var scene = document.querySelector('a-scene');
scene.addEventListener('loaded', function (e) {
    splash.style.display = 'none';
});

fuse.addEventListener('fusing', function (e) {
    fuseProgress.emit('fusing');
});


AFRAME.registerComponent('poi', {
    init: function () {
        var el = this.el;
        //console.log(el);
        el.addEventListener("click", function(evt) {
           // console.log(el);
           console.log(el.getAttribute('data-poi-type'));
           if(el.getAttribute('data-poi-type') == '360'){
                console.log('Play video');
           }
            placeDetails(el.getAttribute('data-poi-type'));

        })
    }
});

$(document).ready(function(){
                pointOfInterest();
                weatherData();
});

function  weatherData() {
    var city = 'rome';
    var appId = ''; // Replace with your APPID
    var weatherLink = "https://api.openweathermap.org/data/2.5/weather?q="+city + "&appid=" + appId+"&units=metric";
    $.ajax({
        url: weatherLink,
        dataType: 'jsonp',
        success: function (data) {
           // console.log(data);
            var desc = data.weather[0].description;
            var icon = data.weather[0].icon;
            var city = data.name;
            var country = data.sys.country;
            var icon_link = "http://openweathermap.org/img/w/" + icon + ".png";
            var temp_c = data.main.temp.toPrecision();
            $.getJSON('http://api.geonames.org/timezoneJSON?lat=' + data.coord.lat + '&lng=' + data.coord.lon + '&username=ayoisaiah', function(timezone) {
                var rawTimeZone = JSON.stringify(timezone);
                var parsedTimeZone = JSON.parse(rawTimeZone);
                var dateTime = parsedTimeZone.time;
                timeFull = dateTime.substr(11);
                $(".rtime").text(timeFull); //Update local time
            });
            $('.city').text(city);
            $('.country').text(country);
            $('.deg').text(temp_c);
            $('.sky').text(desc);
            $(".ico").attr("src", icon_link);

        }
    });

}

function  pointOfInterest() {
    var city = 'city:20';
    $.ajax({
        url: '../php/TravelAPI.php',
        type: "POST",
        data: {
            city: city,
        },
        dataType: 'json',
        success: function (data) {
            //console.log(data.data);
            $(".Colosseum").attr("data-poi-type", data.data.places[0].id);
            $(".Trevi").attr("data-poi-type", data.data.places[1].id);
            $(".Pantheon").attr("data-poi-type", data.data.places[2].id);
            $("#Colosseum").attr("src", data.data.places[0].thumbnail_url);
            $("#Trevi").attr("src", data.data.places[1].thumbnail_url);
            $("#Pantheon").attr("src", data.data.places[2].thumbnail_url);

        }
    });

}

function  placeDetails(placeID) {
    var inst = $('[data-remodal-id=modal]').remodal();
    $.ajax({
        url: '../php/TravelPlaceDetailsAPI.php',
        type: "POST",
        data: {
            placeID: placeID,
        },
        dataType: 'json',
        success: function (data) {
            //console.log(data.data);
            //console.log(data.data.place.name);
            $(".rtitle").text(data.data.place.name);
           // console.log(data.data.place.perex);
            $("#tagline").text(data.data.place.perex);
           // console.log(data.data.place.admission);
            $("#admission").text(data.data.place.admission);
           // console.log(data.data.place.address);
            $("#address").text(data.data.place.address);
           // console.log(data.data.place.opening_hours);
            $("#openinghrs").text(data.data.place.opening_hours);
           // console.log(data.data.place.phone);
            $("#pnum").text(data.data.place.phone);
           // console.log(data.data.place.description.text);
            $("#description").text(data.data.place.description.text);
            inst.open();

        }
    });

}