# PickupNYC

**CodePath WEB103 Final Project**

**Designed and developed by:** Jawad Rada, Mubarak Odufade, Patrick Lisiecki

**Link to deployed app:**

## About

### Description and Purpose

This project is designed to be a platform where users can create, edit, update, and delete posts for organizing local pickup soccer matches.

The app will also feature a forum for user interactions, and for viewing user posts and upcoming games.

Additionally, it includes a news feed to keep users informed on the latest updates about teams and players, and 

### Inspirations

The inspiration behind this app is to foster an open and welcoming sports community by giving users access to local soccer pickup and sports events in their localities.

## Tech Stack

**Frontend:** React, Tailwind CSS

**Backend:** Node.js, Express.js, (Flask or AWS Lambda), PostgreSQL

**Machine Learning:** Python, NumPy, Pandas, Matplotlib, Seaborn, Scikit-learn

**Developer Tools:** Git, GitHub, Figma, Postman

### Features

- **User Authentication**: Secure login and registration system to allow users to create and manage accounts.

- **Payment Processing**: Integration with Stripe for handling secure payments and transactions.

- **Data Visualizations and Insights**: Interactive charts and graphs providing detailed analysis of team and player performance.

- **Machine Learning Match Predictor**: A predictive tool that forecasts the outcome of Premier League matches.

- **Soccer News Feed**: A real-time feed delivering the latest updates on teams, players, and match events.

- **Pickup Game Organizer**: A platform where users can create posts to arrange local pickup soccer matches with other players.

## Video Demo

## Container Diagram
<img width="1425" alt="Screenshot 2024-10-22 at 11 03 05 PM" src="https://github.com/user-attachments/assets/13bd92e9-60a2-429c-931e-de9f2ad761f9">


## Installation Instructions

### 1. **Clone the repository from GitHub:**

```bash
git clone <repository-url>
```
Replace `<repository-url>` with the URL of the repository.

### 2. **Navigate into the project folder:**

```bash
cd <project-folder>
```
Replace `<project-folder>` with the name of the folder that was cloned.

### 3. **Install dependencies for both React (frontend) and Node.js (backend):**

**For the frontend:**

Navigate into the React folder:
```bash
cd client
```

Install dependencies:

```bash
npm install
```

**For the backend:**

Navigate into the backend folder:

```bash
cd ../server
```

Install backend dependencies:

```bash
npm install
```

### 4. **Set up environment variables (if required):**

Check for a `.env.example` file in the root, backend, or frontend folder. Copy it to create your own `.env` file:

```bash
cp .env.example .env
```
Then, fill in any required environment variables.


### 5. **Run the backend server:**

```bash
cd server
npm start
```

### 6. **Run the frontend client:**

```bash
cd client
npm run dev
```
