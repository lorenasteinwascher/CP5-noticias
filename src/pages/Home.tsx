import { useMemo, useState } from 'react'
import NewsCard from '../components/NewsCard'
import { search } from '../services/newsService'

export default function Home(){
const [query, setQuery] = useState('')
const [where, setWhere] = useState({ title: true, content: true, categories: true })

const results = useMemo(() => search(query, where), [query, where])

const toggle = (k: 'title'|'content'|'categories') =>
setWhere(prev => ({ ...prev, [k]: !prev[k] }))

return (
<main className="content">
<h1>Bem vindo!</h1>
<p className="meta">Busque artigos</p>

<div className="searchWrap">
<input
type="text"
placeholder="Digite para filtrar..."
value={query}
onChange={e => setQuery(e.target.value)}
/>
<div className="checks">
<label><input type="checkbox" checked={where.title} onChange={()=>toggle('title')} /> Título</label>
<label><input type="checkbox" checked={where.content} onChange={()=>toggle('content')} /> Conteúdo</label>
<label><input type="checkbox" checked={where.categories} onChange={()=>toggle('categories')} /> Categorias</label>
</div>
</div>

{results.length === 0 ? (
<div className="empty">Nenhum artigo encontrado</div>
) : (
<section className="grid">
{results.map(n => <NewsCard key={n.id} news={n} />)}
</section>
)}
</main>
)
}