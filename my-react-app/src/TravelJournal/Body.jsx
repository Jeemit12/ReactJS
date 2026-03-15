import mout from './Mount-Fuji.png';
import marker from './marker.png';
export default function Body(props){
    return (
        <div className='travel-body'>
            <div className='main-img-container'>
                <img className='main-img' src={mout} alt="Mount Phuji" />
            </div>
            <div className='travel-content'>
                <div className='location'>
                    <img className='marker-img' src={marker} alt="Location marker" />
                    <span className='country'>Japan</span>
                    <a className='map-link' href="https://maps.app.goo.gl/octtjvf6LZ5HHHxv8">View on Google Maps</a>
                </div>
                <h1 className='place-title'>Mount Fuji</h1>
                <div className='travel-date'>
                    <p>12 Jan, 2021 - 24 Jan, 2021</p>
                </div>
                <div className='desc'>
                    <p>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
                </div>
            </div>
        </div>
    )
}