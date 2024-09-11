# Steps to Upload Input Component to NPM

1. **Ensure your package.json is up to date**
   
   Make sure your `package.json` file has the correct name, version, and other details:

   ```json
   {
     "name": "rc-input-component",
     "version": "1.0.0",
     "description": "A highly customizable React input component library",
     ...
   }
   ```

2. **Create an NPM account**
   
   If you don't have an npm account, create one at [https://www.npmjs.com/signup](https://www.npmjs.com/signup)

3. **Log in to NPM via the command line**
   
   Open your terminal and run:

   ```bash
   npm login
   ```

   Enter your username, password, and email when prompted.

4. **Build your package**
   
   Run your build script to create the distribution files:

   ```bash
   npm run build
   ```

5. **Test your package locally (optional but recommended)**
   
   Use `npm link` to test your package locally before publishing:

   ```bash
   npm link
   cd /path/to/test-project
   npm link rc-input-component
   ```

6. **Update the version number (if necessary)**
   
   If you're updating an existing package, increment the version number in `package.json`:

   ```bash
   npm version patch  # for bug fixes
   npm version minor  # for new features
   npm version major  # for breaking changes
   ```

7. **Publish to NPM**
   
   Once you're ready to publish, run:

   ```bash
   npm publish
   ```

   If this is your first time publishing this package, and the name is taken, you may need to scope it to your npm username:

   ```bash
   npm publish --access public
   ```

8. **Verify the publication**
   
   Check that your package is listed on npm by visiting:
   `https://www.npmjs.com/package/rc-input-component`

9. **Update the package (for future updates)**
   
   For future updates, repeat steps 4-8. Remember to increment the version number before publishing.

Congratulations! Your Input Component package should now be available on npm for others to install and use.