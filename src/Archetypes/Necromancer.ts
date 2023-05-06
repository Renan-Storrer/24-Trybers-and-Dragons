import { EnergyType } from "../Energy";
import Archetypes from "./Archetypes";

class Necromancer extends Archetypes {
  private static _instancesNumber = 0;
  private _type: EnergyType;

  constructor(name: string) {
    super(name);

    Necromancer._instancesNumber += 1;
    this._type = 'mana';
  }

  override get energyType(): EnergyType {
    return this._type;
  }

  static override createdArchetypeInstances(): number {
    return this._instancesNumber;
  }
}

export default Necromancer;