import honapok from './data/honapok.json';

function Honap({honap}) {
    return (
        <div className="kartya" id={honap.name === 'szeptember' ? 'osz' : honap.name === 'december' ? 'tel' : honap.name === 'március' ? 'tavasz' :  honap.name === 'június' ? 'nyar' : ''}>
            <img src={honap.photoUrl} alt=""/>
            <h2>{honap.name}</h2>
            <p>{honap.leiras}</p>
            <a href="">Bővebben</a>
        </div>);
}

function Honapok() {
    return (honapok.map((honap, index) => (<Honap key={index} honap={honap}/>)))
}

export default Honapok;