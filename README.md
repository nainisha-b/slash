<p align="center"><img width="500" src="./assets/slash.png"></p>

![GitHub](https://img.shields.io/github/license/Urvashi74/slash)
![github workflow](https://github.com/secheaper/cheaper/actions/workflows/python-app.yml/badge.svg)
[![DOI](https://zenodo.org/badge/431326985.svg)](https://zenodo.org/badge/latestdoi/431326985)
![Github](https://img.shields.io/badge/language-python-red.svg)
![Github](https://img.shields.io/badge/language-node-red.svg)
![GitHub issues](https://img.shields.io/github/issues-raw/NCSU-Group70-CSC505-SE-Fall-23/slash)
![GitHub closed issues](https://img.shields.io/github/issues-closed/NCSU-Group70-CSC505-SE-Fall-23/slash)
![GitHub pull requests](https://img.shields.io/github/issues-pr/NCSU-Group70-CSC505-SE-Fall-23/slash)
![GitHub closed pull requests](https://img.shields.io/github/issues-pr-closed-raw/NCSU-Group70-CSC505-SE-Fall-23/slash)
![GitHub commit activity (branch)](https://img.shields.io/github/commit-activity/w/NCSU-Group70-CSC505-SE-Fall-23/slash)
![GitHub repo size](https://img.shields.io/github/repo-size/NCSU-Group70-CSC505-SE-Fall-23/slash)
[![codecov](https://codecov.io/gh/ChaitanyaS182k/Slash/graph/badge.svg?token=4Y0UH6WSDZ)](https://codecov.io/gh/ChaitanyaS182k/Slash)

On the hunt for incredible online deals? Meet Slash, your savvy shopping sidekick!

Slash, the openly accessible web API framework, empowers you to scour the top e-commerce sites for unbeatable deals on your favorite items across a multitude of online shopping destinations. Currently supported websites include [Amazon](https://www.amazon.com/), [Walmart](https://www.walmart.com/), [Target](https://www.target.com/), [BestBuy](https://www.bestbuy.com/), [Costco](https://www.costco.com/), [EBay](https://www.ebay.com/) and [The Home Depot](https://www.homedepot.com/).

- **Efficient**: Slash streamlines the deal comparison process, potentially saving you more than 50% of your valuable time.
- **User-Friendly**: Slash offers user-friendly public APIs for effortlessly filtering, sorting, and searching through search results.
- **Versatile**: It generates JSON responses that you can easily tailor to achieve the specific outcomes you want.

---

## :rocket: What's new? 
## Improvements in Phase-III:
We have added new exciting features to the Phase-II slash:

1. Filtering products- Users can filter the products based on their ratings.
2. Currency Conversion- Users have an option to view the price of the product in their desired currency. We have used an online API for the currency conversion.
3. Add to wishlist- Users can add their products to the wishlist. Here, we used two API's getAllItems, saveCart. In wishlist, users can also refresh the wishlist to see the updated prices of the products.
4. Logout feature
5. Enchancement of the UI design
6. Test cases for Front-end and improved the test cases of the back-end.
   
Features to slash in Phase-II:

1. A web interface for users to interact with the application in a more personalised way.
2. Substituted web scraping with website product APIs for enhanced efficiency and speed.
3. Added a new e-commerce website [Home Depot](https://www.homedepot.com/)
4. Added the reviews section where users can see review of the product on respective e-commerce website.




## :page_facing_up: Why

1. **Anti-Web Scraping Measures**
   - **Challenge**: Many popular websites, including Amazon and Walmart, employ anti-web scraping mechanisms, making it difficult to extract data using conventional scraping methods.

2. **Transition to APIs**
   - **Solution**: To overcome this challenge, we've transitioned from traditional web scraping in the backend to leveraging official APIs provided by these websites. This strategic shift not only preserves the project's core functionality but also enhances its robustness.

3. **Enhanced Data Reliability**
   - **Benefit**: APIs deliver data in a structured and reliable format, reducing the risk of unexpected data disruptions. In contrast, web scraping is vulnerable to frequent changes in website structure, which can break scraping scripts. This transition ensures more dependable and consistent data access.

These changes have significantly improved the reliability and sustainability of data retrieval in our project.

Future possibilities encompass the development of web applications with intuitive interfaces and mobile applications for Android and iOS, all powered by these web APIs. Anyone can construct their custom applications atop this foundation of web APIs.".

---

<p align="center">
  <a href="#movie_camera-checkout-our-video">Checkout our video</a>
  ::
  <a href="#rocket-installation">Installation</a>
  ::
  <a href="#computer-technology-used">Technology Used</a>
  ::
  <a href="#bulb-use-case">Use Case</a>
  ::
  <a href="#file_cabinet-api">APIs used in the Project</a>
  ::
  <a href="#golf-future-roadmap">Future Roadmap</a>
  ::
  <a href="#sparkles-contributors">Contributors</a>
  ::
  <a href="#email-support">Support</a>

</p>

---
## :movie_camera: Login/Log out:

## :movie_camera: Web-Application Results:
<p align="center"><img width="700" src=""></p>


## :movie_camera: Checkout our video
https://github.com/NCSU-Group70-CSC505-SE-Fall-23/slash/assets/70905787/fe229f61-2bec-4920-96f4-6b693a468bcf


Also, you can watch the video demo of the Slash project with audio explanation here https://youtu.be/XH2iKbnvyMs.


---

## : Requirements
1. [Visual Studio Code](https://code.visualstudio.com/download)
2. [Python 3.7 and above](https://www.python.org/downloads/)
3. [Node.js](https://nodejs.dev/en/download/) and NPM
4. [MySQL Workbench](https://dev.mysql.com/downloads/mysql/)

## :rocket: Installation

## 1. Clone the Repository
- Clone the Github repository to a desired location on your computer. You will need [git](https://git-scm.com/) to be preinstalled on your machine. Once the repository is cloned, you will then `cd` into the local repository.

```
git clone https://github.com/secheaper/slash.git
cd slash
```

## 2. Python installation
- This project uses Python 3 for the backend and React along with Javascript framework for the frontend. This project employs MySQL Workbench to authenticate the users hitting on the frontend.
  
For the backend setup ensure that [Python](https://www.python.org/downloads/) and [Pip](https://pip.pypa.io/en/stable/installation/) are preinstalled. All the python requirements of the project are listed in the `requirements.txt` file. Use pip to install all of those.

```
pip3 install -r requirements.txt
```
## 3. Node Setup for Front-end 
For the frontend setup ensure that [Node](https://nodejs.org/en/) is preinstalled.

```
Install node 18.17.1 #installing older version of node.js
```

All the node requirements are listed in `client/package.json` file. Use npm to install all of those.

```
cd client
npm install --legacy-peer-deps
```

For the login page setup, to install all the requirements which are listed in 'LoginPage/package.json' file. Use npm to install all of those.

```
cd LoginPage
npm install express
npm install mysql
npm install cors
npm install nodemon
```

## 4. Setting Up SQL Work Bench:
For MySQL Workbench setup, 
Importing db schema
   <p align="center"><img width="500" src="./assets/SQL_Dump.png"></p>
Changing db credentials from services.js
   <p align="center"><img width="500" src="./assets/dbChange.png"></p>

Facing Issues?
Refer to the this [Stack Overflow](https://stackoverflow.com/questions/50093144/mysql-8-0-client-does-not-support-authentication-protocol-requested-by-server) Link resolution
   
## 5. Run the application:

1. Once all the requirements are installed, you will have to `cd` into the `src` folder. Once in the `src` folder, use the python command to run the `main.py` file.

```
cd src

For Mac
python3 main.py

For Windows
python main.py
```

2. Once the backend is up and running, you will have to `cd` into the `LoginPage` folder. Once in the `LoginPage` folder, use the node command to start the webserver.

```
cd LoginPage
nodemon services.js

Open Login.html in the web browser
```


## :computer: Technology Used

- FastAPI : https://fastapi.tiangolo.com
- ASGI Server - Uvicorn : https://www.uvicorn.org


## :bulb: Use Case

- **_Students_**: Students coming to university are generally on a budget and time constraint and generally spend hours wasting time to search for products on Websites. Slash is the perfect tool for these students that slashes all the unnecessary details on a website and helps them get prices for a product across multiple websites.Make the most of this tool in the upcoming Black Friday Sale.
- **_Data Analysts_**: Finding data for any project is one of the most tedious job for a data analyst, and the datasets found might not be the most recent one. Using slash, they can create their own dataset in real time and format it as per their needs so that they can focus on what is actually inportant.

## :file_cabinet: API

Here are the APIs used in our project:

- **Amazon**: [Amazon API Documentation](https://www.rainforestapi.com/)

- **Walmart**: [Walmart API Documentation](https://www.bluecartapi.com/walmart-product-data-api)

- **Target**: [Target API Documentation](https://www.redcircleapi.com/target-product-data-api)

- **The Home Depot**: [The Home Depot API Documentation](https://www.bigboxapi.com/)

- **Ebay**: We used the Ebay SDK, which can be found in the project's requirements. Please refer to the SDK's official documentation for more information.

  - **Ebay SDK Documentation**: [Ebay SDK Documentation](https://developer.ebay.com/support/kb-article?KBid=84)

- **saveCart**:
   This is a decorator in Flask that associates the following function with the specified URL endpoint ("/api/saveCart") and HTTP method (POST). @app 
   refers to the Flask application instance and specifies the save_cart function to handle these requests.
  
 - **getAllItems**:
   This is a decorator in Flask that associates the following function with the specified URL endpoint ("/api/getAllItems") and HTTP method (GET). @app refers to the Flask 
   application instance. So, when a client makes a GET request to "/api/getAllItems," the get_all_items function is called, and it returns a JSON response with a list of 
   items. 
      
   Please refer to these API documentation links for details on how to use them in our project.

## :golf: Future Roadmap

1. To improve the Security of the Application.
2. Better API to scrape website.
3. Integrate the login page with main react application.
4. Work on test cases to improve code coverage.
5. Host domain on public server.
6. Price Drop Alerts using email or text notification.

# Team Members

## Phase 3 Team Members

- [Nainisha Bhallamudi](https://github.com/nainisha-b)
- [Anvitha Reddy Gutha](https://github.com/AnvithaReddyGutha)
- [Sri Vaishnavi Mylavarapu](https://github.com/SriVaishnaviM)

## :email: Support

For any queries and help, please reach out to us at: slashteam68@gmail.com
