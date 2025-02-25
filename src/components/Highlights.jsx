import '../styles/Home.css'
import React from 'react'

const events = [
    { date: 'Feb 7', desc: 'Employee Hack-a-ston' },
    { date: 'March 7', desc: 'Food Bank Volunteering' },
    { date: 'Apr 4', desc: 'Company Retreat' }
]

const Highlights =() => {

    return (
        <section>
            <h2>Highlights</h2>
            <h3>Remember to live out our values</h3>
            <ol>
                <li>Relentless Learning and Growth</li>
                <li>Creative Problem Solving</li>
                <li>Curiosity-Driven Exploration</li>
            </ol>

            <h3>Upcoming Events</h3>
            <ul>
                {events.map((event, index) => (
                    <li key={index}>
                        <strong>{event.date}</strong>: {event.desc}
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Highlights;


