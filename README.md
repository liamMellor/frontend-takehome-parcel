This is a search application that takes a user's search query, hits the [Ruby Gems](https://rubygems.org/) search API endpoint, and displays the results in a list view with some added functionality (detailed below).

1. It shoulld have a search box that lets users search for Ruby Gems.
2. It should display the results of the search in a list.
3. Each Gem should have a button that lets users "save" and "unsave" Gems.
4. It should have a way to view saved Gems, even after the browser window is refreshed (localStorage is a fine for this).

## Getting started

### Step 1: Install dependencies

We have a few dependencies necessary to run the build and proxy server, the rest are up to you.

```bash
npm install
```

### Step 2: Start the development server

```bash
npm run dev
```

### Step 3: Network requests

You may have noticed the server.js file at the root of this application, that's there to solve cross-origin issues when making network requests. The server automatically starts up when running "npm run dev" or "npm run start".

To see a sample request in action, run the following in your command line.

```bash
curl http://localhost:3000/api/v1/search.json?query=rails
```

## Testing

### Step 1: Start the development server

```bash
npm run dev
```

### Step 2: Run the tests

In a separate command line process, run:

```bash
npm run test
```

**Note there are only two tests. Further iterations would include a Jest LocalStorage polyfill in order to properly mock the function the browser LocalStorage and test the functionality of the `favoriteApi` functions.

## Looking forward

Were the application to be scaled I'd want to invest more time in scaffolding out the state management system. I briefly considered using `Hooks` and `ContextApi` near the beginning of the project but ultimately felt like it was a little overkill given the scope of the work. The only use of React `Context` is for the styled-components theme-ing.

Thanks for the consideration! I really enjoyed designing off the blank canvas!
