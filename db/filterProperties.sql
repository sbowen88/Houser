SELECT * FROM properties 
WHERE user_id = $1 and desiredrent > $2;