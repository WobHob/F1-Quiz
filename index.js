var readlineSync = require('readline-sync');
var highScores = [];

class CLI{
    constructor(){
    }

    welcome(){
        var username = readlineSync.question("What's your name?");
        console.log("Hi! "+username+"Welcome to my F1 quiz!");
    }

    questionHelper(){
        var questions = [
            {
                question:"Which driver has the most grand prix wins?",
                answer: "Lewis Hamilton"
            },
            {
                question:"When was the first F1 race?",
                answer: "1946"
            },
            {
                question:"which f1 team has won the most championships?",
                answer: "Ferrari"
            }
        ]
        return questions;
    }

    play(questions,answers){
        var users_answers = readlineSync.question(questions);
        if(users_answers.toLowerCase() == answers.toLowerCase()){
          return true;
        } 
        else{
          return false;
        }
    }

    gameRunner(){
        var score = 0;
        console.log("------------------------------------------")
        console.log("Please answer the below questions to test your F1 knowledge");
        console.log("------------------------------------------")

        let questions = this.questionHelper();
        for(var i=0;i<questions.length;i++){
            var q = questions[i];
            score += this.play(q.question,q.answer);
        }
      this.showScores(score,questions.length);
    }

    showScores(score,numQuestions){
        console.log("You scored: ",(score/numQuestions)*100,"%");
        if(score == 3){
          console.log("Congrats you are a true F1 Fan");
        }
        else if(score == 2){
          console.log("Good job, you almost got all answers!!!");
        }
        else{
          console.log("Try again, keep practicing!!");
        }
        highScores.map(score => console.log(score.name,":",score.score))
    } 
}
let game = new CLI();
game.welcome();
game.gameRunner();

