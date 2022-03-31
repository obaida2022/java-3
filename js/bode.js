var x = document.getElementById("img1")
var myimges = ["img/img1.jpg", "img/img2.jpg", "img/img3.jpg"]
var i = 0;
function shams() {
    x.setAttribute("src", myimges[i]);
    if( i < myimges.length -1){
       i++;
    }
    else{
        i = 0
    }
    setTimeout("shams()" , 2000)
}
shams()