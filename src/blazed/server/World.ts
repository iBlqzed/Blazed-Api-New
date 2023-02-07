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

Object.assign(World.prototype, {
    say(message: any) {
        say(JSON.stringify(message))
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