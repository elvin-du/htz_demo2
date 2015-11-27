$(document).ready(function(){
	// alert("all");
});

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