const salaryCalculator = () =>{
  
  // importing the data from html
  let basic_salary = parseInt(document.getElementById('basic_salary').value);
  let nhif;
  let nssf;
  let total_deductions;
  let net_salary;
  
  // calculating NHIF Deductions

  if(basic_salary >= 100000){
    nhif = 1700;
  }else if(basic_salary <= 99999  && basic_salary > 90000){
     nhif = 1600;
  }else if(basic_salary <= 89999  && basic_salary > 80000){
     nhif = 1500;
  }else if(basic_salary <= 79999  && basic_salary > 70000){
     nhif = 1400;
  }else if(basic_salary <= 69999  && basic_salary >= 60000){
     nhif = 1300;
  }else if(basic_salary <= 59999  && basic_salary >= 50000){
     nhif = 1200;
  }else if(basic_salary <= 49999  && basic_salary >= 45000){
     nhif = 1100;
  }else if(basic_salary <= 44999  && basic_salary >= 40000){
     nhif = 1000;
  }else if(basic_salary <= 39999  && basic_salary >= 35000){
     nhif = 950;
  }else if(basic_salary <= 34999  && basic_salary >= 30000){
     nhif = 900;
  }else if(basic_salary <= 29999  && basic_salary >= 25000){
     nhif = 850;
  }else if(basic_salary <= 24999  && basic_salary >= 20000){
     nhif = 750;
  }else if(basic_salary <= 19999  && basic_salary >= 15000){
     nhif = 600;
  }else if(basic_salary <= 14999  && basic_salary >= 12000){
     nhif = 500;
  }else if(basic_salary <= 11999  && basic_salary >= 8000){
     nhif = 400;
  }else if(basic_salary <= 7999  && basic_salary >= 6000){
     nhif = 300;
  }else if(basic_salary <= 5999  && basic_salary >= 0){
     nhif = 150;
  }


  // NSSF Deductions

   nssf = 0.06 * basic_salary;

   if (nssf>1080) {
      nssf =1080;
   }

   total_deductions = nhif + nssf;
   net_salary = basic_salary - total_deductions;

  // printint out the grade
  document.getElementById('nhif').innerHTML = `NHIF: ${nhif} `
  document.getElementById('nssf').innerHTML = `NSSF: ${nssf} `
  document.getElementById('total_deductions').innerHTML = `Total Deductions: ${total_deductions} `
  document.getElementById('net_salary').innerHTML = `Net Salary: ${net_salary} `

}