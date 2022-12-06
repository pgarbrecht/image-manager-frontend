# Image Manager App
This project is an interview assignment by Phil Garbrecht for an unnamed company. The front end allows users to upload images which are then stored in the imgBB api. Each image is sent as a stringified JSON object (containing the imgBB image url and a title) to the RESTFUL API endpoint backend I created then it is converted into a document and stored in the MongoDB Atlas cloud database so it can then be retrieved, edited, or deleted.

## Instructions to Use
To use the app, simply go to the deployed front end url at https://image-manager-frontend.herokuapp.com <br /> 
Note that due to my Heroku eco-dyno plan, there will be a slower than normal load time at first. Once loaded, the app will function at normal speed. If left idle for 30 minutes or longer, you'll encounter the slow re-load again.

## Project Links
* Link to Deployed Application (Frontend): https://image-manager-frontend.herokuapp.com
* Link to Deployed Application (Backend): https://image-manager-backend.herokuapp.com/images
* Link to GitHub Repository (Backend): https://github.com/pgarbrecht/image-manager-backend
* Link to GitHub Repository (Frontend): https://github.com/pgarbrecht/image-manager-frontend

## Technologies Used
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)

## Notes
I felt confident working on this project and enjoyed the challenge of researching an image storage service to use. I achieved all CRUD functionality but due to time limitations I did not finish the search functionality. This would be something I would continue work on if I were given more time, along with mobile responsiveness and design improvements.

## My Architecture
![Image showing my architecture for front end](./readme-images/front-end-architecture.png)

## Original Request
![Image showing original requst details](./readme-images/original-request.png)

## Final Product
![Image showing the front end application](./readme-images/final-product.png)
