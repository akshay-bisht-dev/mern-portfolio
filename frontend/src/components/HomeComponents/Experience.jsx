import { useState } from 'react'

const Experience = () => {

    const [activeTab, setActiveTab] = useState('Courses');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className='home_div'>
            <div className='container'>
                <div className='row justify-content-center align-items-center d-flex flex-column'>
                    <div className='col-12 text-center'>
                        <div className='row education_tab'>
                            <div
                                className={`col-4 tab ${activeTab === 'Courses' ? 'active_tab' : ''}`}
                                onClick={() => handleTabClick('Courses')}
                            >
                                Courses
                            </div>
                            <div
                                className={`col-4 tab ${activeTab === 'Internship' ? 'active_tab' : ''}`}
                                onClick={() => handleTabClick('Internship')}
                            >
                                Internship
                            </div>
                            <div
                                className={`col-4 tab ${activeTab === 'Experience' ? 'active_tab' : ''}`}
                                onClick={() => handleTabClick('Experience')}
                            >
                                Experience
                            </div>
                        </div>
                    </div>

                    <div className='row justify-content-center align-items-center d-flex flex-column'>
                        <div className='col-12 tab_details'>
                            {activeTab === 'Courses' && (
                                <>
                                    <h2>Full Stack Web Development Course</h2>
                                    {/* Content specific to the Courses tab */}

                                    <div className='row justify-content-between d-flex'>
                                        <div className='col-12 col-md-10'>
                                            <h5>Internshala Online Training</h5>
                                        </div>
                                        <div className='col-12 col-md-2 d-flex justify-content-end align-items-center'>
                                            <span>2021-2021</span>
                                        </div>
                                    </div>
                                    <p className='para_height'>
                                        Internshala is an online training platform where lots of courses are uploaded by the top mentors. I had done the Full Stack Web Development Course from Internshala. It was an 8-week Weeks training course. In this course, I learned HTML, CSS, JS, jQuery, Ajax, React, and so on.
                                    </p>
                                </>
                            )}
                            {activeTab === 'Internship' && (
                                <>
                                    <h2>UI Development</h2>
                                    {/* Content specific to the Internship tab */}
                                    <div className='row justify-content-between d-flex'>
                                        <div className='col-12 col-md-10'>
                                            <h5>MY Next Film Pvt Ltd (Internship & Full Time)</h5>
                                        </div>
                                        <div className='col-12 col-md-2 d-flex justify-content-end align-items-center'>
                                            <span>2022-2023</span>
                                        </div>
                                    </div>
                                    <p className='para_height'>
                                        Developed and implemented UI design into web pages as business requirements. In this company, I worked on a live AWS remote server for updating the design of a real-time website and also worked on technical skills such as HTML, CSS, Javascript, jQuery, and Jira. I solved a lot of errors on the real-time website.
                                    </p>
                                </>
                            )}
                            {activeTab === 'Experience' && (
                                <>
                                    <h2>Frontned Development</h2>
                                    {/* Content specific to the Experience tab */}
                                    <div className='row justify-content-between d-flex'>
                                        <div className='col-12 col-md-10'>
                                            <h5>Future Point Astrology Solutions (Full Time)</h5>
                                        </div>
                                        <div className='col-12 col-md-2 d-flex justify-content-end align-items-center'>
                                            <span>2023-Present</span>
                                        </div>
                                    </div>
                                    <p className='para_height'>
                                        It’s a product-based company. So there are daily meetings and assignments for the work from day to day as per requirements. In this company, my job is to check all the pages and improve the performance of their website. I make lots of pages and rebuild pages from an old design to another. I worked on CMS and solved lots of JavaScript errors, reduced the code on the website, removed a lot of unused code, and tried to build new logic to achieve functionality.
                                    </p>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience