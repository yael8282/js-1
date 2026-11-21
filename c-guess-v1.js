// ג 
let playAgain=true;
while(playAgain){
const number = Math.floor(Math.random() * 20) + 1;
let guess;
let count=0;
while(guess!=number)
{   count++;
    guess=Number(prompt('נחש מספר בין 1 ל-20'));
    if(guess>number)
        alert("גבוה מדי");
    if(guess<number)
        alert("נמוך מדי");
}
if(count<=3){
    alert(`מדהים! ניחשת אחרי ${count} ניסיונות`)
    console.log(`מדהים! ניחשת אחרי ${count} ניסיונות`)
}
if(count>3&&count<=6){
    alert(`יפה מאוד! ניחשת אחרי ${count} ניסיונות`)
    console.log(`יפה מאוד! ניחשת אחרי ${count} ניסיונות`)
}
if(count>=7){
    alert(`אפשר לשפר! ניחשת אחרי ${count} ניסיונות`)
    console.log(`אפשר לשפר! ניחשת אחרי ${count} ניסיונות`)
}
playAgain=(confirm("לשחק שוב?")) 
}