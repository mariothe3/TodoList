//alert("connected"); //test js is working 

//check off speciffic todos by clicking 
// $("li").click(function(){
// 	$(this).toggleClass("completed");
// });
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//click on span to delete todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

//cration of new todos
$("input[type='text']").keypress(function(event){
	if(event.which===13){
		//grab new todo text from the input 
		var todoText = $(this).val();
		$(this).val("");
		//create new li and add to ul 
		$("ul").append("<li><span><i class='fas fa-eraser'></i></span> " + todoText + "</li>")
	}
});
 


	