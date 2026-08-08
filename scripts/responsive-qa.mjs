import { chromium } from 'playwright'

const baseUrl = process.env.QA_BASE_URL ?? 'http://127.0.0.1:5174'
const widths = [390, 560, 768, 1200]
const pages = [
  { path: '/', waitFor: '#hero' },
  { path: '/cabana-mio/', waitFor: '#cabana-page-title' },
  { path: '/contact', waitFor: '#contact-title' },
  { path: '/about/', waitFor: '#about-page-title' },
  { path: '/faq/', waitFor: '#faq-title' },
]

const browser = await chromium.launch()
const failures = []

for (const width of widths) {
  const page = await browser.newPage({ viewport: { width, height: 1200 } })

  for (const target of pages) {
    const url = `${baseUrl}${target.path}`
    await page.goto(url, { waitUntil: 'networkidle' })
    await page.waitForSelector(target.waitFor)

    const metrics = await page.evaluate(() => ({
      path: window.location.pathname,
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
      brokenImages: [...document.images]
        .filter((img) => img.complete && img.naturalWidth === 0)
        .map((img) => img.getAttribute('src') ?? img.currentSrc),
    }))

    if (metrics.scrollWidth > metrics.clientWidth + 1) {
      failures.push(
        `${width}px ${target.path}: horizontal overflow ${metrics.scrollWidth}px > ${metrics.clientWidth}px`,
      )
    }

    if (metrics.brokenImages.length > 0) {
      failures.push(`${width}px ${target.path}: broken images ${metrics.brokenImages.join(', ')}`)
    }
  }

  if (width < 1024) {
    await page.goto(`${baseUrl}/`, { waitUntil: 'networkidle' })
    await page.waitForSelector('.nav-bar__menu-button')
    await page.click('.nav-bar__menu-button')
    await page.waitForSelector('#mobile-menu:not([hidden])')

    const menuState = await page.evaluate(() => {
      const menu = document.querySelector('#mobile-menu')
      const links = [...document.querySelectorAll('#mobile-menu a')]

      return {
        visible: Boolean(menu && !menu.hasAttribute('hidden')),
        linkCount: links.length,
        scrollWidth: document.documentElement.scrollWidth,
        clientWidth: document.documentElement.clientWidth,
      }
    })

    if (!menuState.visible || menuState.linkCount < 2) {
      failures.push(`${width}px mobile menu: did not open with links`)
    }

    if (menuState.scrollWidth > menuState.clientWidth + 1) {
      failures.push(
        `${width}px mobile menu: horizontal overflow ${menuState.scrollWidth}px > ${menuState.clientWidth}px`,
      )
    }
  }

  await page.close()
}

await browser.close()

if (failures.length > 0) {
  console.error(failures.join('\n'))
  process.exit(1)
}

console.log(`Responsive QA passed for widths ${widths.join(', ')} on ${pages.length} pages.`)
