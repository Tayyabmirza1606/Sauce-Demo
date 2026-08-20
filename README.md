# Sauce Demo — Playwright TypeScript Automation

A Page Object Model (POM) automation project built with Playwright + TypeScript,
testing the "Sauce Demo" Shopify demo storefront.

## Site under test

https://ecommerce-playground... *(replace with your actual Sauce Demo store URL)*

## What's covered so far

| Flow                | Description                                                        |
|----------------------|---------------------------------------------------------------------|
| **Registration**     | New account creation with First Name, Last Name, Email, Password    |
| **Login**             | Authentication with valid credentials                              |
| **Add to Cart**       | Adding products (with size/color options) and verifying cart count |

More flows (remove from cart, checkout, search) are actively in progress.

## Tech stack

- [Playwright](https://playwright.dev/) — end-to-end testing framework
- TypeScript
- Page Object Model (POM) design pattern

## Project structure

```
Sauce Demo/
├── Pages/                   # Page Object Model classes
│   ├── Loginpage.ts
│   ├── Signup.ts
│   ├── Addtocart.ts
│   └── homepage.ts
├── tests/                   # Test specs
│   └── search.spec.ts
├── playwright.config.ts
├── tsconfig.json
└── package.json
```

## Setup

```bash
# Install dependencies
npm install

# Install Playwright browsers
npx playwright install --with-deps

# Run all tests
npx playwright test

# Run in headed mode (see the browser)
npx playwright test --headed

# Run in debug mode (step through actions)
npx playwright test --debug

# View the HTML report after a run
npx playwright show-report
```

## Design notes

- **Locator strategy**: prefers `getByRole`, `getByLabel`, and stable `id`/`name`
  attributes over positional or XPath selectors, for resilience against markup
  changes.
- **Cart count verification**: uses Playwright's auto-retrying `expect().toHaveText()`
  assertions rather than manual reads, to avoid flakiness from AJAX update timing.
- **No hardcoded waits**: relies on Playwright's built-in auto-waiting and explicit
  assertions instead of `waitForTimeout()`.

## Roadmap

- [ ] Remove-from-cart tests
- [ ] Checkout flow
- [ ] Product search
- [ ] CI/CD integration (GitHub Actions)
- [ ] API testing alongside UI tests

## Author

Built by Tayyab Mirza while learning Playwright + TypeScript automation, as a
hands-on companion project to 7+ years of manual and automation QA experience.
