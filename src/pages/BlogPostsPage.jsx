import { useEffect, useState } from 'react';
import BlogList from '../components/BlogList';

export default function BlogPostsPage() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((data) => setPosts(data))
            .catch((err) => {
                console.error('Error:', err);
                setError('Could not load posts.');
            })
            .finally(() => setLoading(false));
    }, []);

    return (
        <>
            <h2 className="page-title">All Blog Posts</h2>
            {loading && <p className="status-msg">Loading</p>}
            {error && <p className="error-msg">{error}</p>}
            {!loading && !error && <BlogList posts={posts} />}
        </>
    );
}
