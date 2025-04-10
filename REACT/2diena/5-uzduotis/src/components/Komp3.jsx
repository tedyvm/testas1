// TODO: prijunkite šį komponentą prie App.jsx

const Komp3 = () => {
    let preke = {
        pavadinimas: 'Šokoladas',
        kaina: 2.5,
        kiekis: 10,
    };
    
    return (
        // TODO: į šio komponento div įstatykite
        // prekės pavadinimą, kainą ir kiekį
        <div>
            <h4>{preke.pavadinimas}</h4>
            <p>Kaina: {preke.kaina} €</p>
            <p>Kiekis: {preke.kiekis} vnt.</p>
        </div>
    )
}

export default Komp3
