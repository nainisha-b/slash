# About Slash/configs.py
Slash, the openly accessible web API framework, empowers you to scour the top e-commerce sites for unbeatable deals on your favorite items across a multitude of online shopping destinations. Currently supported websites include Amazon, Walmart, Target, BestBuy, Costco, EBay and The Home Depot.

This functionality of the code is web scraping that fetches product information from various online retailers using their respective APIs. The script is organized into functions, each responsible for scraping a specific online retailer's API.

# Location of Code for this Feature
The code that implements this feature can be found [here](https://github.com/nainisha-b/slash/blob/main/src/scraper/configs.py)

# Code Description
## Import modules:
- datetime: Module for working with dates and times.
- requests: Library for making HTTP requests.
- Connection from ebaysdk.finding: eBay API connection module.
- formatTitle from scraper.formattr: A function for formatting titles (not provided in the code).
## Functions:
1. scrape_amazon(query):
- Scrapes data from Amazon using the Rainforest API.
3. scrape_walmart(query):
- Scrapes data from Walmart using the BlueCart API.
4. scrape_target(query):
- Scrapes data from Target using the RedCircle API.
5. scrape_ebay(query):
- Scrapes data from eBay using the eBay API.
6. scrape_homedepot(query):
- Scrapes data from Home Depot using the BigBox API.
Each function takes a query parameter (the item to look for) and returns a list of dictionaries representing product information (timestamp, title, price, website, link, image, rating).
 ## Configuration:
- CONFIGS: A list containing the configurations for Costco and Best Buy. Each configuration is a dictionary specifying the structure of the web page for a particular retailer.
