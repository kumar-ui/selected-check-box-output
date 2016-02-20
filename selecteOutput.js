

   
 $(".p").click(function(){
 	
	var span = $(this).children('span');

	if($(this).hasClass( "p" )){
		$(span).css('background-image', 'url("m.png")');
		$(this).removeClass('p');
    	$(this).addClass('m');
	}else{
		$(span).css('background-image', 'url("p.png")');
		$(this).removeClass('m');
    	$(this).addClass('p');
	}

  });



$('#submit').click(function(){
	console.log('hi');

	var selected = [];
	$('#os input:checked').each(function() {
	    selected.push($(this).attr('name'));
	});

	var selected1 = [];
	$('#pro input:checked').each(function() {
	    selected1.push($(this).attr('name'));
	});

	var selected2 = [];
	$('#hd input:checked').each(function() {
	    selected2.push($(this).attr('name'));
	});

	var selected3 = [];
	$('#ram input:checked').each(function() {
	    selected3.push($(this).attr('name'));
	});

	console.log(selected);

	$(".modal-content").html( 

		'<p> Your selected filter options </p>' + '<span> Operation System : </span>' + selected + '<br>'

		+ '<span> Processor : </span>' + selected1 + '<br>'

		+ '<span> Hard Disk : </span>' + selected2 + '<br>'

		+ '<span> RAM : </span>' + selected3

		);

});