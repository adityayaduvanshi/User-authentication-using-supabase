
# User Authentication App

It is a web application built using React, Supabase, React Router DOM, and Tailwind CSS. It allows users to sign up, login, and reset their password. Upon successful login, the application fetches data from an API and displays it to the user.


## Demo 

Live Link - https://user-supabase.vercel.app/


## Features

- User registration: Users can create new accounts by providing their email and password.
- User authentication: Registered users can log in to their accounts using their credentials.
- Password reset: Users can request a password reset if they forget their password.
- API integration: Upon successful login, the application fetches data from an API and implements lazy loading to dynamically load additional data as the user scrolls. This enhances the user experience by reducing initial loading times and optimizing resource consumption. As the user reaches the bottom of the page, new data is fetched from the API and seamlessly appended to the existing content, allowing for a smooth and uninterrupted browsing experience.


## Technologies Used

- **React:** A JavaScript library for building user interfaces.
- **Supabase:** An open-source Firebase alternative that provides backend-as-a-service functionality.
- **React Router DOM:** A library for routing and navigation in React applications.
- **Tailwind CSS:** A utility-first CSS framework for rapidly building custom user interfaces.
## Installation
 1. Clone the repository:
 ```bash
 https://github.com/adityayaduvanshi/User-authentication-using-supabase.git
 ```
 2. Navigate to the project's root directory.
 3. Install the dependencies by running the following command:
 ```bash
 npm install
```
4. Create a Supabase account and set up your Supabase project.
5. Obtain your Supabase project URL and anon key.
6. Create a `.env` file in the project's root directory.
7. Set the following environment variables in the `.env` file:
```bash
REACT_APP_SUPABASE_URL=your-supabase-project-url
REACT_APP_SUPABASE_ANON_KEY=your-supabase-anon-key
REACT_APP_BASE_URL=your-project-base-url
```
8. Run the application by executing the following command:
```bash
npm start
```
9. Open your web browser and visit `http://localhost:3000` to access the application.
## Contact

- Email: aditya.yadsr@gmail.com
- Twitter: @fixslyr
- Portfolio - https://adityayads.vercel.app
