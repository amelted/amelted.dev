let paragraph;
let options = {
    minLength: 1,
    maxLength: 8,
    numWords: 100
}
let dictionary = FilterWords(options);
function GenWords(){
    let temp = new Array(100);
    for(var i = 0; i < options.numWords; i++){
        temp[i] = dictionary[Math.floor(Math.random() * dictionary.length - 1)]  
    }
    console.log(temp);
}
function FilterWords(options){
    return words.filter((word) => {
        return word.length >= options.minLength && word.length <= options.maxLength;
    })
}
$(() => {
    GenWords();
    
})



