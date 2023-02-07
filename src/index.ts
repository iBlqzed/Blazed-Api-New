import { world } from "./blazed/server"

world.events.beforeChat.subscribe(data => {
    console.warn(data.sender.getScore("testObjective"))
})

world.setGamerule("showcoordinates", false)

world.events.playerDeath.subscribe((data) => {
    world.say(`${data.player.name} has died`)
})