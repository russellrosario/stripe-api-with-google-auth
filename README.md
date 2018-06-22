# MERN Starter App 🚀

### Fully functional boilerplate code based on the MERN stack (MongoDB, Express, React/Redux, Node). Minimal configuration, rapid deployment, and...
* Secure login system using Auth0
* Minimal implementation of React, Redux, and React Router
* Landing page acts as a project to-do list using MongoDB and basic CRUD functionality
* Development and production environment already configured for testing and deploying to Heroku

#### Delete what you don't need. Or build on top and create a fully functional app in minutes.

## To Do
* Remove google auth and replace with Auth0
  * '/' says login or hello {user}
  * '/login' redirects to '/tasks' screen
* Navbar contains title, tasks
  * Links use react router
* Redux for tasks
  * CRUD functionality that goes through authentication middleware
* Add basic server and client Jest tests
  * it renders without crashing
  * it posts a task to the server
* Prettify with materialize
* Update readme with video guide and instructions
  * install, heroku deploy, mlab addon, and config.example.js
