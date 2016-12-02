import { EventEmitter } from "events";
import dispatcher from "../dispatcher";

class ItemStore extends EventEmitter{
    constructor(){
        super()
        this.items = [
            {
                id: 84848484,
                text: "Item 1"
            },
            {
                id: 62626272,
                text: "Item 2"
            },
        ];
    }

    getAll() {
        return this.items;
    }

    reload(data){
        this.items = data;
        this.emit("change");
    }
    
    handleActions(action) {
        switch(action.type) {
            case "RECEIVE_ITEMS": {
                this.reload(action.data);
                break;
            }
        }
    }
}

const itemStore = new ItemStore;
dispatcher.register(itemStore.handleActions.bind(itemStore));

export default itemStore;