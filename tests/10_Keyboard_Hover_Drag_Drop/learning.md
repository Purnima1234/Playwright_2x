# Playwright Keyboard & Mouse Reference

---

## Keyboard

### `page.keyboard.press(key)`
Presses and releases a single key (keydown + keyup).

```ts
await page.keyboard.press('Enter');
await page.keyboard.press('Tab');
await page.keyboard.press('Escape');
await page.keyboard.press('Control+A');   // key combos
await page.keyboard.press('Shift+Tab');
```

### `page.keyboard.down(key)`
Holds a key down (keydown only — does not release).

```ts
await page.keyboard.down('Shift');
```

### `page.keyboard.up(key)`
Releases a held key (keyup).

```ts
await page.keyboard.up('Shift');
```

### `page.keyboard.type(text)`
Types a string character by character (fires keydown, keypress, keyup for each).

```ts
await page.keyboard.type('Hello World');
```

### `page.keyboard.insertText(text)`
Inserts text directly without firing key events (useful for special characters).

```ts
await page.keyboard.insertText('😊');
```

---

## Common Key Names

| Key           | Value             |
|---------------|-------------------|
| Enter         | `'Enter'`         |
| Tab           | `'Tab'`           |
| Escape        | `'Escape'`        |
| Space         | `'Space'`         |
| Backspace     | `'Backspace'`     |
| Delete        | `'Delete'`        |
| Arrow Up      | `'ArrowUp'`       |
| Arrow Down    | `'ArrowDown'`     |
| Arrow Left    | `'ArrowLeft'`     |
| Arrow Right   | `'ArrowRight'`    |
| Home          | `'Home'`          |
| End           | `'End'`           |
| Page Up       | `'PageUp'`        |
| Page Down     | `'PageDown'`      |
| Shift         | `'Shift'`         |
| Control       | `'Control'`       |
| Alt           | `'Alt'`           |
| Meta (Cmd)    | `'Meta'`          |
| F1 – F12      | `'F1'` … `'F12'`  |
| A – Z         | `'A'` … `'Z'`     |
| 0 – 9         | `'0'` … `'9'`     |

---

## Key Combinations

```ts
await page.keyboard.press('Control+A');   // Select all
await page.keyboard.press('Control+C');   // Copy
await page.keyboard.press('Control+V');   // Paste
await page.keyboard.press('Control+Z');   // Undo
await page.keyboard.press('Control+S');   // Save
await page.keyboard.press('Shift+Enter'); // Shift + Enter
await page.keyboard.press('Alt+F4');      // Alt + F4
```

---

## Mouse

### `page.mouse.move(x, y)`
Moves the mouse to the given coordinates.

```ts
await page.mouse.move(100, 200);
```

### `page.mouse.down(options?)`
Presses a mouse button (mousedown). Default button is `'left'`.

```ts
await page.mouse.down();                          // left button
await page.mouse.down({ button: 'right' });
await page.mouse.down({ button: 'middle' });
```

### `page.mouse.up(options?)`
Releases a mouse button (mouseup).

```ts
await page.mouse.up();
await page.mouse.up({ button: 'right' });
```

### `page.mouse.click(x, y, options?)`
Moves to coordinates and clicks (mousedown + mouseup).

```ts
await page.mouse.click(100, 200);
await page.mouse.click(100, 200, { button: 'right' });
await page.mouse.click(100, 200, { clickCount: 2 }); // double-click
```

### `page.mouse.dblclick(x, y)`
Double-clicks at the given coordinates.

```ts
await page.mouse.dblclick(100, 200);
```

### `page.mouse.wheel(deltaX, deltaY)`
Scrolls the mouse wheel.

```ts
await page.mouse.wheel(0, 300);   // scroll down
await page.mouse.wheel(0, -300);  // scroll up
```

---

## Drag & Drop with Mouse

```ts
// Manual drag using mouse down/move/up
await page.mouse.move(sourceX, sourceY);
await page.mouse.down();
await page.mouse.move(targetX, targetY, { steps: 10 }); // smooth move
await page.mouse.up();
```

```ts
// High-level drag helper
await page.dragAndDrop('#source', '#target');
```

---

## Hover

```ts
await page.hover('#element');
await page.locator('#element').hover();
```

---

## Screenshots

```ts
await page.screenshot({ path: 'screenshot.png' });            // full page
await page.screenshot({ path: 'screenshot.png', fullPage: true });
await page.locator('#element').screenshot({ path: 'elem.png' });
```
