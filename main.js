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
            correctAnswer : '(A) Grade Styling'
        },
        {
            question : 'Question 4. I buy 6 Eggs, I broke 2, I fried 2, I ate 2! How many Eggs remain?',
            answers : ['(A) 0','(B) 2', '(C) 4', '(D) 6'],
            correctAnswer : '(D) 6'
        },
        {
            question : 'Question 5. Objects in JavaScript stores Properties in form of what & what?',
            answers : ['(A) Strings and Value', '(B) Key and Value', '(C) Key and Notes', '(D) Key and Strings'],
            correctAnswer : '(B) Key and Value'
        },
        {
            question : 'Question 6. Who won 2021 UEFA Champions League?',
            answers : ['(A) Chelsea', '(B) Real Madrid', '(C) Manchester City', '(D) Bayern Munchen'],
            correctAnswer : '(A) Chelsea'
        },
        {
            question : 'Question 7. The mass spectrometer can be used to measure mass of?',
            answers : ['(A) An electron', '(B) A Proton', '(C) A Neutron', '(D) An Atom'],
            correctAnswer : '(D) An Atom'
        },
        {
            question : 'Question 8. What is the full meaning of HOF?',
            answers : ['(A) Hired Oxygen Float','(B) Hyper Ordered Function' ,'(C) Hired Ordered Function', '(D) Hyper Originated Function'],
            correctAnswer : '(C) Hired Ordered Function'
        },
        {
            question : 'Question 9. Water molecules are held together by?',
            answers : ['(A) Covalent Bond', '(B) Hydrogen Bond', '(C) Ionic forces', '(D) Van Der Waal Forces'],
            correctAnswer : '(B) Hydrogen Bond'
        },
        {
            question : 'Question 10. How many types of JavaScript do we have?',
            answers : ['(A) 3', '(B) 4', '(C) 5', '(D) 2'],
            correctAnswer : '(D) 2'
        }
    ] 

    let currentQuestion = 0
    let previousQuestion = 0
    let correctAnswer = 0


    function Next(){
        let questionText = document.getElementById('quest1')
        questionText.textContent = questions[currentQuestion].question

        let answer = document.querySelectorAll('.answer')
        answer.forEach((answer, index) => {
            answer.textContent = questions[currentQuestion].answers[index]
        }) 

        setTimeout(() => {
           currentQuestion++
        })
    }
    


  

