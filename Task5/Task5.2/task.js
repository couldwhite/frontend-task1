class Person {
    constructor(firstName, secondName) {
        this._firstName = firstName;
        this._secondName = secondName;
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(firstName) {
        this._firstName = firstName;
    }

    get secondName() {
        return this._secondName;
    }

    set secondName(secondName) {
        this._secondName = secondName;
    }
}

class Artist extends Person {
    constructor(firstName, secondName, country) {
        super(firstName, secondName);
        this._country = country;
        this.pictures = [];
    }

}

class Picture {
    constructor(price, size, name) {
        this._name = name;
        this._price = price;
        this._size = size;
    }

}

class PictureShow {

    constructor() {
        this._pictures = [];
        this._artists = [];
    }

    addPicture(price, size, name, artist) {
        const newPicture = new Picture(price, size, name, artist);
        this._pictures.push(newPicture);
        artist.pictures.push(newPicture);
    }

   deletePicture(name) {
        const idPicture = this._pictures.findIndex(picture => picture.name === name);
        if (idPicture !== -1) {
            const picture = this._picure[artistIndex];
            picture._artist.pictures.splice(picture._artist.pictures.indexOf(picture), 1);
            this._pictures.splice(idPicture, 1);
        }
    }

    editPicture(oldName, newName, newPrice, newSize) {
        const picture = this._pictures.find(picture => picture._name === oldName);
        if (picture) {
            picture._name = newName;
            picture._price = newPrice;
            picture._size = newSize;
        }
    }

    addArtist(firstName, lastName, country) {
        const newArtist = new Artist(firstName, lastName, country);
        this._artists.push(newArtist);
    }

    deleteArtist(firstName, lastName) {
        const artistIndex = this._artists.findIndex(artist => artist._firstName === firstName && artist._secondName === lastName);
        if (artistIndex !== -1) {
            this._artists.splice(artistIndex, 1);
        }
    }

    editArtist(oldFirstName, oldLastName, newFirstName, newLastName) {
        const artist = this._artists.find(artist => artist.firstName === oldFirstName && artist.lastName === oldLastName);
        if (artist) {
            artist.firstName = newFirstName;
            artist.lastName = newLastName;
        }
    }
}


let person = new Person('Max', 'Grey');
person.firstName = 'Bob';
console.log(person);

let show = new PictureShow();
show.addArtist("Kirill", "Kolesnik", "Russia");
show.addPicture(150, "1560*1548", "Botanic garden", show._artists[0]);
show.addPicture(1460, "3065*4536", "Monkey", show._artists[0]);
console.log(JSON.stringify(show._pictures))
show.editPicture("Monkey", "Cat", "1700", "2065*4336");
console.log(show._pictures);

show.addArtist("Vova", "Pain", "Russia");
show.deleteArtist("Vova", "Pain");
console.log(show._artists);