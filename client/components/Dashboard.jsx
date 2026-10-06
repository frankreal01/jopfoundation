'use client';
import { useEffect, useState } from 'react';
import { useAuth } from '@clerk/nextjs';
import { api } from '@/lib/api';

const roles = ['Young person', 'Student', 'Graduate', 'Professional', 'Mentor', 'Educator', 'Creator', 'Organisation / Partner'];
const areas = ['Identity & Self-Development', 'Skills & Capability', 'Professional Development', 'Opportunity & Environment'];

export default function Dashboard() {
  const { getToken, isLoaded } = useAuth();
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState({ role: '', location: '', focusAreas: [], goal: '', newsletter: true });
  const [state, setState] = useState({ loading: true, saving: false, msg: '', error: '' });

  useEffect(() => {
    if (!isLoaded) return;
    (async () => {
      try {
        const token = await getToken();
        const { user } = await api('/users/sync', { method: 'POST', token });
        setUser(user);
        setProfile((p) => ({ ...p, ...user.profile }));
        setState((s) => ({ ...s, loading: false }));
      } catch (e) {
        setState({ loading: false, saving: false, msg: '', error: e.message });
      }
    })();
  }, [isLoaded, getToken]);

  const toggleArea = (a) =>
    setProfile((p) => ({
      ...p,
      focusAreas: p.focusAreas.includes(a) ? p.focusAreas.filter((x) => x !== a) : [...p.focusAreas, a],
    }));

  async function save(e) {
    e.preventDefault();
    setState((s) => ({ ...s, saving: true, msg: '', error: '' }));
    try {
      const { user } = await api('/users/me', { method: 'PUT', token: await getToken(), body: profile });
      setUser(user);
      setState((s) => ({ ...s, saving: false, msg: 'Profile saved.' }));
    } catch (err) {
      setState((s) => ({ ...s, saving: false, error: err.message }));
    }
  }

  const done = [profile.role, profile.location, profile.focusAreas.length, profile.goal].filter(Boolean).length;
  const pct = done * 25;

  if (state.loading) return <main className="dash"><div className="container"><p className="dash-note">Loading your dashboard…</p></div></main>;
  if (!user)
    return (
      <main className="dash"><div className="container">
        <p className="form-error" role="alert">{state.error || 'Could not load your account.'} Check that the API server is running.</p>
      </div></main>
    );

  return (
    <main className="dash">
      <div className="container">
        <p className="eyebrow"><span className="eyebrow-line"></span> MEMBER DASHBOARD</p>
        <h1>Welcome, {user.firstName || 'friend'}.</h1>

        <div className="dash-grid">
          <aside className="member-card reveal visible">
            <div className="member-top">
              <img src="/images/logo-white.png" alt="" />
              <small>MEMBER</small>
            </div>
            <strong className="member-no">No. {String(user.memberNumber || 0).padStart(4, '0')}</strong>
            <div>
              <p className="member-name">{[user.firstName, user.lastName].filter(Boolean).join(' ') || user.email}</p>
              <small>{user.email}</small>
            </div>
            <div className="member-meta">
              <span>{profile.role || 'Role not set'}</span>
              <span>Joined {new Date(user.createdAt).toLocaleDateString('en-GB', { month: 'short', year: 'numeric' })}</span>
            </div>
            <div className="meter" aria-label={`Profile ${pct}% complete`}><i style={{ width: `${pct}%` }} /></div>
            <small>Profile {pct}% complete</small>
          </aside>

          <form className="dash-card form" onSubmit={save}>
            <h2>Your direction</h2>
            <label className="field">
              <span>I am a…</span>
              <select value={profile.role} onChange={(e) => setProfile({ ...profile, role: e.target.value })}>
                <option value="">Select a role</option>
                {roles.map((r) => <option key={r}>{r}</option>)}
              </select>
            </label>
            <label className="field">
              <span>Location</span>
              <input value={profile.location} maxLength={80} placeholder="City, Country" onChange={(e) => setProfile({ ...profile, location: e.target.value })} />
            </label>
            <fieldset className="field">
              <span>Focus areas</span>
              <div className="chips">
                {areas.map((a) => (
                  <button type="button" key={a} className={`chip ${profile.focusAreas.includes(a) ? 'on' : ''}`} aria-pressed={profile.focusAreas.includes(a)} onClick={() => toggleArea(a)}>
                    {a}
                  </button>
                ))}
              </div>
            </fieldset>
            <label className="field">
              <span>Who are you becoming?</span>
              <textarea rows={4} maxLength={600} value={profile.goal} onChange={(e) => setProfile({ ...profile, goal: e.target.value })} />
            </label>
            <label className="check">
              <input type="checkbox" checked={profile.newsletter} onChange={(e) => setProfile({ ...profile, newsletter: e.target.checked })} />
              <span>Send me updates from JOP Foundation</span>
            </label>
            {state.error && <p className="form-error" role="alert">{state.error}</p>}
            {state.msg && <p className="form-ok" role="status">{state.msg}</p>}
            <button className="button button-light" disabled={state.saving}>{state.saving ? 'Saving…' : 'Save profile'} <span>↗</span></button>
          </form>
        </div>
      </div>
    </main>
  );
}
