/**
Animals are multicellular, eukaryotic organisms of the kingdom Animalia (also called Metazoa). Their body plan eventually becomes fixed as they develop, although some undergo a process of metamorphosis later on in their lives. Most animals are motile, meaning they can move spontaneously and independently. All animals must ingest other organisms or their products for sustenance (see Heterotroph).

| yeah | desc |
| ---- | ---- |
| some | markdown |
| in the | module |
| description | |

@module animal
@example var animal = require("animal");
*/

module.exports = Animal;

/**
@class
@param {array} - an array of two parent {@link Animal} objects
@param {Species} - the species
*/
function Animal(species, parents){
    
    /**
    the current age
    @type {number}
    @default 0
    */
    this.age = 0;

    /**
    @type {Species}
    */
    this.species = species;
}

/**
Animal moods
@enum 
*/
Animal.eMood = {
    /** chilling */
    satisfied: 0,
    /** pissed off */
    angry: 1,
    /** need to eat */
    hungry: 2
};
