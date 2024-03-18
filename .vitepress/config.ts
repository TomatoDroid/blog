import { defineConfig, createContentLoader } from 'vitepress'
import Unocss from 'unocss/vite'

async function genPosts() {
  const posts = await createContentLoader('posts/*.md', {
    excerpt: true,
    render: true
  }).load()

  posts.sort(
    (a, b) =>
      +new Date(b.frontmatter.date as string) -
      +new Date(a.frontmatter.date as string)
  )
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "刘臻的Blog",
  description: "臻听，臻写，臻感受",
  cleanUrls: true,
  head: [
    [ 'meta', { name: 'author', content: 'liuzhen' } ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/svg+xml',
        href: '/favicon.svg'
      }
    ]
  ],
  markdown: {
    theme: 'github-dark'
  },
  // buildEnd: genPosts,
  vite:{
    plugins: [
      Unocss()
    ]
  }
})
