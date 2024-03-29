import React, { useEffect, useState } from 'react'
// import defaultProjectImg from '../../assets/default-project-img.webp'
import { Link } from 'react-router-dom'
import axios from 'axios'

const API = "https://mern-portfolio-backend-zeta.vercel.app/api/projects";

const Projects = () => {

    const [apiData, setApiData] = useState([]);

    axios.defaults.withCredentials = true;
    useEffect(() => {
        axios.get(API).then((res) => {
            setApiData(res.data.read);
            console.log(res);
        })
    }, [])

    return (
        <div className='project_div'>
            <div className='container'>

                <div className='row my-3 d-flex justify-content-between align-items-center'>
                    <div className='col-9 col-md-10'>
                        <h2>Live Projects</h2>
                    </div>
                    <div className='col-3 col-md-2 d-flex justify-content-end'>
                        <Link to='/projects' className='view_all'>View All</Link>
                    </div>
                </div>

                <div className='row mb-3'>
                    {
                        apiData && apiData.slice(0, 3).map((value, index) => {
                            return (
                                <div className='col-12 col-md-4 mb-3' key={index}>
                                    <div className="card">
                                        <img src={value.file} className="card-img-top" alt="project-img" />
                                        <div className="card-body card_details">
                                            <h5 className="card-title">{value.title}</h5>
                                            <p className="card-text">{value.tech}</p>
                                            <a href={value.url} target='_blank' className="btn btn-danger">Visit Page</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                        // apiData.map(val => (
                        //     <div className='col-12 col-md-4'>
                        //         <div className="card">
                        //             <img src={val.file} className="card-img-top" alt="project-img" />
                        //             <div className="card-body">
                        //                 <h5 className="card-title">{val.title}</h5>
                        //                 <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        //                 <a href="#" className="btn btn-primary">Go somewhere</a>
                        //             </div>
                        //         </div>
                        //     </div>
                        // ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Projects
