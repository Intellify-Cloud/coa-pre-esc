import { siteText } from '@/content/siteText'

interface SeoHeadOptions {
  title?: string
  description?: string
  path?: string
}

export function useSeoHead({ title, description, path }: SeoHeadOptions = {}) {
  const siteTitle = siteText.site.name
  const siteOrigin = siteText.site.url
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle
  const canonicalUrl = `${siteOrigin}${path || '/'}`

  document.title = fullTitle

  const setMeta = (selector: string, value: string) => {
    let el = document.querySelector(selector)
    if (!el) {
      el = document.createElement('meta')
      const [attr, val] = selector.replace(/[\[\]']/g, '').split('=')
      el.setAttribute(attr ?? '', val ?? '')
      document.head.appendChild(el)
    }
    el.setAttribute('content', value)
  }

  const removeMeta = (selector: string) => {
    const el = document.querySelector(selector)
    if (el) el.remove()
  }

  setMeta(`[name='description']`, description || '')
  setMeta(`[name='title']`, fullTitle)
  setMeta(`[property='og:title']`, fullTitle)
  setMeta(`[property='og:description']`, description || '')
  setMeta(`[property='og:url']`, canonicalUrl)
  setMeta(`[property='og:type']`, 'website')
  setMeta(`[property='og:image']`, `${siteOrigin}${siteText.site.ogImage}`)
  setMeta(`[property='og:locale']`, siteText.site.locale)
  setMeta(`[property='og:site_name']`, siteTitle)
  setMeta(`[name='twitter:card']`, 'summary_large_image')
  setMeta(`[name='twitter:url']`, canonicalUrl)
  setMeta(`[name='twitter:title']`, fullTitle)
  setMeta(`[name='twitter:description']`, description || '')
  setMeta(`[name='twitter:image']`, `${siteOrigin}${siteText.site.ogImage}`)
  setMeta(`[name='application-name']`, siteTitle)
  setMeta(`[name='theme-color']`, '#0A2A5E')
  setMeta(`[name='apple-mobile-web-app-title']`, siteTitle)

  let canonical = document.querySelector(`link[rel='canonical']`)
  if (!canonical) {
    canonical = document.createElement('link')
    canonical.setAttribute('rel', 'canonical')
    document.head.appendChild(canonical)
  }
  canonical.setAttribute('href', canonicalUrl)

  let hreflang = document.querySelector(`link[rel='alternate'][hreflang='${siteText.site.locale}']`)
  if (!hreflang) {
    hreflang = document.createElement('link')
    hreflang.setAttribute('rel', 'alternate')
    hreflang.setAttribute('hreflang', siteText.site.locale)
    document.head.appendChild(hreflang)
  }
  hreflang.setAttribute('href', canonicalUrl)
}
