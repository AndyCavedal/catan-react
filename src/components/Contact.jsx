import React from 'react';
import '@styles/Contact.scss';
import gaspar from '@icons/gaspar.jpg';
import github from '@icons/github.png';
import discord from '@icons/discord-logo.png';

const Contact = () => {
    return (
        <div className="information-block">
            <h1 id="name">Andy Cavedal</h1>
            <img src={gaspar} alt="gaspar" id="gaspar" />
            <div className="main-footer">
                <a href="https://github.com/AndyCavedal/catan-react">
                    <img src={github} className="footer-icon" alt="github-mark" />
                </a>
                <a href="https://discordapp.com/users/345192148154449920">
                    <img src={discord} className="footer-icon" alt="discord-logo" />
                </a>
            </div>
            <hr />
            <h2 className="about-me">About Me</h2>
            <h3 className="about-me-info">Studying Reactjs, JavaScript, CSS, HTML and Web Development on Platzi. This website is under construction.</h3>
            <hr />
            <div>
                <form action className="contact-form">
                    <input type="text" className="input-form" id="form-name" placeholder="Name" />
                    <input type="email" className="input-form" id="form-email" placeholder="Email" />
                    <textarea name="message" id="form-message" cols={35} rows={4} placeholder="Your message here!" defaultValue={""} />
                    <button type="submit" id="form-submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;