require('./reports.less');
const Handlebars = require("handlebars");
import { model } from './index.js';
import { header } from "../../components/header/header/header"



const body = document.querySelector("body");
export function reports_page() {

    body.innerHTML = " ";


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



  <main class="main main-tasks-margins main-reports">
    <div class="page-toggle">
      <span class="page-toggle__day ">Day</span>
      <span  class="page-toggle__separator" >|</span>
      <span class="page-toggle__week ">Week</span>
      <span  class="page-toggle__separator" >|</span>
      <span class="page-toggle__month choosed-color">Month</span>






    </div>


<div class="schedule-container ">
<span class="icon-arrow-left"></span>
<div class="schedule reports-month-tasks">
<img src="../images/Graph.png" alr="img"/>    
</div>    
</div>

<!--
    <div class="schedule-container ">
<span class="icon-arrow-left"></span>
<div class="schedule reports-month-pomadoros">
<img src="../images/Graph.png" alr="img"/>    
</div>    
</div>
-->


<div class="page-toggle types">
    <span class="page-toggle__pomodoras">Pomodoras</span>
    <span  class="page-toggle__separator" >|</span>
    <span class="page-toggle__tasks choosed-color">Tasks</span>
</div>

  </main>`


    const template = Handlebars.compile(`${viev}`);
    template({ name: "kdklslls" });
    body.insertAdjacentHTML("afterbegin", `${template({ name: "Daily Task List" })}`);
    model();
    header();

}