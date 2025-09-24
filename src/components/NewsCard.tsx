import { Link } from 'react-router-dom'
import type { News } from '../types'

export default function NewsCard({ news }: { news: News }){
return (
<article className="card">
{news.image ? <img src={news.image} alt={news.title}/> : <div className="placeholder">Sem imagem</div>}
<div className="card-body">
<h3 className="title">{news.title}</h3>
<div className="meta">{new Date(news.date).toLocaleDateString('pt-BR')}</div>
<p className="excerpt">{news.content.slice(0, 90)}...</p>
<div>{news.categories.map(c => <span key={c} className="chip">{c}</span>)}</div>
<div style={{marginTop:12}}>
<Link to={`/article/${news.id}`} className="back">Ler mais</Link>
</div>
</div>
</article>
)
}