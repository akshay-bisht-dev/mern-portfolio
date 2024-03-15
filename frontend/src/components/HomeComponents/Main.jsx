import { FaGithubSquare, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const Main = () => {
    return (
        <div className='main_div'>
            <h1>AKSHAY BISHT</h1>
            <h4>Frontend Developer</h4>
            {/* <h6>Experience - 2 Years</h6> */}
            <div className='social'>
                <Link to=''><FaLinkedin /></Link>
                <Link to=''><FaInstagram /></Link>
                <Link to=''><FaYoutube /></Link>
                <Link to=''><FaGithubSquare /></Link>
            </div>
            <button className='resume_btn'>Download Resume</button>
        </div>
    )
}

export default Main