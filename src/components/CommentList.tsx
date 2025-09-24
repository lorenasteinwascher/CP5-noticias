import type { Comment } from '../types'

export default function CommentList({ items }: { items: Comment[] }){
return (
<section className="comments">
<h4>Comentários</h4>
{items.map(c => (
<div className="comment" key={c.id}>
<div style={{fontWeight:600}}>{c.author}</div>
<div style={{fontSize:12, color:'#64748b'}}>{new Date(c.date).toLocaleString('pt-BR')}</div>
<p style={{margin:'6px 0 0'}}>{c.text}</p>
</div>
))}
</section>
)
}