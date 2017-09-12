function hasValue(target: any, name: string): any {
    return name.split('.').every( (name) => 
        name in target ? target[name] : false
    );
}

function getValue(target: any, name: string): any {
    let fields = name.split('.');
    for (let i = 0; target && i < fields.length; i++) {
        target = target[fields[i]];
    }

    return target;
}

export var DotResolver = {
    get: function (target, name) {
        return name in target ? target[name] : getValue(target, name);
    }
}

export function createDescriptionProxyHandler(descriptionObject: FieldDescription[]): any {
    return {
        get: function (target, name) {
            var idx = Number(name);
            if (isNaN(idx))
                return name in target ? target[name] : getValue(target, name);
            else
                return getValue(target, descriptionObject[idx].name);    
        }
    };
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

    getFilteredDescription(include?: string[]): FieldDescription[] {
        if (include)
            return this.descriptionMap.filter((field) => include.includes(field.name));
        else
            return this.descriptionMap;
    }

    get range() {
        return this.descriptionMap.map( (_,i) => i);
    }
    
    mapObjects(objects: Array<any>, fields?: string[]): any {
        var descriptionObject = this.getFilteredDescription(fields);
        var proxyHandler = createDescriptionProxyHandler(descriptionObject);
        return objects.map(_ => new Proxy(_, proxyHandler));
    }

    mapObject(object: any, fields?: string[]): any {
        var descriptionObject = this.getFilteredDescription(fields);
        var proxyHandler = createDescriptionProxyHandler(descriptionObject);
        return new Proxy(object, proxyHandler);
    }

    getDescription(name: string): string {
        let description = this.descriptionMap.find((field) => field.name === name);
        if (description)
            return description.description;
        return null;
    }
}
