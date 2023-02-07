import { Player } from "@minecraft/server";
export declare class PlayerDeathEventSignal {
    subscribe(callback: (arg: PlayerDeathEvent) => void): (arg: PlayerDeathEvent) => void;
    unsubscribe(callback: (arg: PlayerDeathEvent) => void): void;
}
export declare class PlayerDeathEvent {
    /**
     * The player that died
     */
    readonly player: Player;
}
