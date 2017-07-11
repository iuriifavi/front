import { Description, FieldDescription } from "./description";

export class Driver {
	_id: string
	plates: string
	car: string
	driver: string
}

export class DriverDescription extends Description {
	descriptionMap = [
		new FieldDescription("plates", "Plates"),
		new FieldDescription("car", "Car"),
		new FieldDescription("driver", "Driver")
	]
}