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

### 08_Web_Select_Frames_Iframe — Dropdowns, Selects & Frames
| File | Description |
|------|-------------|
| 259_select_dropown.spec.ts | Native `<select>` dropdown interaction |
| 260_CustomDropdown.spec.ts | Custom (non-native) dropdown interaction |
| 261_AdvanceSelect.spec.ts | Advanced select patterns |

## Tech Stack

- [Playwright](https://playwright.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- Node.js
