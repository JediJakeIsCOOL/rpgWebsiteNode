import BaseScene from '/js/utilities/basescene.js';
import sceneImports from '../utilities/imports.js'; // Imports all images

// Load character objects
import Hero from '../classes/characters/hero.js'; 
import Goblin from '../classes/characters/goblin.js';
import DeathKnight from '../classes/characters/deathKnight.js';
import Shadow from '../classes/characters/shadow.js';
import Wizard from '../classes/characters/wizard.js';
import Ranger from '../classes/characters/ranger.js';
import Zombie from '../classes/characters/zombie.js';
import Dragon from '../classes/characters/dragon.js';

var currArea = [100, 114];
import area from '/assets/sprites/background-images/area_100_114.png';

export default class Area100_114 extends BaseScene {
    constructor() {
        super(`Area${currArea[0]}_${currArea[1]}`);
    }

    preload() {
        super.preload(`area${currArea[0]}_${currArea[1]}`, area);
    }

    create() {
        var sceneBorders = {x: [35, 480], y: [125, 480]}; // Scene dimensions
        var areaChanges = {
            northChange : "", 
            eastChange : [sceneBorders.x[1] - 30,
            sceneBorders.x[1] + 30, 
            sceneBorders.y[0],
            sceneBorders.y[1]], 
            southChange : [sceneBorders.x[0],
            sceneBorders.x[1], 
            sceneBorders.y[1] - 30,
            sceneBorders.y[1] + 30], 
            westChange : ""
        }; // Defines part of scene where the user transitions to other scene
        var areaChangeTo = {
            northChange : `Area${currArea[0]}_${currArea[1] + 1}`, 
            eastChange : `Area${currArea[0] + 1}_${currArea[1]}`,
            southChange : `Area${currArea[0]}_${currArea[1] - 1}`, 
            westChange : `Area${currArea[0] - 1}_${currArea[1]}`
        }

        var Enemy1 = {class: Dragon, name: "dragon", walkAreaX: [70, 300], walkAreaY: [150, 350], x: 280, y: 330}
        var Enemy2 = "None"
        var Enemy3 = "None"
        var Enemy4 = "None"

        super.create(`area${currArea[0]}_${currArea[1]}`, sceneBorders, areaChanges, areaChangeTo, Enemy1, Enemy2, Enemy3, Enemy4);

    }
}