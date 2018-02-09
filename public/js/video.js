// play video when user enters room. Pause when leaving
const splash = document.querySelector('.splash');
//const video = document.getElementById('theaterVideo');
AFRAME.registerComponent('listener', {
    tick: function () {
        var userPosition = this.el.getAttribute('position')["z"];
        const xPosition = this.el.getAttribute('position')["x"];
        const yPosition = this.el.getAttribute('position')["y"];
        //  console.log();

        //console.log(userPosition);
        // console.log(yPosition);
        // console.log(xPosition);
        //first left room(left side ring)

        if(userPosition <= 11 && xPosition <= -10 && userPosition >=8.9)
        {
            //video.play();
            this.el.getAttribute('position')["z"] = 8;
            this.el.getAttribute('position')["x"] = -8;
            var url = "./country/italy/rome.html";
            window.open(url, '_blank');
        }

        //first left room(right side ring)

        if(userPosition <=6.0 && xPosition <= -2.0 && userPosition >= 5.0)
        {
            this.el.getAttribute('position')["z"] = 8;
            this.el.getAttribute('position')["x"] = -8;
            var url = "./country/italy/venice.html";
            window.open(url, '_blank');
        }
        //first right room(right side ring)

        if(userPosition <= 7 && xPosition >=5.5 && userPosition >=6)
        {
            //video.play();
            this.el.getAttribute('position')["z"] = 8;
            this.el.getAttribute('position')["x"] = 5;
            var url = "./country/Australia/melbourne.html";
            window.open(url, '_blank');

        }
//first right room(left side ring)

        if(userPosition <= 11 && xPosition >=6.8 && userPosition >=8.9)

        {
            //video.play();
            this.el.getAttribute('position')["z"] = 8;
            this.el.getAttribute('position')["x"] = 5;
            var url = "./country/Australia/sydney.html";
            window.open(url, '_blank');
        }

        // second right room(right side ring)

        if(userPosition <= 0.5 && xPosition >=2.0 && userPosition >=-3.0)
        {
            //video.play();
            this.el.getAttribute('position')["z"] = -4;
            this.el.getAttribute('position')["x"] = 1;
            var url = "./country/France/paris.html";
            window.open(url, '_blank');

        }
        // second right room(left side ring)
        if(userPosition <= -6.5 && xPosition >=1.3 && userPosition >=-7.0)
        {
            this.el.getAttribute('position')["z"] = -4;
            this.el.getAttribute('position')["x"] = 1;
            var url = "./country/France/lyon.html";
            window.open(url, '_blank');

        }


    }
});

// Workaround for mobile video
// uses the splash screen button to trigger video play/pause so that the
// video will auto play when the user enters the theater room
const enterButton = document.querySelector('.splash__button');
enterButton.addEventListener('click', function()  {
    splash.style.display = 'none';
});

