var IMG_FORMAT = 'png';
var IMG_MIMETYPE = 'image/' + IMG_FORMAT;
var IMG_QUALITY = 100;

$(document).ready(function(){
  $("#screenshot").bind("click", function(){
    captureAndSendTab();
  });
});

function captureAndSendTab() {
  var opts = {
    format: IMG_FORMAT,
    quality: IMG_QUALITY
  };

  chrome.tabs.captureVisibleTab(null, opts, function(dataUrl) {
    MySend(dataUrl);
  });
}

function MySend(dataUrl){
  $.ajax({
    url : "http://localhost/lichen/Project/state/index.php",
    type : "POST",
    data : {
      screenshot : dataUrl
    },
    dataType : "json",
    error : function(xhr, status, errorThrown) {
      console.log(status);
    },
    success : function(data) {
      console.log(data);
    }
  });
}