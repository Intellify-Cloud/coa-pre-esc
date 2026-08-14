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
  const normalizedPath = path === '/' ? '/' : path ? `${path.replace(/\/?$/, '/')}` : '/'
  const canonicalUrl = `${siteOrigin}${normalizedPath}`
  const descriptionText = description || siteText.site.description
  const ogImageUrl = `${siteOrigin}${siteText.site.ogImage}`
  const hreflangCode = siteText.site.locale.replace('_', '-')

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

  setMeta(`[name='description']`, descriptionText)
  setMeta(`[name='title']`, fullTitle)
  setMeta(`[property='og:title']`, fullTitle)
  setMeta(`[property='og:description']`, descriptionText)
  setMeta(`[property='og:url']`, canonicalUrl)
  setMeta(`[property='og:type']`, 'website')
  setMeta(`[property='og:image']`, ogImageUrl)
  setMeta(`[property='og:image:alt']`, `${siteTitle} beach holiday accommodation`)
  setMeta(`[property='og:locale']`, siteText.site.locale)
  setMeta(`[property='og:site_name']`, siteTitle)
  setMeta(`[name='twitter:card']`, 'summary_large_image')
  setMeta(`[name='twitter:url']`, canonicalUrl)
  setMeta(`[name='twitter:title']`, fullTitle)
  setMeta(`[name='twitter:description']`, descriptionText)
  setMeta(`[name='twitter:image']`, ogImageUrl)
  setMeta(`[name='twitter:image:alt']`, `${siteTitle} beach holiday accommodation`)
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

  let hreflang = document.querySelector(`link[rel='alternate'][hreflang='${hreflangCode}']`)
  if (!hreflang) {
    hreflang = document.createElement('link')
    hreflang.setAttribute('rel', 'alternate')
    hreflang.setAttribute('hreflang', hreflangCode)
    document.head.appendChild(hreflang)
  }
  hreflang.setAttribute('href', canonicalUrl)

  let defaultHreflang = document.querySelector(`link[rel='alternate'][hreflang='x-default']`)
  if (!defaultHreflang) {
    defaultHreflang = document.createElement('link')
    defaultHreflang.setAttribute('rel', 'alternate')
    defaultHreflang.setAttribute('hreflang', 'x-default')
    document.head.appendChild(defaultHreflang)
  }
  defaultHreflang.setAttribute('href', canonicalUrl)
}
