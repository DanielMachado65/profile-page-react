# Profile Page React

A React profile page application configured for deployment to GitHub Pages.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run deploy`

Deploys the app to GitHub Pages. This command will:
1. Run `npm run build` (predeploy script) to create an optimized production build
2. Deploy the build folder to the `gh-pages` branch of your repository

To deploy your app to GitHub Pages, simply run:

```bash
npm run deploy
```

The app will be available at: https://DanielMachado65.github.io/profile-page-react

## GitHub Pages Setup

To enable GitHub Pages for this repository:

1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Scroll down to **Pages** section in the left sidebar
4. Under **Source**, select **Deploy from a branch**
5. Select **gh-pages** as the branch
6. Select **/ (root)** as the folder
7. Click **Save**

After the first deployment with `npm run deploy`, GitHub will automatically create the `gh-pages` branch and you can configure it as described above.

## Package.json Configuration

The project is configured for GitHub Pages deployment with:

- **homepage**: Set to `https://DanielMachado65.github.io/profile-page-react` to ensure correct asset paths
- **predeploy script**: Runs `npm run build` before deployment
- **deploy script**: Uses `gh-pages -d build` to deploy the build folder
- **gh-pages dependency**: Added as a dev dependency for deployment functionality

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
