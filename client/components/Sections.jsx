import Link from 'next/link';

export function Hero() {
  return (
<section className="hero" id="home">
            <img
                className="hero-backdrop"
                src="/images/foundation-hero.png"
                alt=""
                aria-hidden="true" />
            <div className="hero-grid container">

                <div className="hero-copy reveal">
                    <p className="eyebrow"><span className="eyebrow-line"></span> A FOUNDATION FOR BECOMING</p>

                    <h1>
                        Become intentional
                        <em>about who you are becoming.</em>
                    </h1>

                    <p className="hero-text">
                        JOP Foundation exists to help young people develop the identity,
                        discipline, skills and professional capacity required to turn
                        potential into meaningful contribution.
                    </p>

                    <div className="hero-actions">
                        <Link className="button button-primary" href="/about#why">
                            Why We Exist <span>↗</span>
                        </Link>
                        <Link className="button button-ghost" href="/philosophy">
                            Explore Our Philosophy
                        </Link>
                    </div>

                    <div className="hero-meta">
                        <span>01</span>
                        <span className="meta-line"></span>
                        <span>IDENTITY · INTENTIONALITY · PROFESSIONALISM</span>
                    </div>
                </div>

            </div>

            <div className="hero-bottom container">
                <span>SCROLL TO EXPLORE</span>
                <span className="scroll-arrow">↓</span>
            </div>
        </section>
  );
}

export function About() {
  return (
<section className="section section-light" id="about">
            <div className="container split-layout">

                <div className="section-intro reveal">
                    <p className="eyebrow"><span className="eyebrow-line"></span> 01 / WHO WE ARE</p>
                    <h2>A foundation built around <span>becoming.</span></h2>
                </div>

                <div className="section-copy reveal reveal-delay">
                    <p className="lead">
                        JOP Foundation is a purpose-driven platform focused on helping
                        young people become more intentional about who they are,
                        what they develop and how they contribute.
                    </p>

                    <p>
                        We believe potential is only a beginning. People need direction,
                        self-awareness, useful skills, disciplined habits and environments
                        that encourage growth. Our work is therefore not simply about
                        telling young people to “do more”; it is about helping them build
                        the foundations required to do meaningful things well.
                    </p>

                    <Link className="text-link" href="/about#why">Understand the reason behind the work <span>→</span></Link>
                </div>
            </div>

            <div className="container principle-strip reveal">
                <div className="principle-item">
                    <span>01</span>
                    <strong>IDENTITY</strong>
                    <p>Know who you are and who you are becoming.</p>
                </div>

                <div className="principle-item">
                    <span>02</span>
                    <strong>INTENTIONALITY</strong>
                    <p>Make conscious choices that align with your purpose.</p>
                </div>

                <div className="principle-item">
                    <span>03</span>
                    <strong>PROFESSIONALISM</strong>
                    <p>Develop the character, skills and conduct to contribute meaningfully.</p>
                </div>
            </div>
        </section>
  );
}

export function Why() {
  return (
<section className="section why-section" id="why">
            <div className="container">

                <div className="section-topline reveal">
                    <p className="eyebrow"><span className="eyebrow-line"></span> 02 / WHY WE EXIST</p>
                    <span className="section-index">JOP / 002</span>
                </div>

                <div className="why-grid">
                    <div className="why-copy reveal">
                        <h2>
                            Potential
                            <span>needs direction.</span>
                        </h2>

                        <p className="large-copy">
                            Young people carry enormous potential. But potential alone
                            does not determine what someone becomes.
                        </p>

                        <p>
                            Direction matters. Development matters. Environment matters.
                            The choices a person makes repeatedly matter. JOP Foundation
                            exists to create conversations, learning experiences and
                            opportunities that help young people move from possibility
                            toward purposeful development.
                        </p>

                        <div className="quote-block">
                            <span className="quote-mark">“</span>
                            <p>
                                We are not trying to tell people who to become.
                                We are helping them become more intentional about it.
                            </p>
                        </div>
                    </div>

                    <div className="why-visual reveal reveal-delay">
                        <div className="architectural-card">
                            <div className="arch arch-one"></div>
                            <div className="arch arch-two"></div>
                            <div className="arch arch-three"></div>
                            <div className="arch-person">
                                <span></span>
                            </div>
                            <div className="arch-label">
                                <small>DIRECTION</small>
                                <strong>01 → 02 → 03</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  );
}

