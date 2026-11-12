import { useState } from 'react';

const emptyForm = { name: '', email: '', message: '' };

export default function ContactPage() {
    const [form, setForm] = useState(emptyForm);
    const [submittedName, setSubmittedName] = useState('');

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        setSubmittedName(form.name);
        setForm(emptyForm);
    }

    return (
        <section className="post-card">
            <h2 className="post-title">Contact Me</h2>
            <p className="post-meta">Send a message.</p>

            {submittedName && (
                <p className="success-msg">
                    Your message was sent.
                </p>
            )}

            <form className="contact-form" onSubmit={handleSubmit}>
                <label htmlFor="contact-name">Name</label>
                <input
                    id="contact-name"
                    name="name"
                    type="text"
                    className="comment-input"
                    value={form.name}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="contact-email">Email</label>
                <input
                    id="contact-email"
                    name="email"
                    type="email"
                    className="comment-input"
                    value={form.email}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="contact-message">Message</label>
                <textarea
                    id="contact-message"
                    name="message"
                    rows="5"
                    className="comment-textarea"
                    value={form.message}
                    onChange={handleChange}
                    required
                />

                <button type="submit" className="submit-btn">Send Message</button>
            </form>
        </section>
    );
}
