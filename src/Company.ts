import faker from 'faker';
import { MapAble } from './CustomMap';
export class Company implements MapAble {
	color: string = 'red';
	name: string;
	catchPharse: string;
	location: {
		lat: number;
		lng: number;
	};

	constructor() {
		this.name = faker.company.companyName();
		this.catchPharse = faker.company.catchPhrase();
		this.location = {
			lat: parseFloat(faker.address.latitude()),
			lng: parseFloat(faker.address.longitude())
		};
	}

	getContent = (): string => {
		return `
		  Hi there Company name is ${this.name} and catch parse is ${this.catchPharse}
		`;
	};
}
