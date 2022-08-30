//1. Írj egy függvény kifejezést `removeDuplicatesFromArray` néven, ami a paraméterként megadott tömbből eltávolítja a duplikált elemeket! A tömb csak primítív értékeket tartalmaz! 
//A függvény visszatérési értéke a duplikált elemektől mentes új tömb!

'use strict'

const removeDuplicatesFromArray = (array) => {
        return Array.from(new Set(array));
}

export default removeDuplicatesFromArray;
