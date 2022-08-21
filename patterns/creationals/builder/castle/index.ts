import { CastleDirector } from './CastleDirector';
import { StoneCastleBuilder } from './StoneCastleBuilder';
import { WoodenCastleBuilder } from './WoodenCastleBuilder';

const castleDirector = new CastleDirector();
const woodenCastleBuilder = new WoodenCastleBuilder();

castleDirector.setBuilder(woodenCastleBuilder);
castleDirector.buildMinimalFeaturedCastle();
console.log(woodenCastleBuilder.getCastle().getComponents());

const stoneCastleBuilder = new StoneCastleBuilder();

castleDirector.setBuilder(stoneCastleBuilder);
castleDirector.buildFullFeaturedCastle();
console.log(stoneCastleBuilder.getCastle().getComponents());
