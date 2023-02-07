import { Player, world } from "@minecraft/server"

declare module "@minecraft/server" {
    interface Player {
        /**
         * Get the player's health 
         * @returns {number} The player's health
         */
        getHealth(): number
        /**
         * Get the player's score on a scoreboard
         * @param {string} objective Objective name to get the score from
         * @returns {number} The score on the scoreboard (or NaN if an error is thrown)
         */
        getScore(objective: string): number
        /**
         * Set the player's health 
         * @param {number} health Amount to set the player's health too
         */
        setHealth(health: number): void
    }
}

Object.assign(Player.prototype, {
    getHealth() {
        return this.getComponent("health").current
    },
    getScore(objective: string) {
        try {
            return world.scoreboard.getObjective(objective).getScore(this.scoreboard)
        } catch {
            return NaN
        }
    },
    setHealth(health: number) {
        this.getComponent("health").setCurrent(health)
    }
})