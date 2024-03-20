import { defineConfig, createContentLoader } from 'vitepress'
import Unocss from 'unocss/vite'
import VitePluginVueDevtools from 'vite-plugin-vue-devtools'

// async function genPosts() {
//   const posts = await createContentLoader('posts/*.md', {
//     excerpt: true,
//     render: true
//   }).load()

//   posts.sort(
//     (a, b) =>
//       +new Date(b.frontmatter.date as string) -
//       +new Date(a.frontmatter.date as string)
//   )
// }

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "lz's blog",
  description: "随便记一记",
  cleanUrls: true,
  head: [
    [ 'meta', { name: 'author', content: 'liuzhen' } ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/svg+xml',
        href: '/favicon1.svg'
      }
    ]
  ],
  markdown: {
    theme: 'github-dark'
  },
  appearance: 'dark',
  // buildEnd: genPosts,
  vite:{
    plugins: [
      Unocss(),
      VitePluginVueDevtools()
    ],
  }
})
