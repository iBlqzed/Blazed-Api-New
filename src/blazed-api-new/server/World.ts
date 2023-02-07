import { World, world } from "@minecraft/server";

const say = world.say.bind(world)

declare module "@minecraft/server" {
    interface World {
        /**
         * Broadcast a message in chat
         * @param {any} message Message to be displayed in chat
         */
        say(message: any): void
        /**
         * Set the value of a gamerule
         * @template {keyof GameRule} Gamerule
         * @param {Gamerule} gamerule The gamerule to set
         * @param {GameRule[Gamerule]} value The value to set the gamerule too
         */
        setGamerule<Gamerule extends keyof GameRule>(gamerule: Gamerule, value: GameRule[Gamerule]): void
    }
}

function toString(obj: any, funcCode?: boolean) {
    const type = typeof obj
    if (type !== "object") {
        if (type === "string") return `${obj}`
        if (type === "function") return funcCode ? obj.toString() : 'function() { }'
        if (type === "undefined") return "undefined"
        return obj.toString()
    }
    let result = '{'
    for (const key in obj) {
        result += `"${key}":`
        const val = obj[key]
        switch (typeof val) {
            case "object":
                if (val instanceof Array) {
                    const elements = []
                    for (const element of val) elements.push(toString(element, funcCode))
                    result += `[${elements.join(',')}]`
                    break
                }
                result += toString(val)
                break
            case "string":
                result += `"${val}"`
                break
            case "number":
            case "bigint":
            case "boolean":
            case "symbol":
                result += val.toString()
                break
            case "undefined":
                result += "undefined"
                break
            case "function":
                result += funcCode ? `"${val.toString()}"` : '"function() { }"'
                break
        }
        result += ','
    }
    return result.slice(0, -1) + '}'
}

Object.assign(World.prototype, {
    say(message: any) {
        say(toString(message))
    },
    setGamerule(gamerule: string, value: boolean | number) {
        this.getDimension("overworld").runCommandAsync(`gamerule ${gamerule} ${value}`)
    }
})

export type GameRule = {
    "commandblockoutput": boolean
    "commandblocksenbled": boolean
    "dodaylightcycle": boolean
    "doweathercycle": boolean
    "doentitydrops": boolean
    "dofiretick": boolean
    "doinmediaterespawn": boolean
    "doinsomnia": boolean
    "domobloot": boolean
    "domobspawning": boolean
    "dotiledrops": boolean
    "drowningdamage": boolean
    "falldamage": boolean
    "freezedamage": boolean
    "firedamage": boolean
    "functioncommandlimit": number
    "keepinventory": boolean
    "maxcommandchainlength": number
    "randomtickspeed": number
    "respawnblocksexplode": boolean
    "sendcommandfeedback": boolean
    "showcoordinates": boolean
    "showdeathmessages": boolean
    "naturalregeneration": boolean
    "mobgriefing": boolean
    "showtags": boolean
    "tntexplodes": boolean
    "spawnradius": boolean
    "pvp": boolean
}