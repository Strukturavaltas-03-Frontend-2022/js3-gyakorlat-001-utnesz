//4. Írj egy függvényt `customDateFormats` néven, ami paraméterként egy Date objektumot kap, a visszatérési értéke pedig 
//egy objektum két tulajdonsággal, ami a következő formátumban tartalmazza a paraméterként kapott dátumot:
//- `short`: 2020. jan. 11. 14:20 (tehát évszám, a hónap neve röviden magyarul, kisbetűkkel a nap száma, 
//majd az idő a másodperc nélkül)
//- `long`: 2020. január 11. 14:20:10 (tehát évszám, a hónap neve magyarul, a nap száma, majd az idő)

const customDateFormats=(date)=> {
    const dateShort = new Intl.DateTimeFormat("hu-HU", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour:"2-digit",
    minute:"2-digit",
}).format(date);

    const dateLong = new Intl.DateTimeFormat("hu-HU", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second:"2-digit",
    }).format(date);


    return {
        short: dateShort,
        long: dateLong,
    };
};


export default customDateFormats;
