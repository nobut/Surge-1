function replaceAll(str, find, replace){
	return str.replace(new RegExp(find, 'g'), replace);
}

var keywords = ['"0"','"1"'];

var result = body;

keywords.forEach(function(k) {
	result = replaceAll(result, k, '"1738717749000"');
});

result;