// play video when user enters room. Pause when leaving
//$('.ml11').hide();
const rvideo = document.getElementById('video');
rvideo.pause();
var fuse = document.querySelector('#fuse-cursor');
var fuseProgress = document.querySelector('#fuse-progress');
var scene = document.querySelector('a-scene');
var entity = scene.querySelector('a-sphere');
// Check browser support
if (typeof(Storage) !== "undefined") {

    // Store
    localStorage.setItem("rome", "rome");
    // Retrieve
}
scene.addEventListener('loaded', function (e) {
    splash.style.display = 'none';
});

fuse.addEventListener('fusing', function (e) {
    fuseProgress.emit('fusing');
});

/*document.querySelector('#green').addEventListener('click', function (e) {
    //rvideo.play();
   //alert( entity.getAttribute('color'));
    if(entity.getAttribute('color') == '#6fd2f5'){
        rvideo.play();
        entity.setAttribute('color','#f3f7fa');
    }else{
        rvideo.pause();
        entity.setAttribute('color','#6fd2f5');
    }
});*/
$(document).ready(function(){
        $.ajax({
            url: 'https://en.wikipedia.org/w/api.php',
            data: { action: 'query', prop: 'extracts', exintro:'', explaintext:'',titles:'Rome', format: 'json' },
            dataType: 'jsonp',
            success: function (x) {
                $('.letters').text(x.query.pages[25458].extract);
                var inst = $('[data-remodal-id=modal]').remodal();
                inst.open();
                weatherData();
            }
        });


});

function  weatherData() {
    var city = 'rome';
    var appId = ''; // Replace with your APPID
    var weatherLink = "https://api.openweathermap.org/data/2.5/weather?q="+city + "&appid=" + appId+"&units=metric";
    $.ajax({
        url: weatherLink,
        dataType: 'jsonp',
        success: function (data) {
            console.log(data);
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