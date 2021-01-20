# Travel Tracker
#### Turing School of Software Design - Mod2 Final Solo Project
#### Instructor: David Whitaker

The details of this project are outlined in [this project spec](https://frontend.turing.io/projects/travel-tracker.html)

### Contributors
- Kelly Dinneen : [github profile](https://github.com/kellydinneen)


## Table of Contents
1. [Introduction](#introduction)
2. [Instructions](#setup-instructions)
3. [How-To](#using-whats-cookin)
4. [Challenges & Wins](#challenges-&-wins)
5. [Appreciation](#appreciation)

## Introduction
  In this project we were tasked with creating a website that allows users to schedule and keep track of trips to various destinations. Please follow the [setup instructions](#setup-instructions) below on how to begin!

## Setup Instructions

#### Clone This Repo

That's right, _clone_ not fork. You will use this repo multiple times, but you can only fork a repository once. So here is what you need to do to clone the repo and still be able to push changes to your repo:

1. Clone down this repo. Since you don't want to name your project "webpack-starter-kit", you can use an optional argument when you run `git clone` (you replace the `[...]` with the terminal command arguments): `git clone [remote-address] [what you want to name the repo]`
1. Remove the default remote: `git remote rm origin` (notice that `git remote -v` not gives you back nothing)
1. Create a new repo on GitHub with the name of `[what you want to name the repo]` to be consistent with naming
1. Copy the address that you would use to clone down this repo - something like `git@github.com:...`
1. Add this remote to your cloned down repo: `git remote add origin [address you copied in the previous step]` - do not include the brackets

Now try to commit something and push it up to your new repo. If everything is setup correctly, you should see the changes on GitHub.

#### Setup

After you have gone through the steps of cloning down this repo and editing the remote:
Then install the library dependencies. Run:

```bash
npm install
```

To verify that it is setup correctly, run `npm start` in your terminal. Go to `http://localhost:8080/` and you should see a page with some `h1` text and a pink background. If that's the case, you're good to go. Enter `control + c` in your terminal to stop the server at any time.

## View Our Code in Action
Simply visit our deployed site [here]()

OR

In the terminal, run:

```bash
npm start
```

You will see a bunch of lines output to your terminal. One of those lines will be something like:

```bash
Project is running at http://localhost:8080/
```

Go to `http://localhost:8080/` in your browser to view your code running in the browser.

### Testing

We have created a series of tests for our data model. If you would like to run a few of these tests (or add new features), choose a test file and run `npm test test/[selected test file]` in your terminal.
You will see that we have provided a set test data file to make testing much smoother and easier to read.

[Back to Top of Page](#table-of-contents)

---

## Using the Site as a Traveler

### Logging In
The website loads to a login page where a user can select their name and enter their ID. If this login information is correct, they will be taken to their dashboard upon clicking the "Login" button. HINT: because this is built with a fake data set, anyone testing the site can 'login' for a fake user by entering the ID that matches the order of the user's name in the login dropdown menu. E.g. Click the **1st** name in the dropdown and enter **1** as the ID.

### Scheduling a Trip
From their dashboard, a user can navigate through a form and provide various pieces of information about their trip, including destination, departure date, total number of days, and total number of travelers. When they click the checkmark at the end of this form, their trip will be added to their tripbook and will be marked a 'pending' until travel agent approval.

### 'My Trips' Page
Upon clicking 'My Trips,' a user will be taken to a page with a list of their trips organized by status ('past', 'present', 'upcoming', or 'pending'). At the bottom of this page a user can select a year for which to calculate their total travel spending. By clicking on any trip, the user will be taken to that trip's details, including a picture of the trip's destination.

### Logout
Additionally, their is a search bar. Here a user can search for any recipe by title, ingredients, or tags related to a recipe. This search will filter through the Whats Cookin Cook Book and display any recipes related to the user's serach. If a user uses the search bar while viewing the "My Favorites" tab, the search terms will only filter favorited recipes.

### Viewing Recipe Details
At any time, a user can choose to view a selected recipe in more detail. After clicking `View Recipe`, the user is provdied with a recipe card. The recipe card displays all ingredients and instructions for the selected recipe.

## Using the Site as an Agent

### Logging In
A travel agent can login by clicking the "Agent Login" button at the bottom of the login page, which takes them to the agent dashboar. There is currently no authentication process for the agent, but in a future iteration of this project dealing with any real users, the agent would be required to enter a username and password. 

### Agent Dashboard
The agent dashboard displays all trips, clients, and destinations. An agent can click on any trip to approve it and add suggested activities for the traveler. The agent can return to the login page by clicking 'Logout'.

## Mobile Friendly Responsive Design

In addition to all the functionality above, we made the application completely responsive for mobile, tablet and large screens.

## Appreciation
Thanks to Alia Peterson, who reviewed the code on this project, for keeping me accountable!


[Back to Top of Page](#table-of-contents)


