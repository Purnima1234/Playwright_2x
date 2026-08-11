# Playwright 2X - TypeScript Test Automation

A comprehensive Playwright test automation framework using TypeScript, covering all major Playwright topics from basics to advanced concepts.

## Project Structure

```
tests/
├── 01_Basics/
├── 02_first_tests/
├── 03_Locators_Commands/
├── 04_Session_Storage/
├── 05_Allure_Reporting/
├── 06_Multiple_Element_/
├── 07_WebTables/
├── 08_Web_Select_Frames_Iframe/
├── 09_Frame_Iframe/
├── 10_Keyboard_Hover_Drag_Drop/
├── 11_JS_Alerts/
├── 12_Handle_SVG/
├── 13_Shadow_DOM/
├── 14_FileUpload/
├── 15_File_Download/
├── 16_Scroll_toElement/
├── 17_Expect_Assertions/
├── 18_Test_hooks/
├── 19_Data_Driven_Testing/
├── 20_Page_Object_Model/
├── 21_Fixture/
├── 22_Misc_Concepts/
├── 23_Advance_Framework/
└── Projects/
```

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [VS Code](https://code.visualstudio.com/)

## Installation

```bash
npm install
npx playwright install
```

## Running Tests

```bash
# Run all tests
npx playwright test

# Run tests in headed mode
npx playwright test --headed

# Run a specific folder
npx playwright test tests/01_Basics/

# Run tests with HTML report
npx playwright test --reporter=html
```

## View Report

```bash
npx playwright show-report
```

## Test Coverage

### 01_Basics
| File | Description |
|------|-------------|
| 229_Basic_test.spec.ts | Basic Playwright test structure |
| 230_TestAnnotations.spec.ts | Test annotations (skip, only, fixme, slow) |

### 02_first_tests — Browser Context & Pages (BCP)
| File | Description |
|------|-------------|
| 231_firstTc_Verify.spec.ts | First test case: title and element verification |
| 232_bcp.spec.ts | Browser Context & Page basics |
| 233_BCP_multiple_contexts.spec.ts | Multiple browser contexts |
| 234_BCP_Multiple_Pages.spec.ts | Multiple pages within a context |
| 235_test_interface_BCP.spec.ts | Test interface with BCP |
| 236_BCP_Inject.spec.ts | Cookie/storage injection via BCP |
| 237_BCP_with_Options.spec.ts | BCP with context options (viewport, locale) |

### 03_Locators_Commands — Locator Strategies & Commands
| File | Description |
|------|-------------|
| 238_locatorStrategy.spec.ts | Locator strategy overview |
| 239-VWO_login.spec.ts | VWO login using various locators |
| 240_xpath.spec.ts | XPath locator strategies |
| 241_errorValidation.spec.ts | Error message validation using locators |
| 242_usingPlaywright_Locator.spec.ts | Using Playwright built-in locators |
| 243_playwrightCommands.spec.ts | Playwright commands reference |
| 244_refere.spec.ts | Locator reference examples |
| 245_getByrole.spec.ts | getByRole locator strategy |
| 246_press_sequential.spec.ts | Sequential key press actions |

### 04_Session_Storage — Session & Local Storage
| File | Description |
|------|-------------|
| 247_Sessionstorage.spec.ts | Session storage read/write and persistence |
| 248_VWOtest.spec.ts | VWO test with session storage injection |

### 06_Multiple_Element_ — Handling Multiple Elements
| File | Description |
|------|-------------|
| 250_handle_Multiple_element.spec.ts | Iterating and handling multiple matched elements |
| 251_Click_Direct_MultipleLinks.spec.ts | Clicking directly on multiple links |
| 252_DynamicWebtables.spec.ts | Dynamic web table traversal |
| 253_DynamicXpath.spec.ts | Dynamic XPath generation strategies |
| 254_Filter_Pagelocator.spec.ts | Filtering with page locator |
| 256_webtable_xpath.spec.ts | Web table row/column lookup via XPath chaining |

### 07_WebTables — Web Table Interactions
| File | Description |
|------|-------------|
| 254_Webtable_task.spec.ts | Web table task exercises |
| 255_webtable_Xpath.spec.ts | Web table XPath locator strategies |
| 256_webtable_xpath.spec.ts | Web table XPath (extended) |
| 257_webtable_xpath.spec.ts | Web table XPath with filtering |
| 258_webtable_Xpath_pagination.spec.ts | Web table XPath with pagination handling |

### 08_Dropdowns — Dropdowns & Selects
| File | Description |
|------|-------------|
| 259_select_dropown.spec.ts | Native `<select>` dropdown interaction |
| 260_CustomDropdown.spec.ts | Custom (non-native) dropdown interaction |
| 261_AdvanceSelect.Pro.spec.ts | Advanced custom select (rs-single, rs-creatable, rs-async) |
| 261_Handle_DynamicOptions_Spicejet.spec.ts | Dynamic autocomplete options (SpiceJet origin field) |
| 262_Iframe.spec.ts | Iframe handling using `FrameLocator`; `selectOption` on native selects inside frames |

### 10_Keyboard_Hover_Drag_Drop — Keyboard, Hover, Drag & Drop
| File | Description |
|------|-------------|
| 265_Keyboard_Handle.spec.ts | `keyboard.press` — pressing keys and taking screenshots |
| 266_Hover.spec.ts | `hover()` to reveal hidden nav menu items (SpiceJet Add-ons) |
| learning.md | Reference guide: keyboard keys, mouse up/down/move, drag & drop, hover |

### 11_JS_Alerts — JavaScript Alerts & Dialogs
| File | Description |
|------|-------------|
| 270_JS_Alert.spec.ts | Handling JS alerts, confirms, and prompts using `page.on('dialog')` |

### 12_Handle_SVG — SVG & Advanced DOM
| File | Description |
|------|-------------|
| 271_svg.spec.ts | Interacting with SVG elements |
| 271_Task_FlipkartList.spec.ts | Flipkart list task using SVG/DOM traversal |
| 272_svg.spec.ts | Extended SVG interaction patterns |
| 274_shadow_DOM.spec.ts | Accessing elements inside Shadow DOM |

### 13_Shadow_DOM — Shadow DOM
(placeholder — no spec files yet)

### 14_FileUpload — File Upload
| File | Description |
|------|-------------|
| 275_FileUpload.spec.ts | Single file upload using `setInputFiles` |
| 276_upload_Multiplefiles.spec.ts | Multiple file upload using `setInputFiles` |

### 15_File_Download — File Download
| File | Description |
|------|-------------|
| 277_Filedownload.spec.ts | File download handling using Playwright download events |

### 16_Scroll_toElement — Scroll Interactions
| File | Description |
|------|-------------|
| 278_scrollToView.spec.ts | `scrollIntoViewIfNeeded`, `window.scrollBy`, `window.scrollTo`, `expect.poll` for lazy-loaded lists |

### 17_Expect_Assertions — Assertions, Hooks & Configuration
| File | Description |
|------|-------------|
| 279_Expect.spec.ts | Basic expect assertions |
| 280_expect.spec.ts | Extended expect assertions |
| 281_expect_softAssertopn.spec.ts | Soft assertions (`expect.soft`) |
| 282_Project_assertion.spec.ts | Project-level assertions |
| 283_expect.cheatsheet.spec.ts | Expect methods cheat sheet |

### 18_Test_hooks — Test Hooks & Grouping
| File | Description |
|------|-------------|
| 284_testHook.spec.ts | Test hooks (beforeAll, beforeEach, afterEach, afterAll) |
| 285_chrome_arg_list.md | Chrome/Chromium arguments reference |
| 286-Testhook_cheatsheet.md | Test hooks cheat sheet |
| 287_group.spec.ts | Test grouping with `test.describe` |
| 288_Before_After.spec.ts | Before/After hooks usage |
| 289_test.describe.spec.ts | Nested describe blocks |
| 290_testPriority.spec.ts | Test execution priority & ordering |

### 19_Data_Driven_Testing — Data Driven Testing
| File | Description |
|------|-------------|
| 291_DDT_spec.ts | Data-driven testing basics |
| 292_testData.json | Test data JSON file |
| 293-users.json | Users test data JSON |
| 294_login.spec.ts | Login test with external data |
| 295_Read_wright_filesystem.js | Read/write filesystem for test data |
| 296_Simple_JSONarray.spec.ts | Simple JSON array data-driven tests |
| Testdata/login.json | Login credentials test data |

## Config Notes

- `playwright.config.ts` — `headless: false` set so all tests run in headed mode by default

## Tech Stack

- [Playwright](https://playwright.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- Node.js
