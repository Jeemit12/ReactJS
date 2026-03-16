import mout from './Mount-Fuji.png';
import marker from './marker.png';
export default function Body(props){
    return (
        <div className='travel-body'>
            <div className='main-img-container'>
                <img className='main-img' src={props.travel.img.src} alt={props.travel.img.alt} />
            </div>
            <div className='travel-content'>
                <div className='location'>
                    <img className='marker-img' src={marker} alt="Location marker" />
                    <span className='country'>{props.travel.country}</span>
                    <a className='map-link' href={props.travel.googlemaplink}>View on Google Maps</a>
                </div>
                <h1 className='place-title'>{props.travel.title}</h1>
                <div className='travel-date'>
                    <p>{props.travel.dates}</p>
                </div>
                <div className='desc'>
                    <p>{props.travel.text}</p>
                </div>
            </div>
        </div>
    )
}