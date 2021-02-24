//export { TaskList } from './task-list';
import { NewEventBus } from "../../eventBus";
import { save_settings, show_saved_settings, writeUserData }
from "../../firebase";






//userId, name, email, imageUrl
export function model() {
    writeUserData("qwerty12345", "Alex", "stasgamil.com", "http//stasPolo");
    const pomodoros_page = document.querySelector(".pomodoros-page");
    const categories_page = document.querySelector(".categories-page");

    const pomodoros_turn_up = document.querySelector(".pomodoros-check");
    const cetegories_turn_up = document.querySelector(".cetegories-check");

    //worktime
    const worktime_value = document.querySelector(".work-time input");
    const worktime_plus = document.querySelector(".work-time-plus");
    const worktime_minus = document.querySelector(".work-time-minus");
    //worktiteration
    const worktiteration_value = document.querySelector(".work-iteration input");
    const worktiteration_plus = document.querySelector(".work-iteration-plus");
    const worktiteration_minus = document.querySelector(".work-iteration-minus");
    //shortbreak
    const shortbreak_value = document.querySelector(".short-break input");
    const shortbreak_plus = document.querySelector(".short-break-plus");
    const shortbreak_minus = document.querySelector(".short-break-minus");
    //longbreak
    const longbreak_value = document.querySelector(".long-break input");
    const longbreak_plus = document.querySelector(".long-break-plus");
    const longbreak_minus = document.querySelector(".long-break-minus");

    const cexle_container = document.querySelector(".cycle-conten__cycle");

    const scale_mobile = document.querySelector(".cycle-conten__scale-mobile");
    const scale = document.querySelector(".cycle-conten__scale");
    //let scale_mobile=document.querySelector("cycle-conten__scale-mobile");

    const scale_mobile_top = document.querySelector(
        ".cycle-conten__scale-mobile-total"
    );
    const scale_top = document.querySelector(".cycle-conten__scale-total");






    let cycle_object = {
        long_break: 15,
        short_break: 5,
        work_iteration: 5,
        work_time: 20,
    };

    let saved_settings_data = null;





    function show_cycle(obj) {
        if (obj === undefined) {
            console.log("undefined");
        } else {
            cexle_container.innerHTML = "";
            let iteration = obj.work_iteration;
            let amount_blocks = 7;
            let total_result_min = 0;

            total_result_min = obj.work_time * (iteration * 2);
            total_result_min += obj.long_break;

            if (iteration > 2) {
                amount_blocks += ((iteration - 2) * 4)
            }

            for (let q = 1; q <= amount_blocks; q++) {
                let div = document.createElement("div");
                div.classList.add("work-iteration-c");


                if (q % 2 === 0 & q !== Math.ceil((amount_blocks / 2))) {
                    div.classList.remove("work-iteration-c");
                    div.classList.add("short-break-c");

                    total_result_min += obj.short_break;
                }
                if (q === Math.ceil((amount_blocks / 2))) {
                    div.classList.remove("work-iteration-c", "short-break-c");
                    div.classList.add("long-break-c");


                }

                cexle_container.appendChild(div);
            }

            //let width_ratio=(total_result_min/100);
            let width_ratio = (100 / total_result_min);

            const work = document.querySelectorAll('.work-iteration-c');
            const short_break = document.querySelectorAll('.short-break-c');
            const long_break = document.querySelectorAll('.long-break-c');


            work.forEach((value) => value.style.width = `${obj.work_time*width_ratio}%`);
            short_break.forEach((value) => value.style.width = `${obj.short_break*width_ratio}%`);
            long_break.forEach((value) => value.style.width = `${obj.long_break*width_ratio}%`);


            scale_dispaly(30, total_result_min, scale);
            scale_dispaly(60, total_result_min, scale_mobile);

            scale_dispaly_top(30, total_result_min, scale_top);
            scale_dispaly_top(60, total_result_min, scale_mobile_top);


        }


    }

    function scale_dispaly(step = 30, total_result_min, type) {
        let scale_time = 0;
        type.innerHTML = "";
        for (let q = 1; q <= total_result_min / step; q++) {
            scale_time = scale_time + step;
            let time = scale_time;
            if ((time / 60) > 0.9) {
                time = time / 60;
            }

            let hours = Math.ceil(time);
            let minutes = ((time - Math.ceil(time)) * 60);


            let time_result = 0;
            if (`${time}`.length > 1) {
                time_result = `${time}m`;
            } else {
                time_result = `${time}h`;
            }
            if (minutes < 0) {
                time_result = `${hours-1}h ${minutes*-1}m`;
            } else if (minutes > 0) {
                time_result = `${time}h`;
            }

            let div = document.createElement("div");
            div.classList.add("time-iteration-c");
            div.textContent = `${time_result}`;
            div.style.color = "white";
            div.style.width = `${100/(total_result_min/step)}%`
            type.appendChild(div);
        }
    }

    function scale_dispaly_top(step = 30, total_result_min, type) {
        let scale_time = 0;
        type.innerHTML = "";
        for (let q = 1; q <= Math.ceil(total_result_min / step); q++) {
            scale_time = scale_time + step;
            let time = scale_time;
            if ((time / 60) > 0.9) {
                time = time / 60;
            }

            let hours = Math.ceil(time);
            let minutes = ((time - Math.ceil(time)) * 60);


            let time_result = 0;
            if (`${time}`.length > 1) {
                time_result = `${time}m`;
            } else {
                time_result = `${time}h`;
            }
            if (minutes < 0) {
                time_result = `${hours-1}h ${minutes*-1}m`;
            } else if (minutes > 0) {
                time_result = `${time}h`;
            }

            let div = document.createElement("div");
            div.classList.add("time-iteration-c");

            if (q === 1) {
                div.textContent = 0;
                div.style.textAlign = "start";
            }
            if (q === Math.ceil((total_result_min / step) / 2)) {
                div.textContent = `First cycle:${time_result}`;
            } else if (q === Math.ceil((total_result_min / step)) & type === scale_top) {
                div.textContent = `${time_result}`;
            }
            div.style.color = "white";
            div.style.width = `${100/Math.ceil(total_result_min/step)}%`
            type.appendChild(div);
        }
    }

    show_cycle(cycle_object);



    class SettingsDisplay {
        constructor(value, plus, minus, step, max_value, min_value, obj, category) {
            this.value = value;
            this.plus = plus;
            this.minus = minus;
            this.step = step;
            this.max_value = max_value;
            this.min_value = min_value;
            this.obj = obj;
            this.category = category;
        }
        add_value() {
            let local_step = this.step;
            let result = this.obj[this.category];
            this.plus.addEventListener("click", () => {
                if (result === this.max_value) {
                    local_step = 0;
                } else {
                    local_step = this.step;
                }
                result = this.obj[this.category] += local_step;
                this.value.value = result;
                show_cycle(this.obj);
                //work(this.obj);
                saved_settings_data = this.obj;
            });
        }
        minus_value() {
            let local_step = this.step;
            let result = this.obj[this.category];

            this.minus.addEventListener("click", () => {
                ///firebase

                if (result === this.min_value) {
                    local_step = 0;
                } else {
                    local_step = this.step;
                }
                result = this.obj[this.category] -= local_step;
                this.value.value = result;
                show_cycle(this.obj);

                saved_settings_data = this.obj;
            });
        }
    }

    function run_SettingsDisplay() {
        let work_time = new SettingsDisplay(
            worktime_value,
            worktime_plus,
            worktime_minus,
            5,
            30,
            15,
            cycle_object,
            "work_time"
        );

        let work_iteration = new SettingsDisplay(
            worktiteration_value,
            worktiteration_plus,
            worktiteration_minus,
            1,
            5,
            2,
            cycle_object,
            "work_iteration"
        );

        let short_break = new SettingsDisplay(
            shortbreak_value,
            shortbreak_plus,
            shortbreak_minus,
            1,
            5,
            2,
            cycle_object,
            "short_break"
        );

        let long_break = new SettingsDisplay(
            longbreak_value,
            longbreak_plus,
            longbreak_minus,
            5,
            30,
            15,
            cycle_object,
            "long_break"
        );

        work_time.add_value();
        work_time.minus_value();

        work_iteration.add_value();
        work_iteration.minus_value();

        short_break.add_value();
        short_break.minus_value();

        long_break.add_value();
        long_break.minus_value();
    }


    run_SettingsDisplay();



    //firebase data





    function save_data() {
        save_settings(saved_settings_data || cycle_object);
    }










    NewEventBus.subscriber('settings_save', save_data);






    show_saved_settings(
        show_cycle,
        worktime_value,
        worktiteration_value,
        shortbreak_value,
        longbreak_value,
    );






}