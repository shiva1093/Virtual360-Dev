// play video when user enters room. Pause when leaving
const splash = document.querySelector('.splash');
const video = document.getElementById('theaterVideo');
if(localStorage.getItem("rome") == "rome")
{
    localStorage.removeItem("rome");
    splash.style.display = 'none';
    video.pause();
}

video.play();
AFRAME.registerComponent('listener', {
    tick: function () {
        var userPosition = this.el.getAttribute('position')["z"];
        const xPosition = this.el.getAttribute('position')["x"];
        const yPosition = this.el.getAttribute('position')["y"];
        //  console.log();

        //console.log(userPosition);
        // console.log(yPosition);
        // console.log(xPosition);


        if (userPosition <= -17) {

            // console.log(userPosition);
            video.play();
        }else if (userPosition <= 7.3 && (xPosition <= -6.6 && xPosition >= -8.5)) {

            video.play();

            //video.pause();
        }else if (userPosition == 22.5 && (localStorage.getItem("rome") != "rome")){
            video.play();
        }else{
            video.pause();
        }

        if(userPosition <= 7.4 && xPosition <= -10.5 && userPosition >=6.9)
        {
            //video.play();
            this.el.getAttribute('position')["z"] = 8;
            this.el.getAttribute('position')["x"] = -8;
            var url = "/country/";
            window.open(url, '_blank');

        }
    }
});

// Workaround for mobile video
// uses the splash screen button to trigger video play/pause so that the
// video will auto play when the user enters the theater room
const enterButton = document.querySelector('.splash__button')


enterButton.addEventListener('click', function()  {
    //alert('three');
    //video.play();
    video.pause();
    splash.style.display = 'none';
});

