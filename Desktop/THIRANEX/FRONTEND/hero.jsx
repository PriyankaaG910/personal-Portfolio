function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>
          Hi, I'm <span>Priyankaa G</span>
        </h1>

        <h3>AIML Student | Full Stack Learner</h3>

        <p>
          Passionate about Artificial Intelligence,
          Machine Learning and Web Development.
        </p>

        <button className="btn">Download Resume</button>
      </div>

      <div className="hero-image">
        <img src="/profile.jpg" alt="profile" />
      </div>
    </section>
  );
}

export default Hero;