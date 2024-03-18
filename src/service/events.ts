class EventRegistrations {
    events: any[] =[];
    constructor(){
    }
    setListener (func:any){
        this.events.push(func)
    }
    getListeners(){
        return this.events
    }
}
export default new EventRegistrations();