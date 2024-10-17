# BudgetPlan

This project is a **Mobile Web Application** designed to help users manage their personal budget effectively. Users can register and log in, ensuring their data remains private and secure. Once authenticated, they can create categories like "Groceries," and log their transactions under each category.

![Screenshot](./website/static/img/proactivee.png)


## 📝 Table of Contents

- [Usage](#usage)
- [Features](#features)
- [How It Works](#how-it-works)
- [Installation](#installation)
- [Technologies](#technologies)
- [Deployed site](#deployed-site)
- [Contributing](#contributing)
- [License](#license)

## Usage 

### Features
1. **🔐 Sign Up / Log In**: Create a new account or log in with existing credentials to access your personal budget data.

2. **🗂️ Create Categories**: Add new budget categories like "Groceries", "Transport", "Utilities", etc. This helps you organize your expenses.

3. **💸 Add Transactions**: Within each category, you can log your transactions, specifying details such as amount and description.

4. **📝 Manage Transactions**: View and delete any transaction to keep your budget up-to-date.

5. **🗑️ Delete Categories**: Remove any category and its associated transactions when they are no longer needed.

6. **👁️ Track Expenses**: Monitor your income and expenses under different categories, helping you make informed financial decisions.

7. **🚪 Logout**: Sign out of your account to keep your data safe and secure.

### How It Works

- **Register and log in**: Ensuring that the data remains private to them.

- **Create categories**: Users can create specific categories (e.g., "Groceries," "Entertainment") to organize their transactions.

- **Introduce new transactions**: Users can associate these transactions with specific categories.

- **See the money spent on each category**: Users can view the total spending in each category, providing a clear overview of spending habits.

## Installation

🛠 To get started with the app, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Mwan3kii/Budget-management-system.git
   ```
   ```
   cd Budget-management-system
   ```
## For backend setup
2. **Navigate to the backend folder**:
```
cd backend
```
3. **Install the required packages**:
```
npm install
```
4. **Setup your environment variables for the database and authentication in a **.env** file**:
```
PORT=''
DATABASE_URL=''
NODE_ENV = DEVELOPMENT
COOKIE_EXPIRATION_TIME = 'cookie_expiration_time'
JWT_EXPIRES_TIME = 'expiration_time'
JWT_SECRET='your_jwt_secret'
```
5. **Start the backend server**:
```
npm start
```
## For frontend setup
6. **Navigate to the frontend folder**:
```
cd frontend
```
7. **Install the required packages:**
```
npm install
```
8. **Start the development server:**
```
npm start
```
9. **Access the app in your browser**
```
http://localhost:3000
```
### Deployed site:
- **Deployed Site**: [BudgetPlan](https://proactive-crime-site.onrender.com/)

## Technologies

- **Frontend**:
  - React
  - Axios
  - Bootstrap / CSS styling

- **Backend**:
  - Node.js
  - Express
  - Mysql
  - JWT for authentication

## Contributing

Contributions are welcome!🤝 If you'd like to collaborate or propose improvements, feel free to submit a pull request. Please make sure to:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Submit your changes with a clear commit message.

## License

This project is licensed under the MIT License📄. See the [LICE
NSE](LICENSE) file for details.

