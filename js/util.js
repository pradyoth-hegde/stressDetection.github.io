


function addCurrentTime(x){
  var TimeBox = document.getElementById(x);
  var now = new Date();
  var dateString = now.getHours() + ":" + now.getMinutes();
  TimeBox.value = dateString;
}



window.setTimeout(function() {
    $(".alert").fadeTo(500, 0).slideUp(500, function(){
        $(this).remove(); 
    });
}, 4000);