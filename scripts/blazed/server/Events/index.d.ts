import { PlayerDeathEventSignal } from "./playerDeath.js";
declare module "@minecraft/server" {
    interface Events {
        readonly playerDeath: PlayerDeathEventSignal;
    }
}
