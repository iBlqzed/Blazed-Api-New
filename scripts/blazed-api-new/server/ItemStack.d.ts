import type { ItemCooldownComponent, ItemDurabilityComponent, ItemEnchantsComponent, ItemFoodComponent } from "@minecraft/server";
declare module "@minecraft/server" {
    interface ItemStack {
        /**
         * Add an enchant to the item
         * @template {keyof typeof MinecraftEnchantmentTypes} enchName
         * @param {enchName extends "prototype" ? never : enchName | Enchantment | EnchantmentType} enchant Enchant to add to the item
         * @returns {boolean} Whether or not the the enchant was added successfully
         */
        addEnchant<enchName extends keyof typeof MinecraftEnchantmentTypes>(enchant: enchName extends "prototype" ? never : enchName | Enchantment | EnchantmentType, level?: number): boolean;
        /**
         * Get an item component
         * @template {keyof ItemComponents} compName
         * @param {compName} component Component to get
         * @returns {ItemComponents[compName]} The component
         */
        getComponent<compName extends keyof ItemComponents>(component: compName): ItemComponents[compName];
        /**
         * Get an enchant from the item
         * @param {keyof typeof MinecraftEnchantmentTypes} enchant Enchant to get from the item
         * @returns {Enchantment} The enchant
         */
        getEnchant<enchName extends keyof typeof MinecraftEnchantmentTypes>(enchant: enchName extends "prototype" ? never : enchName | Enchantment | EnchantmentType): Enchantment;
        /**
         * Get all enchants on the item
         * @returns {Enchantment[]} All enchants on the item
         */
        getEnchants(): Enchantment[];
        /**
         * Remove an enchant from the item
         * @param {keyof typeof MinecraftEnchantmentTypes} enchant Enchant to remove from the item
         */
        removeEnchant<enchName extends keyof typeof MinecraftEnchantmentTypes>(enchant: enchName extends "prototype" ? never : enchName | Enchantment | EnchantmentType): void;
    }
}
export declare type ItemComponents = {
    'cooldown': ItemCooldownComponent;
    'minecraft:cooldown': ItemCooldownComponent;
    'durability': ItemDurabilityComponent;
    'minecraft:durability': ItemDurabilityComponent;
    'enchantments': ItemEnchantsComponent;
    'minecraft:enchantments': ItemEnchantsComponent;
    'food': ItemFoodComponent;
    'minecraft:food': ItemFoodComponent;
    [key: string]: any;
};
