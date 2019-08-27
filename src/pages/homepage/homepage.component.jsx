import React from "react";
import "./homepage.styles.css";

import { auth } from "../../firebase/firebase.utils";
import TopSection from "../../components/top-section/top-section.component.jsx";
import MidSection from "../../components/mid-section/mid-section.component.jsx";
import BotSection from "../../components/bot-section/bot-section.component.jsx";

class HomePage extends React.Component {
    constructor() {
        super();

        this.state = {
            currentUser: null
        };
    }

    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
            this.setState({ currentUser: user });

        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
      }

    render() {
        return (
            <div className="homepage">
                <TopSection currentUser={this.state.currentUser} />
                <MidSection />
                <BotSection />
            </div>
        );
    }
}

export default HomePage;
