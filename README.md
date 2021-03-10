# PR Exercise

Imagine you just joined a new dev team and one of your teammates wants to merge in a PR that adds a resuable table to the codebase. Your task is to review this PR as you normally would.

Assume that this code will go out to production after your review. Take into consideration that this code needs to meet enterprise standards in terms of how well it scales, how accessible it is, how resiliant to errors it is, how it behaves, and how it looks. Ask yourself, what would you change abut this PR knowing that this code is going out to 10 million people?  

It is up to you to find and raise any and all concerns you may have with this PR. Everything here is fair game, from large refactors to tiny nit-picks, even style improvements are welcome. Nothing is off limits, consider as many edge cases as you think is appropriate. Whatever you think is important to change / conciosuly consider going forward is exactly what we want to hear.  

In addition to the problems you find in this PR, we are also interested in learning how you communicate these change requests to other humans so please be your authentic self in your comments and assume someone will work with this feedback. 

Developer Story:

As a user, I need to see a table of pokemon so that I know their stats.

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
