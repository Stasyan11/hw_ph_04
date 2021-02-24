require('./welcome.less');
import { header } from "../../components/header/header/header"
//import { result } from '../../router';
//import { settings } from '../settings/settings';


const body = document.querySelector("body");
export function welcome_page() {
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


<main class="main">
<section class="first-task-add-container first-visited">
    <div class="first-task-add-container__image-content">
    <a href="#"><img src="../images/tomato_settings.svg" alt="img"/></a>
    </div>
    <p class="first-task-add-container__description">As you visited site for a first time you can check and customize your default 
        application settings</p>

</section>

<section class="button-container">
<button class="button-container__skip">skip</button>
<button class="button-container__go" id="settings">Go to settings</button>
</section>
</main>
`;


    const template = Handlebars.compile(`${viev}`);
    body.insertAdjacentHTML("afterbegin", `${template({ name: "Daily Task List" })}`);
    template({ name: "kdklslls" });
    header();
}















//button-container__go;