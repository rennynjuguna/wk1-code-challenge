const gradeCalculator = () =>{
  
  // importing the data from html
  let total_marks = parseInt(document.getElementById('total_marks').value);
  let grade = "";
  
  // calculating grade using if statement
  if(total_marks <= 100  && total_marks > 79){
    grade = 'A';
  }else if(total_marks <= 79  && total_marks > 60){
     grade = 'B';
  }else if(total_marks <= 59  && total_marks > 49){
     grade = 'C';
  }else if(total_marks <= 49  && total_marks > 40){
     grade = 'D';
  }else if(total_marks <= 39  && total_marks >= 0){
     grade = 'E';
  }

  // printint out the grade
  document.getElementById('showData').innerHTML = `Your grade is ${grade} `

}