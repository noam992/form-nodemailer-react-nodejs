import React,{ Component } from "react";
import "./contact.css";
import { ContactForm } from "../contactForm/contactForm";

export class Contact extends Component {
    public render () {
        return (
            <div className="contact">
                <ContactForm />
            </div>
        )
    }
}