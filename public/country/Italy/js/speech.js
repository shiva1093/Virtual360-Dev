



AFRAME.registerSystem('teleporter', {
    init: function () {
        console.log("in teleporter system init");
    },
    onSceneLoaded: function(evt) {
        console.log("in voice-command system onSceneLoaded listener");
    },
});
AFRAME.registerComponent('teleporter', {
    schema: {
        character: { type: 'selector' },
        marker: { type: 'selector' }
    },
    init: function () {
        console.log("in teleporter component init");

    },
    start: function() {
        //console.log("in showRaycaster");
        rvideo.play();
    },
    stop: function() {
       // console.log("Voice recognition");
        rvideo.pause();
    },
    home: function() {
        window.location.href = "/marketing-vr/index.html";

    }
});