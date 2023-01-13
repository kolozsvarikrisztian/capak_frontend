

function Capak() {
    return (
        <div id="">
            {capak.map((capa, ix) => (
                <Capa key={ix} capa={capa} />
            ))}
        </div>
    )
};

function Capa({capa}) {
    return (
        <div className="">
            <h2>{capa.name}</h2>
            <img src={capa.photoUrl} alt={capa.name} />
            <h3>{capa.category}</h3>
            <p>{capa.description}</p>
        </div>
    )
}

export default Capak

const capak = [
    {
        "name": "Feketeúszójú szirticápa",
        "photoUrl": "./img/szirticapa.jpg",
        "category": "Kékcápa",
        "description": "Kis méretű cápafaj, melynek pofája lekerekített. Mindegyik úszójának a végén fekete vagy sötétbarna folt látható."
    },
    {
        "name": "Atlanti ördögrája",
        "photoUrl": "./img/ordograja.jpg",
        "category": "Porcos hal",
        "description": "Az atlanti ördögrája hossza 3–5 méter, úszófesztávolsága 4,5–7 méter, de akár 9,1 méter is lehet. A rája fejének két oldalán két óriási úszó van, amelyek úgy néznek ki, mint két hatalmas, puha szárny. Arra használja őket, hogy táplálékát közvetlenül széles pofájába terelje."
    },
    {
        "name": "Sasrája",
        "photoUrl": "./img/sasraja.jpg",
        "category": "Porcos hal",
        "description": "Teste lapított, a hosszánál csaknem kétszer szélesebb. Az alakját meghatározó mellúszók nagyok, szélesek, hegyesek, szárny formájúak, a hátsó szélük öblösen bemetszett. A patkó alakú fej szélesebb, mint amilyen hosszú, és a testtől kifejezetten elkülönül."
    },
    {
        "name": "Tigriscápa",
        "photoUrl": "./img/tigriscapa.jpg",
        "category": "Kékcápa",
        "description": "A ma élő nagytestű cápák közt, az átlagos méretet véve, a tigriscápa az egyik legnagyobb; nála csak a cetcápa (Rhincodon typus), az óriáscápa (Cetorhinus maximus) és a fehér cápa (Carcharodon carcharias) nagyobb. A fiatal cápa testén számos függőleges csík és folt található, innen jön a neve is."
    },
    {
        "name": "Fehércápa",
        "photoUrl": "./img/fehercapa.jpg",
        "category": "Heringcápa",
        "description": "Ennek a porcos halnak nagy, tompa, kúp alakú orra van, és a szemei feltűnően feketék. Egyértelműen felismerhető arányos testéről, magas elülső hátúszójáról és nagy, holdsarló alakú farokúszójáról.  Háti része sötétebb színű, általában barnás vagy kékes árnyalatú, míg alsó, hasi része fehér, innen kapta nevét."
    }
]