# 6-Letter-word-game

## Finding a 6 letter word within 5 tries (React + Node.js + MySQL)

Picking a random 6 letter word from a database and if the word we type has any letter at a correct position it's highlighted.

First we make 2 folders in project folder (Backend and Frontend) </br>
Open terminal </br>
cd Backend </br>
</br>
initializing a new node.js project </br>
npm init -y</br>
npm install express mysql cors nodemon </br>
</br>
instaling all the packages we need for the frontend </br>
cd Frontend </br>
npm install </br>
</br>
starting both </br>
cd Backend </br>
npm start </br>
</br>
cd Frontend </br>
npm run dev </br>

creating a server.js file in Backend folder and writing </br>

const express = require('express') </br>
const mysql = require('mysql') </br>
const cors = require('cors') </br>
 </br>
const app = express() </br>
app.use(cors()) </br>

creating API connection to mysqldb </br>
 </br>
const db = mysql.createConnection({  </br>
			host: 'localhost', </br>
			user: 'root', </br>
			password: '', </br>
			database: 'mysqldb' </br>
		}) </br>
 </br>
getting data from the database </br>
		app.get('/(name of table)', (req, res) => { </br>
		    	const sql = "SELECT * FROM (name of table)"; </br>
			db.query(sql, (err, data) => { </br>
				if(err) return res.json(err); </br>
				return res.json(data); </br>
			}) </br>
		}) </br>
 </br>
creating API </br>
		app.get('/', (req,res) => { </br>
			return res.json("From Backend"); </br>
		}) </br>

listening to the port of server for making a connection </br>
		app.listen(3001, () => { </br>
			console.log("listening"); </br>
		})
