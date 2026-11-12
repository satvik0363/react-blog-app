import { useState } from 'react';

export default function CommentForm({ postId, onAdd }) {
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');
    const [error, setError] = useState('');
    const [submitting, setSubmitting] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        if (!name.trim() || !comment.trim()) {
            setError('Enter both fields.');
            return;
        }

        setError('');
        setSubmitting(true);

        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ postId, name: name.trim(), body: comment.trim() }),
        })
            .then((response) => {
                if (!response.ok) throw new Error('Request failed');
                return response.json();
            })
            .then((data) => {
                onAdd({ ...data, id: Date.now() });
                setName('');
                setComment('');
            })
            .catch((err) => {
                console.error('Error:', err);
                setError('Error posting the comment.');
            })
            .finally(() => setSubmitting(false));
    }

    return (
        <form className="comment-form" onSubmit={handleSubmit}>
            <h3>Leave a Comment</h3>
            {error && <p className="error-msg">{error}</p>}
            <label htmlFor="comment-name">Name</label>
            <input
                id="comment-name"
                className="comment-input"
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="comment-text">Comment</label>
            <textarea
                id="comment-text"
                className="comment-textarea"
                rows="4"
                placeholder="Write your comment..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
            />
            <button type="submit" className="submit-btn" disabled={submitting}>
                {submitting ? 'Posting' : 'Submit'}
            </button>
        </form>
    );
}
