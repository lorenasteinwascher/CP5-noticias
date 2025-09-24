import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Article from './pages/Article'
import NotFound from './pages/NotFound'

export default function App(){
return (
<div className="container">
<header className="header">
<Link to="/" className="brand">NewsPortal</Link>
<nav className="nav">
<a href="https://vercel.com/" target="_blank" rel="noreferrer">Vercel</a>
<a href="https://react.dev/" target="_blank" rel="noreferrer">React</a>
</nav>
</header>

<Routes>
<Route path="/" element={<Home />} />
<Route path="/article/:id" element={<Article />} />
<Route path="*" element={<NotFound />} />
</Routes>

<footer className="footer">
Desenvolvido por: Lorena Steinwascher RM 561712, Laura Elvira RM 562204, Isabelly Romano RM 564217 • {new Date().getFullYear()}
</footer>
</div>
)
}