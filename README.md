# burgerApp

> Build your own burger, watch the price update live, and place an order that is saved to **Firebase**.

![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=flat&logo=firebase&logoColor=black)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

## Features

- add and remove **salad, bacon, cheese and meat**, and see the burger change as you build it
- the total price is recalculated on every change (base price $4.00)
- the order button is only active once the burger has at least one ingredient
- an order summary modal lists the ingredients and price before checkout
- the starting ingredients are loaded from, and orders are sent to, a **Firebase Realtime Database** with axios
- loading spinner while requests are running, and a reusable error-handling HOC that shows failed requests in a modal
- responsive layout with a toolbar on desktop and a side drawer on mobile

## Tech stack

React 16 (class components) · axios · Firebase Realtime Database · CSS Modules · Create React App

## Run locally

```bash
npm install
npm start          # dev server on http://localhost:3000
npm run build      # production build
```

## Structure

```
src/
├── containers/Burger Builder/   # state: ingredients, price, ordering
├── components/
│   ├── Burger/                  # burger preview, ingredients, build controls, order summary
│   ├── Navigation/              # toolbar, side drawer
│   ├── UI/                      # modal, backdrop, button, spinner
│   └── Layout/  Logo/
├── hoc/withErrorHandler/        # global axios error modal
└── axios-orders.js              # axios instance for Firebase
```
