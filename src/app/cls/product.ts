import { Description, FieldDescription } from "./description";

export class Product {
	_id: string
	name: string
	description: string
	scale: string
	code: string
	certificate: string
	amount: number
}

export class ProductDescription extends Description {
	descriptionMap: FieldDescription[] = [
		new FieldDescription("name", "Name"),
		new FieldDescription("description", "Description"),
		new FieldDescription("scale", "Scale"),
		new FieldDescription("code", "Code"),
		new FieldDescription("certificate", "Certificate"),
		new FieldDescription("amount", "Amount")
	]
}