export function Philosophy() {
  return (
<section className="section philosophy-section" id="philosophy">
            <div className="container">

                <div className="section-heading centered reveal">
                    <p className="eyebrow"><span className="eyebrow-line"></span> 03 / OUR PHILOSOPHY</p>
                    <h2>Who we become should be reflected in <span>how we live, grow and show up.</span></h2>
                    <p>
                        Three connected principles guide the way we think about personal
                        development, professional growth and meaningful contribution.
                    </p>
                </div>

                <div className="philosophy-grid">

                    <article className="philosophy-card reveal">
                        <div className="card-top">
                            <span>01</span>
                            <span className="card-arrow">↗</span>
                        </div>
                        <div className="card-symbol"><img src="/images/symbol.png" alt="" /></div>
                        <h3>Identity</h3>
                        <p>
                            Understand your values, strengths, character and direction.
                            Identity gives development a foundation.
                        </p>
                        <span className="card-caption">KNOW YOURSELF</span>
                    </article>

                    <article className="philosophy-card featured reveal reveal-delay">
                        <div className="card-top">
                            <span>02</span>
                            <span className="card-arrow">↗</span>
                        </div>
                        <div className="card-symbol target-symbol">◎</div>
                        <h3>Intentionality</h3>
                        <p>
                            Make deliberate choices about your time, habits, relationships
                            and development. Direction becomes meaningful through action.
                        </p>
                        <span className="card-caption">CHOOSE DELIBERATELY</span>
                    </article>

                    <article className="philosophy-card reveal reveal-delay-2">
                        <div className="card-top">
                            <span>03</span>
                            <span className="card-arrow">↗</span>
                        </div>
                        <div className="card-symbol">▥</div>
                        <h3>Professionalism</h3>
                        <p>
                            Develop competence, character and conduct that allow you to
                            contribute with excellence in real environments.
                        </p>
                        <span className="card-caption">CONTRIBUTE MEANINGFULLY</span>
                    </article>
                </div>

                <div className="philosophy-statement reveal">
                    <span>IDENTITY</span>
                    <i>+</i>
                    <span>INTENTIONALITY</span>
                    <i>+</i>
                    <span>PROFESSIONALISM</span>
                    <strong>=</strong>
                    <span className="accent">PURPOSEFUL DEVELOPMENT</span>
                </div>
            </div>
        </section>
  );
}

export function Direction() {
  return (
<section className="section direction-section" id="direction">
            <div className="container">

                <div className="section-topline reveal">
                    <p className="eyebrow"><span className="eyebrow-line"></span> 04 / OUR DIRECTION</p>
                    <span className="section-index">PURPOSE · VISION · VALUES</span>
                </div>

                <div className="direction-intro">
                    <div className="reveal">
                        <h2>A clear direction for <span>meaningful work.</span></h2>
                    </div>
                    <div className="reveal reveal-delay">
                        <p>
                            JOP Foundation is still being built. These statements establish the direction
                            of the institution while leaving room for the work, evidence and community to shape it.
                        </p>
                    </div>
                </div>

                <div className="direction-grid">
                    <article className="direction-card reveal">
                        <span className="direction-number">01</span>
                        <p className="direction-label">OUR MISSION</p>
                        <h3>Develop purposeful people for meaningful impact.</h3>
                        <p>
                            We aim to create practical pathways that help young people develop identity,
                            intentionality and professional capacity.
                        </p>
                    </article>

                    <article className="direction-card featured reveal reveal-delay">
                        <span className="direction-number">02</span>
                        <p className="direction-label">OUR VISION</p>
                        <h3>Build a generation of intentional professionals who contribute meaningfully.</h3>
                        <p>
                            The long-term ambition is a trusted African platform for personal and professional development.
                        </p>
                    </article>

                    <article className="direction-card reveal reveal-delay-2">
                        <span className="direction-number">03</span>
                        <p className="direction-label">OUR VALUES</p>
                        <div className="value-list">
                            <span>Intentionality</span>
                            <span>Identity</span>
                            <span>Growth</span>
                            <span>Professionalism</span>
                            <span>Contribution</span>
                        </div>
                    </article>
                </div>
            </div>
        </section>
  );
}

