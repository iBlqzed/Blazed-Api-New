import { ItemStack, MinecraftEnchantmentTypes, Enchantment } from "@minecraft/server";
const getComp = ItemStack.prototype.getComponent;
Object.assign(ItemStack.prototype, {
    addEnchant(enchant, level) {
        const eC = this.getComponent('enchantments'), eL = eC.enchantments;
        if (!eC)
            return;
        const rV = eL.addEnchantment(enchant instanceof Enchantment ? enchant : new Enchantment(typeof enchant === "string" ? MinecraftEnchantmentTypes[enchant] : enchant, level ?? 1));
        eC.enchantments = eL;
        return rV;
    },
    getComponent(componentId) {
        return getComp.bind(this)(componentId);
    },
    getEnchant(enchant) {
        return this.getComponent('enchantments')?.enchantments?.getEnchantment(enchant instanceof Enchantment ? enchant.type : typeof enchant === "string" ? MinecraftEnchantmentTypes[enchant] : enchant);
    },
    getEnchants() {
        return Array.from(this.getComponent("enchantments")?.enchantments ?? []);
    },
    removeEnchant(enchant) {
        const eC = this.getComponent('enchantments'), eL = eC?.enchantments;
        if (!eC)
            return;
        eL.removeEnchantment(enchant instanceof Enchantment ? enchant.type : typeof enchant === "string" ? MinecraftEnchantmentTypes[enchant] : enchant);
        eC.enchantments = eL;
    }
});
