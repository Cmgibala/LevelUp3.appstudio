function carLoanPayment(amount, interestRate, months) {
  interestRate = (interestRate/ 100) / 12
  payment = amount * (interestRate*(Math.pow(1+interestRate,months)) / (Math.pow(1+interestRate, months) -1 ))
  return (payment.toFixed(2))
 
  }
  
  
function homeLoanPayment(amount, interestRate, years) {
  interestRate = (interestRate/ 100) / 12
  months = years * 12
  payment = amount * (interestRate*(Math.pow(1+interestRate,months)) / (Math.pow(1+interestRate, months) -1 ))
  return payment.toFixed(2)
  }
///////////////////////////////////////////////////////////////////////////////  


let input1 = prompt('Which calculator would you like to use: Car or Home. Enter Stop to quit.');


while (input1 != 'Stop') {
  
 if (input1 == 'Car'){
    loan = prompt('Please enter the loan amount.');
    rate = prompt('Please enter the interest rate.');
    term = prompt('Please enter the term in months.');
    alert(`A car loan for $${loan} over ${term} months at ${rate}% interest would have a monthly payment of $${carLoanPayment(loan, rate, term)}.`);

  } else if (input1 == 'Home') {
    loan = prompt('Please enter the loan amount.');
    rate = prompt('Please enter the interest rate.');
    term = prompt('Please enter the term in years.');
    if (term == 15 || term == 30) {
      alert(`A home loan for $${loan} over ${term} years at ${rate}% interest would have a monthly payment of $${homeLoanPayment(loan, rate, term)}.`);
    }
    while (term != 15 || term != 30) {
      alert('The loan term can only be 15 or 30 years');
      term = prompt('Please enter the term in years.');
      if (term == 15 || term == 30){
       alert(`A home loan for $${loan} over ${term} years at ${rate}% interest would have a monthly payment of $${homeLoanPayment(loan, rate, term)}.`);
       break;
      }
    }
    
  } else {
    alert('error');
  }
  input1 = prompt('Which calculator would you like to use: Car or Home. Enter Stop to quit.');
}