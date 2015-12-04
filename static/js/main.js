var x = document.createElement("AUDIO");
x.setAttribute("src", "/static/horse.ogg");

function ff(){
	$("#player").removeClass("audio-pas").addClass("audio-ply")
}
x.onended = ff;

$(document).ready(function(){
	// set_progress();	
});

var t
var i = 0;
var len = $(".progressbar").width()

function set_progress(){

}

function show_articles(){
	if ("block" == $("#ar").css("display")){
		$("#ar").css("display","none");
	}else{
		$("#ar").css("display","block");
	}
	$("#rd").css("display","none");
}

function show_redios(){
	$("#ar").css("display","none");
	$("#rd").css("display","block");
}

function music_play(){
	if ($("#player").hasClass("audio-pas")){
		$("#player").removeClass("audio-pas").addClass("audio-ply")
		x.pause();
		// console.log(x.duration,x.currentTime);
	}else{
		$("#player").removeClass("audio-ply").addClass("audio-pas")
		x.play();
	}
}

function click_bar(e){
	x=event.clientX
	y=event.clientY
	offset = $(".bar").offset().left
	console.log("X 坐标: " + x + ", Y 坐标: " + y+"offset:"+offset)
	$(".bar").width(x-offset);
}

function Play_Video(){
	$("#movie")[0].play();
}