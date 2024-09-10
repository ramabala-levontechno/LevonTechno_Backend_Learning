Install the Package-Json by npm init -y.

Download the Dependencies.
1) Express 
2) Mongoose 
3) nodemon
4) dotenv 
5) body-parser


Creating a Gateway File - index.js 

Initializing NodejS with expressJs & Connecting to Server in Index.js(Gateway File):
a) Importing the express & Connecting to server.
b) Creating the Home Page to check the Content.

Connecting to MongoDB Atlas - Cloud Flatform 
a) Importing the Mongo DB 
b) Creating the Project in the MongoDB. 
c) Storing the Password and URl in Dot env module.
d) Connecting to DB and checking in the console. 


Task -1:
Creating endpoints for New Product(Mobile):
a) Creating a new product.
b) Retrieving all products.
c) Retrieving a single product by ID.
d) Updating a product by ID.
e) Deleting a product by ID.


Step -1:

a) Create a Product Schema - For Mobile Details to store.
Model:
    Mobile Schema: name,size,color,brand,OS,MS,Resolution,screenSize;

Controllers:
    Product Owner uploading the Details from Froentend Dashboard. Since 
    logic will be POST Method.
Route:
    Creating a Route for Product Uploading by Post Method.

URl end Point for Product Creation for Mobile-Product: 
http://localhost:4500/api/v1/Product//upload-mobile-details 




