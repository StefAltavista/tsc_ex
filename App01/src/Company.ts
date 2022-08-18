import faker from "faker";
import { Mappable } from "./CustomMap";

export class Company implements Mappable {
    name: string;
    catchPhrase: string;
    location: {
        lat: number;
        lng: number;
    };

    constructor() {
        this.name = faker.company.companyName();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude()),
        };
    }
    markerContent() {
        return `<div><h3>Company: ${this.name}</h3><br/> 
        <h5>"${this.catchPhrase}"</h5><div>`;
    }
}
