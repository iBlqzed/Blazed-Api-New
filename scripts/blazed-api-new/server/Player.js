import { Player, world } from "@minecraft/server";
const getComp = Player.prototype.getComponent;
Object.assign(Player.prototype, {
    addScore(objective, score) {
        const ob = (typeof objective === "string" ? world.scoreboard.getObjective(objective) : objective);
        this.scoreboard.setScore(ob, this.getScore(ob) + score);
    },
    getComponent(component) {
        return getComp.bind(this)(component);
    },
    getHealth() {
        return this.getComponent("health").current;
    },
    getScore(objective) {
        try {
            return (typeof objective === "string" ? world.scoreboard.getObjective(objective) : objective).getScore(this.scoreboard);
        }
        catch {
            return NaN;
        }
    },
    removeScore(objective, score) {
        const ob = (typeof objective === "string" ? world.scoreboard.getObjective(objective) : objective);
        this.scoreboard.setScore(ob, this.getScore(ob) - score);
    },
    setHealth(health) {
        this.getComponent("health").setCurrent(health);
    },
    setScore(objective, score) {
        this.scoreboard.setScore((typeof objective === "string" ? world.scoreboard.getObjective(objective) : objective), score);
    }
});
