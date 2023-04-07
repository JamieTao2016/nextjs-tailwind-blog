export default function mylmageLoader({ src, width, quality }) {
  return `/${src}?w=${width}&q=${quality || 75}`
}
