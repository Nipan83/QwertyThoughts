

module.exports.wordCount= function(body){

var items=[];

var arr,numberOfChar,numberOfSpaces,numberOfWords,avChar,avWords,avSyllables,numberOfSentences;

arr = body.split("");
arr=arr.filter(word => word!=" " && word!="");
numberOfChar = arr.length;
console.log(numberOfChar);
items.push({"numberOfChar":numberOfChar,
			"charList":arr});


var numberOfSpaces = (body.split(" ").length - 1);
items.push({"numberOfSpaces":numberOfSpaces});

arr = body.split(" ");
numberOfWords=arr.length;
items.push({"numberOfWords":numberOfWords,
			"wordList":arr					
			});

avChar = Math.floor(numberOfChar/numberOfWords);
items.push({"avChar":avChar});

arr=body.split(".");
arr = arr.filter(word=> word!="");
var numberOfSentences;
numberOfSentences=arr.length;
items.push({"numberOfSentences":numberOfSentences,
			"sentenceList":arr
			});

avWords = Math.floor(numberOfWords/arr.length);
items.push({"avWords":avWords});

arr = body.split("");
arr=arr.filter(word => word!=" " && word!="." && word!="");
arr = arr.filter(word=> word=='a' || word=='e' || word=='i' || word=='o' || word=='u' || word=='A' || word=='E' || word=='I' || word=='O' || word=='U');
avSyllables = Math.floor(arr.length/numberOfWords);
items.push({"avSyllables":avSyllables,
			"syllableList":arr
			});
return items;

}