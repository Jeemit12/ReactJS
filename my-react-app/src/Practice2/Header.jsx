import hero from '../assets/react.svg'
export default function Header(){
    return (
        <div className='header'>
            <img className='img' src={hero} alt="reactimg" />
            <span className='text'> ReactFacts</span>
        </div>
    )
}