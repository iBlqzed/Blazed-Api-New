import type { EntityAddRiderComponent, EntityAgeableComponent, EntityBreathableComponent, EntityCanClimbComponent, EntityCanFlyComponent, EntityCanPowerJumpComponent, EntityColorComponent, EntityFireImmuneComponent, EntityFloatsInLiquidComponent, EntityFlyingSpeedComponent, EntityFrictionModifierComponent, EntityGroundOffsetComponent, EntityHealableComponent, EntityHealthComponent, EntityInventoryComponent, EntityIsBabyComponent, EntityIsChargedComponent, EntityIsChestedComponent, EntityIsDyableComponent, EntityIsHiddenWhenInvisibleComponent, EntityIsIgnitedComponent, EntityIsIllagerCaptainComponent, EntityIsSaddledComponent, EntityIsShakingComponent, EntityIsShearedComponent, EntityIsStackableComponent, EntityIsStunnedComponent, EntityIsTamedComponent, EntityItemComponent, EntityLavaMovementComponent, EntityLeashableComponent, EntityMarkVariantComponent, EntityMountTamingComponent, EntityMovementAmphibiousComponent, EntityMovementBasicComponent, EntityMovementComponent, EntityMovementFlyComponent, EntityMovementGenericComponent, EntityMovementGlideComponent, EntityMovementHoverComponent, EntityMovementJumpComponent, EntityMovementSkipComponent, EntityMovementSwayComponent, EntityNavigationClimbComponent, EntityNavigationFloatComponent, EntityNavigationFlyComponent, EntityNavigationGenericComponent, EntityNavigationHoverComponent, EntityNavigationWalkComponent, EntityPushThroughComponent, EntityRideableComponent, EntityScaleComponent, EntitySkinIdComponent, EntityStrengthComponent, EntityTameableComponent, EntityUnderwaterMovementComponent, EntityVariantComponent, EntityWantsJockeyComponent } from "@minecraft/server";
declare module "@minecraft/server" {
    interface Player {
        /**
         * Add a score to an objective
         * @param {string|ScoreboardObjective} objective Objective to add the score to
         * @param {number} score Amount to add to the objective
         */
        addScore(objective: string | ScoreboardObjective, score: number): void;
        /**
         * Get a component from the player
         * @param {string|ScoreboardObjective} component Component to get from the entity
         * @returns {IEntityComponent} The component
         */
        getComponent<componentName extends keyof EntityComponents>(component: componentName): EntityComponents[componentName];
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
        getScore(objective: string | ScoreboardObjective): number;
        /**
         * Remove a score from an objective
         * @param {string|ScoreboardObjective} objective Objective to remove the score from
         * @param {number} score Amount to remove from the objective
         */
        removeScore(objective: string | ScoreboardObjective, score: number): void;
        /**
         * Set the player's health
         * @param {number} health Amount to set the player's health too
         */
        setHealth(health: number): void;
        /**
         * Set a score for an objective
         * @param {string} objective Objective to set the score to
         * @param {number} score Amount to set for the objective
         */
        setScore(objective: string | ScoreboardObjective, score: number): void;
    }
}
export declare type EntityComponents = {
    'addrider': EntityAddRiderComponent;
    'minecraft:addrider': EntityAddRiderComponent;
    'ageable': EntityAgeableComponent;
    'minecraft:ageable': EntityAgeableComponent;
    'breathable': EntityBreathableComponent;
    'minecraft:breathable': EntityBreathableComponent;
    'can_climb': EntityCanClimbComponent;
    'minecraft:can_climb': EntityCanClimbComponent;
    'can_fly': EntityCanFlyComponent;
    'minecraft:can_fly': EntityCanFlyComponent;
    'can_power_jump': EntityCanPowerJumpComponent;
    'minecraft:can_power_jump': EntityCanPowerJumpComponent;
    'color': EntityColorComponent;
    'minecraft:color': EntityColorComponent;
    'fire_immune': EntityFireImmuneComponent;
    'minecraft:fire_immune': EntityFireImmuneComponent;
    'floats_in_liquid': EntityFloatsInLiquidComponent;
    'minecraft:floats_in_liquid': EntityFloatsInLiquidComponent;
    'flying_speed': EntityFlyingSpeedComponent;
    'minecraft:flying_speed': EntityFlyingSpeedComponent;
    'friction_modifier': EntityFrictionModifierComponent;
    'minecraft:friction_modifier': EntityFrictionModifierComponent;
    'ground_offset': EntityGroundOffsetComponent;
    'minecraft:ground_offset': EntityGroundOffsetComponent;
    'healable': EntityHealableComponent;
    'minecraft:healable': EntityHealableComponent;
    'health': EntityHealthComponent;
    'minecraft:health': EntityHealthComponent;
    'inventory': EntityInventoryComponent;
    'minecraft:inventory': EntityInventoryComponent;
    'is_baby': EntityIsBabyComponent;
    'minecraft:is_baby': EntityIsBabyComponent;
    'is_charged': EntityIsChargedComponent;
    'minecraft:is_charged': EntityIsChargedComponent;
    'is_chested': EntityIsChestedComponent;
    'minecraft:is_chested': EntityIsChestedComponent;
    'is_dyeable': EntityIsDyableComponent;
    'minecraft:is_dyeable': EntityIsDyableComponent;
    'is_hidden_when_invisible': EntityIsHiddenWhenInvisibleComponent;
    'minecraft:is_hidden_when_invisible': EntityIsHiddenWhenInvisibleComponent;
    'is_ignited': EntityIsIgnitedComponent;
    'minecraft:is_ignited': EntityIsIgnitedComponent;
    'is_illager_captain': EntityIsIllagerCaptainComponent;
    'minecraft:is_illager_captain': EntityIsIllagerCaptainComponent;
    'is_saddled': EntityIsSaddledComponent;
    'minecraft:is_saddled': EntityIsSaddledComponent;
    'is_shaking': EntityIsShakingComponent;
    'minecraft:is_shaking': EntityIsShakingComponent;
    'is_sheared': EntityIsShearedComponent;
    'minecraft:is_sheared': EntityIsShearedComponent;
    'is_stackable': EntityIsStackableComponent;
    'minecraft:is_stackable': EntityIsStackableComponent;
    'is_stunned': EntityIsStunnedComponent;
    'minecraft:is_stunned': EntityIsStunnedComponent;
    'is_tamed': EntityIsTamedComponent;
    'minecraft:is_tamed': EntityIsTamedComponent;
    'lava_movement': EntityLavaMovementComponent;
    'minecraft:lava_movement': EntityLavaMovementComponent;
    'leashable': EntityLeashableComponent;
    'minecraft:leashable': EntityLeashableComponent;
    'mark_variant': EntityMarkVariantComponent;
    'minecraft:mark_variant': EntityMarkVariantComponent;
    'tamemount': EntityMountTamingComponent;
    'minecraft:tamemount': EntityMountTamingComponent;
    'movement.amphibious': EntityMovementAmphibiousComponent;
    'minecraft:movement.amphibious': EntityMovementAmphibiousComponent;
    'movement.basic': EntityMovementBasicComponent;
    'minecraft:movement.basic': EntityMovementBasicComponent;
    'movement': EntityMovementComponent;
    'minecraft:movement': EntityMovementComponent;
    'movement.fly': EntityMovementFlyComponent;
    'minecraft:movement.fly': EntityMovementFlyComponent;
    'movement.generic': EntityMovementGenericComponent;
    'minecraft:movement.generic': EntityMovementGenericComponent;
    'movement.glide': EntityMovementGlideComponent;
    'minecraft:movement.glide': EntityMovementGlideComponent;
    'movement.hover': EntityMovementHoverComponent;
    'minecraft:movement.hover': EntityMovementHoverComponent;
    'movement.jump': EntityMovementJumpComponent;
    'minecraft:movement.jump': EntityMovementJumpComponent;
    'movement.skip': EntityMovementSkipComponent;
    'minecraft:movement.skip': EntityMovementSkipComponent;
    'movement.sway': EntityMovementSwayComponent;
    'minecraft:movement.sway': EntityMovementSwayComponent;
    'navigation.climb': EntityNavigationClimbComponent;
    'minecraft:navigation.climb': EntityNavigationClimbComponent;
    'navigation.float': EntityNavigationFloatComponent;
    'minecraft:navigation.float': EntityNavigationFloatComponent;
    'navigation.fly': EntityNavigationFlyComponent;
    'minecraft:navigation.fly': EntityNavigationFlyComponent;
    'navigation.generic': EntityNavigationGenericComponent;
    'minecraft:navigation.generic': EntityNavigationGenericComponent;
    'navigation.hover': EntityNavigationHoverComponent;
    'minecraft:navigation.hover': EntityNavigationHoverComponent;
    'navigation.walk': EntityNavigationWalkComponent;
    'minecraft:navigation.walk': EntityNavigationWalkComponent;
    'push_through': EntityPushThroughComponent;
    'minecraft:push_through': EntityPushThroughComponent;
    'rideable': EntityRideableComponent;
    'minecraft:rideable': EntityRideableComponent;
    'scale': EntityScaleComponent;
    'minecraft:scale': EntityScaleComponent;
    'skin_id': EntitySkinIdComponent;
    'minecraft:skin_id': EntitySkinIdComponent;
    'strength': EntityStrengthComponent;
    'minecraft:strength': EntityStrengthComponent;
    'tameable': EntityTameableComponent;
    'minecraft:tameable': EntityTameableComponent;
    'underwater_movement': EntityUnderwaterMovementComponent;
    'minecraft:underwater_movement': EntityUnderwaterMovementComponent;
    'variant': EntityVariantComponent;
    'minecraft:variant': EntityVariantComponent;
    'wants_jockey': EntityWantsJockeyComponent;
    'minecraft:wants_jockey': EntityWantsJockeyComponent;
    'item': EntityItemComponent;
    'minecraft:item': EntityItemComponent;
    [key: string]: any;
};
