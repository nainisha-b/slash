# Theme Configuration Documentation

## Overview
The theme configuration defines the color palette for a Material-UI theme in a React application. It includes color values for common, background, primary, secondary, error, and text elements.

## Location of Code
The code for the theme configuration can be found [here](https://github.com/nainisha-b/slash/blob/main/client/src/configs/theme.js).

## Code Description

### Color Palette
1. **Common Colors**
   - Black: `#000`
   - White: `#fff`

2. **Background Colors**
   - Paper: `#fff`
   - Default: `#fafafa`

3. **Primary Colors**
   - Light: `#7986cb`
   - Main: `#3f51b5`
   - Dark: `#303f9f`
   - Contrast Text: `#fff`

4. **Secondary Colors**
   - Light: `rgba(36, 35, 36, 1)`
   - Main: `rgba(1, 0, 11, 1)`
   - Dark: `rgba(31, 30, 31, 1)`
   - Contrast Text: `#fff`

5. **Error Colors**
   - Light: `#e57373`
   - Main: `#f44336`
   - Dark: `#d32f2f`
   - Contrast Text: `#fff`

6. **Text Colors**
   - Primary: `rgba(0, 0, 0, 0.87)`
   - Secondary: `rgba(0, 0, 0, 0.54)`
   - Disabled: `rgba(0, 0, 0, 0.38)`
   - Hint: `rgba(0, 0, 0, 0.38)`

### Theme Creation
1. **createTheme Function**
   - Imported from `@mui/material/styles/createTheme`.
   - Utilized to create the Material-UI theme.

2. **Theme Object**
   - Created using the `createTheme` function.
   - Palette: Configured with common, background, primary, secondary, error, and text colors.

## Usage
1. **Theme Integration:**
   - Apply the theme to the application using the appropriate Material-UI components or the application theme provider.

2. **Customization:**
   - Adjust color values or extend the theme as needed for the specific design requirements.
