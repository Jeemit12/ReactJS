import hero from '../assets/react.svg';

export default function Header(){
  return (
    <div className='header'>
    <img className='img' src={hero} alt="react logo" />
    <nav className='Nav'>
      <ul>
        <li>About</li>
        <li>Pricing</li>
        <li>Contact</li>
      </ul>
      

    </nav>
    </div>
    )
}