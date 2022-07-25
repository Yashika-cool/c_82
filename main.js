var mouseEvent = "empty";

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color ="blue";
width_of_line = 1;

var last_position_x, last_position_y;

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
    mouseEvent = "mouseDown";
}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e) {
    mouseEvent = "mouseleave";
}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e) {
    mouseEvent = "mouseUP";
}
canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e) {
    //get the x and y coordinate of your mouse
    current_mousex = e.clientX - canvas.offsetLeft;
    current_mousey = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.arc(current_mousex,current_mousey,20,0,2*Math.PI);
        ctx.stroke();
    }
    last_position_x=current_mousex;
    last_position_y=current_mousey;

}
