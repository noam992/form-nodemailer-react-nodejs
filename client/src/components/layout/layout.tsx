import React,{ Component } from "react";
import { Header } from "../header/header";
import "./layout.css";
import { Aside } from "../aside/aside";
import { Main } from "../main/main";
import { Footer } from "../footer/footer";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { About } from "../about/about";
import { Contact } from "../contact/contact";

export class Layout extends Component {
    public render () {
        return (
            <div className="layout">

                <BrowserRouter>
                <header>
                    <Header />
                </header>

                <aside>
                    <Aside />
                </aside>

                <main>
                    <Switch>
                        <Route path="/main" component={Main} exact/>
                        <Route path="/about" component={About} exact/>
                        <Route path="/contact" component={Contact} exact/>
                        <Redirect from="/" to="/main" exact/>
                    </Switch>
                </main>

                <footer>
                    <Footer />
                </footer>
                </BrowserRouter>

            </div>
        )
    }
}