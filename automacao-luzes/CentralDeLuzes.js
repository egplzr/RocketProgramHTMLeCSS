class CentralDeLuzes {

    constructor (value) {
        this.value = value;
        this.roomsOn = [];
    }

    static getInstance(value) {
        if (!CentralDeLuzes.instance) {
            CentralDeLuzes.instance = new CentralDeLuzes(value);
        }
        return CentralDeLuzes.instance;
    }

    on(room) {
        console.log('Lights on in ' + room);
        
        if(!this.isOn(room)){
            this.roomsOn.push(room);
        }
    }

    off(room) {
        console.log('Lights off in ' + room);
        const index = this.roomsOn.indexOf(room);
        
        if(index !== -1) {
            this.roomsOn.splice(index, 1);
        }
    }

    isOn(room) {
        return this.roomsOn.includes(room);
    }

    getRoomsOn() {
        return this.roomsOn;
    }
}



