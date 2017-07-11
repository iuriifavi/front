function getValue(object: any, field: string): any {
    let fields = field.split('.');
    for (let i = 0; object && i < fields.length; i++) {
        object = object[fields[i]];
    }

    return object;
}

function hasValue(object: any, field: string): any {
    return field.split('.').every( (field) => 
        object.hasOwnProperty(field) ? object = object[field] : false
    );
}

export class FieldDescription {
    constructor(public name: string, public description: string) {}
}

export class DescribedField {
    constructor(public description: string, public value: any) {}
}

export interface DescriptionInterface {
    mapObject(object: any, fields: string[]): DescribedField[]
    getDescription(name: string): string
}

export class Description implements DescriptionInterface{
    descriptionMap: FieldDescription[]
    
    //TODO: undone
    mapObjects(objects: Array<any>, fields?: string[]) {
        var descriptions = this.descriptionMap.filter((field) => fields.includes(field.name));
        return objects.map( (object) => {
            var output = {}
            descriptions.forEach(
                (description) => output[description.name] = getValue(object, description.name))
            return output;
        })
    }

    mapObject(object: any, fields?: string[]): DescribedField[] {
        let descriptions = this.descriptionMap;

        if (fields && fields.length != 0) {
            descriptions = descriptions.filter(
                (field) => fields.includes(field.name) && hasValue(object, field.name));
        } else {
            descriptions = descriptions.filter((field) => hasValue(object, field.name));
        }

        let described = descriptions
                    .map((field) => {
                        let value = getValue(object, field.name)
                        return new DescribedField(field.description, value)
                    });
        return null;
    }

    getDescription(name: string): string {
        let description = this.descriptionMap.find((field) => field.name === name);
        if (description)
            return description.description;
        return null;
    }
}
