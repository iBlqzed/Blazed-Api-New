import { world } from "blazed-api-new/server";
world.events.beforeChat.subscribe(data => {
    data.sender.getComponent("health").setCurrent(5);
    console.warn(data.sender.getScore("testObjective"));
});
world.setGamerule("showcoordinates", false);
