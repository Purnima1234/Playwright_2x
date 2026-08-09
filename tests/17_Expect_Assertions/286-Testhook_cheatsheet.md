# Playwright Test Hooks Cheat Sheet

---

## Hook Execution Order

```
beforeAll → beforeEach → test → afterEach → afterAll
```

---

## All Hooks

| Hook | Scope | Runs |
|------|-------|------|
| `test.beforeAll` | Once per worker/file | Before all tests in the file |
| `test.beforeEach` | Per test | Before each test |
| `test.afterEach` | Per test | After each test (even if failed) |
| `test.afterAll` | Once per worker/file | After all tests in the file |

---

## Syntax

```typescript
import { test, expect } from '@playwright/test';

test.beforeAll(async () => {
  // runs once before all tests — no page/context here
});

test.beforeEach(async ({ page }) => {
  // runs before each test — page is available
  await page.goto('https://example.com');
});

test('example test', async ({ page }) => {
  await expect(page).toHaveTitle(/Example/);
});

test.afterEach(async ({ page }) => {
  // runs after each test — cleanup
});

test.afterAll(async () => {
  // runs once after all tests
});
```

---

## Hooks with describe (Nested Scope)

```typescript
test.describe('Login Suite', () => {

  test.beforeAll(async () => {
    // runs once for this describe block
  });

  test.beforeEach(async ({ page }) => {
    await page.goto('/login');
  });

  test('valid login', async ({ page }) => { /* ... */ });
  test('invalid login', async ({ page }) => { /* ... */ });

  test.afterEach(async ({ page }) => {
    await page.close();
  });

  test.afterAll(async () => {
    // cleanup for this describe block
  });
});
```

**Nested execution order:**
```
outer beforeAll → outer beforeEach → inner beforeAll → inner beforeEach → test → inner afterEach → inner afterAll → outer afterEach → outer afterAll
```

---

## Key Rules

- `beforeAll` / `afterAll` — **No `page` or `context` fixture** (they are per-test)
- `beforeEach` / `afterEach` — **Has access to all fixtures** (`page`, `context`, `request`)
- `afterEach` runs even if the test **fails**
- `afterAll` runs even if tests **fail**
- Hooks share the same **worker** — use `test.info()` for metadata
- Multiple hooks of the same type run in **declaration order**

---

## Passing Data Between Hooks

```typescript
let authToken: string;

test.beforeAll(async ({ request }) => {
  const res = await request.post('/api/login', { data: { user: 'admin', pass: 'pass' } });
  authToken = (await res.json()).token;
});

test.beforeEach(async ({ page }) => {
  await page.setExtraHTTPHeaders({ Authorization: `Bearer ${authToken}` });
});
```

---

## Hook with Timeout

```typescript
test.beforeEach(async ({ page }) => {
  test.setTimeout(60000); // 60s timeout for this hook + test
  await page.goto('/slow-page');
});
```

---

## Skip / Conditional in Hooks

```typescript
test.beforeEach(async ({ page, browserName }) => {
  test.skip(browserName === 'firefox', 'Not supported on Firefox');
  await page.goto('/');
});
```

---

## Common Patterns

```typescript
// Screenshot on failure
test.afterEach(async ({ page }, testInfo) => {
  if (testInfo.status !== testInfo.expectedStatus) {
    await page.screenshot({ path: `screenshots/${testInfo.title}.png` });
  }
});

// Clear storage between tests
test.beforeEach(async ({ context }) => {
  await context.clearCookies();
});

// Global setup via fixture override
test.beforeEach(async ({ page }) => {
  await page.goto(process.env.BASE_URL || 'http://localhost:3000');
});
```

---

## Global Setup & Teardown (not hooks, but related)

```typescript
// playwright.config.ts
export default defineConfig({
  globalSetup: './global-setup.ts',   // runs once before all workers
  globalTeardown: './global-teardown.ts', // runs once after all workers
});
```

---

## Quick Reference

| Need | Use |
|------|-----|
| One-time DB seed | `beforeAll` |
| Navigate before each test | `beforeEach` |
| Screenshot on failure | `afterEach` |
| Close DB connection | `afterAll` |
| Setup before all workers | `globalSetup` |
| Auth state reuse | `storageState` + `beforeAll` |