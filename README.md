# İkinci El Project

``` 
Hello everyone, Welcome to Second Hand Project.
The aim of the project is to bring together the products doesn't used by the user 
with the bidders and to accept and sell the highest bid. 

```


<div>
 
 - #### Contents
  -  [Screenshots](#screenshots)
  -  [Install](#install)
  -  [Start](#start)
  -  [Folder Structure](#folder-structure-and-informations)

</div>

---




### Screenshots

 ## [Live](https://protein-ikinciel-project.netlify.app/)


##### Desktop Pages
<div>
  <img src="https://imgur.com/KvqLcb2.gif" width="200" height="250"/>
   
  <img src="https://imgur.com/3ACNAna.gif" width="200" height="250"/>
  <img src="https://imgur.com/1O9ZkhH.png" width="200" height="250"/>
</div>

##### Mobile Pages
<div>
  <img src="https://imgur.com/iF1IJqd.gif" width="200" height="250"/>
   
  <img src="https://imgur.com/Vsnp0ec.png" width="200" height="250"/>
  <img src="https://imgur.com/9vwJhLy.png" width="200" height="250"/>
</div>







## Install
```
Download and unzip repo
Go to unzipped folder
-> Using npm Install packages with $ npm install
-> Using yarn Install packages with $ yarn install

Note: Windows users should have Bash shell installed (instructions).


```
## Start
```
Create .env File Project Main Directory
Open .env File
-> Write REACT_APP_BASE_ENDPOINT = https://api.example.com (API BASE ENDPOINT)
-> Save .env File
-> Open terminal
-> Cd project folder 
-> If you have completed the installation steps now you are ready.
-> Using npm - npm start , Using yarn yarn start

Note: Windows users should have Bash shell installed (instructions).


```
# Folder Structure and Informations
```

.
├── App.css
├── App.js  # This is the root of your app. Contains static HTML right now.
├── App.test.js
├── api.js # API Requests
├── assets
│   └── images # Static image files
│       ├── Banner1.png
│       ├── banner1mobile.png
│       ├── checked.svg
│       └── loginbanner.png
├── components
│   ├── Banner
│   │   └── index.js
│   ├── Categories
│   │   └── index.js
│   ├── Input
│   │   └── index.js
│   ├── Modal
│   │   ├── BuyModal
│   │   │   └── index.js
│   │   ├── index.js
│   │   └── validations.js
│   ├── Navbar
│   │   └── index.js
│   ├── PreviewImage
│   ├── Select
│   │   └── index.js
│   ├── SelectImage
│   │   └── index.js
│   ├── Spinner
│   │   └── index.js
│   └── Tabs
│       └── index.js
├── constants
│   ├── Icon
│   │   ├── accountIcon.js
│   │   ├── addIcon.js
│   │   ├── closeIcon.js
│   │   ├── confirmIcon.js
│   │   ├── dragUploadIcon.js
│   │   ├── errorIcon.js
│   │   ├── index.js
│   │   └── userIcon.js
│   └── Logo
│       └── index.js
├── contexts
│   ├── AuthContext.js
│   ├── OfferContext.js
│   └── ProductContext.js
├── index.css # Styles for project. Feel free to customize this as you desire
├── index.js
├── logo.svg
├── pages
│   ├── Account
│   │   └── index.js
│   ├── Auth
│   │   ├── Login
│   │   │   ├── index.js
│   │   │   └── validations.js
│   │   └── Register
│   │       ├── index.js
│   │       └── validations.js
│   ├── Home
│   │   └── index.js
│   ├── Product
│   │   ├── AddProduct
│   │   │   ├── index.js
│   │   │   └── validations.js
│   │   └── ProductDetail
│   │       └── index.js
│   ├── ProtectedRoute.js
│   └── RequireAuth.js
├── reportWebVitals.js
├── setupTests.js
└── utils
    └── hooks
        └── handleClickOutside.js


```