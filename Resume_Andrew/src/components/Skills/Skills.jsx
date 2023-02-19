import './Skills.scss'

function Skills() {
    return (
        <section id="skills" className="skills">
  <div className="container">
    <div className="skills__inner">
      <div className="skills__title">Skills</div>
      <div className="skills__items">
        <div className="skills__item">
          <img src="images/skills-logo1.svg" alt="img" className="skills__logo" />
          <div className="skills__item-content">
            <div className="skills__item-content1">
              <h3 className="skills__item-title">Dev Tools</h3>
              <p className="skills__item-descr">Here are the tools that I know how to use.</p>
            </div>
            <div className="skills__item-content2">
              <h4 className="skills__item-subtitle">I use:</h4>
              <p className="skills__item-text">
                Terminal Windows and I know a little Linux, git bash, GIT, GIThub,
                gulp, webpack, npm, React, Firefox, Opera, Chrome,
                Figma, Photoshop, StackOverflow.
              </p>
            </div>
            <div className="skills__item-content3">
              <h4 className="skills__item-subtitle">IDEA I am using: </h4>
              <p className="skills__item-text">
                Visual Studio code<br />
                pycharm<br />
                Visual Studio<br />
                notepad++<br />
              </p>
            </div>
          </div>
        </div>
        <div className="skills__item">
          <img src="images/skills-logo2.svg" alt="img" className="skills__logo" />
          <div className="skills__item-content">
            <div className="skills__item-content1">
              <h3 className="skills__item-title">tech skills</h3>
              <p className="skills__item-descr">I love writing code and learning new things.</p>
            </div>
            <div className="skills__item-content2">
              <h4 className="skills__item-subtitle">languages i speak:</h4>
              <p className="skills__item-text">
                HTML(HTML5), CSS(CSS3), JavaScript, SASS/scss, JQuery.
                flexbox, CSS grid layout, responsive design, mobile-first/desktop-first, cross-browser layout.
              </p>
            </div>
            <div className="skills__item-content3">
              <h4 className="skills__item-subtitle">not about frontend:</h4>
              <p className="skills__item-text">
                c++ <br />
                C#<br />
                python<br />
                mySqlworckbench<br />
                lisp<br />
                all basic lvl taught in college.<br />
              </p>
            </div>
          </div>
        </div>
        <div className="skills__item">
          <img src="images/skills-logo3.svg" alt="img" className="skills__logo" />
          <div className="skills__item-content">
            <div className="skills__item-content1">
              <h3 className="skills__item-title">soft skills</h3>
              <p className="skills__item-descr">If we want to talk about it, I can say that you need me.</p>
            </div>
            <div className="skills__item-content2">
              <h4 className="skills__item-subtitle">My characteristic:</h4>
              <p className="skills__item-text">
                Self-management,
                time-management, confidence, ambition, friendliness, focus, situational
                awareness, enthusiasm and optimism, empathy.
              </p>
            </div>
            <div className="skills__item-content3">
              <h4 className="skills__item-subtitle">my English:</h4>
              <p className="skills__item-text">
                B2 lvl.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    )
  }
  
  export default Skills