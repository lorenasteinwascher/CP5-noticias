import { useParams, Link } from 'react-router-dom'
import { getById } from '../services/newsService'
import CommentList from '../components/CommentList'

export default function Article(){
const { id } = useParams()
const news = id ? getById(id) : undefined

if (!news) {
return (
<main className="content">
<h2>Artigo não encontrado</h2>
<Link to="/" className="back">Voltar para a Home</Link>
</main>
)
}

return (
<main className="content">
<article className="article">
{news.image ? <img src={news.image} alt={news.title}/> : <div className="placeholder">Sem imagem</div>}
<div className="body">
<h1 className="title">{news.title}</h1>
<div className="meta">{new Date(news.date).toLocaleDateString('pt-BR')}</div>
<p>{news.content}</p>
<CommentList items={news.comments} />
<Link to="/" className="back">Voltar para a Home</Link>
</div>
</article>
</main>
)
}