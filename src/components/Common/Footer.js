import React, {Component} from 'react';

class Footer extends Component{
  render(){
    return(
        <div>
         <footer class="footer">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-md-4">
                <span class="copyright">Copyright &copy; Rafal Weglinski 2019</span>
              </div>
              <div class="col-md-4">
                <ul class="list-inline social-buttons">
                  <li class="list-inline-item">
                    <a href="https://github.com/rafalski91?tab=repositories">
                      <i class="fab fa-github"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="https://www.facebook.com/profile.php?id=100001784175786">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="https://www.linkedin.com/in/rafal-weglinski-26300516a/">
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="col-md-4">
                <ul class="list-inline quicklinks">
                  <li class="list-inline-item">
                    <a href="https://www.freeprivacypolicy.com/privacy/view/38b2ca15c134c6fe472ebcdf2bd6fe4f">Privacy Policy</a>
                  </li>
                  {/* <li class="list-inline-item">
                    <a href="#">Terms of Use</a>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}

export default Footer;