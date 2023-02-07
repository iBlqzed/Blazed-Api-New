import { system, world } from "@minecraft/server";
const callbacks = [];
let id = 0;
export class PlayerDeathEventSignal {
    subscribe(callback) {
        //@ts-ignore
        callback["id"] = id++;
        callbacks.push(callback);
        return callback;
    }
    unsubscribe(callback) {
        //@ts-ignore
        callbacks.splice(callbacks.findIndex(v => v["id"] === callback["id"]), 1);
    }
}
export class PlayerDeathEvent {
}
const died = [];
system.runSchedule(() => {
    world.getAllPlayers().forEach(player => {
        const health = player.getHealth();
        if (health <= 0 && !died.includes(player.id)) {
            died.push(player.id);
            callbacks.forEach(callback => callback({ player }));
        }
        if (health > 0 && died.includes(player.id))
            died.splice(died.findIndex(v => v === player.id), 1);
    });
});
world.events.playerLeave.subscribe(({ playerId }) => died.includes(playerId) && died.splice(died.findIndex(v => v === playerId), 1));
