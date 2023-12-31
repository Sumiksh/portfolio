import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
export default function AboutMe() {
    return (
        <Row>
            <Col xs={12} sm={12} md={6} lg={5} xl={5} xxl={5}>
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8" style={{ padding: '20px', boxShadow: '10px 5px 5px 5px rgba(230,230,250)', borderRadius: '25px' }}>
                    <h3 style={{ textAlign: "center" }}>
                        Email: <a href="mailto:tsumiksh@gmail.com">tsumiksh@gmail.com</a><br />
                        Linkedin: <a href="www.linkedin.com/in/sumiksh-trehan">www.linkedin.com/in/sumiksh-trehan</a><br />
                    </h3>
                </div>

                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8" style={{ padding: '20px', boxShadow: '10px 5px 5px 5px rgba(230,230,250)', borderRadius: '25px' }}>
                    <h3 style={{ textAlign: "center" }}>Home Projects</h3>
                    <ul>
                        <li>Arduino: Project for wireless commnunication</li>
                        <li>Web Developement: Building front end of websites</li>
                        <li>Robot Programming: Using C to program small size robots in physical worlds using arduino kits, sonar sensors and motors </li>
                        <li>Arduino Programming to wirelessly transmit temperature and humidity data from DHT sensor to
blynk phone app using blynk and DHT library</li>
                    </ul>
                </div>
            </Col>


            {/* <div style={{background: `url('/prophoto.jpg')`}}> */}
            <Col>
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8" style={{ padding: '10px', boxShadow: '10px 5px 5px rgba(230,230,250)', borderRadius: '25px' }}>
                    <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
                        <div>
                            <h4 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                                Highly Motivated Programmer Analyst / IT Specialist
                            </h4>
                            <p className="mt-3 max-w-3xl text-lg text-gray-500">
                                Dedicated and results-driven Programmer Analyst/IT Specialist with a passion for driving success in dynamic, client-focused environments. Proven expertise in software application development, hardware configuration, and top-tier client support. Adept at problem-solving, collaborating in teams, and meeting tight deadlines.
                            </p>
                        </div>
                        <div className="mt-10 lg:mt-0">
                            <dl className="space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10">
                                <div className="flex">
                                    <dt className="text-lg font-medium text-gray-900">
                                        Programming Languages
                                    </dt>
                                    <dd className="ml-2 text-lg text-gray-500">
                                        Next JS, React , Node.js Java, Python, Node.js, Javascript, and C.
                                    </dd>
                                </div>
                                <div className="flex">
                                    <dt className="text-lg font-medium text-gray-900">
                                        Backend Languages
                                    </dt>
                                    <dd className="ml-2 text-lg text-gray-500">
                                        Microsoft SQL, MySQL, and MongoDB.
                                    </dd>
                                </div>
                                <div className="flex">
                                    <dt className="text-lg font-medium text-gray-900">
                                        Excel
                                    </dt>
                                    <dd className="ml-2 text-lg text-gray-500">
                                        Skilled in Excel, including Excel-related programming and Visual Basic for report automation.
                                    </dd>
                                </div>
                                <div className="flex">
                                    <dt className="text-lg font-medium text-gray-900">
                                        PowerBI
                                    </dt>
                                    <dd className="ml-2 text-lg text-gray-500">
                                        Basic familiarity with PowerBI for data visualization.
                                    </dd>
                                </div>
                                <div className="flex">
                                    <dt className="text-lg font-medium text-gray-900">
                                        Flowchart Creation
                                    </dt>
                                    <dd className="ml-2 text-lg text-gray-500">
                                        Proficient in flowchart creation using Visio and drawIO.
                                    </dd>
                                </div>
                                <div className="flex">
                                    <dt className="text-lg font-medium text-gray-900">
                                        Other Tools
                                    </dt>
                                    <dd className="ml-2 text-lg text-gray-500">
                                        Familiarity with PowerPoint, Access, SharePoint, and Adobe.
                                    </dd>
                                </div>
                                <div className="flex">
                                    <dt className="text-lg font-medium text-gray-900">
                                        Network Devices
                                    </dt>
                                    <dd className="ml-2 text-lg text-gray-500">
                                        Experience in network device configuration and CISCO phone setup.
                                    </dd>
                                </div>
                                <div className="flex">
                                    <dt className="text-lg font-medium text-gray-900">
                                        Microsoft SQL Server and Linux
                                    </dt>
                                    <dd className="ml-2 text-lg text-gray-500">
                                        Knowledge of Microsoft SQL Server and Linux.
                                    </dd>
                                </div>
                                <div className="flex">
                                    <dt className="text-lg font-medium text-gray-900">
                                        Platforms
                                    </dt>
                                    <dd className="ml-2 text-lg text-gray-500">
                                        Proficient in platforms such as ServiceNow, PagerDuty, Splunk, and AppDynamics.
                                    </dd>
                                </div>
                                <div className="flex">
                                    <dt className="text-lg font-medium text-gray-900">
                                        Microsoft Windows
                                    </dt>
                                    <dd className="ml-2 text-lg text-gray-500">
                                        Support experience in Microsoft Windows systems, Office Suite, and Office 365. Understanding of Active Directory, Group Policies, and Windows Software Update Server.
                                    </dd>
                                </div>
                                <div className="flex">
                                    <dt className="text-lg font-medium text-gray-900">
                                        Ticketing Tools
                                    </dt>
                                    <dd className="ml-2 text-lg text-gray-500">
                                        Expertise in ticketing tools and remote troubleshooting.
                                    </dd>
                                </div>
                                <div className="flex">
                                    <dt className="text-lg font-medium text-gray-900">
                                        Virtualized Environments
                                    </dt>
                                    <dd className="ml-2 text-lg text-gray-500">
                                        Skilled in virtualized environments, including VMware and OVM.
                                    </dd>
                                </div>
                                {/* <div className="flex">
                                    <dt className="text-lg font-medium text-gray-900">
                                        Communication Skills
                                    </dt>
                                    <dd className="ml-2 text-lg text-gray-500">
                                        Strong track record in handling Major Incidents with exceptional communication skills.
                                    </dd>
                                </div> */}
                            </dl>
                        </div>
                    </div>
                </div>
            </Col>


            {/* </div> */}
        </Row>
    );
}

//rgba(78, 78, 78, 0.08);