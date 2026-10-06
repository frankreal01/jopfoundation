export default function AuthShell({ eyebrow, title, accent, text, children }) {
  return (
    <main className="auth-shell">
      <div className="container auth-grid">
        <div className="auth-copy">
          <p className="eyebrow"><span className="eyebrow-line"></span> {eyebrow}</p>
          <h1>{title}<em>{accent}</em></h1>
          <p className="hero-text">{text}</p>
        </div>
        <div className="auth-box">{children}</div>
      </div>
    </main>
  );
}
