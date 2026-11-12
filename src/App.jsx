import { Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import BlogPostsPage from './pages/BlogPostsPage';
import IndividualPostPage from './pages/IndividualPostPage';
import ContactPage from './pages/ContactPage';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<BlogPostsPage />} />
          <Route path="/posts/:id" element={<IndividualPostPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route
            path="*"
            element={
              <div className="post-card">
                <h2 className="post-title">Page not found</h2>
                <Link to="/" className="read-more">Home</Link>
              </div>
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
export default App;
