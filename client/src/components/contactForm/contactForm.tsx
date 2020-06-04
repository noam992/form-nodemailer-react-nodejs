import React,{ Component } from "react";
import "./contactForm.css";
import axios from 'axios'

interface ContactFormState {
    name: string,
    email: string,
    message: string
}

export class ContactForm extends Component<any, ContactFormState> {
    
    public constructor(props: any) {
        super(props);
        this.state = {
          name: "",
          email: "",
          message: ""
        }
    }

    private onNameChange = (args: React.FormEvent<HTMLInputElement>) => {
        const name = args.currentTarget.value;
        this.setState({name})
    }

    private onEmailChange = (args: React.FormEvent<HTMLInputElement>) => {
        const email = args.currentTarget.value;
        this.setState({email});
    }

    private onMessageChange = (args: React.ChangeEvent<HTMLTextAreaElement>) => {
        const message = args.currentTarget.value;
        this.setState({message});
    }
    
    private handleSubmit = async () => {

        try {
            const response = await axios.post("http://localhost:3002/send", this.state);
            const sendedForm = response.data;

            this.resetForm()
            
        }
        catch(err) {
            alert(err.message);
        }
    }

    resetForm(){
        this.setState({name: "", email: "", message: ""})
    }

    public render () {
        return (
            <div className="contactForm">
                <iframe name="hiddenFrame" className="hide"></iframe>
                <form id="contact-form" method="POST" onSubmit={this.handleSubmit} target="hiddenFrame">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" 
                            value={this.state.name || ""} 
                            onChange={this.onNameChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" aria-describedby="emailHelp" 
                            value={this.state.email || ""} 
                            onChange={this.onEmailChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea className="form-control" 
                            value={this.state.message || ""} 
                            onChange={this.onMessageChange} />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }

}

