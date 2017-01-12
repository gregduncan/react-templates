export function getDate() {
    const date = new Date()
    return date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes()
}

export function IdGenerator(){
   return Math.random().toString(36).substr(2, 9)
}