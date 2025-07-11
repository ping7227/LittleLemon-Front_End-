# Little Lemon Restaurant Website

This repository contains the source code for the Little Lemon restaurant website, a modern, responsive web application built with React. The platform allows users to browse the menu, learn about the restaurant, and reserve a table for a delightful dining experience.

## Features

*   **Responsive Design:** The layout is fully responsive and adapts seamlessly to desktop, tablet, and mobile devices.
*   **Online Reservations:** A complete booking form that allows users to reserve a table. The form includes client-side validation to ensure all required fields are filled correctly.
*   **Dynamic Time Slots:** Available booking times are dynamically updated based on the selected date.
*   **Engaging Home Page:** Features a hero section, weekly specials, customer testimonials, and an "About Us" section to provide a rich user experience.
*   **Client-Side Routing:** Utilizes `react-router-dom` for fast and seamless navigation between pages without full-page reloads.

## Technologies Used

*   **React:** A JavaScript library for building user interfaces.
*   **React Router:** For handling client-side routing and navigation.
*   **HTML5 & CSS3:** For structuring and styling the application, including modern features like CSS Grid.
*   **Jest & React Testing Library:** For running unit tests on components and functionality.

## Getting Started

To get a local copy up and running, please follow these simple steps.

### Prerequisites

Make sure you have Node.js and npm (Node Package Manager) installed on your machine. You can download them from [nodejs.org](https://nodejs.org/).

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/little-lemon-website.git
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd little-lemon-website
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    ```

4.  **Run the development server:**
    ```bash
    npm start
    ```
    This will launch the application in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will automatically reload if you make any edits.

## Available Scripts

In the project directory, you can run the following commands:

*   `npm start`: Runs the app in development mode.
*   `npm test`: Launches the test runner in interactive watch mode.
*   `npm run build`: Builds the app for production into the `build` folder.

## Project Structure

*   **`/public`**: Contains the main `index.html` file, favicon, and other static assets.
*   **`/src`**: Contains the main application source code.
    *   **`/components`**: Reusable React components that make up the user interface (e.g., `Nav`, `Footer`, `BookingForm`).
    *   **`/images`**: Static image assets used throughout the site.
    *   **`api.js`**: A mock API file that simulates fetching and submitting data, such as available booking times.
    *   **`App.js`**: The root component that sets up the main structure and routing.
    *   **`App.css`**: The global stylesheet for the application.