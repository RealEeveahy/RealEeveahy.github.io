import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
        <span className="buttonPanel">
            <button className="homeButton"></button>
            <a href="https://www.linkedin.com/in/mae-mclean-738238255/">
                <img src="resource/li_icon.png" className="socialButton"/>
            </a>
            <a href="https://github.com/RealEeveahy">
                <img src="resource/gh_icon.png" className="socialButton"/>
            </a>
        </span>
        <div className="mainBody">
            <div id="home" style={{marginTop: '200px'}}>
                <h1 className="helloMessage">
                    Hey! I'm Mae,
                </h1>
                <h2 className="helloMessage" style={{fontSize: '20px'}}>
                    an aspiring developer interested in applications and games.
                </h2>
                <p style={{marginTop: '5px', marginLeft: '5px'}}>
                    I'm a second year student at Edith Cowan University studying a 
                    Bachelor of Computer Science and majoring in Software Engineering. 
                    <br/>
                    I'm looking to expand my knowledge and experience by attaining a role
                    in a computer-related field.
                </p>
            </div>
            <div id="intro" className="contentSection">
                <p>
                    This is where a longer intro paragraph will go.
                </p>
            </div>
            <div id="games" className="contentSection">
                <h1 className="sectionHeader">
                    GAMES
                </h1>
                <div className="contentHolder">
                    <div className="portfolioItem">
                        <img className="piImage" src="resource/dd_icon.png" alt="DeliveryDriver-icon"/>
                        <div className="descriptionContainer">
                            <p className="itemDescription">
                                Delivery Driver is my first ever app store release, and a huge milestone for me in many ways. 
                                This project gave me a lot of experience employing C# object-oriented practices alongside Unity 
                                to create a sustainable gameplay loop with multiple objectives.
                                <br/>For PC users, there is a (very) beta version available on itch.io.
                            </p>
                            <a href="https://apps.apple.com/app/id1671405752">
                                <img src="resource/apple_icon.png" className="itemLink"/>
                            </a>
                            <a href="https://cleanestcat.itch.io/delivery-driver">
                                <img src="resource/itch_icon.png" className="itemLink"/>
                            </a>
                        </div>
                    </div>
                    <div className="portfolioItem">
                        <div className="descriptionContainer">
                            <p className="itemDescription">
                                Between2Stones was my first time attempting a game-jam, being a submission to 
                                GBJam 11 hosted on itch.io. This gave me the experience of developing a game that is 
                                not only limited by time - 10 days - but also limited in graphical and conceptual scope, 
                                where it was necessary that I incorporated the theme "Space" and only employed 4 colours. 
                                The end result is a platformer puzzle game in which the player must clear each challenge with 
                                limited time as the <i>space</i> slowly decreases.
                            </p>
                            <a href="https://cleanestcat.itch.io/between2stones">
                                <img src="resource/itch_icon.png" className="itemLink"/>
                            </a>
                        </div>
                        <img className="piImage" src="resource/b2s_icon.png" alt="8bitapoc-icon"/>
                    </div>
                    <div className="portfolioItem">
                        <img className="piImage" src="resource/temp_apoc_icon.png" alt="8bitapoc-icon"/>
                        <div className="descriptionContainer">
                            <p className="itemDescription">
                                8-Bit-Apocalypse was built as a proof-of-concept for a Game-Boy style game made within Unity, 
                                which would eventually extend to my submission for GBJam 11. 
                            </p>
                            <a href="https://cleanestcat.itch.io/8bit-apocalypse">
                                <img src="resource/itch_icon.png" className="itemLink"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div id="apps" className="contentSection">
                <h1 className="sectionHeader">
                    APPS
                </h1>
            </div>
            <div id="misc" className="contentSection">
                <h1 className="sectionHeader">
                    OTHER PROJECTS
                </h1>
                
            </div>
        </div>
    </div>
  );
}

export default App;
