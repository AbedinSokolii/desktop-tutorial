# Cinematicket 
This is a webside we created for ticked selling 
- clone repo
- create the database in your mysql/workbench
- change credetials under src/utils dbConnection.ts
- go on root directory
- npm install
- run server "npm start"
////////////////////////////////////////////////
for startes after u finish the top one  if && not working just do one by one 
cd backend && npm install
npm start (if you dont start the backend the local host wont work )
cd react/my-project && npm install
npm run dev >> the code will run 
///////////////////////////////////////////
after you see the code runing go to your sequal kinema that u created and run 
CREATE TABLE IF NOT EXISTS Users (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    firstName VARCHAR(255) NOT NULL,
    lastName VARCHAR(255),
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
enjoy :p


