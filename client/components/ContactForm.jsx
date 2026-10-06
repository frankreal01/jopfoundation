'use client';
import { useState } from 'react';
import { api } from '@/lib/api';

const topics = ['Young person', 'Mentor', 'Educator', 'Professional', 'Creator', 'Organisation', 'Partnership', 'Other'];

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', topic: topics[0], message: '', website: '' });
  const [state, setState] = useState({ status: 'idle', error: '' });
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  async function submit(e) {
    e.preventDefault();
    setState({ status: 'sending', error: '' });
    try {
      await api('/contact', { method: 'POST', body: form });
      setState({ status: 'sent', error: '' });
      setForm({ name: '', email: '', topic: topics[0], message: '', website: '' });
    } catch (err) {
      setState({ status: 'error', error: err.message });
    }
  }

  if (state.status === 'sent')
    return (
      <div className="form-success" role="status">
        <strong>Message received.</strong>
        <p>Thank you for reaching out. We'll reply to the email you provided.</p>
        <button className="button button-primary-dark" onClick={() => setState({ status: 'idle', error: '' })}>
          Send another message
        </button>
      </div>
    );

  return (
    <form className="form" onSubmit={submit} noValidate>
      <label className="field">
        <span>Your name</span>
        <input value={form.name} onChange={set('name')} required minLength={2} autoComplete="name" />
      </label>
      <label className="field">
        <span>Email address</span>
        <input type="email" value={form.email} onChange={set('email')} required autoComplete="email" />
      </label>
      <label className="field">
        <span>I am a…</span>
        <select value={form.topic} onChange={set('topic')}>
          {topics.map((t) => <option key={t}>{t}</option>)}
        </select>
      </label>
      <label className="field">
        <span>Message</span>
        <textarea rows={6} value={form.message} onChange={set('message')} required minLength={10} />
      </label>
      {/* honeypot: hidden from people, filled by bots */}
      <input className="hp" tabIndex={-1} autoComplete="off" aria-hidden="true" value={form.website} onChange={set('website')} />
      {state.status === 'error' && <p className="form-error" role="alert">{state.error}</p>}
      <button className="button button-primary-dark" disabled={state.status === 'sending'}>
        {state.status === 'sending' ? 'Sending…' : 'Send message'} <span>↗</span>
      </button>
    </form>
  );
}
