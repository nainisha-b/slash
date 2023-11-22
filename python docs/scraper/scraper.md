# About Slash/scraper.py
Slash, the openly accessible web API framework, empowers you to scour the top e-commerce sites for unbeatable deals on your favorite items across a multitude of online shopping destinations. Currently supported websites include Amazon, Walmart, Target, BestBuy, Costco, EBay and The Home Depot.

The script defines a module named formatter that contains several functions for processing and formatting scraped data from HTML code. Overall, these functions provide utility for processing and formatting data extracted from HTML during web scraping.

# Location of Code for this Feature
The code that implements this feature can be found [here](https://github.com/nainisha-b/slash/blob/main/src/scraper/formattr.py)

# Code Description
## Functions:
1. formatResult function:
- Takes the scraped HTML elements (titles, prices, links, images, ratings) and extracts relevant information to create a dictionary representing a product.
- Handles cases where certain HTML elements might be missing or have unexpected structures.
- Calls formatTitle to clean up and limit the length of the product title.
- Returns a dictionary with timestamp, formatted title, price, link, website, image, and rating.
2. sortList function:
- Used to sort a list of product dictionaries based on specified criteria.
- Currently, it supports sorting by price, and there is a placeholder for sorting by rating (which is not implemented yet).
3. formatSearchQuery and formatSearchQueryForCostco functions:
- These functions format a search string for URL parameters.
- formatSearchQuery replaces spaces with '+' in the search string.
- formatSearchQueryForCostco splits the query into words, concatenates them with '+', and removes the trailing '+'.
4. formatTitle function:
- Cleans up titles extracted from HTML code by unescaping HTML entities.
- Truncates titles longer than 40 characters and appends '...' to the end.
5. getNumbers function:
- Extracts float values (such as prices) from a string by iterating through each character and keeping only numeric and '.' characters.
- Converts the extracted string to a float and returns the result. If the conversion fails, it returns positive infinity.
 
