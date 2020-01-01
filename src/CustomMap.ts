export interface MapAble {
	location: {
		lat: number;
		lng: number;
	};
	getContent(): string;
	color: string;
}

export class CustomMap {
	private googleMap: google.maps.Map;

	constructor(divId: string) {
		this.googleMap = new google.maps.Map(document.getElementById(divId), {
			zoom: 1,
			center: {
				lat: 0,
				lng: 0
			}
		});
	}

	addMarker(param: MapAble): void {
		const marker = new google.maps.Marker({
			map: this.googleMap,
			position: {
				lat: param.location.lat,
				lng: param.location.lng
			}
		});

		marker.addListener('click', async () => {
			const infoWindow = new google.maps.InfoWindow({
				content: param.getContent()
			});

			infoWindow.open(this.googleMap, marker);
		});
	}
}
