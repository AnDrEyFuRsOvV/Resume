import './About.scss'

function About() {
    return (
        <section id="about" className="about">
  <div className="container">
    <div className="about__inner">
      <div className="about__container">
        <h2 className="about__title">ABOUT</h2>
        <div className="about__text">
          <p className="about__text-p1">
            As you know, my name is Andrey, I am 18 years old, I am a software engineer by
            profession. I decided to get a higher education consciously, because I like programming. I try to
            develop
            comprehensively, I like to receive new knowledge.
          </p>
          <p className="about__text-p2">
            Therefore, working in your company will be very useful for me. And I, in turn, will
            apply all my available knowledge so that the company becomes even more promising, and its income grows.
            In
            self-study, I managed to achieve significant results, I learned a lot of technologies and I realized
            that
            I love web development. I want to move forward and never stop again. I think it is your company that
            will
            give me such an opportunity. </p>
        </div>
      </div>
      <img className="about__img" src="images/about-1.svg" alt="img" />
    </div>
    <div className="education__container">
      <img className="education__img" src="images/about-2.svg" alt />
      <div className="education__inner">
        <div className="education__title">educations</div>
        <div className="education__items">
          <div className="education__item">
            <div className="education__item-title">ВСП КФК "НАУ":</div>
            <div className="education__item-subtitle">Software engineering</div>
            <p className="education__item-text">Session: 2019-2023 </p>
          </div>
          <div className="education__item">
            <div className="education__item-title">itdvn:</div>
            <div className="education__item-subtitle">html and css</div>
            <p className="education__item-text">Session: 2022-2023</p>
          </div>
          <div className="education__item">
            <div className="education__item-title">Freecodecamp:</div>
            <div className="education__item-subtitle">JavaScript Algorithms and
              Data Structures</div>
            <p className="education__item-text">Session: 2022-2023</p>
          </div>
          <div className="education__item">
            <div className="education__item-title">documentation:</div>
            <div className="education__item-subtitle">react npm gulp scss ...</div>
            <p className="education__item-text">Session: 2022-2023</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    )
  }
  
  export default About