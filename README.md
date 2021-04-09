# beathhunger-DSC-Google-Solution-Challenge

------ABOUT-----

Hello everyone! Team Emissive has created a platform to solve problems like wastage of food at parties and hotels and it also provides a platform to people and NGOs who are willing to help the underprivileged. The BEAT HUNGER webapp makes it easier for NGOs and volunteer to connect with each other with the motto of helping people and beating hunger and spreading happiness in the world.

Team Emissive is team of 4 undergrad first year students studying in Indian Institute of Information Technology Surat. The members are Ishitva Agrawal, Sparsh Jhariya, Prasang Maheshwari, Anshika Agarwal.


------INSTALLATION AND USAGE-----

To Run this project locally : Download this project and install the dependencies using Nodejs Prompt.

1.npm install express --save 


2.npm install mongoose 



3.npm install html 



4.npm install nodemon 



To Set Up a dumy Database For Application Purpose :



1.Go to src/db/conn.js



2.Enter Username of MongoDB Database


3.Enter Password of MongoDB Database



4.Enter Database Name
Use username and password of mongodb atlas


You can either use mongoDB compass or run on global Servers. You just need to edit conn.js File
You Can Also Use Our SAMPLE DATABASE BY REPLACING URI STRING:
const uri = "mongodb+srv://beathunger3435:<password>@cluster0.wnwsh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


Setting UP HTML files:

1.GO to src/app.js


2.Edit The absolutes path of each res.Sendfile Function according to the location of the templates of the HTML files.




TO RUN THE SERVER LOCALLY:  npm run dev


OPEN YOUR BROWSER AND OPEN: localhost:3000
