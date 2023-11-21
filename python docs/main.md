# About Slash/main.py
Slash, the openly accessible web API framework, empowers you to scour the top e-commerce sites for unbeatable deals on your favorite items across a multitude of online shopping destinations. Currently supported websites include Amazon, Walmart, Target, BestBuy, Costco, EBay and The Home Depot.

The script defines a web API using FastAPI to search and analyze product information from various websites, and it can be run as a standalone application. It also includes functionality for logging queries to a file and exporting results to a CSV file.

# Location of Code for this Feature
The code that implements this feature can be found here

Code Description
Functions
main():

Import modules:
argparse is a standard library for parsing command-line arguments.
tabulate is a library for formatting and displaying tabular data.
scraper is presumably a module or script that contains the scrape function for fetching product information.
Argument Parsing The script uses the argparse module to define command-line arguments. These include:
search: The search query for products.
num: The maximum number of records to fetch (default is 3).
sort: Sorting criteria, where the default is relevance (re). It can also be set to pr for price or ra for rating.
link: A flag to indicate whether to show links in the table.
des: A flag to indicate whether to sort in descending order.
The argparse.ArgumentParser class is used to handle the command-line arguments, and parser.parse_args() is called to parse the command-line arguments provided by the user.
Web Scrapping
The scrape function from the scraper module is called with the parsed command-line arguments (args) and a list of websites to scrape (['walmart', 'amazon', 'costco','bestbuy','ebay']).
The result is stored in the products variable.
Tabulate Display
The tabulate function is used to format and print the scraped product information in tabular form.
Products is assumed to be a list of dictionaries, and headers="keys" is used to use dictionary keys as column headers.
tablefmt="github" specifies the table format for GitHub-flavored markdown.
How to run this file?
