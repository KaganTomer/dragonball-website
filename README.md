# Dragon Ball Fan Website

A full-stack fan website for the Dragon Ball series, built from scratch as a school project.
Users can register, log in, read about the series' characters, take a quiz and browse a gallery. An admin area lists all registered users.

## Features

- **Registration and login:** user accounts stored in a SQL Server database, with session-based authentication
- **Client-side validation:** every registration field is validated in JavaScript (ID number, names, email, password strength and confirmation, birth date, phone and more)
- **Access control:** pages for logged-in users only, an admin-only page, and redirect pages for unauthorized access
- **Admin area:** a table of all registered users
- **Account deletion:** users can delete their own account
- **Character pages:** 12 characters, each with its own page and styling
- **Interactive quiz:** a 5-question image-based quiz with a final score
- **Gallery** of images from the series
- **Active users counter** kept at the application level

## Tech Stack

- **Backend:** C#, ASP.NET Web Forms (.NET Framework 4.7.2)
- **Database:** SQL Server LocalDB
- **Frontend:** HTML, CSS, JavaScript

## Running Locally

1. Open `Dragonball_final1.sln` in Visual Studio (with the *ASP.NET and web development* workload installed).
2. Restore NuGet packages if prompted (right-click the solution → *Restore NuGet Packages*).
3. Run the project (F5). The database (`App_Data/Database1.mdf`) is attached automatically through LocalDB.

## Test Accounts

The included database contains sample accounts for testing only:

| Role  | Email           | Password  |
|-------|-----------------|-----------|
| User  | test@test.com   | Test123!  |
| User  | test2@test.com  | Test456@  |
| Admin | admin@admin.com | Admin123! |

## Notes

This is a learning project and is meant to run locally. Database queries that take user input use parameterized SQL to prevent SQL injection. Passwords are stored in plain text for simplicity; a production version would store salted hashes (e.g. PBKDF2 or BCrypt) instead.

Some pages (such as *Mechanics & Techniques* and *The Series*) are still under construction.
