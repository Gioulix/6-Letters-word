# 6-Letter-word-game

## Finding a 6 letter word within 5 tries (React + Node.js + MySQL)

Picking a random 6 letter word from a database and if the word we type has any letter at a correct position it's highlighted.

First make Backend folder in project folder  </br>
Open terminal </br>
cd Backend </br>
</br>
initializing a new node.js project </br>
npm init -y</br>
npm install express mysql cors nodemon </br>
</br>
Making and instaling all the packages we need for the frontend </br>
npm create vite@latest </br>
cd Frontend </br>
npm install </br>
</br>
starting both </br>
cd Backend </br>
npm start </br>
</br>
cd Frontend </br>
npm run dev </br>

at package.json </br>
"start": "nodemon server.js" (under scripts)</br>

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
		    	 db.query(
   				 "SELECT word FROM six_leters ORDER BY RAND() LIMIT 1", </br>
   				 (err, results) => {			</br>
    				   if (err) throw err;			</br>
     				 res.json(results[0]);			</br>
   		 		}					</br>
  				);					</br>
			}) </br>


listening to the port of server </br>
		app.listen(3001, () => { </br>
			console.log("listening"); </br>
		}) </br>
 </br>
 Inside App.jsx fetch data </br>
const [data, setData] = useState([])  </br>
useEffect(() => {  </br>
fetch('http://localhost:3001/users')  </br>
.then(res => res.json())  </br>
.then(data => setData(data))  </br>
.catch(err => console.log(err));  </br>
}, [])
