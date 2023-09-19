import { Node } from './node'

export class Character {
    name: String = '';
    hp: number = 50;
    sp: number = 50;
    might: number = 0;
    speed: number = 0;
    actionList: any[] = [];
    skillList: any[] = [];
    spellList: any[] = [];
    talentList: any[] = [];

    nodeList: Node[] = [];
}