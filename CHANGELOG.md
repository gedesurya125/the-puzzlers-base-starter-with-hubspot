# gatsby-starter-thepuzzlers-base

## 1.0.1

### Patch Changes

- 7d43523: Fix the gatsby version of starter base to version 5.8.1. Because v5.9 caused errors when used in combination with the gatsby-source-keepitsimple
- Updated dependencies [7d43523]
  - gatsby-theme-thepuzzlers-legal-pages@1.0.1

## 1.0.0

### Major Changes

- c08213e: Upgrade all packages to gatsby v5.
  Upgrade to theme-ui v0.15.

### Patch Changes

- Updated dependencies [c08213e]
  - gatsby-theme-thepuzzlers-legal-pages@1.0.0
  - gatsby-theme-thepuzzlers-core@1.0.0
  - gatsby-theme-thepuzzlers-intl@1.0.0

## 0.10.20

### Patch Changes

- Updated dependencies [2a9d2df]
  - gatsby-theme-thepuzzlers-legal-pages@0.13.11

## 0.10.19

### Patch Changes

- Updated dependencies [c9ee873]
  - gatsby-theme-thepuzzlers-legal-pages@0.13.10

## 0.10.18

### Patch Changes

- Updated dependencies
  - gatsby-theme-thepuzzlers-legal-pages@0.13.9

## 0.10.17

### Patch Changes

- Removed relative import of legal-pages theme in the gatsby-config.js
- Updated dependencies
  - gatsby-theme-thepuzzlers-legal-pages@0.13.8

## 0.10.16

### Patch Changes

- 7e71fb7: Added AspectRatioImageContainer component. This component helps us to style an image with the help of an aspect-ratio, but without using the CSS aspect-ratio property. Because the CSS property breaks on Safari versions below v15. The component uses padding percentages to achieve the same look as the CSS aspect-ratio. The workaround was inspired by this link: https://css-tricks.com/oh-hey-padding-percentage-is-based-on-the-parent-elements-width/.
- b38fe49: Remove typographyConfig and fluid typography calculation. We don't need this anymore because we now use the new typography system with rem. We now also define the fontSizes for each text always right on each component and therefore don't need the `typography` key in the theme anymore. Previously we still kept the fluid typography calculation because so the legal pages theme can use it for the privacy policy pages. However, we now moved that styling right inside the legal pages theme.
- 849b337: Removed the gatsby-source-rest-api plugin and configure gatsby-source-keepitsimple plugin instead. To connect the project with the Keepitsimple CMS we now only have to update the `prefix` option in `gatsby-config.js`.
- 710ce22: Update the layout component to not wrap the main tag around the whole page content automatically (`src/layouts/index.js`). Wrapping everything in a main tag meant that the header tag of each page was also wrapped. Which is not correct in terms of html semantics. Now every page is responsible for wrapping the main tag only around the actual content. An example of the correct setup can be seen in the index page (`src/pages/index.js`).
- Add a vercel.json file to every project by default. This makes sure we are not indexing our pages while they are in development. Important: You need to remove this file when the page gets published. Otherwise Google will not index it.
- Updated dependencies
- Updated dependencies [bf39251]
- Updated dependencies [ba3501e]
  - gatsby-theme-thepuzzlers-legal-pages@0.13.7

## 0.10.15

### Patch Changes

- Updated dependencies [a299c95]
- Updated dependencies [a299c95]
- Updated dependencies [a299c95]
  - gatsby-theme-thepuzzlers-legal-pages@0.13.6

## 0.10.14

### Patch Changes

- Updated dependencies
  - gatsby-theme-thepuzzlers-core@0.13.1
  - gatsby-theme-thepuzzlers-intl@0.13.1
  - gatsby-theme-thepuzzlers-legal-pages@0.13.1

## 0.10.13

### Patch Changes

- Updated dependencies [1acf41e]
  - gatsby-theme-thepuzzlers-legal-pages@0.13.0

## 0.10.12

### Patch Changes

- Updated dependencies
  - gatsby-theme-thepuzzlers-intl@0.12.6
  - gatsby-theme-thepuzzlers-legal-pages@0.12.6

## 0.10.11

### Patch Changes

