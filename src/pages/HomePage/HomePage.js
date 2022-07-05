import React from 'react';
import './HomePage.scss';
import { NavLink } from 'react-router-dom';


function HomePage() {
    return (
        <main className="home">
            <div className="home__container">
                <div className="home__heading">
                    <h4 className="home__welcome">WELCOME TO</h4>
                    <h1 className="home__title">ANIMAL GUARDIAN</h1>
                </div>
                <div className="home__about">
                <div class="line right">
                                <div class="scanner"></div>
                            </div>
                    <p className="home__description">Animal Guardian is an educational awareness tool that utilizes 3D animal renders to challenge the disconnect between humans and endangered wildlife and go beyond a 2D image. Learn about Earth's endangered species and explore ways you can help.</p>
                    <p className="home__description">Finding causes and petitions to support endangered wildlife can be overwhelming, time consuming and research-intensive. Animal Guardian serves as a hub for key information, reputable places to donate and relevant petitions.</p>
                    <p className="home__description">The activities and advancement of man, among other factors, have significantly affected thousands of animal species, leading them to endangerment and even extinction. There is almost an “out of sight, out of mind” effect when it comes to endangered wildlife. As we do not see or interact with them, it is easy to forget about this pressing issue. Majority of the time we see these animals are in the form of 2D images or video footage, which can only convey so much and keeps us detached from their existence. As we enter the era of the metaverse, not only is the ability to experience other Earthly species in a 3D capacity relevant; it can be a way to further compassion and understanding that these animals are very real just like us, and they need our help.</p>
                </div>
                <NavLink to="/explore" className="home__explore-link">
                    <button className="home__explore">EXPLORE</button>
                </NavLink>
            </div>
        </main>
    )
}

export default HomePage