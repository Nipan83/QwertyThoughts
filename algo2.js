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

function new_count(word) {
  word = word.toLowerCase();                                     
  if(word.length <= 3) { return 1; }                             
    word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');   
    word = word.replace(/^y/, '');                                 
    return word.match(/[aeiouy]{1,2}/g).length;                    
}

var res=0;
for(var i=0;i<numberOfWords;i++){
	res=res+new_count(items[2].wordList[i]);
}
avSyllables = Math.ceil(res/numberOfWords);
console.log(avSyllables);
items.push({avSyllables:avSyllables});

return items;

}
