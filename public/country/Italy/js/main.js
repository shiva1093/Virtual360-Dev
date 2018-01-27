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
              //  console.log(x.query.pages[25458].extract);
                $('.letters').text(x.query.pages[25458].extract);
                var inst = $('[data-remodal-id=modal]').remodal();
                inst.open();
            }
        });


});