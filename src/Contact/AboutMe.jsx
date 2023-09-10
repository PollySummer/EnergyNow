import Image from 'react-bootstrap/Image';

function AboutMe() {
    return (
        <div className='aboutMe w-75 m-auto mt-5'>
            <Image className='aboutMePhoto' src="/mainPhoto.JPG" />
            <h2>About Me</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis quod molestias itaque, quos maiores iusto aspernatur magni provident blanditiis? Laudantium cum possimus consequuntur sunt culpa quisquam eum quis incidunt explicabo, vel, fuga soluta vero dicta quae minima fugiat cumque similique nesciunt pariatur alias et qui molestias. Sit eum, illum itaque qui assumenda delectus ullam porro enim, distinctio, eligendi officiis velit ad impedit. Maxime nihil sapiente rerum eveniet, quam adipisci dolore laudantium cupiditate. Possimus repellat, praesentium, voluptatum cumque est et beatae vero nulla consectetur quam adipisci maiores nemo eum reiciendis delectus modi sint asperiores quae quibusdam perferendis optio ducimus aliquid. Voluptas.</p>
            <div className="buttons d-flex justify-content-center m-3">
                <button className='aboutBtn'>Skills</button>
                <button className='aboutBtn'>Experience</button>
                <button className='aboutBtn'>Education</button>
            </div>

        </div>
    );
}

export default AboutMe;