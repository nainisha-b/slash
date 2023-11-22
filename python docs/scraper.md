# About Slash/scraper.py
Slash, the openly accessible web API framework, empowers you to scour the top e-commerce sites for unbeatable deals on your favorite items across a multitude of online shopping destinations. Currently supported websites include Amazon, Walmart, Target, BestBuy, Costco, EBay and The Home Depot.

The functions in the scrapper.py allow you to search for products on Amazon and Walmart, retrieving and formatting relevant information from the search results.

# Location of Code for this Feature
The code that implements this feature can be found [here](https://github.com/nainisha-b/slash/blob/main/src/scraper.py)

# Code Description
## Import modules:
- requests: A library for making HTTP requests.
- formatter: Presumably a custom module containing functions for formatting search queries and results.
- BeautifulSoup: A library for pulling data out of HTML and XML files.
## Functions
1. httpsGet(URL): 
- httpsGet is a function that performs an HTTP GET request to the specified URL with custom headers to mimic a web browser.
- It uses the requests library to make the request and BeautifulSoup to parse the HTML content of the page.
- The headers are set to mimic a user agent of a popular web browser.
 
2. searchAmazon(query):
- searchAmazon is a function that searches for a given query on Amazon.
- It formats the search query using a function from the formatter module.
- It constructs the Amazon search URL and makes an HTTP request to retrieve the page content.
- It then uses BeautifulSoup to find all the search results on the page and extracts relevant information such as titles, prices, and links.
- The extracted information is formatted using another function from the formatter module, and the results are stored in a list.
 
3. searchWalmart(query):
- searchWalmart is a function that searches for a given query on Walmart.
- Similar to searchAmazon, it formats the search query, constructs the Walmart search URL, makes an HTTP request, and extracts information from the page using BeautifulSoup.
- The extracted information is formatted using a function from the formatter module, and the results are stored in a list.
