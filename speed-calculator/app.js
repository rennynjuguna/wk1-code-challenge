const speedDetector = () =>{
  
  // importing the data from html
  let speed = parseInt(document.getElementById('speed').value);
  let speed_increase = speed - 70;
  let points = speed_increase/5;
  let message = "";
  
  // Conditions using if statement
  if(speed < 70){
    message = 'Ok';
  }else if (points > 12){
    message = 'License Suspended';
  }else{
    message = 'Points: ' + points;
  }

  // print out the message
  document.getElementById('showData').innerHTML = `${message} `

}