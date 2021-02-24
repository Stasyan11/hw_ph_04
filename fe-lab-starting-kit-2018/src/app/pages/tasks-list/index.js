//export { TaskList } from './task-list';
import { NewEventBus } from "../../eventBus";


function check_target(e) {
    let result = () => {
        console.log("kdk");
    };
    if (e.target.id === "add-task") {
        result = () => {
            console.log("value");
        }
    }

    return result();
}

export function model() {
    NewEventBus.subscriber('add-task', check_target)

    //NewEventBus.dis_subscriber('add-task', zljkt)
}