import { Description, FieldDescription } from "./description";

export class Client {
    _id: string
    mamanger: string
    name: string
    commercialName: string
    phone: string
    city: string
    postCode: number
    region: string
    address: string
    taxNumber: number
    vatNumber: number
    contacts: string
    contract: {
        number: string
        date: Date
    }
    prices: any[]
}

export class ClientDescription extends Description {
	descriptionMap = [
		new FieldDescription("manager", "Manager"),
		new FieldDescription("name", "Name"),
		new FieldDescription("commercialName", "LLC"),
		new FieldDescription("phone", "Phone"),
		new FieldDescription("city", "City"),
		new FieldDescription("postCode", "PostCode"),
		new FieldDescription("region", "Region"),
		new FieldDescription("address", "Adderres"),
		new FieldDescription("taxNumber", "Tax Number"),
		new FieldDescription("vatNumber", "VAT Number"),
        new FieldDescription("contacts", "Contacts"),
        new FieldDescription("contract.number", "Contract Number"),
        new FieldDescription("contract.date", "Contract Date"),
        new FieldDescription("product.name", "Product Name"),
        new FieldDescription("product.value", "Price"),
	]
}