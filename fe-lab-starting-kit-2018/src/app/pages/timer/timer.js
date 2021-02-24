require('./timer.less');

import { model } from './index.js';
import { header } from "../../components/header/header/header"



const body = document.querySelector("body");


export function tasks_list_page() {
    const Handlebars = require("handlebars");

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
    
    
      <main class="main main-tasks-margins">
        <div class="page-toggle">
          <span class="page-toggle__to-do choosed-color">To do</span>
          <span  class="page-toggle__separator" >|</span>
          <span class="page-toggle__done">Done</span>
        </div>
    
    
        <section class="tasks-container">
    
          <div class="task hobby-task urgent">
    
    
            <div class="task__date-wrapper">
            <div class="task__date">today</div>
          </div>
    
    
          <div class="task__describe-wrapper">
            <div class="task__describe">
              <h6 class="task__title">Lorem ipsum sit amet</h6>
              <p class="task__text">
                Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit, sed do eiusmod tempor incididunt ut labore
              </p>
            </div>
            </div>
    
    
            <div class="task__icons-wrapper">
            <div class="task__icons-container">
              <span class="icon-edit task__edit"></span>
              <span class="icon-trash task__delete"></span>
            
            </div>
            </div>
    
            <div class="task__pomadors-wrapper">
            <div class="task__pomadors">
            <div class="icon-tomato task__icon-tomato">
              <span class="task__amount-tomato">3</span>
            </div>
            
            
          </div>
            </div>
    
          </div>
          <div class="task sport-task high">
    
    
            <div class="task__date-wrapper">
            <div class="task__date">today</div>
          </div>
    
    
          <div class="task__describe-wrapper">
            <div class="task__describe">
              <h6 class="task__title">Lorem ipsum sit amet</h6>
              <p class="task__text">
                Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit, sed do eiusmod tempor incididunt ut labore
              </p>
            </div>
            </div>
    
    
            <div class="task__icons-wrapper">
            <div class="task__icons-container">
              <span class="icon-edit task__edit"></span>
              <span class="icon-trash task__delete"></span>
            
            </div>
            </div>
    
            <div class="task__pomadors-wrapper">
            <div class="task__pomadors">
            <div class="icon-tomato task__icon-tomato">
              <span class="task__amount-tomato">3</span>
            </div>
            
            
          </div>
            </div>
    
          </div>
          <div class="task work-task high">
    
    
            <div class="task__date-wrapper">
            <div class="task__date">today</div>
          </div>
    
    
          <div class="task__describe-wrapper">
            <div class="task__describe">
              <h6 class="task__title">Lorem ipsum sit amet</h6>
              <p class="task__text">
                Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit, sed do eiusmod tempor incididunt ut labore
              </p>
            </div>
            </div>
    
    
            <div class="task__icons-wrapper">
            <div class="task__icons-container">
              <span class="icon-edit task__edit"></span>
              <span class="icon-trash task__delete"></span>
            
            </div>
            </div>
    
            <div class="task__pomadors-wrapper">
            <div class="task__pomadors">
            <div class="icon-tomato task__icon-tomato">
              <span class="task__amount-tomato">3</span>
            </div>
            
            
          </div>
            </div>
    
          </div>
          <div class="task education-task middle">
    
    
            <div class="task__date-wrapper">
            <div class="task__date">today</div>
          </div>
    
    
          <div class="task__describe-wrapper">
            <div class="task__describe">
              <h6 class="task__title">Lorem ipsum sit amet</h6>
              <p class="task__text">
                Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit, sed do eiusmod tempor incididunt ut labore
              </p>
            </div>
            </div>
    
    
            <div class="task__icons-wrapper">
            <div class="task__icons-container">
              <span class="icon-edit task__edit"></span>
              <span class="icon-trash task__delete"></span>
            
            </div>
            </div>
    
            <div class="task__pomadors-wrapper">
            <div class="task__pomadors">
            <div class="icon-tomato task__icon-tomato">
              <span class="task__amount-tomato">3</span>
            </div>
            
            
          </div>
            </div>
    
          </div>      
          <div class="task hobby-task low">
    
    
            <div class="task__date-wrapper">
            <div class="task__date">today</div>
          </div>
    
    
          <div class="task__describe-wrapper">
            <div class="task__describe">
              <h6 class="task__title">Lorem ipsum sit amet</h6>
              <p class="task__text">
                Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit, sed do eiusmod tempor incididunt ut labore
              </p>
            </div>
            </div>
    
    
            <div class="task__icons-wrapper">
            <div class="task__icons-container">
              <span class="icon-edit task__edit"></span>
              <span class="icon-trash task__delete"></span>
            
            </div>
            </div>
    
            <div class="task__pomadors-wrapper">
            <div class="task__pomadors">
            <div class="icon-tomato task__icon-tomato">
              <span class="task__amount-tomato">3</span>
            </div>
            
            
          </div>
            </div>
    
          </div>
    
    
        </section>
    
    <section class="global-list">
    <div class="global-list__title global-list-hidden">
      <p>Global list</p>
      <span class="icon-global-list-arrow-right"></span>
    </div>
    </section>
    
      </main>
`



    const template = Handlebars.compile(`${viev}`);
    template({ name: "kdklslls" });
    body.insertAdjacentHTML("afterbegin", `${template({ name: "Daily Task List" })}`);
    model();
    header();

}