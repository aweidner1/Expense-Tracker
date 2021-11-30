document.getElementById("form1").onsubmit=function() {
    //displays the response DOM element
 document.getElementById("response").style.display = "block";

 //resets the DOM element on submit
 document.getElementById("answer").innerHTML = "";

   goals = document.querySelector('input[name = "goals"]:checked').value;

   jobStat = document.querySelector('input[name = "jobStat"]:checked').value;

   financeStat = document.querySelector('input[name = "financeStat"]:checked').value;

   wkSpent = document.querySelector('input[name = "wkSpent"]:checked').value;

   spentFreq = document.querySelector('input[name = "spentFreq"]:checked').value;


   // initialize score variables
   saver = 0;
   spender = 0;
   debtor = 0;


   //function to calculate score for each question
   function eachscore(x){
   if(x == "saver") { saver = saver + 1}
   if(x == "spender") { spender = spender + 1}
   if(x == "debtor") { debtor = debtor + 1}
   }
   // for the above function, you could also change the 1 to a variable so you could give more points for certain questions

   //call function for each question
   eachscore(eval("goals"));
   eachscore(eval("jobStat"));
   eachscore(eval("financeStat"));
   eachscore(eval("wkSpent"));
   eachscore(eval("spentFreq"));


   all = [saver, spender, debtor];

 //get the max score  in the array
 maxscore = Math.max.apply(Math,all);

 // object holding scores and feedback
 scores = [{index:0, feedback: "saver"},
 {index:1, feedback: "spender"},
 {index:2, feedback: "debtor"}];

 //figure out which index # holds the max score
 for(i=0; i<all.length; i++) {
 if(all[i]==maxscore) {
 //this gets one answer, the last one it encounters with a match
 //document.getElementById("answer").innerHTML = scores[i].feedback;

 //this version would allow for appending multiple answers; replace statement above
 document.getElementById("answer").innerHTML += scores[i].feedback + ", ";
 }
 }

return false; // required to not refresh the page; just leave this here
    }// end the submit function



