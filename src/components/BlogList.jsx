import { Link } from 'react-router-dom';
import BlogPost from './BlogPost';

export default function BlogList({ posts }) {
    return (
        <section className="post-list">
            {posts.map((post) => (
                <BlogPost
                    key={post.id}
                    title={post.title}
                    content={post.body.slice(0, 80)}
                >
                    <Link to={`/posts/${post.id}`} className="read-more">
                        Read more →
                    </Link>
                </BlogPost>
            ))}
        </section>
    );
}
