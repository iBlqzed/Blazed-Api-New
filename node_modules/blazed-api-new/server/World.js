import { World, world } from "@minecraft/server";
const say = world.say.bind(world);
Object.assign(World.prototype, {
    say(message) {
        say(JSON.stringify(message));
    },
    setGamerule(gamerule, value) {
        this.getDimension("overworld").runCommandAsync(`gamerule ${gamerule} ${value}`);
    }
});