- 9f3625e: Add option to display eu organic certification in legal page
- Updated dependencies [9f3625e]
  - gatsby-theme-thepuzzlers-legal-pages@0.10.11

## 0.10.10

### Patch Changes

- Updated dependencies
  - gatsby-theme-thepuzzlers-intl@0.10.10
  - gatsby-theme-thepuzzlers-legal-pages@0.10.10

## 0.9.5

### Patch Changes

- e30cf4f: Upgrade theme-ui and gatsby-plugin-layout
- Updated dependencies [e30cf4f]
  - gatsby-theme-thepuzzlers-core@0.9.5
  - gatsby-theme-thepuzzlers-intl@0.9.5

## 0.9.4

### Patch Changes

- 338d35b: Set reactRuntime to automatic in babel config to make sure new way of importing jsxImportSource theme-ui works
- 338d35b: Remove any doubled or unused dependencies. We experienced a major hickup when e.g. gatsby-plugin-sharp was installed in different versions across the themes.
- Updated dependencies [338d35b]
- Updated dependencies [e3fe13f]
- Updated dependencies [338d35b]
  - gatsby-theme-thepuzzlers-core@0.9.4
  - gatsby-theme-thepuzzlers-intl@0.9.4

## 0.9.3

### Patch Changes

- bump dependencies
- Updated dependencies
  - gatsby-theme-thepuzzlers-intl@0.9.3

## 0.9.0

### Patch Changes

- 49d82f1: Add example active styling to LanguageSwitches
- Updated dependencies [c817c5e]
- Updated dependencies [80cc427]
- Updated dependencies [e382da6]
  - gatsby-theme-thepuzzlers-intl@0.9.0
  - gatsby-theme-thepuzzlers-core@0.9.0
  - gatsby-theme-thepuzzlers-legal-pages@0.9.0

## 0.7.0

### Patch Changes

- Updated dependencies
  - gatsby-theme-thepuzzlers-core@0.7.0
  - gatsby-theme-thepuzzlers-intl@0.7.0
  - gatsby-theme-thepuzzlers-legal-pages@0.7.0

## 0.5.6

### Patch Changes

- Fix absolute imports webpack config
- Updated dependencies
  - gatsby-theme-thepuzzlers-core@0.5.6
  - gatsby-theme-thepuzzlers-intl@0.5.6
  - gatsby-theme-thepuzzlers-legal-pages@0.5.6

## 0.5.0

### Minor Changes

- Upgrade to gatsby version 4

### Patch Changes

- Updated dependencies
  - gatsby-theme-thepuzzlers-core@0.5.0
  - gatsby-theme-thepuzzlers-intl@0.5.0
  - gatsby-theme-thepuzzlers-legal-pages@0.5.0

## 0.4.0

### Patch Changes

- Updated dependencies [undefined]
  - gatsby-theme-thepuzzlers-core@0.4.0
  - gatsby-theme-thepuzzlers-intl@0.4.0
  - gatsby-theme-thepuzzlers-legal-pages@0.4.0

## 0.3.0

### Patch Changes

- Updated dependencies [undefined]
  - gatsby-theme-thepuzzlers-core@0.3.0
  - gatsby-theme-thepuzzlers-intl@0.3.0
  - gatsby-theme-thepuzzlers-legal-pages@0.3.0

## 0.2.33

### Patch Changes

- SEO component fixes
- Updated dependencies [undefined]
  - gatsby-theme-thepuzzlers-intl@0.2.33

## 0.2.32

### Patch Changes

- Publish update version

## 0.2.18

### Patch Changes

- Publish new version

## 0.2.4

### Patch Changes

- Rename theme option to configPath and make optional
- Updated dependencies [undefined]
  - gatsby-theme-thepuzzlers-legal-pages@0.2.4

## 0.2.2

### Patch Changes

- Remove need for 3 favicon sizes
- Updated dependencies [undefined]
  - gatsby-theme-thepuzzlers-core@0.2.2

## 0.2.0

### Minor Changes

- 22003a3: Update dependencies of each other

### Patch Changes

- Updated dependencies [22003a3]
  - gatsby-theme-thepuzzlers-legal-pages@0.2.0
  - gatsby-theme-thepuzzlers-core@0.2.0
  - gatsby-theme-thepuzzlers-intl@0.2.0
