import logo from './logo.svg';
import './App.css';

function Section({sectionName, children})
{
  return (
    <div className="contentSection">
      <h1 className="sectionHeader">
        {sectionName}
      </h1>
      <div className="contentHolder">
        {children}
      </div>
    </div>
  );
}

function Item({itemName, imgSource, imageLeft, children})
{
  if (imageLeft)
    return (
      <div className="portfolioItem">
        <img className="piImage" src={imgSource} alt={itemName + "-icon"}/>
        <div className="descriptionContainer">
          {children}
        </div>
      </div>
  );
  else
    return (
      <div className="portfolioItem">
        <div className="descriptionContainer">
          {children}
        </div>
        <img className="piImage" src={imgSource} alt={itemName + "-icon"}/>
      </div>
  );
}

function ItemLink({link, iconSource})
{
  return (
    <a href={link}>
      <img src={iconSource} className="itemLink"/>
    </a>
  )
}

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
            <Section sectionName={"GAMES"}>
              <Item itemName={"Delivery Driver"} imgSource={"resource/dd_icon.png"} imageLeft={true}>
                <p className="itemDescription">
                                Delivery Driver is my first ever app store release, and a huge milestone for me in many ways. 
                                This project gave me a lot of experience employing C# object-oriented practices alongside Unity 
                                to create a sustainable gameplay loop with multiple objectives.
                                <br/>For PC users, there is a (very) beta version available on itch.io.
                </p>
                <ItemLink link={"https://apps.apple.com/app/id1671405752"} iconSource={"resource/apple_icon.png"}/>
                <ItemLink link={"https://cleanestcat.itch.io/delivery-driver"} iconSource={"resource/itch_icon.png"}/>
              </Item>
              <Item itemName={"Between2Stones"} imgSource={"resource/b2s_icon.png"} imageLeft={false}>
                <p className="itemDescription">
                                Between2Stones was my first time attempting a game-jam, being a submission to 
                                GBJam 11 hosted on itch.io. This gave me the experience of developing a game that is 
                                not only limited by time - 10 days - but also limited in graphical and conceptual scope, 
                                where it was necessary that I incorporated the theme "Space" and only employed 4 colours. 
                                The end result is a platformer puzzle game in which the player must clear each challenge with 
                                limited time as the <i>space</i> slowly decreases.
                </p>
                <ItemLink link={"https://cleanestcat.itch.io/between2stones"} iconSource={"resource/itch_icon.png"}/>
              </Item>
              <Item itemName={"8-Bit Apocalypse"} imgSource={"resource/temp_apoc_icon.png"} imageLeft={true}>
                <p className="itemDescription">
                                8-Bit-Apocalypse swas built as a proof-of-concept for a Game-Boy style game made within Unity, 
                                which would eventually extend to my submission for5 GBJam 11. 
                </p>
                <ItemLink link={"https://cleanestcat.itch.io/delivery-driver"} iconSource={"resource/itch_icon.png"}/>
              </Item>
            </Section>
            <Section sectionName={"APPS"}>
              <Item itemName={"PinHoard"} imageLeft={true} imgSource={"resource/gh_icon.png"}>
                <p className="itemDescription">
                      PinHoard allows dynamic creation of notes in a grid arrangement where each note 
                      may contain a range of modular components as the user wishes, such as titles, text boxes and lists. 
                      This application further extends the notes taken by a user, allowing them to compile and read multiple 
                      'boards' at one time, as well as revise the contents stored in a board with quizzes based on those notes.
                </p>
                <ItemLink link={"https://github.com/RealEeveahy/PinHoard"} iconSource={"resource/gh_icon.png"}/>
              </Item>
            </Section>
            <Section sectionName={"OTHER PROJECTS"}>

            </Section>
        </div>
    </div>
  );
}

export default App;
