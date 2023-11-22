# About Slash/scraper.py
Slash, the openly accessible web API framework, empowers you to scour the top e-commerce sites for unbeatable deals on your favorite items across a multitude of online shopping destinations. Currently supported websites include Amazon, Walmart, Target, BestBuy, Costco, EBay and The Home Depot.

This code is part of a web scraping script that extracts product information from various e-commerce websites based on user-provided search queries. The script allows the user to search for products on multiple e-commerce websites, retrieve and format the product information, and then sort and filter the results based on specified criteria. The BeautifulSoup library is used for HTML parsing, and the requests library is used for making HTTP requests.

# Location of Code for this Feature
The code that implements this feature can be found [here](https://github.com/nainisha-b/slash/blob/main/src/scraper/scraper.py)

# Code Description
## Functions:
1. httpsGet function:
- Takes a URL as input and makes an HTTP GET request with custom headers.
- Uses the requests library to fetch the page content.
- If the response status code is 200 (OK), it parses the HTML content using BeautifulSoup and returns the BeautifulSoup object.
- Otherwise, it returns None.
2. search function:
- Takes a search query and a configuration dictionary for a specific website as input.
- Formats the search query based on the website (e.g., Costco requires a special formatting).
- Constructs the URL using the provided configuration and the formatted query.
- Calls httpsGet to fetch the HTML content of the page.
- Parses the HTML content to extract product information based on the configuration.
- Uses the form.formatResult function to format the extracted data into a consistent product format.
- Returns a list of products.
3. scrape function: 
- Takes a dictionary of arguments (args) and a list of scraper names (scrapers) as input.
- Iterates over each scraper name in the list and calls the corresponding scraper function (scrape_walmart, scrape_amazon, etc.) or the generic search function for sites 
   like Costco and Best Buy.
- Applies sorting and limits the number of results based on the user-provided arguments.
- Combines the results from all scrapers into a single list (overall) and performs sorting again.
- Returns the final list of products.
 
