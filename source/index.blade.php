@extends('_layouts.master')

@section('body')
<div class="pre_loader">
  <div class="lds-roller">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
  <button class="next">Next</button>
</div>
<div class="anim--holder">
  <img class="anim--holder-img" src="assets/images/anim/stop.svg">
</div>
<img class="logo" src="assets/images/logo.png">
<img class="menu_toggle" src="assets/images/toggle/dark_theme.svg">
<nav class="mobile_menu">
  <div class="menu">
    <p class="dark_theme_c">Home</p>
    <p class="dark_theme_c">Home</p>
    <p class="dark_theme_c">Home</p>
    <div class="toggle">
      <input type="checkbox" name="toggle" class="check-checkbox" id="mytoggle">
      <label class="check-label" for="mytoggle">
        <div id="background"></div>
        <img class="switch_img" data-img="dark_theme_sw" src="assets/images/toggle/dark_theme.svg">
      </label>
    </div>
    <div class="languages">
      <span data-lang="ro" class="lang">RO</span>
      <span data-lang="en" class="lang">EN</span>
    </div>
  </div>
</nav>
<nav class="desktop_menu">
  <a class="top">Home</a>
  <a href="#whatwedo">What we do</a>
  <a class="contact">Let's talk</a>
  <div class="languages">
      <span data-lang="ro" class="lang">RO</span>
      <span data-lang="en" class="lang">EN</span>
    </div>
</nav>
<section class="top">
  <div class="ball_container">
    <div class="animContainer">
      <div class="line"></div>
      <div class="posAbs objectUpDown">
        <div class="ball"></div>
      </div>
    </div>

    <div class="animContainer">
      <div class="line"></div>
      <div class="posAbs objectDownUp">
        <div class="ball"></div>
      </div>
    </div>

    <div class="animContainer">
      <div class="line"></div>
      <div class="posAbs objectUpDown">
        <div class="ball"></div>
      </div>
    </div>

    <div class="animContainer">
      <div class="line"></div>
      <div class="posAbs objectDownUp">
        <div class="ball"></div>
      </div>
    </div>

    <div class="animContainer">
      <div class="line"></div>
      <div class="posAbs objectUpDown">
        <div class="ball"></div>
      </div>
    </div>

    <div class="animContainer">
      <div class="line"></div>
      <div class="posAbs objectUpDown">
        <div class="ball"></div>
      </div>
    </div>

    <div class="animContainer">
      <div class="line"></div>
      <div class="posAbs objectUpDown">
        <div class="ball"></div>
      </div>
    </div>
  </div>
  <h1 class="lg-title">Hi there! We are tac:tic, a team of 3 that is solving problems in a inovative way...</h1>
  <div class="services_switcher">
    <div class="left box">
      <span class="text" id="left_text">design</span>
      <img class="prev" src="assets/images/switcher/leftArrow.svg">
    </div>
    <div class="bar"></div>
    <div class="right box">
      <span class="text" id="right_text">web development</span>
      <img class="next" src="assets/images/switcher/rightArrow.svg">
    </div>
  </div>
</section>
<section class="bottom">
  <div class="show_hidden">
    <img class="up" src="assets/images/switcher/rightArrow.svg">
  </div>
  <div class="text-container">
    <h2>Lorem ipsum dolor sit amet, consectetur:</h2>
    <p>Mauris varius interdum sapien non auctor. Curabitur commodo sodales mauris, eu pellentesque elit aliquam et.
      Mauris tristique augue ac magna maximus interdum. Nunc in risus ut mauris dapibus pharetra. Nam consequat, dolor
      vitae</p>
    <div class="services">
      <div class="services-category">
        <span class="services-category--title">marketing</span>
        <ul class="services-category--list">
          <li class="services-category--element" data-en="Black magic, son">Da pe traducere sa vezi magie</li>
          <li class="services-category--element" data-en="Black magic, son">Da pe traducere sa vezi magie</li>
          <li class="services-category--element" data-en="Black magic, son">Da pe traducere sa vezi magie</li>
          <li class="services-category--element" data-en="Black magic, son">Da pe traducere sa vezi magie</li>
          <li class="services-category--element" data-en="Black magic, son">Da pe traducere sa vezi magie</li>
          <li class="services-category--element" data-en="Black magic, son">Da pe traducere sa vezi magie</li>
        </ul>
      </div>
      <div class="services-category">
        <span class="services-category--title">marketing</span>
        <ul class="services-category--list">
          <li class="services-category--element" data-en="Black magic, son">Da pe traducere sa vezi magie</li>
          <li class="services-category--element" data-en="Black magic, son">Da pe traducere sa vezi magie</li>
          <li class="services-category--element" data-en="Black magic, son">Da pe traducere sa vezi magie</li>
          <li class="services-category--element" data-en="Black magic, son">Da pe traducere sa vezi magie</li>
          <li class="services-category--element" data-en="Black magic, son">Da pe traducere sa vezi magie</li>
          <li class="services-category--element" data-en="Black magic, son">Da pe traducere sa vezi magie</li>
        </ul>
      </div>
      <div class="services-category">
        <span class="services-category--title">marketing</span>
        <ul class="services-category--list">
          <li class="services-category--element" data-en="Black magic, son">Da pe traducere sa vezi magie</li>
          <li class="services-category--element" data-en="Black magic, son">Da pe traducere sa vezi magie</li>
          <li class="services-category--element" data-en="Black magic, son">Da pe traducere sa vezi magie</li>
          <li class="services-category--element" data-en="Black magic, son">Da pe traducere sa vezi magie</li>
          <li class="services-category--element" data-en="Black magic, son">Da pe traducere sa vezi magie</li>
          <li class="services-category--element" data-en="Black magic, son">Da pe traducere sa vezi magie</li>
        </ul>
      </div>
    </div>
