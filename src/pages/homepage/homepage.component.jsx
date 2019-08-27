import React from 'react';
import './homepage.styles.css';
import TopSection from '../../components/top-section/top-section.component.jsx';
import MidSection from '../../components/mid-section/mid-section.component.jsx';
import BotSection from '../../components/bot-section/bot-section.component.jsx';

const HomePage = () => (
    <div className="homepage">
    <TopSection />
    <MidSection />
    <BotSection />
    </div>
)

export default HomePage;