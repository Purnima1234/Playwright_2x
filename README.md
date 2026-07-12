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

## Tech Stack

- [Playwright](https://playwright.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- Node.js
