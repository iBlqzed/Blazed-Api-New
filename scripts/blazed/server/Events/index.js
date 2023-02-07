import { Events } from "@minecraft/server";
import { PlayerDeathEventSignal } from "./playerDeath.js";
Object.assign(Events.prototype, {
    playerDeath: new PlayerDeathEventSignal()
});
