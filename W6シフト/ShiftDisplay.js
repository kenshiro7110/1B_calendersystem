var target = "";
function MethodLink(){
	var url = document.method.select.options[document.method.select.selectedIndex].value;
	if(url != "" ){
		if(target == 'top'){
			top.location.href = url;
		}
		else if(target == 'blank'){
			window.open(url);
		}
		else if(target != ""){
			eval('parent.' + target + '.location.href = url');
		}
		else{
			location.href = url;
		}

	}

}