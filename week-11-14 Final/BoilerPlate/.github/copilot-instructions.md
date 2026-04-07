# Jupiter X Lite - Project Context for AI Agents

## Project Overview

**Jupiter X Lite** is an HTML5 Boilerplate + Bootstrap 5.3.8 frontend project with a Webpack-based build system. The project showcases a modern responsive web design for an app landing page.

### Stack Summary
- **HTML5 Boilerplate** v9.0.0 for semantic foundation
- **Bootstrap 5.3.8** (CDN) for responsive grid and components
- **Webpack 5** with webpack-dev-server for bundling and local development
- **CSS** organized in `css/style.css` for custom styling
- **JavaScript** modular structure via `js/app.js` and `js/vendor/`

---

## Build & Development Commands

### Development Server
```bash
npm start
```
- Runs `webpack serve --open --config webpack.config.dev.js`
- Opens browser automatically to `http://localhost:8080`
- Has hot reload enabled (changes recompile automatically)

### Production Build
```bash
npm run build
```
- Runs `webpack --config webpack.config.prod.js`
- Outputs minified bundles to `dist/` folder
- Optimizes assets for deployment

### Testing
Currently no test suite configured. To add tests, extend `package.json` scripts.

---

## Project Structure

```
BoilerPlate/
├── index.html              # Main entry point (HTML5)
├── 404.html                # Error page
├── css/
│   └── style.css           # All custom CSS (extends Tailwind/Bootstrap)
├── js/
│   ├── app.js              # Main JavaScript entry point
│   └── vendor/             # Third-party JS libraries (optional)
├── img/                    # Image assets
├── webpack.common.js       # Shared webpack config
├── webpack.config.dev.js   # Development environment config
├── webpack.config.prod.js  # Production environment config
└── .github/
    └── copilot-instructions.md  # This file
```

---

## Key Development Patterns

### HTML Structure
- **Semantic HTML5** elements: `<section>`, `<header>`, `<nav>`, `<article>`, `<footer>`
- **Accessibility first**: Use `<h1>` for main title, proper nesting of headings
- Example structure from `index.html`:
  ```html
  <section id="navbar">...</section>
  <section id="header">
    <h1>Awesome App For</h1>
    <h1>Your Modern <span class="accent-text">Lifestyle</span></h1>
  </section>
  ```

### Bootstrap Integration
- **CDN linked** in `<head>`: Bootstrap v5.3.8 with integrity hash
- **Grid system**: Use `.container`, `.row`, `.col-*` classes for layout
- **Responsive utilities**: `.d-none .d-md-block` for breakpoint control
- **Spacing helpers**: `.mx-auto`, `.p-4`, `.mt-3` instead of custom CSS
- **Components**: Buttons, cards, modals, navbars all available via Bootstrap classes

### CSS Customization (`css/style.css`)
- **Custom variables** at top for theme colors, spacing
- **Extend Bootstrap** classes rather than override them
- **Avoid duplicating** Bootstrap utilities
- **Organize by section**: nav styles, hero styles, feature cards, footer
- Example pattern:
  ```css
  .accent-text {
    color: #your-color;
  }
  
  #header {
    /* Custom header-specific styling */
  }
  ```

### JavaScript Organization (`js/app.js`)
- Import modules from subdirectories: `import { componentName } from './modules/component.js'`
- Use **modern ES6 syntax**: `const`, arrow functions, destructuring
- Webpack will bundle all imports into `dist/js/app.js`
- Avoid inline `<script>` tags in HTML; let Webpack inject them

---

## Webpack Configuration

### Development (`webpack.config.dev.js`)
- Source maps enabled for easier debugging
- HMR (Hot Module Replacement) active
- Unminified output for readability during development

### Production (`webpack.config.prod.js`)
- Minifies JavaScript and CSS
- Generates optimized bundles in `dist/`
- Ready for deployment to web server

### Common Config (`webpack.common.js`)
- Entry point: `./js/app.js`
- Output path: `./dist`
- Shared loaders and plugins (HTML, CSS, copy assets)

---

## Responsive Design with Bootstrap

### Breakpoints
- **xs**: `< 576px` (mobile, default)
- **sm**: `≥ 576px` (small devices)
- **md**: `≥ 768px` (tablets)
- **lg**: `≥ 992px` (desktops)
- **xl**: `≥ 1200px` (large screens)
- **xxl**: `≥ 1400px` (extra large)

### Common Grid Patterns
```html
<!-- Full-width single column (mobile) -->
<div class="container">
  <div class="row">
    <div class="col-12 col-md-8">Content</div>
    <div class="col-12 col-md-4">Sidebar</div>
  </div>
</div>

<!-- Two-column card layout -->
<div class="row g-4">
  <div class="col-md-6"><div class="card">...</div></div>
  <div class="col-md-6"><div class="card">...</div></div>
</div>
```

---

## Performance Considerations

1. **Webpack bundling**: Already configured—no need to manually link scripts
2. **CSS** delivered via `<link>` in HTML (Bootstrap CDN + local `style.css`)
3. **Image optimization**: Place optimized images in `img/` folder
4. **Lazy loading**: Use `loading="lazy"` on images below the fold
5. **Production builds**: Always run `npm run build` before deploying

---

## Common Tasks

### Add a New Page Section
1. Create `<section id="section-name">` in `index.html`
2. Add Bootstrap grid markup inside (`<div class="container">`, `<div class="row">`, etc.)
3. Add custom styles in `css/style.css` under `/* Section Name */` comment block
4. If you need interactivity, create `js/modules/section-name.js` and import in `app.js`

### Customize Colors & Fonts
- **Bootstrap colors**: Use Bootstrap utility classes (`.text-primary`, `.bg-success`, etc.)
- **Custom colors**: Define in `css/style.css` and apply via classes
- **Fonts**: Link in `<head>` (Google Fonts recommended) and override Bootstrap default via CSS

### Debug in Development
1. Run `npm start` to activate dev server with source maps
2. Browser DevTools (F12) will show original `.js` and `.css` files, not bundled versions
3. Console errors will point to actual source files for quick fixing

### Deploy to Production
1. Run `npm run build` to generate optimized `dist/` folder
2. Deploy `dist/` contents (or entire project with build step on host) to web server
3. Ensure `index.html` is served as root document

---

## Common Pitfalls & Solutions

| Issue | Solution |
|-------|----------|
| Changes not appearing in browser | Ensure `npm start` is running; check webpack console for errors |
| Bootstrap styles not loading | Verify CDN link in `<head>` hasn't changed; check network tab in DevTools |
| JavaScript not executing | Ensure code is in `js/app.js` or imported modules; check browser console |
| Styling conflicts between Bootstrap and custom CSS | Use CSS specificity or `!important` sparingly; prefer extending over overriding |
| Production build much larger than expected | Check for unused dependencies in `package.json` |

---

## Next Steps for Expansion

- **Add a navbar component**: Customize Bootstrap `.navbar` in a separate `js/modules/navbar.js`
- **Add form validation**: Import Bootstrap JavaScript via npm (currently only CSS is linked)
- **Add unit tests**: Install Jest and create `*.test.js` files
- **Add linting**: Install ESLint and Prettier for code quality
- **Add PWA support**: Uncomment `<link rel="manifest">` and configure `site.webmanifest`

---

## References

- [HTML5 Boilerplate Docs](https://html5boilerplate.com/)
- [Bootstrap 5.3 Documentation](https://getbootstrap.com/docs/5.3/)
- [Webpack 5 Docs](https://webpack.js.org/concepts/)
- [MDN Web Docs](https://developer.mozilla.org/)
