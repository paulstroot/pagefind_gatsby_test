<h1 align="center">
  Pagefind Gatsby Minimal Reproduction
</h1>

## 🚀 Quick start

1.  **Run this site.**

    Use the Gatsby CLI to create a new site, specifying the minimal starter.

    ```shell
    # create a new Gatsby site using the minimal starter
    yarn install
    yarn build
    npx pagefind
    yarn develop
    ```

    Note: There are other code errors that need to be worked out here. For example. line 12 of src/pages/index.js will error out if pagefind does not yet exist. But pagefind can not be indexed until the site is built. For the purposes of this test, I needed to comment out the useEffect() in index.js, build the site, index with pagefind, then uncomment the useEffect and run yarn develop.