</section>
<section class="contact">
  <div class="container container-service">
    <h3>Web Design</h3>
    <div class="round web_design">
      <input type="checkbox" data-price="280" id="checkbox" />
      <label for="checkbox">
        <p>Ceva text aici</p>
      </label>
    </div>
    <div class="round web_design">
      <input type="checkbox" data-price="280" id="checkbox_1" />
      <label for="checkbox_1">
        <p>Ceva text aici</p>
      </label>
    </div>
    <div class="round web_design">
      <input type="checkbox" data-price="280" id="checkbox_2" />
      <label for="checkbox_2">
        <p>Ceva text aici</p>
      </label>
    </div>
    <div class="round web_design">
      <input type="checkbox" data-price="280" id="checkbox_3" />
      <label for="checkbox_3">
        <p>Ceva text aici</p>
      </label>
    </div>
    <div class="round web_design">
      <input type="checkbox" data-price="280" id="checkbox_4" />
      <label for="checkbox_4">
        <p>Ceva text aici</p>
      </label>
    </div>
  </div>
  <div class="container container-service">
    <h3>Web Dev</h3>
    <div class="round web_dev">
      <input type="checkbox" data-price="280" id="checkbox_5" />
      <label for="checkbox_5">
        <p>Ceva text aici</p>
      </label>
    </div>
    <div class="round web_dev">
      <input type="checkbox" data-price="280" id="checkbox_6" />
      <label for="checkbox_6">
        <p>Ceva text aici</p>
      </label>
    </div>
    <div class="round web_dev">
      <input type="checkbox" data-price="280" id="checkbox_7" />
      <label for="checkbox_7">
        <p>Ceva text aici</p>
      </label>
    </div>
    <div class="round web_dev">
      <input type="checkbox" data-price="280" id="checkbox_9" />
      <label for="checkbox_9">
        <p>Ceva text aici</p>
      </label>
    </div>
    <div class="round web_dev">
      <input type="checkbox" data-price="280" id="checkbox_8" />
      <label for="checkbox_8">
        <p>Ceva text aici</p>
      </label>
    </div>
  </div>
  <div class="container container-service">
    <h3>Marketing</h3>
    <div class="round marketing">
      <input type="checkbox" data-price="280" id="checkbox_10" />
      <label for="checkbox_10">
        <p>Ceva text aici</p>
      </label>
    </div>
    <div class="round marketing">
      <input type="checkbox" data-price="280" id="checkbox_11" />
      <label for="checkbox_11">
        <p>Ceva text aici</p>
      </label>
    </div>
    <div class="round marketing">
      <input type="checkbox" data-price="280" id="checkbox_12" />
      <label for="checkbox_12">
        <p>Ceva text aici</p>
      </label>
    </div>
    <div class="round marketing">
      <input type="checkbox" data-price="280" id="checkbox_13" />
      <label for="checkbox_13">
        <p>Ceva text aici</p>
      </label>
    </div>
    <div class="round marketing">
      <input type="checkbox" data-price="280" id="checkbox_14" />
      <label for="checkbox_14">
        <p>Ceva text aici</p>
      </label>
    </div>
  </div>
  <div class="payment">
      <p class="old_price hidden">0</p>
      <h3 class="final_price hidden">0</h3>
    </div>
  <div class="services_switcher services_switcher-contact">
    <div class="left box">
      <img class="prev next_service" src="assets/images/switcher/leftArrow.svg">
    </div>
    <div class="bar"></div>
    <div class="right box">
      <img class="next next_service" src="assets/images/switcher/rightArrow.svg">
    </div>
  </div>
  <form class="contact-form">
    <h3 class="contact-form-title">let's talk...</h3>
    <input type="text" class="contact-form-field--name" placeholder="name">
    <input type="email" class="contact-form-field--email" placeholder="email">
    <textarea rows="10" cols="50" class="contact-form-field--textarea" placeholder="Tell us a little about your great ideea"></textarea>
    <button class="contact-form-send">send</button>
  </form>
</section>

@endsection