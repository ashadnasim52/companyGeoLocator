import faker from 'faker';
import { MapAble } from './CustomMap';
export class User implements MapAble {
	color: string = 'blue';
	name: string;
	location: {
		lat: number;
		lng: number;
	};

	constructor() {
		this.name = faker.name.firstName();
		this.location = {
			lat: parseFloat(faker.address.latitude()),
			lng: parseFloat(faker.address.longitude())
		};
	}

	getContent = (): string => {
		return `Hi there usr name is ${this.name}`;
	};
}
