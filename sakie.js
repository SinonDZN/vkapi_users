function loadUser(){
	let id_user = $('#id_user').val()
	var request = $.ajax({
		url: "https://api.vk.com/method/users.get",
		method: "GET",
		data: { user_ids: id_user, fields: 'bdate, photo_max_orig', v: 5.131,
			access_token: '52b898c5d1894faae630601820b160dddaa064fcd2829ede1b3e46c7b09ff825255180550d533d0c2660e'
			},
		dataType: "jsonp"
	});
	
	request.done(function( msg ){
		showUser(msg['response'][0]);
	});
	
	request.fail(function( jqXHR, textStatus ){
		console.log("Request failed: "+ textStatus);
	});
}

function showUser(user){
	let info = $('#info')
	info.append('<h3>'+user.first_name+' '+user.last_name+'</h3>')
	info.append('<h3>Дата рождения: <br>'+user.bdate+'</h3>')
	info.append('<h3>Logo:<br><img src='+user.photo_max_orig+'></img></h3>')
}