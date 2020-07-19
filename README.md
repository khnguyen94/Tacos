# Tacos

## Summary 
If you are hungry and craving tacos but dont know where to start with your order, use our application to mull over the options and pretend much on some! We cover most of the major filling options. 

## Importance
This application utilizes node.js and express to handle the back-end architecture while using the abstracted express-handlebars framework to serve up the front end. In combination, these technologies demonstrate wholistic understanding of the full stack. 

## Key Technologies
node.js
express
express-handlebars
mySQL

## Get Started

As this is a node application, please first navigate to the following repo link: [https://github.com/khnguyen94/Tacos]

Perform a 'git clone' on the repository to your personal device at a location of your choosing

If on macOS, open up a new Terminal instance

If on Windows PC, open up a new Command Prompt instance

Navigate to the root directory of the LIRI application

Run "npm install" to install all the dependencies for this application listed in the package.json

open up your mySQL workbench and make sure your connection lines up with the specifications listed in connection.js. Else, reconfigure based on your local mysql server connection. 

Copy and paste over the SQL schema and run it. Make sure that the database and table are create. 

Copy and paste over the seed data and run it. Make sure that the seed data is created and exists within your database and table. 

Using the command line, run "npm start" or "nodemon server.js" to start the express server. 

In your browser, visit: "http://localhost:3000/" or "http://localhost:3000/tacos". Both will redirect you to /tacos endpoint. 

From, here you should see all 9 taco options. Click the DEVOUR button of the corresponding option and you should see it move over the right side indicating that that taco has been devoured. Behind the scenes, the devoured state has been changed and you can confirm by viewing your mySQL database. 

In the input field at the bottom, you are able to create new tacos by input a filling type and submitting. It will create a new taco and render it on the left side. 

To reset the data, simply rerun the seed data again in your mySQL server and restart your express server, then reload "http://localhost:3000/tacos"


## Contributors

Khoa Nguyen (Github: khnguyen94)