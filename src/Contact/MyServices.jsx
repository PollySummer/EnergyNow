import React from 'react';
import Card from 'react-bootstrap/Card';

function MyServices() {
    const cardData = [
        {
            title: 'Bootstrap',
            text: 'I creating sites using Bootrstap 5 framework. It speeds up the process of creating responsive website designs and web applications.',
            imgSrc: 'bootstrap.png',
        },
        {
            title: 'SASS',
            text: 'The preprocessor Sass simplifies and speeds up writing CSS code. the code becomes clearer and simpler, its functionality expands',
            imgSrc: 'sass.webp',
        },
        {
            title: 'React',
            text: 'React is the most popular front-end library for creating application UI. It helps with the fast and convenient implementation of individual components and entire pages',
            imgSrc: 'react.png',
        },
    ];

    return (
        <div className='myServices'>
            <h2 className='text-center mt-5 mb-3'>My services</h2>
            <div className='cards d-flex flex-row justify-content-center'>
                {cardData.map((card, index) => (
                    <Card key={index} className='me-5' style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={card.imgSrc} />
                        <Card.Body>
                            <Card.Title>{card.title}</Card.Title>
                            <Card.Text>{card.text}</Card.Text>
                            <a className='nav-link' href='/'>Learn more</a>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default MyServices;
