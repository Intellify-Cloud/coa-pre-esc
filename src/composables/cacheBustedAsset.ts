const cacheBustToken = encodeURIComponent(__APP_BUILD_ID__)

export const withCacheBust = (assetPath: string) => {
  if (!assetPath || /^(data:|blob:|https?:)/i.test(assetPath)) {
    return assetPath
  }

  const separator = assetPath.includes('?') ? '&' : '?'

  return `${assetPath}${separator}v=${cacheBustToken}`
}
