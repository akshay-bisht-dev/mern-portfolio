import Marquee from "react-fast-marquee";
import html5 from "../../assets/skills/html5.png"
import css3 from "../../assets/skills/css3.png"
import bootstrap from "../../assets/skills/bootstrap.png"
import javascript from "../../assets/skills/javascript.png"
import jQuery from "../../assets/skills/jquery.png"
import tailwind from "../../assets/skills/tailwind-css.png"
import sass from "../../assets/skills/sass.png"
import react from "../../assets/skills/react.png"
import redux from "../../assets/skills/redux.png"
import git from "../../assets/skills/git.png"

const Skills = () => {
    return (
        <div className='skill_div'>
            <div className="container">
                <Marquee pauseOnHover="true" speed={50} autoFill="true">
                    <div className="slide_imgs">
                        <img src={html5} alt="skills" />
                    </div>
                    <div className="slide_imgs">
                        <img src={css3} alt="skills" />
                    </div>
                    <div className="slide_imgs">
                        <img src={bootstrap} alt="skills" />
                    </div>
                    <div className="slide_imgs">
                        <img src={tailwind} alt="skills" />
                    </div>
                    <div className="slide_imgs">
                        <img src={sass} alt="skills" />
                    </div>
                    <div className="slide_imgs">
                        <img src={jQuery} alt="skills" />
                    </div>
                    <div className="slide_imgs">
                        <img src={javascript} alt="skills" />
                    </div>
                    <div className="slide_imgs">
                        <img src={react} alt="skills" />
                    </div>
                    <div className="slide_imgs">
                        <img src={redux} alt="skills" />
                    </div>
                    <div className="slide_imgs">
                        <img src={git} alt="skills" />
                    </div>
                </Marquee >
            </div>
        </div >
    )
}

export default Skills