import Rebase from 're-base'

export function firebase() {
    const base = Rebase.createClass({
        apiKey: "AIzaSyDmadw9bOIAvIo6sHEda2HiroY4zkZRvYs",
        authDomain: "primedocs-657f7.firebaseapp.com",
        databaseURL: "https://primedocs-657f7.firebaseio.com",
        storageBucket: "primedocs-657f7.appspot.com"
    })
    return base
}