import dispatcher from "../dispatcher";

export function reloadItems() {
    dispatcher.dispatch({type: "RECEIVE_ITEMS", data: [
      {
        id: 8484848484,
        text: "Item 3"
      },
      {
        id: 6262627272,
        text: "Item 4"
      },
    ]});
}