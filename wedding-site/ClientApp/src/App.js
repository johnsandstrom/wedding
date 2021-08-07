import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import InfoBox from './components/InfoBox';
import SetPageContent from './components/SetPageContent';
import './custom.css'
export default class App extends Component {
  static displayName = App.name;
  
    render() {
        const homeContent = <SetPageContent id="home" />;
        const rsvpContent = <SetPageContent id="rsvp" />;
        const sleepingContent = <SetPageContent id="sleeping" />;
        const speechContent = <SetPageContent id="speech" />;
        const giftsContent = <SetPageContent id="gifts" />;

        return (
            <Layout>
                <div className="appBody">
                    <Route exact path='/' component={Home} />
                    <Route id="infobox" path='/home' render={() => <InfoBox title="Välkommen" content={homeContent} />} />
                    <Route id="infobox" path='/rsvp' render={() => <InfoBox title="Osa" content={rsvpContent} />} />
                    <Route id="infobox" path='/sleeping' render={() => <InfoBox title="Sovplats" content={sleepingContent} />} />
                    <Route id="infobox" path='/speech' render={() => <InfoBox title="Hålla Tal" content={speechContent} />} />
                    <Route id="infobox" path='/gifts' render={() => <InfoBox title="Gåvor" content={giftsContent} />} />
                </div>
            </Layout>
    );
  }
}
