# Portfolio


# USER STORY

AS AN employer looking for candidates with experience building single-page applications
I WANT to view a potential employee's deployed React portfolio of work samples
SO THAT I can assess whether they're a good candidate for an open position

### Accepence Criteria

* GIVEN a single-page application portfolio for a web developer
WHEN I load the portfolio
THEN I am presented with a page containing a header, a section for content, and a footer
* WHEN I view the header
THEN I am presented with the developer's name and navigation with titles corresponding to different sections of the portfolio
* WHEN I view the navigation titles
THEN I am presented with the titles About Me, Portfolio, Contact, and Resume, and the title corresponding to the current section is highlighted
* WHEN I click on a navigation title
THEN I am presented with the corresponding section below the navigation without the page reloading and that title is highlighted
* WHEN I load the portfolio the first time
THEN the About Me title and section are selected by default
* WHEN I am presented with the About Me section
THEN I see a recent photo or avatar of the developer and a short bio about them
* WHEN I am presented with the Portfolio section
THEN I see titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repository
* WHEN I am presented with the Contact section
THEN I see a contact form with fields for a name, an email address, and a message
* WHEN I move my cursor out of one of the form fields without entering text
THEN I receive a notification that this field is required
* WHEN I enter text into the email address field
THEN I receive a notification if I have entered an invalid email address
* WHEN I am presented with the Resume section
THEN I see a link to a downloadable resume and a list of the developer’s proficiencies
* WHEN I view the footer
THEN I am presented with text or icon links to the developer’s GitHub and LinkedIn profiles, and their profile on a third platform (Stack Overflow, Twitter)

# Table of Contents
[User Story](https://github.com/Blushiva/Portfolio/tree/main#user-story)

[Acceptence Criteria](https://github.com/Blushiva/Portfolio/tree/main#accepence-criteria)

[Table of Contents](https://github.com/Blushiva/Portfolio/tree/main?tab=readme-ov-file#table-of-contents)

[Resources](https://github.com/Blushiva/Portfolio/tree/main?tab=readme-ov-file#resources)

[Available Scripts](https://github.com/Blushiva/Portfolio/tree/main?tab=readme-ov-file#available-scripts)


# Resources

[How to Build a Portfolio](https://medium.com/@keilalofra/building-a-portfolio-using-create-react-app-and-netlify-fed783f8b6cf)

[How to Build a Portfolio in React](https://www.youtube.com/watch?v=YQCDUJ6hhNY)



## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


# Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.


### Getting Started On Assignment

The application that you built for this module will help you know where to start when building your portfolio. You’ll use Create Vite just as you did with your module project, but you should be aware of a few structural differences in the component hierarchy. Your portfolio should include the following:

* A single Header component that appears on multiple pages
* A single Navigation component within the header that will be used to render the different sections of your portfolio
* A single Project component that will be used multiple times in the Portfolio section
* A single Footer component that appears on multiple pages

#### NOTE

The contact form should be similar to the one you built in the module project. Because this application doesn’t include a back end or connect to an API, you can set up this functionality the same way you did in the module project and add in back-end functionality after you’ve covered it in the next few modules.

In the meantime, consider adding your email address and phone number on the Contact page.

### Projects

For each project you feature in your portfolio, you should include the following:

* An image of the deployed application (either a GIF or a screenshot)
* The title of the project
* A link to the deployed application
* A link to the corresponding GitHub repository

### Design

As with the previous portfolio Challenge, remember that "good" design is subjective; however, your site should look polished. Here are a few guidelines on what that means:

* Use mobile-first design.

* Choose a color palette so that your site doesn't just look like the default Bootstrap theme or an unstyled HTML site. Look into resources like Coolors Links to an external site. or another color scheme generator to help you create something that will stand out.

* Make sure the font size is large enough to read and that the colors don't cause eye strain.

* Consider using animations and React component libraries. Note that this will not affect your grade, but it may impact how potential employers gauge your knowledge.

### Grading Requirements

#### NOTE

*If a Challenge assignment submission is marked as "0", it is considered incomplete and will not count towards your graduation requirements.

#### Examples of incomplete submissions include the following:

* A repository that has no code
* A repository that includes a unique name but nothing else
* A repository that includes only a README file but nothing else
* A repository that only includes starter code

#### This Challenge is graded based on the following criteria:

#### Technical Acceptance Criteria: 40%

Satisfies all of the preceding acceptance criteria plus the following:
Application must use React to render content.
Application has a single Header component that appears on multiple pages, with a Navigation component within it that uses react-router-dom to render About Me, Portfolio, Contact, and Resume sections.
Application has a single Project component that’s used multiple times in the Portfolio section.
Application has a single Footer component that appears on multiple pages.
Application must be deployed to Netlify.

#### Deployment: 32%

Application deployed at live URL.
Application loads with no errors.
Application GitHub URL submitted.
GitHub repository contains application code.

#### Application Quality: 15%

* User experience is intuitive and easy to navigate.
* User interface style is clean and polished.
* Application uses a color scheme other than the default Bootstrap color palette.

#### Repository Quality: 13%

* Repository has a unique name.
* Repository follows best practices for file structure and naming conventions.
* Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.
* Repository contains multiple descriptive commit messages.
* Repository contains a high-quality README file with description, screenshot, and link to deployed application.
* How to Submit the Challenge

#### You are required to submit BOTH of the following for review:

* The URL of the functional, deployed application.
* The URL of the GitHub repository, with a unique name and a README describing the project.