export function Programs() {
  return (
<section className="section focus-section" id="programs">
            <div className="container">

                <div className="section-topline reveal">
                    <p className="eyebrow"><span className="eyebrow-line"></span> 05 / FOCUS AREAS</p>
                    <span className="section-index">BUILDING THE ARCHITECTURE</span>
                </div>

                <div className="focus-intro">
                    <div className="reveal">
                        <h2>Where the philosophy <span>becomes practice.</span></h2>
                    </div>
                    <div className="reveal reveal-delay">
                        <p>
                            Our work will grow through practical initiatives rather than
                            empty inspiration. These focus areas provide the architecture
                            for future programs and partnerships.
                        </p>
                    </div>
                </div>

                <div className="focus-list">

                    <article className="focus-row reveal">
                        <div className="focus-number">01</div>
                        <div className="focus-title">
                            <h3>Identity &amp; Self-Development</h3>
                            <span>SELF-AWARENESS · DIRECTION · PERSONAL GROWTH</span>
                        </div>
                        <p>
                            Creating conversations, resources and experiences that help
                            young people understand themselves and define the person they
                            are intentionally becoming.
                        </p>
                        <span className="focus-plus">+</span>
                    </article>

                    <article className="focus-row reveal">
                        <div className="focus-number">02</div>
                        <div className="focus-title">
                            <h3>Skills &amp; Capability</h3>
                            <span>LEARNING · TECHNOLOGY · PRACTICAL COMPETENCE</span>
                        </div>
                        <p>
                            Connecting purpose with useful abilities that increase a
                            young person's capacity to create, solve and contribute.
                        </p>
                        <span className="focus-plus">+</span>
                    </article>

                    <article className="focus-row reveal">
                        <div className="focus-number">03</div>
                        <div className="focus-title">
                            <h3>Professional Development</h3>
                            <span>CONDUCT · COMMUNICATION · EXCELLENCE</span>
                        </div>
                        <p>
                            Helping emerging professionals develop the habits, standards
                            and presence required to operate effectively in professional spaces.
                        </p>
                        <span className="focus-plus">+</span>
                    </article>

                    <article className="focus-row reveal">
                        <div className="focus-number">04</div>
                        <div className="focus-title">
                            <h3>Opportunity &amp; Environment</h3>
                            <span>NETWORKS · EXPOSURE · ACCESS</span>
                        </div>
                        <p>
                            Building relationships and environments where purposeful young
                            people can encounter ideas, people and opportunities that expand
                            their possibilities.
                        </p>
                        <span className="focus-plus">+</span>
                    </article>
                </div>
            </div>
        </section>
  );
}

export function Approach() {
  return (
<section className="section approach-section">
            <div className="container approach-grid">

                <div className="approach-visual reveal">
                    <div className="approach-orbit orbit-one"></div>
                    <div className="approach-orbit orbit-two"></div>
                    <div className="approach-center">
                        <span>JOP</span>
                        <small>FOUNDATION</small>
                    </div>
                    <div className="orbit-label label-one">LEARN</div>
                    <div className="orbit-label label-two">BUILD</div>
                    <div className="orbit-label label-three">CONTRIBUTE</div>
                </div>

                <div className="approach-copy reveal reveal-delay">
                    <p className="eyebrow"><span className="eyebrow-line"></span> 06 / OUR APPROACH</p>
                    <h2>From <span>potential</span> to contribution.</h2>

                    <p className="lead">
                        We are interested in development that can be seen in real life:
                        clearer identity, stronger skills, better decisions, professional
                        conduct and meaningful work.
                    </p>

                    <div className="approach-steps">
                        <div>
                            <span>01</span>
                            <div>
                                <strong>Discover</strong>
                                <p>Understand yourself, your environment and the problems around you.</p>
                            </div>
                        </div>

                        <div>
                            <span>02</span>
                            <div>
                                <strong>Develop</strong>
                                <p>Build the knowledge, skills and habits required for growth.</p>
                            </div>
                        </div>

                        <div>
                            <span>03</span>
                            <div>
                                <strong>Contribute</strong>
                                <p>Apply what you have developed to create value for other people.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  );
}

