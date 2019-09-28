/*Requirements: 

a function named homeLoanPayment that takes 3 arguments and returns the monthly payment to the main program.  Term can only be 15 or 30 years.
main program that asks the user which calculator they want to use, gets their data and calls the function.

main program that gets the answer back from the function and outputs it to an alert in this format: 
     A home loan for $200,000 over 30 years at 5.7% interest would have a monthly payment of $1160.80.
OR
     A car loan for $30,000 over 60 months at 3.2% interest would have a monthly payment of $542.00
The program must keep running until the user says they want to stop running it. 
Hint: a loop would be handy here..../* 


//Car Loan Payment 

*/



  

function carLoanPayment(amount, interestRate, months) {
  interestRate = (interestRate/ 100) / 12
  payment = amount * (interestRate*(Math.pow(1+interestRate,months)) / (Math.pow(1+interestRate, months) -1 ))
  return (payment.toFixed(2))
 
  }


let input1 = prompt('Which calculator would you like to use: Car or Home');

if (input1 == 'Car'){
  loan = prompt('Please enter the loan amount.');
  rate = prompt('Please enter the interest rate.');
  term = prompt('Please enter the term in months.');
  alert(`A car loan for $${loan} over ${term} months at ${rate}% interest would have a monthly payment of $${carLoanPayment(loan, rate, term)}.`);

}
