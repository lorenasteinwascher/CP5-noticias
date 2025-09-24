import { NEWS } from '../data/news'
import type { News } from '../types'

export function getAll(): News[] {
// finge que é uma chamada de API
return NEWS
}

export function getById(id: string): News | undefined {
return NEWS.find(n => n.id === id)
}

export type SearchIn = { title: boolean; content: boolean; categories: boolean }

export function search(query: string, where: SearchIn): News[] {
if (!query) return NEWS
const q = query.toLowerCase()
return NEWS.filter(n => {
const inTitle = where.title && n.title.toLowerCase().includes(q)
const inContent = where.content && n.content.toLowerCase().includes(q)
const inCats = where.categories && n.categories.some(c => c.toLowerCase().includes(q))
return inTitle || inContent || inCats
})
}
