import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import './SetPageContent.css'
import "bootstrap/dist/css/bootstrap.min.css";



function SetPageContent(props) {

    const [willAttend, setWillAttend] = useState(true);
    const [willStay, setWillStay] = useState(false);

    function handleAttendance() {
        setWillAttend(!willAttend)
        console.log(willAttend);
    }

    function handleWillStay() {
        setWillStay(!willStay);
        console.log(willStay);
    }

    if (props.id === "home") {
        return (<div>
            <p><br />Odensvi kyrka 16:00 <br />
            Adress ...</p>

            <p>
                <br /> Festen kommer att hållas på{" "}
                <a href="http://www.xn--tngstagrd-v2ar.se/">Tängsta gård</a>
            </p>

            <p><br />Sovplats finns i begränsat antal ( först till kvarn! ) </p>

            <p><br />Klädsel: TBD</p>

            <br />
            <p>Kontaktuppgifter<br />Tia<br />Tel: 0761614922, Email: tia.kennerberg@gmail.com
            <br />
            John<br />Tel: 0722495171, Email: john.sandstrom@hotmail.se<br /></p>
        </div>);
    }
    else if (props.id === "rsvp") {
        return (<div>
            <p><br />Jag kommer: {"  "}
                <ToggleButtonGroup onChange={handleAttendance} type="radio" name="attendance" defaultValue={1}>
                    <ToggleButton className="toggle-button" value={1}>Ja</ToggleButton>
                    <ToggleButton className="toggle-button" value={2}>Nej</ToggleButton>
                </ToggleButtonGroup>
            </p>
            <div className="rsvpInfo">
                {willAttend ?
                    <p>
                        <label for="rsvpName">Namn</label>
                        <input type="text" id="rsvpName" /><br />
                        <label for="allergies"> Allergier</label>
                        <input type="text" id="allergies" /><br />
                        <label for="rsvpAdditional">Övrigt</label>
                        <input type="text" id="rsvpAdditional" /><br />
                        <br /><label>Vill sova kvar</label><br />
                        <ToggleButtonGroup onChange={handleWillStay} type="radio" name="sleepingSpot" defaultValue={1}>
                            <ToggleButton className="toggle-button" value={1}>Ja</ToggleButton>
                            <ToggleButton className="toggle-button" value={2}>Nej</ToggleButton>
                        </ToggleButtonGroup><br /><br />

                    </p> :
                    <p> <label for="rsvpName">Namn</label>
                    <input type="text" id="rsvpName" /><br /></p>}
                    <Button>Skicka</Button>
                <br />
            </div>
        </div>);
    }
    else if (props.id === "sleeping") {
        return (
            <div>
                <p>
                    <a>Sovplats kostar 300:- för en natt & 500:- för två nätter.</a>
                    <br /><br />
                    <a> Det finns ett begränsat antal sovplatser i festlokalen och behöver därför förbokas.
                        Det är först till kvarn som gäller. <br /><br /> Hotell finns ca. 15 minuter
                        bilresa bort (bokas på egen hand).</a><br />
                </p>
            </div>);
    }
    else if (props.id === "speech") {
        return (
            <div>
                <p>
                    <a>Vill du hålla tal under festen så ser vi gärna att du meddelar oss här nedan.</a><br />
                    <br /><a>Fyll i ditt namn och klicka på skicka så kommer vi att meddelas
                             om detta.</a><br /><br />
                    <label for="speechName">Namn</label><br />
                    <input type="text" id="speechName" />{"  "}<Button>Skicka</Button><br /><br />
                    <h2> (OBS! Detta skickas separat utöver OSA) </h2><br />
                </p>
            </div>);
    }
    else if (props.id === "gifts") {
        return (
            <div>
                <p>
                    <a>Vi önskar pengar i bröllopsgåva för att finansiera den kommande bröllopsresan,
                        då vi redan har mer prylar till vårat hem än vad vi behöver.</a><br /><br />
                    <a> Vi uppskattar även att ni donerar pengar i vårat namn till valfri välgörenhet.</a><br />
                </p>
            </div>);
    }
}

export default SetPageContent;