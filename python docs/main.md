# About Slash/main.py
Slash, the openly accessible web API framework, empowers you to scour the top e-commerce sites for unbeatable deals on your favorite items across a multitude of online shopping destinations. Currently supported websites include Amazon, Walmart, Target, BestBuy, Costco, EBay and The Home Depot.

The script in the main.py file describes a web API using FastAPI to search and analyze product information from various websites, and it can be run as a standalone application. It also includes functionality for logging queries to a file and exporting results to a CSV file.

# Location of Code for this Feature
The code that implements this feature can be found [here](https://github.com/nainisha-b/slash/blob/main/src/main.py)

# Code Description
Import modules:
- uvicorn: A lightweight ASGI server for running FastAPI applications.
- FastAPI: A modern, fast (high-performance), web framework for building APIs with Python 3.7+.
- CORSMiddleware: Middleware for handling Cross-Origin Resource Sharing (CORS).
- RedirectResponse, FileResponse: Classes for creating specific types of responses.
- BaseModel: A base class for creating data models using Pydantic.
- csv: A module for reading and writing CSV files.
- scraper.scraper as scr: Importing the scraper module (presumably for web scraping).
# Functions
1. FastAPI Application Initialization:
 - Initializes a FastAPI application.   
2. CORS Middleware Configuration:
-  Configures CORS middleware to allow requests from the specified origins.
3. Root Endpoint
- Defines a root endpoint that redirects to the API documentation (/redoc).
4. Search Endpoints API:
- Defines an endpoint (/{site}/{item_name}) for searching items across various websites.
- Uses the scraper module to fetch results based on the provided parameters.
5. Analysis - Variety Count API Endpoint:
- Defines an endpoint (/analysis/varietyCount/all/{item_name}) for analyzing the count of varieties for a particular item across different websites.
6. Analysis - Top Cost API Endpoint:
- Defines an endpoint (/analysis/topCost/all/{item_name}) for analyzing the top lowest and highest prices of an item across different websites.
7. Helper Functions:
- getItemInfoByItemName: Fetches item information from various websites.
- getVarietyCountByWebsite: Counts the number of varieties for a particular item across different websites.
- getLowestHighestPriceByWebsite: Determines the top lowest and highest prices of an item across different websites.
- getFloatPrice: Helper function to extract a floating-point price from a string.
8. Application Entry Point:
- Runs the FastAPI application using the UVicorn server on http://0.0.0.0:8000.


# How to run this file?
