//Renaming Function
function naming(number) {
    switch(number) {
        case 1: 
            return "Leanne Graham";
        case 2:
            return "Ervin Howell";
        case 3: 
            return "Clementine Bauch";
        case 4: 
            return "Patricia Lebsack";
        case 5:
            return "Chelsey Dietrich";
        case 6:
           return "Mrs. Dennis Schulist";
        case 7:
            return "Kurtis Weissnat";
        case 8: 
            return "Nicholas Runolfsdottir V"
        case 9: 
            return "Glenna Reichert"
        case 10: 
            return "Clementina DuBuque";
    }
}

//JQEURY
$.getJSON('https://jsonplaceholder.typicode.com/todos', 
function populate(data) 
{
    let rawstring = ""
    for(var i = 0; i < 10; i++){
        rawstring += JSON.stringify(data[Math.floor(Math.random() * 200) + 1]) + "," 
    }
    var filterstring = rawstring.slice(0, -1);
    //Prepping string for JSON parsing (Requires valid JSON format)
    var prepstring = "[" + filterstring + "]"
    var finalstring = JSON.parse(prepstring)

    var name = finalstring[0].userId;

    //ID Increment
    arrayid = -1;
    elementid = 1
    for (var a = 0; a < 10; a++) {
        arrayid+=1
        document.getElementById(elementid).innerText = finalstring[arrayid].id
        elementid+=4
    }
    //Naming Increment
    arrayname = -1;
    elementname = 2;
    for (var a = 0; a < 10; a++) {
        arrayname+=1
        document.getElementById(elementname).innerText = naming(finalstring[arrayname].userId)
        elementname+=4
    }
    //Title Increment
    arraytitle = -1;
    elementtitle = 3;
    for (var a = 0; a < 10; a++) {
        arraytitle+=1
        document.getElementById(elementtitle).innerText = finalstring[arraytitle].title
        elementtitle+=4
    }
    //Complete Increment
    arraycomplete = -1;
    elementcomplete = 4;
    for (var a = 0; a < 10; a++) {
        arraycomplete+=1
        document.getElementById(elementcomplete).innerText = finalstring[arraycomplete].completed
        elementcomplete+=4
    }
})



