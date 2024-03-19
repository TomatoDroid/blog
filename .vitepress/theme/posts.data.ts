import { createContentLoader } from "vitepress";

export interface Data {
    title: string,
    url:string,
    date: {
        time: number,
        string: string
    },
    excerpt: string | undefined
}

declare const data: Data[];
export { data }

export default createContentLoader('posts/*.md', {
    excerpt: true,
    transform(raw): Data[] {
        return raw.map(({url,frontmatter,excerpt}) => ({
            title: frontmatter.title,
            url,
            excerpt,
            date: formateDate(frontmatter.date)
        })).sort((a, b) => b.date.time - a.date.time)
    }
})

function formateDate(raw: string): Data['date'] {
    const date = new Date(raw)
    date.setUTCHours(12)
    return {
        time: +date,
        string: date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
    }
}