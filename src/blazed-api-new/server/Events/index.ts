import { Events, world } from "@minecraft/server"
import { PlayerDeathEventSignal } from "./playerDeath.js"

declare module "@minecraft/server" {
    interface Events {
        readonly playerDeath: PlayerDeathEventSignal
    }
}
Object.assign(Events.prototype, {
    playerDeath: new PlayerDeathEventSignal()
})

world.events.playerDeath.unsubscribe()