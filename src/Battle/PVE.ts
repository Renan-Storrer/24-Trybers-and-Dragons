import Battle from './Battle';
import Fighter, { SimpleFighter } from '../Fighter';

class PVE extends Battle {
  constructor(public character: Fighter, public environment: SimpleFighter[]) {
    super(character);
  }

  override fight(): number {
    while (
      this.environment.some(({ lifePoints }) => lifePoints > 0)
    ) {
      this.environment.forEach((e) => {
        this.character.attack(e);
        e.attack(this.character);
        if (this.character.lifePoints > 0) return -1;
      });
    }
    return super.fight();
  }
}

export default PVE;