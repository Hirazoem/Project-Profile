
import './App.css';
import './styles/main.css';

function App() {
  return (
    <div className="portfolio-container">
      <header className="header">
        <img
          src="public/ID.jpg"
          alt="Profile"
          className="profile-img"
        />
        <h1>Bryan Emanuel L. Carpizo</h1>
        <h2>Frontend Developer & Designer</h2>
      </header>

      <main>
        <section id="about" className="section">
          <h3>About Me</h3>
          <p>
            I am a passionate frontend developer with experience building modern, responsive web applications using React, TypeScript, and CSS. I love creating beautiful and user-friendly interfaces.
          </p>
        </section>

        <section id="projects" className="section">
          <h3>Projects</h3>
          <ul className="project-list">
            <li className="project-item">
              <div className="project-info">
                <strong>Project One:</strong> A cool project description goes here.
              </div>
              <div className="button-align-right">
                <a className="button" href="#" target="_blank" rel="noopener noreferrer">View Project</a>
              </div>
            </li>
            <li className="project-item">
              <div className="project-info">
                <strong>Project Two:</strong> Another awesome project description.
              </div>
              <div className="button-align-right">
                <a className="button" href="#" target="_blank" rel="noopener noreferrer">View Project</a>
              </div>
            </li>
            <li className="project-item">
              <div className="project-info">
                <strong>Project Three:</strong> Yet another project to showcase.
              </div>
              <div className="button-align-right">
                <a className="button" href="#" target="_blank" rel="noopener noreferrer">View Project</a>
              </div>
            </li>
          </ul>
        </section>

        <section id="skills" className="section">
          <h3>Skills</h3>
          <ul>
            <li>React</li>
            <li>TypeScript</li>
            <li>JavaScript</li>
            <li>HTML &amp; CSS</li>
            <li>Figma</li>
            <li>Git</li>
          </ul>
        </section>

        <section id="contact" className="section">
          <h3>Contact</h3>
          <form onSubmit={e => e.preventDefault()}>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" required />
            <button className="button" type="submit">Send</button>
          </form>
        </section>
      </main>

      <footer style={{ textAlign: 'center', marginTop: '2rem', color: '#888' }}>
        <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;