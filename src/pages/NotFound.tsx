
import { Link } from 'react-router-dom'

export default function NotFound(){
return (
<main className="content">
<h1>404 — Página não encontrada</h1>
<p className="meta">Ops! O conteúdo que você procura não existe.</p>
<Link to="/" className="back">Voltar para a Home</Link>
</main>
)
}