module.exports.wordCount= function(string){
var items=[];
// var string = "This world need <a href='qwertythoughts.com'>more</a> empathy, <em>less</em> jealousy <img src='smiley.jpg' />. "

var re = /\<.*?\//ig
var match;
var s;
var arr=[];
while ((match = re.exec(string)) != null){
	var s="";
	for(var i=1;i<10;i++){
		if(match[0].charAt(i)==" " || match[0].charAt(i)==">"){break;}
		else s=s+match[0].charAt(i);

	}
	
	if(s=="img" || s=="br"){s="";}
	arr.push(match[0]+s+">");
  
}

var string2;
for(var i=0;i<arr.length;i++){
	
	string=string.replace(arr[i], " ");
	


}
var words = string.split(" ");
words=words.filter(word=>word!=" " && word!="" && word!=".");
// console.log(words);
// console.log(arr);
items.push(words);
items.push(arr);
console.log(items);
return items;

}