export function Founder() {
  return (
<section className="section founder-section" id="founder">
            <div className="container founder-grid">

                <div className="founder-image reveal">
                    <div className="portrait-frame">
                        <img
                            src="/images/founder.png"
                            alt="Julius Franklin, founder of JOP Foundation" />
                        <div className="portrait-placeholder">
                            <span>JULIUS<br />FRANKLIN</span>
                            <small>FOUNDER PORTRAIT</small>
                        </div>
                    </div>
                    <div className="portrait-caption">
                        <span>JULIUS FRANKLIN</span>
                        <small>FOUNDER, JOP FOUNDATION</small>
                    </div>
                </div>

                <div className="founder-copy reveal reveal-delay">
                    <p className="eyebrow"><span className="eyebrow-line"></span> 07 / THE FOUNDER</p>
                    <h2>Meet the person <span>behind the purpose.</span></h2>

                    <p className="lead">
                        JOP Foundation began from a conviction that young people need
                        more than potential. They need the direction and development
                        that help potential become capacity.
                    </p>

                    <p>
                        Julius Franklin is building JOP Foundation around a simple belief:
                        how we understand ourselves influences how we act, what we build
                        and what we contribute. The Foundation is an attempt to turn that
                        belief into a platform for purposeful development.
                    </p>

                    <blockquote>
                        “I believe that who we become should be intentional — and that
                        our lives should eventually show evidence of what we value.”
                    </blockquote>

                    <Link className="text-link" href="/contact">Start a conversation <span>→</span></Link>
                </div>
            </div>
        </section>
  );
}

export function Journal() {
  return (
<section className="section journal-section" id="journal">
            <div className="container">

                <div className="section-topline reveal">
                    <p className="eyebrow"><span className="eyebrow-line"></span> 08 / FROM THE JOURNAL</p>
                    <Link className="text-link" href="/contact">Suggest a conversation <span>→</span></Link>
                </div>

                <div className="journal-grid">

                    <article className="journal-card journal-feature reveal">
                        <div className="journal-number">01</div>
                        <div className="journal-content">
                            <span>IDENTITY</span>
                            <h3>Who are you becoming?</h3>
                            <p>
                                Identity is not only about how you describe yourself.
                                It is also about the direction your choices are taking you.
                            </p>
                            <Link href="/contact">Explore the idea →</Link>
                        </div>
                    </article>

                    <article className="journal-card reveal reveal-delay">
                        <div className="journal-number">02</div>
                        <div className="journal-content">
                            <span>INTENTIONALITY</span>
                            <h3>Good intentions are not enough.</h3>
                            <p>
                                Purpose becomes visible through repeated decisions,
                                habits and actions.
                            </p>
                            <Link href="/contact">Explore the idea →</Link>
                        </div>
                    </article>

                    <article className="journal-card reveal reveal-delay-2">
                        <div className="journal-number">03</div>
                        <div className="journal-content">
                            <span>PROFESSIONALISM</span>
                            <h3>How you show up matters.</h3>
                            <p>
                                Competence, character and conduct shape the value
                                you are able to contribute.
                            </p>
                            <Link href="/contact">Explore the idea →</Link>
                        </div>
                    </article>
                </div>
            </div>
        </section>
  );
}

