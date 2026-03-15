import hero from './globe.png';

export default function Header() {
    return (
        <header className='header'>
            <img src={hero} alt="Globe Img"/>
            <span>My travel journal</span>
        </header>
    )
}