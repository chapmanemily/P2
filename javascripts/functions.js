
//P2-A
var isArmstrong = function(n) {
"use-strict";
	var sum = 0;
	var compare = parseFloat(n);
	n = String(n);
	if(n.length != null){
		if(n.length < 6){
			for (var i = 0; i < n.length ; ++i){
			sum = sum + Math.pow(n[i],n.length);
			
				if(sum == compare){
					return true;
				}
			}
		}
	}
return false;
	}
	
isArmstrong();



//P2-B
var allArmstrongs = function() {
 	"use-strict";
 	var isArmstrong = function(n) {
		var sum = 0;
		var compare = parseFloat(n);
		n = String(n);
		if(n.length != null){
			if(n.length < 6){
				for (var i = 0; i < n.length ; ++i){
				sum = sum + Math.pow(n[i],n.length);
			
				if(sum == compare){
					return true;
				}
			}
		}
	}
return false;
	}
 var result = "";
 for (var i = 1 ; i <= 99999 ; i++){
 	if(isArmstrong(i))
 		 result = result + String(i)+ ", ";
 }
 	return result;
 }
allArmstrongs();




//P2-C
var allSubstrings1 = function(s){
"use-strict";
s = String(s);
var str = '';
var sub = '';
var length = s.length;
for(c = 0 ; c < length ; c++){
	for(i=1; i <= length - c ; i++){
		sub = s.substring(c,(c+i));
		str += sub;
		str += ",";
		}
	}
return str;
}
allSubstrings1('');




//P2-D
var allSubstrings2 = function(s){
"use-strict";
s = String(s);
var str = '';
var sub = '';
var length = s.length;
var arr = new Array();
for(c = 0 ; c < length ; c++){
	for(i=c+1; i <= length ; i++){
		sub = s.substring(c,i);
		str += sub;
		str += ",";
		
		var strong = str.substring(0, str.length - 1);
		arr.push(strong.split(','));
	}
}

return arr.pop();
}
allSubstrings2('');
//get rid of last blank array element



//P2-E
var maxWords = function(s){
var result='';
var arr = s.split(" ");

for(var i = 0; i < arr.length; i++) {
    var check = arr[i];
    if(check.length>result.length) {
        result = check;
    }
}

return result; 
}
maxWords('');





