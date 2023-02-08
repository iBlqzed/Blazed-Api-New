import { ItemStack, world, MinecraftEnchantmentTypes, Enchantment } from "@minecraft/server"
import type { ItemCooldownComponent, ItemDurabilityComponent, ItemEnchantsComponent, ItemFoodComponent, EnchantmentType } from "@minecraft/server"

declare module "@minecraft/server" {
    interface ItemStack {
        /**
         * Add an enchant to the item
         * @template {keyof typeof MinecraftEnchantmentTypes} enchName
         * @param {enchName extends "prototype" ? never : enchName | Enchantment | EnchantmentType} enchant Enchant to add to the item
         * @returns {boolean} Whether or not the the enchant was added successfully
         */
        addEnchant<enchName extends keyof typeof MinecraftEnchantmentTypes>(enchant: enchName extends "prototype" ? never : enchName | Enchantment | EnchantmentType, level?: number): boolean
        /**
         * Get an item component
         * @template {keyof ItemComponents} compName
         * @param {compName} component Component to get
         * @returns {ItemComponents[compName]} The component
         */
        getComponent<compName extends keyof ItemComponents>(component: compName): ItemComponents[compName]
        /**
         * Get an enchant from the item
         * @param {keyof typeof MinecraftEnchantmentTypes} enchant Enchant to get from the item
         * @returns {Enchantment} The enchant
         */
        getEnchant<enchName extends keyof typeof MinecraftEnchantmentTypes>(enchant: enchName extends "prototype" ? never : enchName | Enchantment | EnchantmentType): Enchantment
        /**
         * Get all enchants on the item
         * @returns {Enchantment[]} All enchants on the item
         */
        getEnchants(): Enchantment[]
        /**
         * Remove an enchant from the item
         * @param {keyof typeof MinecraftEnchantmentTypes} enchant Enchant to remove from the item
         */
        removeEnchant<enchName extends keyof typeof MinecraftEnchantmentTypes>(enchant: enchName extends "prototype" ? never : enchName | Enchantment | EnchantmentType): void
    }
}

const getComp = ItemStack.prototype.getComponent

Object.assign(ItemStack.prototype, {
    addEnchant(enchant: keyof typeof MinecraftEnchantmentTypes | Enchantment | EnchantmentType, level?: number): boolean {
        const eC = this.getComponent('enchantments'), eL = eC.enchantments
        if (!eC) return
        const rV = eL.addEnchantment(enchant instanceof Enchantment ? enchant : new Enchantment(typeof enchant === "string" ? MinecraftEnchantmentTypes[enchant] as EnchantmentType : enchant, level ?? 1))
        eC.enchantments = eL
        return rV
    },
    getComponent(componentId: string) {
        return getComp.bind(this)(componentId)
    },
    getEnchant(enchant: keyof typeof MinecraftEnchantmentTypes | Enchantment | EnchantmentType): Enchantment {
        return this.getComponent('enchantments')?.enchantments?.getEnchantment(enchant instanceof Enchantment ? enchant.type : typeof enchant === "string" ? MinecraftEnchantmentTypes[enchant] : enchant)
    },
    getEnchants(): Enchantment[] {
        return Array.from(this.getComponent("enchantments")?.enchantments ?? [])
    },
    removeEnchant(enchant: keyof typeof MinecraftEnchantmentTypes | Enchantment | EnchantmentType): void {
        const eC = this.getComponent('enchantments'), eL = eC?.enchantments
        if (!eC) return;
        eL.removeEnchantment(enchant instanceof Enchantment ? enchant.type : typeof enchant === "string" ? MinecraftEnchantmentTypes[enchant] : enchant)
        eC.enchantments = eL
    }
})

export type ItemComponents = {
    'cooldown': ItemCooldownComponent
    'minecraft:cooldown': ItemCooldownComponent
    'durability': ItemDurabilityComponent
    'minecraft:durability': ItemDurabilityComponent
    'enchantments': ItemEnchantsComponent
    'minecraft:enchantments': ItemEnchantsComponent
    'food': ItemFoodComponent
    'minecraft:food': ItemFoodComponent
    [key: string]: any
}