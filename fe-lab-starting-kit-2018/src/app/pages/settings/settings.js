require('./settings.less');


import { model } from './index.js';
import { NewEventBus } from "../../eventBus";
import { header } from "../../components/header/header/header"
import Handlebars from "handlebars";

const body = document.querySelector("body");
export function settings_page() {


    body.innerHTML = "";

    const viev = `
    <header class="header">
    <div class="header__logo">
      <p class="header__logo-text">{{name}}</p>
      <span class="header__logo-icon icon-add" id="add-task"></span>
    </div>
    <nav class="header__nav">
      <a href="#tasks-list"><span class="header__icon-list icon-list choosed-icon" id="tasks_list"></span></a>
      <a href="#reports"><span class="header__icon-statistics icon-statistics" id="reports"></span></a>
      <a href="#settings"><span class="header__icon-settings icon-settings" id="settings"></span></a>
    </nav>
    </header>
    
    <header class="header header-fixed">
    <div class="header-fixed__content">
    <div class="header__logo">
    <img src="../images/Logo.svg">
    </div>
    <nav class="header__nav">
    <a><span class="icon-add" id="add-task"></span></a>
    <a href="#tasks-list"> <span class="header__icon-list icon-list" id="tasks_list"></span></a>
    <a href="#reports"> <span class="header__icon-statistics icon-statistics" id="reports"></span></a>
    <a href="#settings"><span class="header__icon-settings icon-settings choosed-icon" id="settings"></span></a>
    </nav>
    </div>
    
    </header>



<main class="pomodoros-page">

  <section class="main-top">
<div class="main-top__touggle">
  <span class="choose-color ">Pomodoros</span>
  <span>|</span>
  <span class="categories-check">Categories</span> 
 </div>

<h3 class="main-top__title">Categories list overview</h3>
  </section>


<section class="cycle-settings">

  <div class="settings__container work-time">
    <div class="settings__container-circle"><div class="category__circle">
      <div class="radio-button">
      <div class="circle__body">
          <div class="circle__offal">
              <div class="circle__center "></div>
          </div>
      </div>
    </div>
    </div>
    </div>
    
    <div class="settings__container-content">
    <h3 class="settings__container-name">Work Time</h3>
    <div class="settings-input"> <span class="icon-minus work-time-minus"></span><input value="25" disabled/><span class="icon-add work-time-plus"></span></div>
    <p class="settings__container-describe">Please select a value between 15 and 25 <span>minutes</span></p>
    
    
    </div>
    
      </div>
        <div class="settings__container work-iteration">
    <div class="settings__container-circle"><div class="category__circle">
      <div class="radio-button">
      <div class="circle__body">
          <div class="circle__offal">
              <div class="circle__center"></div>
          </div>
      </div>
    </div>
    </div>
    </div>
    
    <div class="settings__container-content">
    <h3 class="settings__container-name">Work Iteration</h3>
    <div class="settings-input"> <span class="icon-minus  work-iteration-minus"></span><input value="5" disabled/><span class="icon-add  work-iteration-plus"></span></div>
    <p class="settings__container-describe">Please select a value between 2 and 5<span>iterations</span></p>
    
    
    </div>
    
      </div>

        <div class="settings__container short-break">
    <div class="settings__container-circle"><div class="category__circle">
      <div class="radio-button">
      <div class="circle__body">
          <div class="circle__offal">
              <div class="circle__center"></div>
          </div>
      </div>
    </div>
    </div>
    </div>
    
    <div class="settings__container-content">
    <h3 class="settings__container-name">Short Break</h3>
    <div class="settings-input"> <span class="icon-minus short-break-minus"></span><input value="5" disabled/><span class="icon-add short-break-plus"></span></div>
    <p class="settings__container-describe">Please select a value between 3 and 15 <span>minutes</span></p>
    
    
    </div>
    
      </div>
        <div class="settings__container long-break">
    <div class="settings__container-circle"><div class="category__circle">
      <div class="radio-button">
      <div class="circle__body">
          <div class="circle__offal">
              <div class="circle__center"></div>
          </div>
      </div>
    </div>
    </div>
    </div>
    
    <div class="settings__container-content">
    <h3 class="settings__container-name">Long Break</h3>
    <div class="settings-input"> <span class="icon-minus long-break-minus"></span><input value="15" disabled/><span class="icon-add long-break-plus"></span></div>
    <p class="settings__container-describe">Please select a value between 15 and 30 <span>minutes</span></p>
    
    
    </div>
    
      </div>  
</section>

<section class="cycle-content">
  <h3 class="cycle-content__title">Your cycle</h3>

  <div class="cycle-conten__scale-mobile-total">
  </div>
  <div class="cycle-conten__scale-total"></div> 
 <div class="cycle-conten__cycle"></div>

 <div class="cycle-conten__scale-mobile"></div>
 <div class="cycle-conten__scale"></div>  

</section>

  <section class=button-settings--pomodoros-cayegory>
    <button class="primary-color button-settings__go">Go to Tasks</button>
    <button class="success-color button-settings__save" id="settings_save">Save</button>
  </section>


</main>`


    const template = Handlebars.compile(`${viev}`);
    template({ name: "kdklslls" });




    body.insertAdjacentHTML("afterbegin", `${template({ name: "Daily Task List" })}`);
    model();
    header();

    //
}