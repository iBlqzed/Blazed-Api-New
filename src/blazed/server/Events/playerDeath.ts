import { Player, system, world } from "@minecraft/server"

const callbacks: any[] = []
let id = 0

export class PlayerDeathEventSignal {
    subscribe(callback: (arg: PlayerDeathEvent) => void): (arg: PlayerDeathEvent) => void {
        //@ts-ignore
        callback["id"] = id++
        callbacks.push(callback)
        return callback
    }
    unsubscribe(callback: (arg: PlayerDeathEvent) => void) {
        //@ts-ignore
        callbacks.splice(callbacks.findIndex(v => v["id"] === callback["id"]), 1)
    }
}

export class PlayerDeathEvent {
    /**
     * The player that died
     */
    readonly player: Player
}

const died: string[] = []

system.runSchedule(() => {
    world.getAllPlayers().forEach(player => {
        const health = player.getHealth()
        if (health <= 0 && !died.includes(player.id)) {
            died.push(player.id)
            callbacks.forEach(callback => callback({ player }))
        }
        if (health > 0 && died.includes(player.id)) died.splice(died.findIndex(v => v === player.id), 1)
    })
})

world.events.playerLeave.subscribe(({ playerId }) => died.includes(playerId) && died.splice(died.findIndex(v => v === playerId), 1))