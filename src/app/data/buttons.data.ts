export const NODE_DATA = [
    { id: 1, top: 16, left: 16, label: "Acceleration", class: 'Action',
      description: 'Acceleration: 1 AP; 10 SP. Your ranged attacks this turn increase in momentum as they travel. Any action that includes an attack with a ranged weapon increases in damage with distance from the target. For every 10 feet between you and the target the damage is increased by 2. Additional uses of this action in the same turn further increases the damage by 2.',
      connections: [2, 21] },
    { id: 2, top: 16, left: 127, label: "", class: 'Might', description: '', connections: [1, 3] },
    { id: 3, top: 16, left: 238, label: "", class: 'Speed', description: '', connections: [2, 4] },
    { id: 4, top: 16, left: 349, label: "Hurricane Shot", class: 'Action',
      description: 'Hurricane Shot: 2 AP; 5 SP. An action that includes an attack with a ranged weapon this turn deals damage in an area. Draw a line away from you in the range of your weapon. Any creature along this line or adjacent to it is dealt damage by this attack.',
      connections: [3, 24] },
    { id: 5, top: 16, left: 463, label: "", class: 'Vitality', description: '', connections: [6, 25] },
    { id: 6, top: 16, left: 574, label: "Numerous Blows", class: 'Action',
      description: 'Numerous Blows: 1 AP; 10 SP. Deal 1d4 damage to a creature at touch range. For each instance of damage dealt to creatures previously this turn, repeat this effect.',
      connections: [5, 26] },
    { id: 7, top: 16, left: 685, label: "", class: 'Might', description: '', connections: [8, 27] },
    { id: 8, top: 16, left: 796, label: "Two Weapon Style", class: 'Talent',
      description: 'Two-Weapon Style: If you have a secondary light weapon you gain an additional AP that can only be spent as part of a melee attack action. This may not be used in conjunction with Three-Weapon Style.',
      connections: [7, 9] },
    { id: 9, top: 16, left: 907, label: "", class: 'Might', description: '', connections: [8, 10] },
    { id: 10, top: 16, left: 1018, label: "Elastic", class: 'Action',
      description: 'Elastic: 1 AP; 15 SP. Increase the range of melee attacks this turn to 30 feet.',
      connections: [9, 11, 30] },
    { id: 11, top: 16, left: 1130, label: "", class: 'Willpower', description: '', connections: [10, 12, 31] },
    { id: 12, top: 16, left: 1242, label: "", class: 'Speed', description: '', connections: [11, 13, 32] },
    { id: 13, top: 16, left: 1353, label: "Unbreakable", class: 'Talent',
      description: 'Unbreakable: When your HP drops to zero and you still have SP you no longer drop prone and lose your next turn.',
      connections: [12, 14] },
    { id: 14, top: 16, left: 1464, label: "", class: 'Might', description: '', connections: [13 ,15] },
    { id: 15, top: 16, left: 1575, label: "", class: 'Vitality', description: '', connections: [14, 16] },
    { id: 16, top: 16, left: 1686, label: "Death Blow", class: 'Skill', 
      description: 'Deathblow: 6 AP. You deliver a fatal attack against a wounded enemy at touch range. If the target is at 30% or below their maximum HP they die. Otherwise they take 3d8 damage.', 
      connections: [15, 17, 36] },
    { id: 17, top: 16, left: 1798, label: "", class: 'Speed', description: '', connections: [16, 18, 37] },
    { id: 18, top: 16, left: 1910, label: "", class: 'Might', description: '', connections: [17, 19] },
    { id: 19, top: 16, left: 2021, label: "", class: 'Willpower', description: '', connections: [18, 20] },
    { id: 20, top: 16, left: 2133, label: "Second Wind", class: 'Skill', 
      description: 'Second Wind: 3 AP. Swap your current HP and SP. You cannot exceed your maximum with this skill.', 
      connections: [19, 40] },

    { id: 21, top: 127, left: 16, label: "", class: 'Speed', description: '', connections: [1, 22] },
    { id: 22, top: 127, left: 127, label: "High Jump", class: 'Action', 
      description: 'High Jump: X AP; 5X SP. You jump into the air up to 10X feet vertically or horizontally. Cannot be performed while prone.', 
      connections: [21, 23, 42] },
    { id: 23, top: 127, left: 238, label: "", class: 'Speed', description: '', connections: [22, 24] },
    { id: 24, top: 127, left: 349, label: "", class: 'Might', description: '', connections: [4, 23, 25, 44] },
    { id: 25, top: 127, left: 463, label: "Rapid Reload", class: 'Talent', 
      description: 'Rapid Reload: Reduces the reload action by one AP.', 
      connections: [5, 24, 45] },
    { id: 26, top: 127, left: 574, label: "", class: 'Vitality', description: '', connections: [6, 27, 46] },
    { id: 27, top: 127, left: 685, label: "", class: 'Speed', description: '', connections: [7, 26] },
    { id: 28, top: 127, left: 796, label: "", class: 'Vitality', description: '', connections: [29, 48] },
    { id: 29, top: 127, left: 907, label: "Push", class: 'Action', 
      description: 'Push: X AP; 5X SP. You push a target at close range 10X feet away from you in a straight line. If the target collides with another sturdy object (such as a wall, pillar, boulder, etc.) or creature they stop. If the target is pushed 30 or more feet before collision then both targets take 1d10 damage. If the target is pushed 30 or more feet without collision they become prone instead.', 
      connections: [28, 30] },
    { id: 30, top: 127, left: 1018, label: "", class: 'Willpower', description: '', connections: [10, 29, 50] },
    { id: 31, top: 127, left: 1130, label: "Crushing Force", class: 'Action', 
      description: 'Crushing Force: 1 AP; 10 SP. Your attacks this turn are powerful enough to destroy the environment around you. Increase the damage of any action that includes a melee attack by 3 this turn. If that action’s damage is 15 or greater it can destroy sturdy objects such as a wall, pillar, boulder, etc. This can be applied to that object directly or behind a target that you attacked this turn.', 
      connections: [11, 51] },
    { id: 32, top: 127, left: 1242, label: "", class: 'Vitality', description: '', connections: [12, 33] },
    { id: 33, top: 127, left: 1353, label: "Intercept", class: 'Skill',
      description: 'Intercept: 0 AP. Can be used on any turn. If an action would target another creature within 10 feet, or the line of fire from a projectile to that creature is within 10 feet, you may move between the two and receive the damage from that action.', 
      connections: [32, 34, 53] },
    { id: 34, top: 127, left: 1464, label: "", class: 'Speed', description: '', connections: [33, 35, 54] },
    { id: 35, top: 127, left: 1575, label: "", class: 'Vitality', description: '', connections: [34, 36] },
    { id: 36, top: 127, left: 1686, label: "", class: 'Vitality', description: '', connections: [16, 35, 56] },
    { id: 37, top: 127, left: 1798, label: "", class: 'Willpower', description: '', connections: [17, 38] },
    { id: 38, top: 127, left: 1910, label: "Fortify", class: 'Skill', 
      description: 'Fortify: 3 AP. Gain two stacks of Shell.', 
      connections: [37, 58] },
    { id: 39, top: 127, left: 2021, label: "", class: 'Speed', description: '', connections: [40, 59] },
    { id: 40, top: 127, left: 2133, label: "", class: 'Vitality', description: '', connections: [20, 39] },

    { id: 41, top: 238, left: 16, label: "Warp Strike", class: 'Action', 
      description: 'Warp Strike: 1 AP; 20 SP. If you damage a creature this turn you may move to an adjacent square to the damaged creature immediately after damage occurs.', 
      connections: [42] },
    { id: 42, top: 238, left: 127, label: "", class: 'Willpower', description: '', connections: [22, 41, 43, 62] },
    { id: 43, top: 238, left: 238, label: "Driving Impact", class: 'Action', 
      description: 'Driving Impact: 1 AP; 5 SP. An action that includes an attack with a ranged weapon this turn carries powerful momentum. Any creature dealt damage by this action moves 10 feet in a straight line away from you. If the target collides with another sturdy object (such as a wall, pillar, boulder, etc.) or creature they stop and take 1d10 damage.', 
      connections: [42, 44] },
    { id: 44, top: 238, left: 349, label: "", class: 'Speed', description: '', connections: [24, 43, 64] },
    { id: 45, top: 238, left: 463, label: "", class: 'Speed', description: '', connections: [25, 46] },
    { id: 46, top: 238, left: 574, label: "", class: 'Vitality', description: '', connections: [26, 45, 47] },
    { id: 47, top: 238, left: 685, label: "Grappling Hook", class: 'Action', 
      description: 'Grappling Hook: 2 AP; 15 SP. You latch onto a sturdy object (such as a wall, pillar, boulder, etc.) within 40 feet. You move in a straight line towards that object over the rest of your turn and may make additional actions along this line.', 
      connections: [46, 48, 67] },
    { id: 48, top: 238, left: 796, label: "", class: 'Willpower', description: '', connections: [28, 47, 68] },
    { id: 49, top: 238, left: 907, label: "", class: 'Vitality', description: '', connections: [50, 69] },
    { id: 50, top: 238, left: 1018, label: "Confined Wrath", class: 'Talent', 
      description: 'Confined Wrath: Your attacks increase in power the more surrounded you are. For every creature within 15 feet your sources of damage are increased by 1.', 
      connections: [30, 49] },
    { id: 51, top: 238, left: 1130, label: "", class: 'Willpower', description: '', connections: [31, 52, 71] },
    { id: 52, top: 238, left: 1242, label: "Multi-Target", class: 'Spell', 
      description: 'Multi-Target: 4 AP; 30 SP. When combined with another ability, you may select multiple targets within range of that ability.', 
      connections: [51, 53] },
    { id: 53, top: 238, left: 1353, label: "", class: 'Vitality', description: '', connections: [33, 52, 73] },
    { id: 54, top: 238, left: 1464, label: "", class: 'Willpower', description: '', connections: [34, 55] },
    { id: 55, top: 238, left: 1575, label: "Intimidate", class: 'Skill', 
      description: 'Intimidate: 1 AP. Target creature within 30 feet becomes Afraid for 1 turn. You may only use this skill on a target that you dealt 10 or more damage to this turn.', 
      connections: [54, 56, 75] },
    { id: 56, top: 238, left: 1686, label: "", class: 'Willpower', description: '', connections: [36, 55, 57] },
    { id: 57, top: 238, left: 1798, label: "Thick Skin", class: 'Talent', 
      description: 'Thick Skin: Reduces all sources of damage to you by 3.', 
      connections: [56, 58] },
    { id: 58, top: 238, left: 1910, label: "", class: 'Might', description: '', connections: [38, 57, 59] },
    { id: 59, top: 238, left: 2021, label: "", class: 'Willpower', description: '', connections: [39, 58, 60] },
    { id: 60, top: 238, left: 2133, label: "Feint", class: 'Skill', 
      description: 'Feint: 2 AP. All melee damage rolls against one target at touch range increase by one category until your next turn. A combination attack by a large weapon would deal 3d10 damage.', 
      connections: [59, 80] },

    { id: 61, top: 349, left: 16, label: "", class: 'Willpower', description: '', connections: [81] },
    { id: 62, top: 349, left: 127, label: "", class: 'Speed', description: '', connections: [42, 63, 82] },
    { id: 63, top: 349, left: 238, label: "Sniper", class: 'Talent', 
      description: 'Sniper: Doubles the range of any action that includes an attack from a ranged weapon.', 
      connections: [62, 83] },
    { id: 64, top: 349, left: 349, label: "", class: 'Willpower', description: '', connections: [44, 65] },
    { id: 65, top: 349, left: 463, label: "Execute", class: 'Action', 
      description: 'Execute: 1 AP; 10 SP. If your total damage dealt this turn exceeds 20 to any number of targets, then you may deal an additional 20 damage to a target you dealt damage to this turn.', 
      connections: [64, 66, 85] },
    { id: 66, top: 349, left: 574, label: "", class: 'Might', description: '', connections: [65, 86] },
    { id: 67, top: 349, left: 685, label: "", class: 'Speed', description: '', connections: [47, 87] },
    { id: 68, top: 349, left: 796, label: "Charge", class: 'Action', 
      description: 'Charge: 2 AP; 10 SP. Deal 1d6 damage to target at touch range. Increase this damage by 1d6 for each 10 feet increment traveled this turn.', 
      connections: [48, 88] },
    { id: 69, top: 349, left: 907, label: "", class: 'Might', description: '', connections: [49, 70, 89] },
    { id: 70, top: 349, left: 1018, label: "Pull", class: 'Action', 
      description: 'Pull: 2 AP; 10 SP. You tether a target enemy within 30 feet and pull them to the closest adjacent squares. You cannot use this ability if there are any obstacles between you and the target. This Action deals 1d10 damage to the target. If you perform an attack on the target this turn the damage this Action deals is increased to 2d10 if the target was 20 or more feet away.', 
      connections: [69, 71] },
    { id: 71, top: 349, left: 1130, label: "", class: 'Speed', description: '', connections: [51, 70] },
    { id: 72, top: 349, left: 1242, label: "", class: 'Willpower', description: '', connections: [73] },
    { id: 73, top: 349, left: 1353, label: "Trip", class: 'Skill', 
      description: 'Trip: 2 AP. You cause one target within touch range to fall prone.', 
      connections: [53, 72, 74] },
    { id: 74, top: 349, left: 1464, label: "", class: 'Might', description: '', connections: [73, 75, 94] },
    { id: 75, top: 349, left: 1575, label: "", class: 'Might', description: '', connections: [55, 74, 76] },
    { id: 76, top: 349, left: 1686, label: "", class: 'Might', description: '', connections: [75, 77, 96] },
    { id: 77, top: 349, left: 1798, label: "Taunt", class: 'Skill', 
      description: 'Taunt: 2 AP. You compel one target within touch range to not ignore you until your next turn. While under this effect they may not take any move actions that increase the distance between you. In addition, any actions that they use that deal damage this turn must include you as a target.', 
      connections: [76, 78] },
    { id: 78, top: 349, left: 1910, label: "", class: 'Vitality', description: '', connections: [77, 79, 98] },
    { id: 79, top: 349, left: 2021, label: "Relocate", class: 'Spell', 
      description: 'Relocate: 3 AP; 10 SP. You can move one target creature within touch range up to 20 feet from their starting location.', 
      connections: [78, 80] },
    { id: 80, top: 349, left: 2133, label: "", class: 'Speed', description: '', connections: [60, 79, 100] },

    { id: 81, top: 463, left: 16, label: "Ricochet", class: 'Action', 
      description: 'Ricochet: 3 AP; 10 SP. Any actions that include a ranged weapon attack may bounce to another creature within 20 feet. It can continue to bounce to multiple targets that have not been damaged by this action already.', 
      connections: [61, 82] },
    { id: 82, top: 463, left: 127, label: "", class: 'Willpower', description: '', connections: [62, 81, 102] },
    { id: 83, top: 463, left: 238, label: "", class: 'Might', description: '', connections: [63, 84, 103] },
    { id: 84, top: 463, left: 349, label: "", class: 'Speed', description: '', connections: [83, 85, 104] },
    { id: 85, top: 463, left: 463, label: "", class: 'Might', description: '', connections: [65, 84, 105] },
    { id: 86, top: 463, left: 574, label: "Tumbling Grace", class: 'Talent', 
      description: 'Tumbling Grace: You do not take any damage from falling great distances nor does it knock you prone.', 
      connections: [66, 106] },
    { id: 87, top: 463, left: 685, label: "", class: 'Willpower', description: '', connections: [67, 107] },
    { id: 88, top: 463, left: 796, label: "", class: 'Might', description: '', connections: [68, 89, 108] },
    { id: 89, top: 463, left: 907, label: "", class: 'Willpower', description: '', connections: [69, 88, 90, 109] },
    { id: 90, top: 463, left: 1018, label: "", class: 'Vitality', description: '', connections: [89, 91, 110] },
    { id: 91, top: 463, left: 1130, label: "Extend", class: 'Spell', 
      description: 'Extend: 2 AP; 20 SP. You increase the range of your action by 10 feet. Each application of this effect further increases the range by 10 additional feet.', 
      connections: [90, 92, 111] },
    { id: 92, top: 463, left: 1242, label: "", class: 'Vitality', description: '', connections: [91, 93] },
    { id: 93, top: 463, left: 1353, label: "", class: 'Willpower', description: '', connections: [92, 94, 113] },
    { id: 94, top: 463, left: 1464, label: "Cleanse", class: 'Spell', 
      description: 'Cleanse: 1 AP; 5 SP. Remove the following conditions from one target within touch range: Afraid, Burning, Enfeebled, Freezing, Paralyzed, Poisoned, and Static.', 
      connections: [74, 93] },
    { id: 95, top: 463, left: 1575, label: "Accelerate", class: 'Spell', 
      description: 'Accelerate: 6 AP; 25 SP. Until the start of your next turn, one target creature within touch range gets three additional AP per turn. ', 
      connections: [115] },
    { id: 96, top: 463, left: 1686, label: "Recovery", class: 'Spell', 
      description: 'Recovery: 1 AP; 5 SP. You heal one target creature within touch range for 1d6.', 
      connections: [76] },
    { id: 97, top: 463, left: 1798, label: "Flight", class: 'Spell', 
      description: 'Flight: 3 AP; 10 SP. Until the start of your next turn, one target creature within touch range can spend their movement vertically. Additionally, the target is unaffected by gravity. You can use this action on the same target at the start of your next turn to maintain this effect.', 
      connections: [117] },
    { id: 98, top: 463, left: 1910, label: "", class: 'Speed', description: '', connections: [78, 99, 118] },
    { id: 99, top: 463, left: 2021, label: "", class: 'Willpower', description: '', connections: [98, 100, 119] },
    { id: 100, top: 463, left: 2133, label: "Hemic Fury", class: 'Talent', 
      description: 'Hemic Fury: Your attacks increase in power the more damage you have suffered. For every 10 damage you are below your maximum your sources of damage are increased by 1.', 
      connections: [80, 99] },

    ////////////////////////////////////////////////

    { id: 101, top: 574, left: 16, label: "", class: 'Speed', description: '', connections: [102, 121] },
    { id: 102, top: 574, left: 127, label: "", class: 'Might', description: '', connections: [82, 101] },
    { id: 103, top: 574, left: 238, label: "", class: 'Vitality', description: '', connections: [83, 123] },
    { id: 104, top: 574, left: 349, label: "Elevation Specialist", class: 'Talent', 
      description: 'Elevation Specialist: All sources of damage dealt to targets that are 10 feet or more below you are increased by 5.', 
      connections: [84, 124] },
    { id: 105, top: 574, left: 463, label: "", class: 'Willpower', description: '', connections: [85, 125] },
    { id: 106, top: 574, left: 574, label: "", class: 'Speed', description: '', connections: [86, 107] },
    { id: 107, top: 574, left: 685, label: "", class: 'Vitality', description: '', connections: [87, 106, 108, 127] },
    { id: 108, top: 574, left: 796, label: "Lead Boots", class: 'Action', 
      description: 'Lead Boots: 1 AP; 5 SP. Your weight increases five fold until your next turn. This deals 2d6 damage when combined with movement to fall on someone beneath you. While active you cannot make any actions that include High Jump, Burst of Speed, or Iajutsu. While active you cannot be moved by another creature and are considered a sturdy object for the purposes of other actions i.e. Push.', 
      connections: [88, 107] },
    { id: 109, top: 574, left: 907, label: "", class: 'Vitality', description: '', connections: [89, 129] },
    { id: 110, top: 574, left: 1018, label: "Blink", class: 'Action', 
      description: 'Blink: 2 AP; 15 SP. You disappear and reappear at a target location that you can see within 50 feet. Removes the prone condition.', 
      connections: [90, 130] },
    { id: 111, top: 574, left: 1130, label: "", class: 'Willpower', description: '', connections: [91, 112, 131] },
    { id: 112, top: 574, left: 1242, label: "", class: 'Speed', description: '', connections: [111, 132] },
    { id: 113, top: 574, left: 1353, label: "", class: 'Might', description: '', connections: [93, 114, 133] },
    { id: 114, top: 574, left: 1464, label: "Armor", class: 'Spell', 
      description: 'Armor: 1 AP; 5 SP. Target creature within touch range receives the Shell condition until your next turn.', 
      connections: [113, 115] },
    { id: 115, top: 574, left: 1575, label: "", class: 'Speed', description: '', connections: [95, 114, 116] },
    { id: 116, top: 574, left: 1686, label: "", class: 'Vitality', description: '', connections: [115, 117, 136] },
    { id: 117, top: 574, left: 1798, label: "", class: 'Speed', description: '', connections: [97, 116] },
    { id: 118, top: 574, left: 1910, label: "", class: 'Willpower', description: '', connections: [98, 138] },
    { id: 119, top: 574, left: 2021, label: "Shock", class: 'Spell', 
      description: 'Shock: 1 AP; 5 SP. You deal 1d4 electric damage to one target within 10 feet. If this spell is applied three times to the same spell the target of the spell receives the Static condition.', 
      connections: [99, 120] },
    { id: 120, top: 574, left: 2133, label: "", class: 'Might', description: '', connections: [119, 140] },

    { id: 121, top: 685, left: 16, label: "", class: 'Vitality', description: '', connections: [101, 122] },
    { id: 122, top: 685, left: 127, label: "Iajutsu", class: 'Action', 
      description: 'Iaijutsu: 2 AP; 25 SP. You move in a straight line up to 20 feet in any direction. You cannot pass through any obstacles. You can move through other creatures as long as you end in an empty square. If you take a melee action this turn it can target multiple creatures that were along this line or adjacent to it. Only one attack can be used this way. Cannot be used while prone.', 
      connections: [121, 123] },
    { id: 123, top: 685, left: 238, label: "", class: 'Might', description: '', connections: [103, 122, 143] },
    { id: 124, top: 685, left: 349, label: "", class: 'Willpower', description: '', connections: [104, 144] },
    { id: 125, top: 685, left: 463, label: "", class: 'Speed', description: '', connections: [105, 126] },
    { id: 126, top: 685, left: 574, label: "Body Double", class: 'Action', 
      description: 'Body Double: 3 AP; 15 SP. You create a false copy of yourself to distract your enemies. The copy is indistinguishable from you and acts on your turn. The copy can only perform move actions and does not gain your free movement from speed. While the copy is active you may use a move action to swap places with your copy. The copy disappears after taking damage or after 3 turns. After the copy disappears you can choose to appear where it was when it fades as an immediate action. This can happen in the middle of another turn.', 
      connections: [125, 146] },
    { id: 127, top: 685, left: 685, label: "", class: 'Might', description: '', connections: [107, 147] },
    { id: 128, top: 685, left: 796, label: "Strength Surge", class: 'Action', 
      description: 'Strength Surge: 2 AP; 10X SP. A rush of adrenaline flows through you causing your actions to become more powerful. For your next X turns your Might score is doubled.', 
      connections: [129, 148] },
    { id: 129, top: 685, left: 907, label: "", class: 'Willpower', description: '', connections: [109, 128, 130] },
    { id: 130, top: 685, left: 1018, label: "", class: 'Speed', description: '', connections: [110, 129, 150] },
    { id: 131, top: 685, left: 1130, label: "", class: 'Vitality', description: '', connections: [111, 151] },
    { id: 132, top: 685, left: 1242, label: "", class: 'Might', description: '', connections: [112, 133] },
    { id: 133, top: 685, left: 1353, label: "Flame", class: 'Spell', 
      description: 'Flame: 2 AP; 5 SP. You deal 2d4 fire damage to one target within touch. If this spell is applied three times to the same ability the target of the spell receives the Burning condition.', 
      connections: [113, 132, 135, 153] },
    { id: 134, top: 685, left: 1464, label: "", class: 'Willpower', description: '', connections: [133, 135] },
    { id: 135, top: 685, left: 1575, label: "", class: 'Willpower', description: '', connections: [134, 136] },
    { id: 136, top: 685, left: 1686, label: "Maintain", class: 'Spell', 
      description: 'Maintain: 2 AP; 10 SP. Any action used with this spell that has a lasting effect for one for more turns doubles in duration. This includes actions that apply conditions i.e. Freezing, Poisoned, etc. Multiple applications of this effect add the original duration to the action and do not continue to double it (x3 the duration on second use and not x4).', 
      connections: [116, 135, 137, 156] },
    { id: 137, top: 685, left: 1798, label: "", class: 'Willpower', description: '', connections: [136, 138] },
    { id: 138, top: 685, left: 1910, label: "", class: 'Willpower', description: '', connections: [118, 137, 139] },
    { id: 139, top: 685, left: 2021, label: "Frost", class: 'Spell', 
      description: 'Frost: 2 AP; 5 SP. You deal 2d4 frost damage to one target within touch. If this spell is applied three times to the same ability the target of the spell receives the Freezing condition.', 
      connections: [138] },
    { id: 140, top: 685, left: 2133, label: "", class: 'Might', description: '', connections: [120, 160] },

    { id: 141, top: 796, left: 16, label: "", class: 'Might', description: '', connections: [142, 161] },
    { id: 142, top: 796, left: 127, label: "", class: 'Speed', description: '', connections: [141, 143] },
    { id: 143, top: 796, left: 238, label: "", class: 'Speed', description: '', connections: [123, 142, 144, 163] },
    { id: 144, top: 796, left: 349, label: "After Image", class: 'Talent', 
      description: 'After Image: If your first and last AP spent in a turn are used for movement you gain shell until the start of your next turn.', 
      connections: [124, 143] },
    { id: 145, top: 796, left: 463, label: "", class: 'Vitality', description: '', connections: [146, 165] },
    { id: 146, top: 796, left: 574, label: "", class: 'Might', description: '', connections: [126, 145, 147] },
    { id: 147, top: 796, left: 685, label: "", class: 'Speed', description: '', connections: [127, 146, 167] },
    { id: 148, top: 796, left: 796, label: "", class: 'Vitality', description: '', connections: [128, 149] },
    { id: 149, top: 796, left: 907, label: "Whirlwind", class: 'Action', 
      description: 'Whirlwind: 2 AP; 10 SP. Any melee attacks made against a target may now affect any number of targets within range as well.', 
      connections: [148, 169] },
    { id: 150, top: 796, left: 1018, label: "", class: 'Might', description: '', connections: [130, 170] },
    { id: 151, top: 796, left: 1130, label: "Weaken", class: 'Spell', 
      description: 'Weaken: 2 AP; 10 SP. Target creature within 30 feet gains the Enfeebled condition.', 
      connections: [131, 152, 171] },
    { id: 152, top: 796, left: 1242, label: "", class: 'Willpower', description: '', connections: [151, 153] },
    { id: 153, top: 796, left: 1353, label: "", class: 'Might', description: '', connections: [133, 152, 154] },
    { id: 154, top: 796, left: 1464, label: "", class: 'Willpower', description: '', connections: [153, 174] },
    { id: 155, top: 796, left: 1575, label: "", class: 'Speed', description: '', connections: [156, 175] },
    { id: 156, top: 796, left: 1686, label: "", class: 'Vitality', description: '', connections: [136, 155, 157] },
    { id: 157, top: 796, left: 1798, label: "", class: 'Speed', description: '', connections: [156, 177] },
    { id: 158, top: 796, left: 1910, label: "", class: 'Vitality', description: '', connections: [179] },
    { id: 159, top: 796, left: 2021, label: "", class: 'Vitality', description: '', connections: [179] },
    { id: 160, top: 796, left: 2133, label: "Conjure Toxin", class: 'Spell', 
      description: 'Conjure Toxin: 2 AP; 10 SP. One target creature within touch range has their weapons coated in poison until your next turn. If they strike another creature with a melee weapon they inflict one turn of the Poisoned condition on them.', 
      connections: [140, 180] },

    { id: 161, top: 907, left: 16, label: "Omnislash", class: 'Action', 
      description: 'Omnislash: 2 AP; 20 SP. You may make two jab attacks that do not cost any AP this turn. In addition, if you make three or more melee attacks against the same target this turn, increase the damage category of the attacks by one.', 
      connections: [141, 181] },
    { id: 162, top: 907, left: 127, label: "Instant Reflex", class: 'Talent', 
      description: 'Instant Reflexes: Gives you +10 to your initiative roll.', 
      connections: [163, 182] },
    { id: 163, top: 907, left: 238, label: "Swap", class: 'Action', 
      description: 'Swap: 3 AP; 20 SP. You exchange the position of two creatures. Both must be within 50 feet of each other. You may be one of the targets.', 
      connections: [143, 162, 183] },
    { id: 164, top: 907, left: 349, label: "", class: 'Vitality', description: '', connections: [144, 184] },
    { id: 165, top: 907, left: 463, label: "Burst of Speed", class: 'Action', 
      description: 'Burst of Speed: 1 AP; 5 SP. Your move actions this turn move you up to 3 squares. If you make a melee attack against someone 20 or more feet away after using this Action you deal an additional 5 damage.', 
      connections: [145, 166, 185] },
    { id: 166, top: 907, left: 574, label: "", class: 'Speed', description: '', connections: [165, 186] },
    { id: 167, top: 907, left: 685, label: "Grab", class: 'Action', 
      description: 'Grab: 1 AP; 5 SP. You latch onto a target that is similar size or smaller. If you move during this turn you take your target with you and drop them on an adjacent square at any point before the end of your turn.', 
      connections: [147, 168] },
    { id: 168, top: 907, left: 796, label: "", class: 'Vitality', description: '', connections: [167, 169, 188] },
    { id: 169, top: 907, left: 907, label: "", class: 'Might', description: '', connections: [149, 168, 189] },
    { id: 170, top: 907, left: 1018, label: "", class: 'Vitality', description: '', connections: [150, 190] },
    { id: 171, top: 907, left: 1130, label: "", class: 'Speed', description: '', connections: [151, 172, 191] },
    { id: 172, top: 907, left: 1242, label: "", class: 'Vitality', description: '', connections: [171, 173] },
    { id: 173, top: 907, left: 1353, label: "Burst", class: 'Spell', 
      description: 'Burst: 3 AP; 20 SP. You increase the area of effect of your ability to include all targets within 5 feet of the original target. Each application of this effect increases the radius by 5 feet.', 
      connections: [172, 193] },
    { id: 174, top: 907, left: 1464, label: "Vampirism", class: 'Talent', 
      description: 'Vampirism: Heal 1 HP for each instance of damage dealt to other creatures.', 
      connections: [154, 194] },
    { id: 175, top: 907, left: 1575, label: "Concealment", class: 'Spell', 
      description: 'Concealment: 2 AP; 10 SP. Until the start of your next turn, one target creature within touch range becomes invisible. You can use this action on the same target at the start of your next turn to maintain this effect.', 
      connections: [155, 195] },
    { id: 176, top: 907, left: 1686, label: "Quake", class: 'Spell', 
      description: 'Quake: 1 AP; 5 SP. You deal 1d4 earth damage to one target within 10 feet. If this spell is applied three times to the same spell the target of the spell receives the Prone condition. If the target is already prone, double the damage this spell deals. This spell has no effect on targets that are not touching the ground.', 
      connections: [196] },
    { id: 177, top: 907, left: 1798, label: "Mana Shield", class: 'Spell', 
      description: 'Mana Shield: 2 AP; 5 SP. For their next three turns, the target creature within touch range has their HP protected from damage. Any damage they take is subtracted from their SP instead. Any damage that exceeds their SP is subtracted from their HP normally.', 
      connections: [157, 178] },
    { id: 178, top: 907, left: 1910, label: "", class: 'Vitality', description: '', connections: [177, 179] },
    { id: 179, top: 907, left: 2021, label: "Blood Magic", class: 'Talent', 
      description: 'Blood Magic: You may spend HP in 5 point increments of yourself or an adjacent willing or vulnerable creature to augment any actions that include a spell or ritual. This augmentation can come in one of two forms. You may gain an additional AP this turn or provide 10 SP that has to be spent this turn on the spell or ritual.', 
      connections: [158, 159, 178, 200] },
    { id: 180, top: 907, left: 2133, label: "", class: 'Willpower', description: '', connections: [160, 200] },

    { id: 181, top: 1018, left: 16, label: "", class: 'Might', description: '', connections: [161, 182] },
    { id: 182, top: 1018, left: 127, label: "", class: 'Speed', description: '', connections: [162, 181] },
    { id: 183, top: 1018, left: 238, label: "", class: 'Willpower', description: '', connections: [163, 184] },
    { id: 184, top: 1018, left: 349, label: "Shockwave", class: 'Action', 
      description: 'Shockwave: 2 AP; 10 SP. You may choose to deal damage to the ground in front of you this turn. It reverberates in a 15 foot square in front of you dealing half damage rounded up to targets in that area. If the total damage before being halved is 10 or greater it knocks targets prone who are damaged by this effect.', 
      connections: [164, 183, 185] },
    { id: 185, top: 1018, left: 463, label: "", class: 'Might', description: '', connections: [165, 184] },
    { id: 186, top: 1018, left: 574, label: "", class: 'Speed', description: '', connections: [166, 187] },
    { id: 187, top: 1018, left: 685, label: "", class: 'Might', description: '', connections: [186, 188] },
    { id: 188, top: 1018, left: 796, label: "Three Weapon Style", class: 'Talent', 
      description: 'Three-Weapon Style: If you have a tertiary light weapon you can reduce the AP of the jab attack with a light weapon this turn to 1. You can only do this if you spend all AP this turn on jab attack actions. This reduces the damage from the jab attack to 1d3. This may not be used in conjunction with Two-Weapon Style.', 
      connections: [168, 187] },
    { id: 189, top: 1018, left: 907, label: "", class: 'Might', description: '', connections: [169, 190] },
    { id: 190, top: 1018, left: 1018, label: "Soul Strike", class: 'Action', 
      description: 'Soul Strike: 1 AP; 5 SP. Damage you deal this turn is subtracted from the target’s SP rather than their HP. If your target has no remaining SP, it is dealt to their HP as normal. All sources of damage are increased by 2 this turn and ignore armor.', 
      connections: [170, 189, 191] },
    { id: 191, top: 1018, left: 1130, label: "", class: 'Willpower', description: '', connections: [171, 190, 192] },
    { id: 192, top: 1018, left: 1242, label: "Focus Energy", class: 'Action', 
      description: 'Focus Energy: 3 AP; 15 SP. All sources of damage that you deal next turn are increased by 4.', 
      connections: [191, 193] },
    { id: 193, top: 1018, left: 1353, label: "", class: 'Vitality', description: '', connections: [173, 192, 194] },
    { id: 194, top: 1018, left: 1464, label: "", class: 'Speed', description: '', connections: [174, 193, 195] },
    { id: 195, top: 1018, left: 1575, label: "", class: 'Vitality', description: '', connections: [175, 194, 196] },
    { id: 196, top: 1018, left: 1686, label: "", class: 'Might', description: '', connections: [176, 195, 197] },
    { id: 197, top: 1018, left: 1798, label: "", class: 'Might', description: '', connections: [196, 198] },
    { id: 198, top: 1018, left: 1910, label: "Frighten", class: 'Spell', 
      description: 'Frighten: 2 AP; 10 P. Target creature within 10 feet gains the Afraid condition.', 
      connections: [197, 199] },
    { id: 199, top: 1018, left: 2021, label: "", class: 'Willpower', description: '', connections: [198, 200] },
    { id: 200, top: 1018, left: 2133, label: "", class: 'Vitality', description: '', connections: [179, 180, 199] },
];
