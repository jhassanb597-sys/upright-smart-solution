# Upright Smart Solution — Karachi Real Estate Marketplace

A clean, responsive, multi-page real estate marketplace built exclusively for **Karachi, Pakistan**, inspired by the modern UI/UX and crimson-and-white visual identity of **Graana.com**.

## Project Structure

```text
karachi-real-estate-marketplace/
├── index.html              # Home page: Hero tabbed search, categories, featured Karachi listings & area guides
├── listings.html           # Interactive Karachi search results with live society, type, budget & size filtering
├── property-details.html   # Detailed listing view: gallery, specs, amenities, PKR mortgage calculator & agent form
├── css/
│   └── style.css           # Custom Graana-inspired palette variables, hover transitions & PKR slider styles
├── js/
│   └── app.js              # Karachi property dataset, filter engine, LocalStorage favorites & mortgage math
└── README.md               # Quick setup instructions
```

## How to Run in VS Code

1. Extract the ZIP archive and open the `karachi-real-estate-marketplace` folder in **VS Code**.
2. Install or enable the **Live Server** extension (`ritwickdey.LiveServer`).
3. Right-click `index.html` and select **Open with Live Server** (or simply double-click `index.html` in your browser—no Node.js or build step required).

## Key Features Included

- **Karachi-Exclusive Inventory**: 12 realistic properties across **DHA Karachi (Phases 6 & 8)**, **Clifton (Blocks 2 & 4)**, **Bahria Town Karachi (Precinct 10A)**, **PECHS**, **Gulshan-e-Iqbal**, **Scheme 33**, **North Nazimabad**, and **Malir Cantt**.
- **Tabbed Hero Search & Live Filtering**: Switch between **Buy**, **Rent**, and **Projects**, and filter dynamically by Karachi society, property type, PKR budget (Lakh/Crore), and area size (Sq. Yards / Marla / Kanal).
- **Persistent Favorites Shortlist**: Save/unsave properties using the heart button; saved items persist in `localStorage` and can be filtered on `listings.html`.
- **Interactive PKR Home Loan / Mortgage Calculator**: Adjust property price, down payment percentage, loan tenure (years), and annual KIBOR markup rate to compute monthly installments in PKR.
