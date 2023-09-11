import Image from 'react-bootstrap/Image';

function AboutMe() {
    return (
        <div className='aboutMe w-75 m-auto mt-5'>
            <Image className='aboutMePhoto rounded' src="/mainPhoto2.JPG" />
            <h2 className=' mt-5 mb-3'>About Me</h2>
            <p className='lead'>I learn HTML5, CSS3 Node.js and React with GammaIntelligence courses. I already learnt such frameworks as Bootstrap and SCSS. I chose this field because I like combining of programming and design in one speciality.
                And also I’m 4th year student of Ukrainian Admiral Makarov National University of Shipbuilding, learning software development.
                For this time I learnt basis of C, C++ and Java languages. I also had experience of working with IntelliJ IDEA, MySQL and JavaFX. I created one project using Java and MySQL. I have worked with Windows, MacOS and a little with Linux Mint operating systems.
                P.S. I also good in understanding programming memes :)
            </p>
            <div className="buttons d-flex justify-content-center m-3">
                <button className='aboutBtn'>Skills</button>
                <button className='aboutBtn'>Experience</button>
                <button className='aboutBtn'>Education</button>
            </div>

        </div>
    );
}

export default AboutMe;