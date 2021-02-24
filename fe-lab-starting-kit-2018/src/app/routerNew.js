import { settings_page } from './pages/settings/settings';
import { welcome_page } from './pages/welcome/welcome';
import { tasks_list_page } from './pages/tasks-list/tasks-list';
import { reports_page } from './pages/reports/reports';
import { timer } from './pages/timer/timer';
class Router {

    constructor() {
        this.routes = [];
        this.currentRoute = null;
    }

    registerRoute(route) {
        this.routes.push(route);
    }

    start() {
        window.onhashchange = () => {
            this.handle(location.hash);
        };

        const defaultRoute = this.routes.find((r) => r.isDefault);
        this.handle(defaultRoute.path);
    }

    handle(path) {
        const targetRoute = this.routes.find((r) => r.path === path);
        if (targetRoute) {
            if (this.currentRoute) {
                this.currentRoute.destroy();
            }
            this.currentRoute = targetRoute;
            this.currentRoute.render();
        } else {
            console.log('Not found');
        }
    }
}

const router = new Router();

router.registerRoute({
    path: "#settings",
    render: () => settings_page(),
    destroy: () => console.log("settings_page: destroy"),
    isDefault: false,
});
router.registerRoute({
    path: "#welcome",
    render: () => welcome_page(),
    destroy: () => console.log("welcome_page: destroy"),
    isDefault: true,
});
router.registerRoute({
    path: "#tasks-list",
    render: () => tasks_list_page(),
    destroy: () => console.log("tasks_list_page: destroy"),
    isDefault: false,
});
router.registerRoute({
    path: "#reports",
    render: () => reports_page(),
    destroy: () => console.log("reports_page: destroy"),
    isDefault: false,
});


router.start();