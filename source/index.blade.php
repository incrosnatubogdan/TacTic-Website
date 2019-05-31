@extends('_layouts.master')

@section('body')
  <!-- <div class="container">
      <ul>
        <li><span>Home</span></li>
        <li><span>About us</span></li>
        <li><span>Contact</span></li>
      </ul>
    </div> -->
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
  <div class="top_menu">
      <img class="logo" src="assets/images/toggle/dark_theme.svg">
    </div>
  <img class="menu_toggle" src="assets/images/toggle/dark_theme.svg">
  <nav class="top_main_menu">
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
  <section class="top">
    
    <p class="dark_theme_c" data-en="This is just a test old chap &#128513" data-ro="">Lorem ipsum dolor, sit amet consectetur adipisicing
      elit. Accusamus iure voluptatibus sapiente, laboriosam eveniet provident vel quaerat. Rerum omnis quia iste. Quos
      quibusdam tenetur et repudiandae vero velit optio saepe!</p>
    <p class="dark_theme_c" data-en="This is just a test old chap &#128514" data-ro="">Lorem ipsum dolor, sit amet consectetur adipisicing
      elit. Accusamus iure voluptatibus sapiente, laboriosam eveniet provident vel quaerat. Rerum omnis quia iste. Quos
      quibusdam tenetur et repudiandae vero velit optio saepe!</p>
    <p class="dark_theme_c" data-en="This is just a test old chap &#128517" data-ro="">Lorem ipsum dolor, sit amet consectetur adipisicing
      elit. Accusamus iure voluptatibus sapiente, laboriosam eveniet provident vel quaerat. Rerum omnis quia iste. Quos
      quibusdam tenetur et repudiandae vero velit optio saepe!</p>
    <p class="dark_theme_c" data-en="This is just a test old chap &#128520" data-ro="">Lorem ipsum dolor, sit amet consectetur adipisicing
      elit. Accusamus iure voluptatibus sapiente, laboriosam eveniet provident vel quaerat. Rerum omnis quia iste. Quos
      quibusdam tenetur et repudiandae vero velit optio saepe!</p>
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
@endsection
