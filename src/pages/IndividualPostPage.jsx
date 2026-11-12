import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';

const API = 'https://jsonplaceholder.typicode.com';

export default function IndividualPostPage() {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [user, setUser] = useState(null);
    const [comments, setComments] = useState([]);
    const [error, setError] = useState('');
    const [loadedId, setLoadedId] = useState(null);

    useEffect(() => {
        let ignore = false;

        Promise.all([
            fetch(`${API}/posts/${id}`).then((res) => {
                if (!res.ok) throw new Error('Post not found');
                return res.json();
            }),
            fetch(`${API}/posts/${id}/comments`).then((res) => res.json()),
        ])
            .then(([postData, commentsData]) =>
                fetch(`${API}/users/${postData.userId}`)
                    .then((res) => res.json())
                    .then((userData) => {
                        if (ignore) return;
                        setPost(postData);
                        setComments(commentsData);
                        setUser(userData);
                        setError('');
                        setLoadedId(id);
                    })
            )
            .catch((err) => {
                if (ignore) return;
                console.error('Error:', err);
                setError(err.message === 'Post not found' ? 'Post not found' : 'Erorr loading post.');
                setLoadedId(id);
            });

        return () => {
            ignore = true;
        };
    }, [id]);

    function addComment(newComment) {
        setComments((prev) => [...prev, newComment]);
    }

    if (loadedId !== id) {
        return <p className="status-msg">Loading</p>;
    }

    if (error) {
        return (
            <div className="post-card">
                <h2 className="post-title">{error}</h2>
                <Link to="/" className="read-more"> Back to all posts</Link>
            </div>
        );
    }

    return (
        <>
            <Link to="/" className="read-more back-link">← Back to all posts</Link>
            <article className="post-card post-full">
                <h2 className="post-title">{post.title}</h2>
                <p className="post-content">{post.body}</p>
                <div className="author-box">
                    <h4>About the Author</h4>
                    <p><strong>Name:</strong> {user.name}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Company:</strong> {user.company.name}</p>
                </div>
            </article>

            <section className="comment-section">
                <CommentList comments={comments} />
                <CommentForm postId={post.id} onAdd={addComment} />
            </section>
        </>
    );
}
