/*  
    This module will hold all of the data for the whole project.
    ----------------------------------
    Create a database object with three arrays of objects
    1) venues 
    2) bands
    3) bookings
    Consult dbdiagram ERD for properties of each array
*/

const database = {
    
    venues: [{
        id: 1,
        name: "The Awkward Pause",
        address: "33 Never St",
        sqft: 1111,
        maxOccupancy: 133
    }, {
        id: 2,
        name: "The Melancholy Moose",
        address: "95 Flop Rd",
        sqft: 950,
        maxOccupancy: 75
    },{
        id: 3,
        name: "The Slightly Off-Key Lounge",
        address: "64 Seahorse Lane",
        sqft: 1300,
        maxOccupancy: 155
    },{
        id: 4,
        name: "The Comically Small Stage",
        address: "776 Truth Rd",
        sqft: 1500,
        maxOccupancy: 300
    },{
        id: 5,
        name: "The Clumsy Juggler's Joint",
        address: "29 Mercy Lane",
        sqft: 800,
        maxOccupancy: 120
    },{
        id: 6,
        name: "The Ridiculous Raccoon Pub",
        address: "2587 Dead End Rd",
        sqft: 780,
        maxOccupancy: 99
    },{
        id: 7,
        name: "The Unamused Unicorn",
        address: "66 Trippy Way",
        sqft: 1389,
        maxOccupancy: 163
    }],

    bands: [{
        id: 1,
        name: "The Funky Pickle",
        members: 4,
        genre: "Funk",
        yearFormed: 1989
    },{
        id: 2,
        name: "The Screaming Llamas",
        members: 8,
        genre: "Punk Rock",
        yearFormed: 2003
    },{
        id: 3,
        name: "The Cactus Cowboys",
        members: 7,
        genre: "Country",
        yearFormed: 2008
    },{
        id: 4,
        name: "The Baconators",
        members: 5,
        genre: "Heavy Metal",
        yearFormed: 1995
    },{
        id: 5,
        name: "The Disco Sloths",
        members: 4,
        genre: "Disco",
        yearFormed: 1979
    },{
        id: 6,
        name: "The Jazzy Jellyfish",
        members: 3,
        genre: "Jazz",
        yearFormed: 2011
    },{
        id: 7,
        name: "The Sassy Squirrels",
        members: 6,
        genre: "Pop",
        yearFormed: 2015
    },{
        id: 8,
        name: "The Swamp Sisters",
        members: 4,
        genre: "Blues",
        yearFormed: 2005
    },{
        id: 9,
        name: "The Twisted Turnips",
        members: 7,
        genre: "Rock",
        yearFormed: 1999
    },{
        id: 10,
        name: "The Velvet Butterflies",
        members: 5,
        genre: "R&B/Soul",
        yearFormed: 2015
    },{
        id: 11,
        name: "The Zombie Kittens",
        members: 5,
        genre: "Electronic",
        yearFormed: 2019
    }],

    bookings: [{
        id: 1, 
        bandId: 3,
        venueId: 5,
        date: "6/7/2023",
    },{
        id: 2, 
        bandId: 10,
        venueId: 5,
        date: "6/7/2023",
    },{
        id: 3, 
        bandId: 10,
        venueId: 7,
        date: "6/7/2023",
    },{
        id: 4, 
        bandId: 11,
        venueId: 1,
        date: "7/11/2023",
    },{
        id: 5, 
        bandId: 9,
        venueId: 1,
        date: "7/11/2023",
    },{
        id: 6, 
        bandId: 9,
        venueId: 6,
        date: "7/11/2023",
    },{
        id: 7, 
        bandId: 1,
        venueId: 2,
        date: "8/29/2023",
    },{
        id: 8, 
        bandId: 2,
        venueId: 4,
        date: "9/5/2023",
    },{
        id: 9, 
        bandId: 2,
        venueId: 3,
        date: "9/5/2023",
    },{
        id: 10, 
        bandId: 4,
        venueId: 2,
        date: "9/22/2023",
    },{
        id: 11, 
        bandId: 5,
        venueId: 4,
        date: "10/05/2023",
    },{
        id: 12, 
        bandId: 6,
        venueId: 1,
        date: "11/21/2023",
    },{
        id: 13, 
        bandId: 7,
        venueId: 3,
        date: "12/01/2023",
    }]

}





//Export a deep copy of the venues array
export const getVenues = () => {
    return structuredClone(database.venues)
}

//Export a deep copy of the bands array
export const getBands = () => {
    return structuredClone(database.bands)
}

//Export a deep copy of the bookings array
export const getBookings = () => {
    return structuredClone(database.bookings)
}