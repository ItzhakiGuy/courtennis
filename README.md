# :tennis: Courtennis
Welcome to Courtennis, an online e-commerece tennis store.
The store was implemented using Node.js as backend, React js as Frontend and a MongoDB Atlas Collection as a DB.
The store has multiple flows implemented, register and login to the store, you can browse between the store products, contact us and give us your review on the store, read about us, add products to the cart, and checkout and buy from the store.
We also have an admin tab, designated for seeing the users in the store.

## :desktop_computer: Running the project: 
### Running the Backend:
* Go to server root:
`cd courtennis/server/`

* * if this is the first time running, run:
`npm install`

* then run:
`npm start`


The server communicate with the Frontend at:
`http://localhost:9000/`

### Running the Frontend:
* Go to client root:
`cd courtennis/client/`
* * if this is the first time running, run:
`npm install`

* then run:
`npm start`

### Running both together (Frontend + Backend, after installing them), From the main project directory, run:
`npm run dev`

The client communicate with the Backend at:
`http://localhost:9000/`

The client runs at:
`http://localhost:3000/`

### Running project tests:
* The tests reside in a tests folder under the Backend directory (using concurrently).
`cd courtennis/server/`
* run:
`npm test`


:copyright:Created by Maor Graiber, Guy Itzhaki