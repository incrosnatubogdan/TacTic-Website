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
<img class="logo" src="assets/images/toggle/dark_theme.svg">
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
  <a href="#whatwedo">Home</a>
  <a href="#whatwedo">What we do</a>
  <a href="#whatwedo">Let's talk</a>
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
      <span class="text" id="right_text">web developement</span>
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
  <p>Mauris varius interdum sapien non auctor. Curabitur commodo sodales mauris, eu pellentesque elit aliquam et. Mauris tristique augue ac magna maximus interdum. Nunc in risus ut mauris dapibus pharetra. Nam consequat, dolor vitae</p>
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

@endsection