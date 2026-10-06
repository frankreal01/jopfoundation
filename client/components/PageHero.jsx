export default function PageHero({ eyebrow, title, accent, text }) {
  return (
    <section className="hero page-hero">
      <div className="container page-hero-inner reveal">
        <p className="eyebrow"><span className="eyebrow-line"></span> {eyebrow}</p>
        <h1>
          {title}
          {accent && <em>{accent}</em>}
        </h1>
        {text && <p className="hero-text">{text}</p>}
      </div>
    </section>
  );
}
