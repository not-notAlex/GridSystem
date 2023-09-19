import { Component } from '@angular/core';
import { Character } from '../structures/character';
import { Subscription } from 'rxjs';
import { CharacterDataService } from '../character-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  toon: Character = new Character;
  description: string = '';
  saveString: String = '';

  vitality: number = 0;
  willpower: number = 0;
  might: number = 0;
  speed: number = 0;
  actions: number = 0;
  skills: number = 0;
  spells: number = 0;
  talents: number = 0;

  chartLabels: string[] = ['Vitality', 'Willpower', 'Might', 'Speed',
                           'Actions', 'Skills', 'Spells', 'Talents'];
  chartData = [{
    data: [this.vitality, this.willpower, this.might, this.speed,
           this.actions, this.skills, this.spells, this.talents],
    backgroundColor: ['#ec273f', '#3388de', '#26854c', 'rgb(221, 188, 4)',
                      '#fdabbd', '#b0a7b8', '#9a4d76', '#e98537'],
    borderColor: 'black',
  }];

  chartOptions = {
    plugins: {
      legend: {
          labels: {
              color: '#ffffff'
          }
      }
    }
  }

  private characterDataSubscription: Subscription = new Subscription;

  constructor(private characterData: CharacterDataService) {}

  ngOnInit() {
    this.toon = this.characterData.getCharacterData();

    this.characterDataSubscription = this.characterData.character$.subscribe(data => {
      this.toon = data;
      this.generateLoadString();
      localStorage.setItem('toon', this.saveString+'');

      this.vitality = 0;
      this.willpower = 0;
      this.might = 0;
      this.speed = 0;
      this.actions = 0;
      this.skills = 0;
      this.spells = 0;
      this.talents = 0;

      this.toon.actionList = [];
      this.toon.skillList = [];
      this.toon.spellList = [];
      this.toon.talentList = [];

      this.toon.nodeList.forEach(node => {
        switch (node.type) {
          case 'Vitality': {
            this.vitality++;
            break;
          }
          case 'Willpower': {
            this.willpower++;
            break;
          }
          case 'Might': {
            this.might++;
            break;
          }
          case 'Speed': {
            this.speed++;
            break;
          }
          case 'Action': {
            this.actions++;
            this.toon.actionList.push({name: node.name, desc: node.description});
            break;
          }
          case 'Skill': {
            this.skills++;
            this.toon.skillList.push({name: node.name, desc: node.description});
            break;
          }
          case 'Spell': {
            this.spells++;
            this.toon.spellList.push({name: node.name, desc: node.description});
            break;
          }
          case 'Talent': {
            this.talents++;
            this.toon.talentList.push({name: node.name, desc: node.description});
            break;
          }
          default: {
            break;
          }
        }
      })

      this.toon.hp = 50 + (10 * this.vitality);
      this.toon.sp = 50 + (20 * this.willpower);
      this.toon.might = this.might;
      this.toon.speed = this.speed;

      this.updateChartData();
    })

    this.characterDataSubscription = this.characterData.nodeClicked$.subscribe(data => {
      this.description = data.desc;

      if (!this.description) {
        switch (data.type) {
          case 'Vitality': {
            this.description = "Increases your HP by 10.";
            break;
          }
          case 'Willpower': {
            this.description = "Increases your SP by 20.";
            break;
          }
          case 'Might': {
            this.description = "All sources of damage you deal are increased by one.";
            break;
          }
          case 'Speed': {
            this.description = "Increases the number of squares you can move without spending AP by one. Increases your initiative modifiier by one.";
            break;
          }
          default: {
            break;
          }
        }
      }
    })

    this.loadFromString(localStorage.getItem('toon')+'')
  }

  undoSelection() {
    this.toon.nodeList.pop();
    this.characterData.setCharacterData(this.toon);
    if (this.saveString === '/') {
      this.saveString = '';
    }
  }

  resetCharacter() {
    let tempName = this.toon.name;
    this.toon = new Character;
    this.characterData.setCharacterData(this.toon);
    if (tempName) {
      this.saveString = tempName + '/';
    } else {
      this.saveString = '';
    }
    this.toon.name = tempName;
  }

  generateLoadString() {
    if (!this.toon.name) {
      this.saveString = '/';
    }
    let result = this.toon.name + '/';
    this.toon.nodeList.forEach(node => {
      result += node.id + '/';
    });
    this.saveString = result;
    localStorage.setItem('toon', this.saveString+'');
  }

  loadFromString(data: String) {
    if (!data) {
      return;
    }

    let hasName = true;
    if (data[0] == '/') {
      data = data.slice(1);
      hasName = false;
    }

    let dataArr = data.split('/')
    dataArr.pop();
    this.resetCharacter();
    if (!dataArr.length) {
      return;
    }

    if (hasName) {
      this.toon.name = dataArr[0];
    }

    for (let i = +hasName; i < dataArr.length; i++) {
      this.toon.nodeList.push({id: +dataArr[i], type: '', description: '', name: ''})
    }
    this.characterData.setCharacterData(this.toon);
  }

  updateChartData() {
    this.chartData = [{
      data: [this.vitality, this.willpower, this.might, this.speed,
             this.actions, this.skills, this.spells, this.talents],
      backgroundColor: ['#ec273f', '#3388de', '#26854c', 'rgb(221, 188, 4)',
                        '#fdabbd', '#b0a7b8', '#9a4d76', '#e98537'],
      borderColor: 'black',
    }];
  }
}
