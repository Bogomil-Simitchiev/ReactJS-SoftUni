function About(props) {
    return (
        <section class="about">
        <div id="about" class="section-heading text-center">
          <h2>about me</h2>
        </div>
        <div class="container">
          <div class="about-content">
            <div class="row">
              <div class="col-sm-6">
                <div class="single-about-txt">
                  <h3>
                    I am a Professional UI/UX Designer and Web developer. Consectetur an adipisi elita, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud.
                  </h3>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspi unde omnis iste natus error sit voluptatem accusantium doloremque lauda ntium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam vo luptatem quia voluptas sit aspernatur aut odit aut fugit,
                  </p>
                  <div class="row">
                    <div class="col-sm-4">
                      <div class="single-about-add-info">
                        <h3>phone</h3>
                        <p>987-123-6547</p>
                      </div>
                    </div>
                    <div class="col-sm-4">
                      <div class="single-about-add-info">
                        <h3>email</h3>
                        <p>browny@info.com</p>
                      </div>
                    </div>
                    <div class="col-sm-4">
                      <div class="single-about-add-info">
                        <h3>website</h3>
                        <p>www.brownsine.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-offset-1 col-sm-5">
                <div class="single-about-img">
                  <img src={props.photoPath} alt="profile_image"/>          
                </div>
  
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default About;