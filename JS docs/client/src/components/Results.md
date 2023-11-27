# Results Component Documentation

## Overview
The `Results` component is a React functional component that displays search results in a table format. It utilizes Material-UI components for styling and incorporates features such as sorting, pagination, and currency conversion. The displayed results include essential information such as the item's image, timestamp, title, price, website, link, and rating. Users can add items to their wishlist (cart) from this page.

## Location of Code
The code for the Results component can be found [here](https://github.com/nainisha-b/slash/blob/main/client/src/components/Results.js).

## Code Description

### State Management
1. **State Hooks**
   - `useState`: Manages various component states, including `order`, `orderBy`, `page`, `rowsPerPage`, `cart`, `selectedCurrency`, and `minRating`.

### Material-UI Components
1. **Table Components**
   - Material-UI `Table`, `TableHead`, `TableRow`, `TableCell`, `TableSortLabel`, `TableContainer`, `TableBody`, and `TablePagination` components are used to structure and display the search results in a tabular format.

2. **Typography, Box, and Paper Components**
   - Material-UI `Typography`, `Box`, and `Paper` components are used for various styling and layout purposes.

3. **Button Component**
   - Material-UI `Button` component is used to trigger the "Add to Wishlist" action.

4. **Grid Component**
   - Material-UI `Grid` component is used for creating a responsive grid layout to display search results.

5. **Card and CardMedia Components**
   - Material-UI `Card` and `CardMedia` components are used to create a card-based layout for each search result, including the item's image and essential details.

### Currency Selector
1. **CurrencySelector Component**
   - A custom `CurrencySelector` component handles the selection of the desired currency for price display.

### Exchange Rates
1. **Exchange Rates Fetching**
   - Exchange rates are fetched from an external API (`https://open.er-api.com/v6/latest`) using the `axios` library.

### Sorting and Pagination
1. **Sorting Logic**
   - The `descendingComparator`, `getComparator`, and `stableSort` functions handle sorting logic based on the selected column.

2. **Pagination Logic**
   - The `handleChangePage` and `handleChangeRowsPerPage` functions manage the page and rows per page state.

### Wishlist (Cart) Integration
1. **Cart Context**
   - The `useCart` hook from a Cart context is utilized to add items to the wishlist (cart).

### Rating Filter
1. **Rating Filter**
   - Users can set a minimum rating to filter search results based on the specified criteria.

### Responsive Layout
1. **Grid Layout**
   - The `Grid` component is used to create a responsive layout for search results, adapting to different screen sizes.

## Usage
1. **Integration with Routes or Components:**
   - Integrate the `Results` component into your React application, typically as part of a routing system or within a larger component structure.

2. **Currency Selection:**
   - Users can select their desired currency from the dropdown menu provided by the `CurrencySelector` component.

3. **Min Rating Filter:**
   - Users can set a minimum rating to filter search results.

4. **Adding to Wishlist:**
   - Click the "Add to Wishlist" button to add items to the wishlist (cart).
