# Chrome Arguments List for Playwright

```typescript
// Usage
const browser = await chromium.launch({ args: ['--no-sandbox', '--disable-gpu'] });
```

---

## Sandbox & Security
- `--no-sandbox` — Disable sandbox
- `--disable-setuid-sandbox` — Disable setuid sandbox
- `--disable-web-security` — Disable CORS/same-origin
- `--allow-running-insecure-content` — Allow HTTP on HTTPS pages
- `--ignore-certificate-errors` — Ignore SSL errors
- `--disable-client-side-phishing-detection` — Disable phishing detection

## Display & Window
- `--headless` — No UI
- `--headless=new` — New headless mode (Chrome 112+)
- `--start-maximized` — Maximize window
- `--start-fullscreen` — Fullscreen mode
- `--window-size=1920,1080` — Set window size
- `--window-position=0,0` — Set window position
- `--hide-scrollbars` — Hide scrollbars
- `--force-device-scale-factor=1` — Set scale factor
- `--force-color-profile=srgb` — Force color profile

## Disable Features
- `--disable-gpu` — Disable GPU acceleration
- `--disable-extensions` — Disable extensions
- `--disable-popup-blocking` — Disable popup blocking
- `--disable-notifications` — Disable notifications
- `--disable-infobars` — Hide "controlled by automation" bar
- `--disable-translate` — Disable translate
- `--disable-default-apps` — Disable default apps
- `--disable-sync` — Disable Google sync
- `--disable-background-networking` — Disable background requests
- `--disable-component-update` — Disable component updates
- `--disable-crash-reporter` — Disable crash reporter
- `--disable-cache` — Disable disk cache

## Performance
- `--disable-background-timer-throttling` — No background timer throttling
- `--disable-backgrounding-occluded-windows` — No occluded window backgrounding
- `--disable-renderer-backgrounding` — No renderer backgrounding
- `--disable-hang-monitor` — Disable hang monitor
- `--disable-ipc-flooding-protection` — Disable IPC flooding protection
- `--disk-cache-size=0` — Zero disk cache
- `--aggressive-cache-discard` — Aggressive cache discard

## Bot Detection / Stealth
- `--disable-blink-features=AutomationControlled` — Hide automation flag
- `--disable-features=IsolateOrigins,site-per-process` — Disable site isolation
- `--enable-automation` — Enable automation features
- `--user-agent=<string>` — Custom user-agent

## Proxy & Network
- `--proxy-server=http://proxy:8080` — Set proxy
- `--proxy-bypass-list=*.google.com` — Bypass proxy for hosts
- `--auth-server-allowlist=*.example.com` — Auth allowlist

## Media
- `--mute-audio` — Mute audio
- `--autoplay-policy=no-user-gesture-required` — Allow autoplay
- `--use-fake-ui-for-media-stream` — Auto-grant camera/mic
- `--use-fake-device-for-media-stream` — Use fake media device
- `--use-file-for-fake-video-capture=video.y4m` — Fake video from file
- `--auto-select-desktop-capture-source=Entire screen` — Auto screen capture

## Profile & Data
- `--incognito` — Incognito mode
- `--user-data-dir=/tmp/chrome-profile` — Custom profile path
- `--profile-directory=Profile 1` — Select profile
- `--no-first-run` — Skip first-run
- `--no-default-browser-check` — Skip default browser check
- `--password-store=basic` — Basic password store (Linux)
- `--use-mock-keychain` — Mock keychain (macOS)

## Process & Debug
- `--no-zygote` — Disable zygote (Linux)
- `--single-process` — Single process mode
- `--remote-debugging-port=9222` — Remote debug port
- `--disable-dev-shm-usage` — Use /tmp instead of /dev/shm (Docker)
- `--enable-logging` — Enable logging
- `--log-level=0` — Log level (0=INFO)
- `--v=1` — Verbosity level

## GPU & Rendering
- `--ignore-gpu-blocklist` — Ignore GPU blocklist
- `--enable-gpu-rasterization` — Enable GPU rasterization
- `--disable-partial-rasterization` — Disable partial raster
- `--disable-skia-runtime-opts` — Disable Skia opts
- `--font-render-hinting=none` — Disable font hinting

---

## Quick Copy Presets

```typescript
// CI/Docker
args: ['--no-sandbox','--disable-setuid-sandbox','--disable-dev-shm-usage','--disable-gpu','--no-zygote','--single-process']

// Stealth
args: ['--disable-blink-features=AutomationControlled','--disable-infobars','--window-size=1920,1080']

// Media Testing
args: ['--use-fake-ui-for-media-stream','--use-fake-device-for-media-stream','--autoplay-policy=no-user-gesture-required']

// Performance
args: ['--disable-background-timer-throttling','--disable-backgrounding-occluded-windows','--disable-renderer-backgrounding']
```
