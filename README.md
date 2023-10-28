# Advice Slip Search

Welcome to the Advice Slip Search, a web application that allows you to search for and discover insightful advice on various topics. Whether you need motivation, inspiration, or simply some good old advice, this app has you covered.

This project is built using React and integrates with the Advice Slip API to fetch advice slips based on your search queries. It also utilizes React Bootstrap to enhance the user interface.

You can explore the live version of this project on [GitHub Pages](https://gustavoluche.github.io/advice-slip-search/).

## Project Structure

The project is organized into the following directories:

  ```bash
  src/
  |-- components/
  |   |-- AdviceList.js
  |   |-- ErrorMessage.js
  |   |-- Footer.js
  |   |-- Greeting.js
  |   |-- Header.js
  |   |-- Paginator.js
  |   |-- Search.js
  |   |-- SearchInfo.js
  |   |-- SpinnerLoading.js
  |-- context/
  |   |-- AdviceContext.js
  |-- services/
  |   |-- adviceService.js
  |-- App.css
  |-- App.js
  |-- index.js
  ```

## Getting Started

To get started with this project, follow the instructions below.

### Prerequisites

Before you begin, ensure you have the following tools installed:

- [Node.js](https://nodejs.org/): Make sure you have Node.js installed on your machine.

### Installation

1. Clone the repository to your local machine using:

  ```bash
  git clone https://github.com/GustavoLuche/advice-slip-search.git
  ```
  
2. Navigate to the project's root directory:

  ```bash
  cd advice-slip-search
  ```
  
4. Install project dependencies:

  ```bash
  npm install
  ```
  
### Usage

You can run the app locally by executing the following command:

  ```bash
  npm start
  ```

This will start the development server, and you can access the app in your web browser at http://localhost:3000.

The app is simple to use:

- Start by entering a search term in the search bar and press Enter or click the Search button.
- The app will fetch and display advice slips related to your search term.
- You can navigate through the results using the pagination controls.

### Deployment

To create a production build of the app, use the following command:

  ```bash
  npm run build
  ```

This will optimize your app for production and create a build folder. You can then deploy the app to a web server or hosting service. For example, you can easily deploy it to GitHub Pages using the gh-pages module.

### Customization

If you want to customize or extend this app, you have full control over the source code. You can modify the components, styles, or even add additional features.

## Technologies Used

- [React](https://react.dev/): A JavaScript library for building user interfaces.
- [React Bootstrap](https://react-bootstrap.netlify.app/): A library that provides Bootstrap components for React.
- [Bootstrap](https://getbootstrap.com/): A front-end framework for responsive web design.
- [Advice Slip API](https://api.adviceslip.com/): The API that provides the advice slips for this app.

## Acknowledgments

Thanks to the creators of the [Advice Slip API](https://api.adviceslip.com/).

If you have any questions or suggestions, please feel free to [create an issue](https://github.com/GustavoLuche/advice-slip-search/issues/new). We appreciate your feedback and contributions.
