declare module "@minecraft/server" {
    interface Player {
        /**
         * Get the player's health
         * @returns {number} The player's health
         */
        getHealth(): number;
        /**
         * Get the player's score on a scoreboard
         * @param {string} objective Objective name to get the score from
         * @returns {number} The score on the scoreboard (or NaN if an error is thrown)
         */
        getScore(objective: string): number;
        /**
         * Set the player's health
         * @param {number} health Amount to set the player's health too
         */
        setHealth(health: number): void;
    }
}
export {};
