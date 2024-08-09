import Building from './5-building';
/* eslint-disable no-underscore-dangle */

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  get sqft() {
    return this._sqft;
  }

  get floors() {
    return this._floors;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }

  set sqft(newSqft) {
    this._sqft = newSqft;
  }

  set floors(newFloors) {
    this._floors = newFloors;
  }
}
