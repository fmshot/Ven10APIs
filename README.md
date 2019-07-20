# Ven10APIs


Ven10APIs
CRUD Operations for simple e-commerce website
This is a Node API stack to perform CRUD Operations for simple e-commerce website. It is a small NODE app with a seperate react front end for performing CRUD Operations for simple e-commerce website.

LIST OF END POINTS
GET ALL PRODUCTS
https://ven10apis.herokuapp.com/product/products
This returns a list of all products with only the following feilds:
id
Name
Price

POST A NEW PRODUCT
https://ven10apis.herokuapp.com/product/createNew
This creates a new product. Use the following feilds. Note that all fields are required.
     Name
     Price
     Description
     Category
     Image
     Color
     
GET A NEW SPECIFIC PRODUCT
https://ven10apis.herokuapp.com/product/product/id
This gets all the details of a new product. It returns the following feilds.
     Name
     Price
     Description
     Category
     Image
     Color

Quick Start
# add uri of your mongodb connection for example

 "mongoURI": "mongodb://localhost/dev-social",
 
# Install server dependencies
npm install

# Build for production
cd client
npm run build

App Info:

Author
Shotola Femi

Version
1.1.5

License
This project is licensed under the MIT License
