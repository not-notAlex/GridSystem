import { Component } from '@angular/core';
import { NODE_DATA } from '../data/buttons.data';
import { Character } from '../structures/character';
import { CharacterDataService } from '../character-data.service';
import { Subscription } from 'rxjs';

const IMAGE_WIDTH = 2230;
const IMAGE_HEIGHT = 1115;

@Component({
  selector: 'app-node-map',
  templateUrl: './node-map.component.html',
  styleUrls: ['./node-map.component.scss']
})
export class NodeMapComponent {
  buttons = NODE_DATA;

  toon: Character = new Character;

  backgroundLeft = 0; // Starting left offset for the background
  backgroundTop = 0;  // Starting top offset for the background

  dragging = false;
  prevX = 0;
  prevY = 0;

  private characterDataSubscription: Subscription = new Subscription;

  constructor(private characterData: CharacterDataService) {}

  ngOnInit() {
    this.toon = this.characterData.getCharacterData();

    this.characterDataSubscription = this.characterData.character$.subscribe(data => {
      this.toon = data;
      this.updateNodes();
    })
  }

  onMouseDown(event: MouseEvent) {
    this.dragging = true;
    this.prevX = event.clientX;
    this.prevY = event.clientY;
    event.preventDefault();  // To prevent selecting text/images while dragging
  }

  onMouseUp() {
    this.dragging = false;
  }

  onMouseMove(event: MouseEvent) {
    if (!this.dragging) return;

    const newX = event.clientX;
    const newY = event.clientY;

    const deltaX = newX - this.prevX;
    const deltaY = newY - this.prevY;

    const startingBackgroundLeft = this.backgroundLeft;
    const startingBackgroundTop = this.backgroundTop;

    // Calculate the potential new positions
    const potentialBackgroundLeft = this.backgroundLeft + deltaX;
    const potentialBackgroundTop = this.backgroundTop + deltaY;

    // Calculate the allowed boundaries
    const maxLeft = 0;
    const maxTop = 0;
    const minLeft = (IMAGE_WIDTH - window.innerWidth + (window.innerWidth * 0.25)) * -1;
    const minTop = (IMAGE_HEIGHT - window.innerHeight + 70) * -1; // 70 is for the navbar height

    // Adjust the potential positions based on the boundaries
    this.backgroundLeft = Math.min(maxLeft, Math.max(minLeft, potentialBackgroundLeft));
    this.backgroundTop = Math.min(maxTop, Math.max(minTop, potentialBackgroundTop));

    // Directly update the position for all buttons by the same delta
    for (let button of this.buttons) {
      button.left += this.backgroundLeft - startingBackgroundLeft;
      button.top += this.backgroundTop - startingBackgroundTop;
    }

    this.prevX = newX;
    this.prevY = newY;
  }

  getButtonLeftById(id: number) {
    return this.buttons.find(button => button.id === id)?.left || 0;
  }

  getButtonTopById(id: number) {
    return this.buttons.find(button => button.id === id)?.top || 0;
  }

  selectNode(button: any) {
    this.characterData.nodeClicked(button.class, button.description);

    if (this.toon.nodeList.map(ids => ids.id).includes(button.id)) {
      return;
    }
    if (this.toon.nodeList.length < 2) {
      this.toon.nodeList.push({type: button.class,
                               description: button.description,
                               id: button.id, name: button.label});
      this.updateCharacter();
      return;
    }
    this.toon.nodeList.forEach(node => {
      if (button.connections.includes(node.id)) {
        this.toon.nodeList.push({type: button.class,
                                 description: button.description,
                                 id: button.id, name: button.label});
        this.updateCharacter();
      }
    })
  }

  updateCharacter() {
    this.characterData.setCharacterData(this.toon);
  }

  undoSelection() {
    this.toon.nodeList.pop();
    this.updateCharacter();
  }

  resetCharacter() {
    this.toon = new Character;
    this.updateCharacter();
  }

  selectedButton(id: number) {
    if (this.toon.nodeList.map(ids => ids.id).includes(id)) {
      return 'selected';
    }
    return '';
  }

  updateNodes() {
    this.toon.nodeList.forEach(node => {
      if (node.id != 0) {
        node.description = this.buttons[node.id - 1].description;
        node.name = this.buttons[node.id - 1].label;
        node.type = this.buttons[node.id - 1].class;
      }
    })
  }
}
