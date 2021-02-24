import { settings_page } from './pages/settings/settings';
import { welcome_page } from './pages/welcome/welcome';
import { tasks_list_page } from './pages/tasks-list/tasks-list';
import { reports_page } from './pages/reports/reports';
import { timer } from './pages/timer/timer';
//мои модули^

let body = document.querySelector("body");





let settings_rout = {
    page_module: settings_page,
    rout: `/static/main.html#settings`, //
    rout_id: 1,
    rout_id_name: "settings", ///path
}
let welcome_rout = {
    page_module: welcome_page,
    rout: `/static/main.html#welcome`,
    rout_id: 2,
    rout_id_name: "welcome",
}
let tasks_list_rout = {
    page_module: tasks_list_page,
    rout: `/static/main.html#tasks_list`,
    rout_id: 3,
    rout_id_name: "tasks_list",
}
let reports_rout = {
    page_module: reports_page,
    rout: `/static/main.html#reports`,
    rout_id: 4,
    rout_id_name: "reports",
}



const static_routers = [settings_rout, welcome_rout, tasks_list_rout, reports_rout];

class Router {
    constructor(rout_obj_info) {
        this.page_module = rout_obj_info.page_module;
        this.rout = rout_obj_info.rout;
        this.rout_id = rout_obj_info.rout_id;
        this.rout_id_name = rout_obj_info.rout_id_name;
        this.default_rout = welcome_rout;
    }






    catchEvent(e) {
        const target = e.target;
        if (target.id === `${this.rout_id_name}`) {
            body.innerHTML = "";
            this.page_module();
            history.pushState(this.rout_id, null, `${this.rout}`);
        }



    }


    catchPopState() {
        if (window.history.state === this.rout_id) {
            body.innerHTML = "";
            this.page_module();
        }
    }

    catchUrlChange() {
        if (window.location.href === `http://localhost:3000${this.rout}`) {
            history.pushState(this.rout_id, null, `${this.rout}`);
            body.innerHTML = "";
            this.page_module();
            console.log("yep")
        }
    }



    static add_rout(obj) {
        static_routers.push(obj);
    }


    static create_router(e) {
        for (let q of static_routers) {
            let qwer = new Router(q);

            if (e) {
                qwer.catchEvent(e);
            } else {
                qwer.catchPopState();
            }


        }
    }




    static default_page(value) {
        let page = value;
        static_routers;

        if (check_new_user()) {
            page = static_routers[1].page_module;
            //history.pushState(static_routers[1].rout_id, null, `${static_routers[1].rout}`);
        } else {
            page = static_routers[2].page_module;
            //history.pushState(static_routers[2].rout_id, null, `${static_routers[2].rout}`);
        }
        page();

    }
    static run_router(value) {
        for (let q of static_routers) {
            let new_router = new Router(q);
            if (value === "yes") {
                new_router.catchUrlChange();
            }
        }
    }

}

sessionStorage.setItem('isNewUser', "true");

Router.default_page();
Router.run_router("yes");




body.onclick = (e) => {
    Router.create_router(e);
}
window.addEventListener("popstate", () => {
    Router.create_router();
});


function check_new_user() {
    let user_flag = JSON.parse(sessionStorage.getItem("isNewUser"));
    let result;
    if (user_flag) {
        result = false;
    } else {
        result = true;
    }
    return result;
}