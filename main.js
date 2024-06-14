document.getElementById("btn").addEventListener('click', function(){

    let inp = document.getElementById('inp1').value
    let inps = document.getElementById('inp2').value

    if(inp == "" && inps == ""){
        alert('Pls enter your name');
        return;
    }
    else if(inp == ""){
        alert('Pls input your Surname');
        return;
    }
    else if(inps ==""){
        alert('Pls input your First name');
        return;
    }
    else if(inp != '' && inps != ''){
        alert('Ready Set Go')
    }

    document.getElementById('div1').innerHTML = document.getElementById('div2').innerHTML

    })

    function handleClick (){
        window.location.href = 'index.html'
    }

    var questions = [

        {
            question : 'Question 1. What is the full meaning HTML?',
            answers : [ '(A) Hyper Test Markup Language.', '(B) Hydro Text Markup Language.', '(C) Hyper Text Markup Language.', '(D) Hypo Test Markup Languages.'],
            correctAnswer : 2
        },
        {
            question : 'Question 2. Which of these following is not part of array?',
            answers : ['(A) Push method', '(B) Pop method', '(C) Slice method', '(D) Range method'],
            correctAnswer : 3
        },
        {
            question : 'Question 3. Which of these following is not type of styling?',
            answers : ['(A) Grade Styling', '(B) Inline Styling', '(C) External Styling','(D) Internal Styling'],
            correctAnswer : 0
        },
        {
            question : 'Question 4. I buy 6 Eggs, I broke 2, I fried 2, I ate 2! How many Eggs remain?',
            answers : ['(A) 0','(B) 2', '(C) 4', '(D) 6'],
            correctAnswer : 2
        },
        {
            question : 'Question 5. Objects in JavaScript stores Properties in form of what & what?',
            answers : ['(A) Strings and Value', '(B) Key and Value', '(C) Key and Notes', '(D) Key and Strings'],
            correctAnswer : 1
        },
        {
            question : 'Question 6. Who won 2021 UEFA Champions League?',
            answers : ['(A) Chelsea', '(B) Real Madrid', '(C) Manchester City', '(D) Bayern Munchen'],
            correctAnswer : 0
        },
        {
            question : 'Question 7. The mass spectrometer can be used to measure mass of?',
            answers : ['(A) An electron', '(B) A Proton', '(C) A Neutron', '(D) An Atom'],
            correctAnswer : 3
        },
        {
            question : 'Question 8. What is the full meaning of HOF?',
            answers : ['(A) Hired Oxygen Float','(B) Hyper Ordered Function' ,'(C) Hired Ordered Function', '(D) Hyper Originated Function'],
            correctAnswer : 2
        },
        {
            question : 'Question 9. Water molecules are held together by?',
            answers : ['(A) Covalent Bond', '(B) Hydrogen Bond', '(C) Ionic forces', '(D) Van Der Waal Forces'],
            correctAnswer : 1
        },
        {
            question : 'Question 10. How many types of JavaScript do we have?',
            answers : ['(A) 3', '(B) 4', '(C) 5', '(D) 2'],
            correctAnswer : 3
        }
    ] 

    let currentQuestion = 0;
    let selectedAnswers = [];
    let correctAnswers = 0;

    function loadQuestion() {
      let questionText = document.getElementById("quest1");
      questionText.textContent = questions[currentQuestion].question;

      let answers = document.querySelectorAll(".answer");
      answers.forEach((answer, index) => {
        answer.textContent = questions[currentQuestion].answers[index];
        answer.style.backgroundColor = "";
      });

      if (selectedAnswers[currentQuestion] !== undefined) {
        answers[selectedAnswers[currentQuestion]].style.backgroundColor = "teal";
      }
    }

    function selectAnswer(index) {
      selectedAnswers[currentQuestion] = index;
      let answers = document.querySelectorAll(".answer");
      answers.forEach((answer, idx) => {
        answer.style.backgroundColor = idx === index ? "yellow" : "";
      });
    }

    function Next() {
      if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion();
      }
    }

    function Previous() {
      if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
      }
    }

    function Submit() {
      correctAnswers = selectedAnswers.reduce((sum, answer, index) => {
        return sum + (answer === questions[index].correctAnswer ? 1 : 0);
      }, 0);
      alert(`You got ${correctAnswers} out of ${questions.length} questions correct!`);
    }

    document.addEventListener('DOMContentLoaded', loadQuestion);




  

