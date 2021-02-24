function cddatch() {
    () => {
        console.log("dkkdk")
    }
}





class EventBus {
    constructor() {
        this.body = document.querySelector("body");
        this.id_arr = [];
    }



    subscriber(event, call_back, id) {
        this.body.addEventListener("click", call_back)
    }
    dis_subscriber(event, call_back, id) {
        this.body.removeEventListener("click", call_back)
    }

    publisher(event, call_back) {
        this.body.addEventListener("click", (e) => {
            if (e.target.id === event) {
                return call_back();
            }
        });
    }
}

export let NewEventBus = new EventBus();





/*
class EventBus {
    constructor() {
        this.body = document.querySelector("body");
        this.id_arr = [];
    }



    subscriber(event, call_back, id) {
        if (!this.id_arr.find(() => id)) {
            this.body.addEventListener("click", (e) => {
                if (event === e.target.id) {

                    this.id_arr.push(id);
                    console.log(this.id_arr);
                    return call_back();
                }
            });
        } else {
            console.log("doesn`t work");
        }

    }

    publisher(event, call_back) {
        this.body.addEventListener("click", (e) => {
            if (e.target.id === event) {
                return call_back();
            }
        });
    }
}
*/