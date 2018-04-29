function ajaxGallery() {
    var mp3sJSON = "mp3.json";
    $.getJSON(mp3sJSON, function (result) {

        for (var i = 0; i < result.children[0].children.length; i++) {
         //   var $title = '<h2 class="page-title">'+result.children[0].name+'</h2>'
            var $download = '<a href=\"' + result.children[0].children[i].path + '\" target="_blank" class="button small primary">Download<a/>';
            var $playaudio = '<audio controls preload="none"><source src=\"'+result.children[0].children[i].path +'\" type="audio/mpeg"></audio>';
           // var $maindiv = '<div class="col-md-5">'+$title+'</div>';
            var $title = '<h3 class="item-title">'+ result.children[0].children[i].name +'</h3>'
            var $divs = '<div class="item hidden">'+$title+$download+$playaudio+'</div>';
            $('div#center').append($divs);
        }
          for (var i = 0; i < result.children[3].children.length; i++) {
         //   var $title = '<h2 class="page-title">'+result.children[0].name+'</h2>'
            var $download = '<a href=\"' + result.children[3].children[i].path + '\" target="_blank" class="button small primary">Download<a/>';
            var $playaudio = '<audio controls preload="none"><source src=\"'+result.children[3].children[i].path +'\" type="audio/mpeg"></audio>';
           // var $maindiv = '<div class="col-md-5">'+$title+'</div>';
            var $title = '<h3 class="item-title">'+ result.children[3].children[i].name +'</h3>'
            var $divs = '<div class="item hidden">'+$title+$download+$playaudio+'</div>';
            $('div#sketch').append($divs);
        }
              for (var i = 0; i < result.children[1].children.length; i++) {
         //   var $title = '<h2 class="page-title">'+result.children[0].name+'</h2>'
            var $download = '<a href=\"' + result.children[1].children[i].path + '\" target="_blank" class="button small primary">Download<a/>';
            var $playaudio = '<audio controls  preload="none"><source src=\"'+result.children[1].children[i].path +'\" type="audio/mpeg"></audio>';
           // var $maindiv = '<div class="col-md-5">'+$title+'</div>';
            var $title = '<h3 class="item-title">'+ result.children[1].children[i].name +'</h3>'
            var $divs = '<div class="item hidden">'+$title+$download+$playaudio+'</div>';
            $('div#ntres').append($divs);
        }
                  for (var i = 0; i < result.children[2].children.length; i++) {
         //   var $title = '<h2 class="page-title">'+result.children[0].name+'</h2>'
            var $download = '<a href=\"' + result.children[2].children[i].path + '\" target="_blank" class="button small primary">Download<a/>';
            var $playaudio = '<audio controls preload="none"><source src=\"'+result.children[1].children[i].path +'\" type="audio/mpeg"></audio>';
           // var $maindiv = '<div class="col-md-5">'+$title+'</div>';
            var $title = '<h3 class="item-title">'+ result.children[2].children[i].name +'</h3>'
            var $divs = '<div class="item hidden">'+$title+$download+$playaudio+'</div>';
            $('div#nuevos').append($divs);
        }
    });

}
var hideitems = function(id){
 $('#'+id+' div').toggleClass('hidden');
}
$(document).ready(function(){
    ajaxGallery();

});