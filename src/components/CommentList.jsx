export default function CommentList({ comments }) {
    return (
        <div className="comments-list">
            <h4>Comments ({comments.length})</h4>
            {comments.length === 0 ? (
                <p className="no-comments">No comments.</p>
            ) : (
                comments.map((comment) => (
                    <div key={comment.id} className="comment-item">
                        <strong>{comment.name}</strong>
                        {comment.email && <span className="comment-email">{comment.email}</span>}
                        <p>{comment.body}</p>
                    </div>
                ))
            )}
        </div>
    );
}
