import { Player, world } from "@minecraft/server";
Object.assign(Player.prototype, {
    getHealth() {
        return this.getComponent("health").current;
    },
    getScore(objective) {
        try {
            return world.scoreboard.getObjective(objective).getScore(this.scoreboard);
        }
        catch {
            return NaN;
        }
    },
    setHealth(health) {
        this.getComponent("health").setCurrent(health);
    }
});
