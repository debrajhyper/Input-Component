/**
 * This declaration file is used to provide type checking for CSS modules.
 *
 * The `*.module.css` and `*.module.scss` files are processed by Webpack's
 * `css-loader` and generate a JavaScript object with the class names as keys.
 * The values are the generated CSS class names.
 *
 * The `*.css` and `*.scss` files are processed by Webpack's `style-loader` and
 * generate a JavaScript object with the class names as keys. The values are
 * the original CSS class names.
 */
declare module '*.module.css' {
    const classes: { [key: string]: string };
    export default classes;
}

/**
 * Same as above, but for SCSS files.
 */
declare module '*.module.scss' {
    const classes: { [key: string]: string };
    export default classes;
}

/**
 * This declaration is used for global CSS files, which are not processed by
 * the `css-loader`.
 *
 * The `*.css` and `*.scss` files are processed by Webpack's `style-loader` and
 * generate a JavaScript object with the class names as keys. The values are
 * the original CSS class names.
 */
declare module '*.css' {
    const content: { [className: string]: string };
    export default content;
}

/**
 * Same as above, but for SCSS files.
 */
declare module '*.scss' {
    const content: { [className: string]: string };
    export default content;
}