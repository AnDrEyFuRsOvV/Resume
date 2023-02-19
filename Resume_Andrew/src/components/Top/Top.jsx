import './Top.scss'

function Top() {
  return (
    <section className="top">
  <div className="container">
    <div className="top__inner">
      <div className="top__img" data-aos="zoom-in">
        <img src="images/top-img.jpg" alt="myPhoto" />
      </div>
      <div className="top__content">
        <h1 className="top__content-title">fursov andrew</h1>
        <h2 className="top__content-underTitle">junior frontend</h2>
        <p className="top__content-text">
          Hi, my name is Andrew. I’m 18 years old and I’m a Junior Frontend developer.
        </p>
        <a className="top__contact-btn" href="#contacts">contact me</a>
      </div>
    </div>
  </div>
  <div className="top__contacts">
    <div className="top__contacts-inner">
      <h3 className="top__contacts-title">phone</h3>
      <a href="tel:+380683741042" className="top__contacts-phone">+380 68 374 10 42</a>
    </div>
    <div className="top__contacts-inner">
      <h3 className="top__contacts-title">email</h3>
      <a href="mailto:fursikplay@gmail.com" className="top__contacts-email">fursikplay@gmail.com</a>
    </div>
    <div className="top__contacts-inner">
      <h3 className="top__contacts-title">social network</h3>
      <div className="top__contacts-social">
        <a href="https://instagram.com/_00chunhunmaru00_?igshid=OGQ2MjdiOTE=" className="top__contacts-link">
          <img src="images/social-img1.svg" alt="social-img" />
        </a>
        <a href="https://t.me/Furionchik1337" className="top__contacts-link">
          <img src="images/social-img2.svg" alt="social-img" />
        </a>
        <a href="https://github.com/AnDrEyFuRsOvV" className="top__contacts-link">
          <img src="images/social-img3.svg" alt="social-img" />
        </a>
        <a href="https://vb.me/switchToViber" className="top__contacts-link">
          <img src="images/social-img4.svg" alt="social-img" />
        </a>
      </div>
    </div>
  </div>
</section>
  )
}

export default Top