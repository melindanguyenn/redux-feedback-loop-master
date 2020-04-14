# Redux Feedback Loop

## Description

Create an app that takes in a user's feedback and display it on a review page before submission. The feedback form will include 5 pages (feelings, understanding, support, comments, and review) along with a "thank you" page. Once the information has been submitted, it should be stored in the database.

## Setup

Create a new database named `prime_feedback`, then create the following table.

```SQL
CREATE TABLE "feedback" (
  "id" serial primary key,
  "feeling" INT not null,
  "understanding" INT not null,
  "support" INT not null,
  "comments" text,
  "flagged" boolean default false,
  "date" date not null default CURRENT_DATE
); 
```

Once the database has been created, run the following commands.

```
npm install
npm run server
npm run client
```

## Technologies Used

- React
- Node
- SQL
- Express
- CSS
