In React, the entire app is loaded inside a single div, you're not actually visiting different pages, and Different views are rendered when React makes changes to the Virtual DOM, with React updating the real DOM accordingly.

# Single Page Application

> A Single Page Application allows the user to interact with the website without downloading entire new webpages. Instead, it rewrites the current webpage as the user interacts with it. The outcome is that the application will feel faster and more responsive to the user.

# Assets Bundling

You should keep the sound file and image file in the Assets folder, as they will be used directly in your app components and are necessary for the app to work correctly.

```Javascript
import cat from '/assets/imgs/cat.jpg'
<img src={cat} alt="kitty">
// alternatively
<img src={require('/assets/imgs/dog.jpg')} alt="doggy">
```

*one of the best react video player for react is React Player (github.com/CookPete/react-player)*


**When looking for an NPM package, check the frequency of the updates, the GitHub page of the package and search for the package name to ensure you find a package suitable to your needs.**