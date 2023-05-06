import { EnergyType } from "../Energy";
import Archetypes from "./Archetypes";

class Mage extends Archetypes {
  private static _instanceNumber = 0;
  private _type: EnergyType;

  constructor(name: string) {
    super(name);
    
    Mage._instanceNumber += 1;
    this._type = 'mana';
  }

  override get energyType(): EnergyType {
    return this._type
  }

  static override createdArchetypeInstances(): number {
    return this._instanceNumber;
  }
}

export default Mage;