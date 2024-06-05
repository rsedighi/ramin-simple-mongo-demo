# MongoDB with Netlify Functions

This project demonstrates how to build a web application using Netlify serverless functions and MongoDB. The application displays movie data fetched from a MongoDB database, with a paginated interface and smooth transitions between pages.

## Features

- Display movie posters, titles, and review counts.
- Paginated movie listing.
- Smooth transitions for navigating between pages.
- Dynamic background colors for each movie box.

## Technologies Used

- HTML, CSS, JavaScript
- Netlify Functions
- MongoDB

## Getting Started

### Prerequisites

- Node.js and npm
- A MongoDB Atlas account
- A Netlify account

### Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory and add the following variables:
    ```env
    MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority
    MONGODB_DATABASE=<your-database-name>
    MONGODB_COLLECTION=<your-collection-name>
    ```

### Running Locally

1. **Start the development server:**
    ```bash
    netlify dev
    ```

2. **Open your browser and visit:**
    ```
    http://localhost:8888
    ```

### Deployment

1. **Push your changes to GitHub:**
    ```bash
    git add .
    git commit -m "Initial commit"
    git push origin main
    ```

2. **Deploy to Netlify:**

   - Log in to your Netlify account.
   - Create a new site from Git.
   - Connect your GitHub repository.
   - Set the build command to `npm run build` (if applicable).
   - Set the publish directory to `build` (if applicable).
   - Add the same environment variables from your `.env` file to your Netlify site settings.
