# PR Exercise

Imagine you just joined a new dev team and one of your teammates wants to merge in a PR that adds a resuable table to the codebase. Your task is to review this PR as you normally would.

Assume that this code will go out to production after your review. Take into consideration that this code needs to meet enterprise standards in terms of:
1) Scalability
2) accessibility
3) Resiliency
4) Modern software behavior
5) Visual completion and easthics

With this in mind, what would you change abut this PR knowing that this code is going out to 10 million people?  

It is up to you, brave developer, to find and raise any concern you may have with this PR. Everything here is fair game, from large refactors to tiny nit-picks, even style improvements are welcome. Nothing is off limits, consider as many edge cases as you think is appropriate. At the end of the day, whatever feedback you have on this PR is exactly what we want to hear. 

In addition to the problems you find in this PR, we are also interested in learning how you communicate these change requests to other humans so please be your authentic self in your comments and assume someone will work with this feedback. 

P.S. there are many known bugs in this pull request so be sure to identify as many as you can. Best of luck and *you got this*!

Developer Story:

As a user, I need to see a table of pokemon so that I know their stats.

Design Mock Up:

No mock up. It is up to you to determine if this table component meets basic expectations. 

The AC for this ticket:

- Table should be accessible and usable
- Table should scale well to handle *lots* of data
- Table should be pleasant to look at
- Table should be built in such a way that it can be reused 
- Table should fail gracefully
- Table should handle all possible states associated with it
- Table should be extensible. We know that on the road map we have stories for adding:
    - filtering
    - pagination
    - sorting

-----

# Grading

There is an excel spreadsheet in this repo which lists all 34 known bugs. Each bug is filed under a different category of knowledge. The relevant code is mentioned in each known bug, so you should be able to do a string
search on the excel doc to find the line item for each bug.

There are three categories of scoring; Noticed, Thoughtfully Addressed, Bonus Points.

Noticed: Candidate identified the issue and made note of it in the PR

Toughtfully Addressd: Candidate not only identified issue but offered insight and guidance, maybe even a solution, or explanation of why the bug exists.

Bonus Points: Anything about this particular comment that went above and beyond? Did they communicate kindly and with empathy? etc.

For each box a candidate ticks of the Noticed - Bonus Points columns, candidates will recieve one point.

Candidates need a score of at least 34-50 to pass.

-----

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).