macro seaf {
	case  $body => {
		(function()
			$body
		)();
	}
}

var foo = 'go';

seaf{
 	var bar ='bob';
 	console.log("In seaf");
}

console.log(foo);
console.log(bar);