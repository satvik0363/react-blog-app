export default function BlogPost({ title, author, date, content, children }) {
    return (
        <article className="post-card">
            <h2 className="post-title">{title}</h2>
            {author && (
                <div className="post-meta">
                    <span>By {author}</span>
                    {date && <> - <time>{date}</time></>}
                </div>
            )}
            <p className="post-content">{content}</p>
            {children}
        </article>
    );
}
