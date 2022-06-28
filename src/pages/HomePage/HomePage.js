import React from 'react';
import './HomePage.scss';
import { NavLink } from 'react-router-dom';


function HomePage() {
    return (
        <main>
            <div>
                <h1>WELCOME TO VR ANIMAL RESCUE</h1>
            </div>
            <div>
                <p>VR Animal Rescue is an all-ages educational and awareness tool that uses virtual reality to challenge the disconnect between humans and endangered wildlife and go beyond a 2D image. Learn about the most endangered animals on the planet and explore ways you can help.</p>
                <p>The activities and advancement of man, among other factors, have significantly affected thousands of animal species, leading them to endangerment and even extinction. There is almost an “out of sight, out of mind” effect when it comes to endangered wildlife. As we do not see or interact with them, it’s easy to forget about this pressing issue. Majority of the time we see these animals are in the form of 2D images or video footage, which can only convey so much and keeps us detached from their existence. As we enter the era of the metaverse, not only is the ability to experience other Earthly species in virtual reality relevant; it can be a way to further compassion and understanding that these animals are very real just like us, and they need our help. Finding causes and petitions to support endangered wildlife can be overwhelming, time consuming and research-intensive. This platform is a hub for key information, causes, petitions, etc.</p>
            </div>
            <NavLink to="/explore">
                <button>EXPLORE</button>
            </NavLink>
        </main>
    )
}

export default HomePage