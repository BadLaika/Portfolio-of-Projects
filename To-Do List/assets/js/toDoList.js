//check off specific todo by clicking

$("ul").on("click","li",(function(){
	$(this).toggleClass("completed");
}));

//delete todo
$("ul").on("click", "span",(function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
});

	event.stopPropagation();

}));


$("input[type='text']").keypress(function(event){
	if(event.which === 13){

		//grabs new todo text form input
		var toDoText = $(this).val();
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + toDoText + "</li>");
	}
});



$("#toggle").click(function(){
	$("input[type='text']").fadeToggle();
});