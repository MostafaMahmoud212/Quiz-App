/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', './JS/particles.json', function() {
});

let form = document.querySelector("#quizOptions");
let categoryName = document.querySelector(".category");
let difcult = document.querySelector(".difficultyOptions");
let qNumber= document.querySelector(".qNumber");
let subBtn = document.querySelector(".submitButon");

let myQuiz;

let myRow = document.querySelector(".quesions .container .row")

let questions;

subBtn.addEventListener("click", async function(e) { // async  عشان await in call funcion
  let categorye = categoryName.value;
  let dif = difcult.value;
  let qustchanNuber = qNumber.value;

  myQuiz = new Quiz( categorye, dif, qustchanNuber);

  questions = await myQuiz.getAllQustions(); 
  // console.log(questions); //  { Qustions }

  form.classList.add("d-none")

  let myQuestion = new Question(0);
  // console.log(myQuestion);

  myQuestion.display();
})


        //  // //   Use OOP

class Quiz {
  constructor(category, difficulty, number) {
    this.category = category;
    this.difficulty = difficulty;
    this.number = number;
    this.score = 0
  }

    // Get API  Function
  getApi() { 
    return `https://opentdb.com/api.php?amount=${this.number}&category=${this.category}&difficulty=${this.difficulty}`;
  }

    //  Fetch Functoin
  async getAllQustions() {
    let res = await fetch(  this.getApi() )
    let data = await res.json();

    return data.results;
  }

  //  End Task
  showResult() {
    return `
      <div 
        class="question bg-white shadow-lg col-lg-12 p-4 rounded-3 d-flex flex-column justify-content-center align-items-center"
      >
        <h2 class="mb-0">
          ${
            this.score == this.number
            ? `Congratulations ALL Question Right  ` 
            : `Your score is ${this.score}`
          }
        </h2>
        <button class="again btn btn-primary rounded-pill mt-2"> Try Again</button>
      </div>
      `;
  }

}

class Question {
  constructor(index) {
    this.index = index;
    this.question = questions[index].question;
    this.difficulty =  questions[index].difficulty;
    this.correct_answer =  questions[index].correct_answer;
    this.incorrect_answers =  questions[index].incorrect_answers;
    this.category =  questions[index].category;
    this.myAllAnswers = this.getAllQuestions();
    this.isAnswered = false;
  }

  getAllQuestions() {
    let allAnsers = [ ...this.incorrect_answers, this.correct_answer]; //  ... because يتفرطو
    allAnsers.sort(); // هترجع Array مترتبة ترتيب ابجدي عشان الاختيارات تتغير 
  
    return allAnsers;
  }
 
  display() {
    const questionMarkUp = `
      <div class="question bg-white shadow-lg col-lg-9 offset-lg-3 m-auto p-4 rounded-3 d-flex flex-column justify-content-center align-items-center">
        <div class="w-100 d-flex justify-content-between">
          <span class="btn btn-category">${this.category}</span>
          <span class="fs-6 btn btn-questions"> ${this.index + 1} of ${questions.length}  Questions</span>
        </div>
        <h2 class="text-capitalize h4 text-center my-25">${this.question}</h2>
        <ul class="choices row w-100 list-unstyled m-0 d-flex flex-wrap text-center justify-content-between">
          ${this.myAllAnswers
            .map( (answer) => `<li class="col-12 col-md-5">${answer}</li>`)
            .toString()
            .replaceAll(',',  "")
          } 
        </ul>
        <h2 class="text-capitalize text-center score-color h3 fw-bold"> Score:
          ${myQuiz.score}
        </h2>
      </div>
    `;

    myRow.innerHTML = questionMarkUp;

    let allCoices = document.querySelectorAll('ul li');
    allCoices.forEach((li) => {
      li.addEventListener("click", () => {
        this.checkAnswer(li);

        this.nextQuestion();
      })
    });
  }

  checkAnswer(choice) {
    if(!this.isAnswered) {
      this.isAnswered = true;
      if(choice.innerHTML == this.correct_answer) {
        choice.classList.add('correct', 'animate__animated', 'animate__pulse')
        myQuiz.score++;
      }else {
        choice.classList.add('wrong', 'animate__animated', 'animate__shakeX')
      }
    }
  }

  nextQuestion() {
    this.index++;

    setTimeout(() => {
      if(this.index < questions.length) {
        let myNewQuestion = new Question(this.index);
        myNewQuestion.display();
      }
      else {
        let result = myQuiz.showResult();
        myRow.innerHTML = result;

        document.querySelector('button.again').addEventListener("click", () => {
          window.location.reload()
        })
      }
    }, 1000);
  }
}