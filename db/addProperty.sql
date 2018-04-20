INSERT INTO properties(
user_id,
propertyName,
propertyDescription,
address,
city,
State,
zip,
imageUrl,
loanAmount,
monthlyMortgage,
desiredRent)
values 
($1, $2, $3, $4, $5, $6, $7, $8, $9, $10,$11)
