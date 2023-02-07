import { World, world } from "@minecraft/server";
const say = world.say.bind(world);
function toString(obj, funcCode) {
    const type = typeof obj;
    if (type !== "object") {
        if (type === "string")
            return `${obj}`;
        if (type === "function")
            return funcCode ? obj.toString() : 'function() { }';
        if (type === "undefined")
            return "undefined";
        return obj.toString();
    }
    let result = '{';
    for (const key in obj) {
        result += `"${key}":`;
        const val = obj[key];
        switch (typeof val) {
            case "object":
                if (val instanceof Array) {
                    const elements = [];
                    for (const element of val)
                        elements.push(toString(element, funcCode));
                    result += `[${elements.join(',')}]`;
                    break;
                }
                result += toString(val);
                break;
            case "string":
                result += `"${val}"`;
                break;
            case "number":
            case "bigint":
            case "boolean":
            case "symbol":
                result += val.toString();
                break;
            case "undefined":
                result += "undefined";
                break;
            case "function":
                result += funcCode ? `"${val.toString()}"` : '"function() { }"';
                break;
        }
        result += ',';
    }
    return result.slice(0, -1) + '}';
}
Object.assign(World.prototype, {
    say(message) {
        say(toString(message));
    },
    setGamerule(gamerule, value) {
        this.getDimension("overworld").runCommandAsync(`gamerule ${gamerule} ${value}`);
    }
});
