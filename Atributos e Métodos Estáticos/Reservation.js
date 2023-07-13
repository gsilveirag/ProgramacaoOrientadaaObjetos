class Reservation {
    constructor(guests, room, days){
        this.guests = guests,
        this.room = room,
        this.days = days
        this.total = days
    }

    static baseFee = 150
}