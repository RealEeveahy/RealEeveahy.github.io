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

function SkillWidget({skillName, imgSource})
{
  return (
    <div className='skillContainer'>
      <img className='skillIcon' src={imgSource} alt={skillName + "-icon"}/>
      <p className='skillText'>
        {skillName}
      </p>
    </div>
  )
}

function Item({itemName, imgSource, imageLeft, primaryColour, children})
{
  var shadow = "10px 10px " + primaryColour;
  if (imageLeft)
    return (
      <div className="portfolioItem">
        <div className='imageContainer'>
          <img className='piImage' src={imgSource} alt={itemName + "-icon"}/>
        </div>
        <div className="descriptionContainer" style={{boxShadow: shadow}}>
          <ItemTag content={itemName} colour={primaryColour}/>
          {children}
        </div>
      </div>
  );
  else
    return (
      <div className="portfolioItem">
        <div className="descriptionContainer" style={{boxShadow: shadow}}>
          <ItemTag content={itemName} colour={primaryColour}/>
          {children}
        </div>
        <div className='imageContainer'>
          <img className="piImage" src={imgSource} alt={itemName + "-icon"}/>
        </div>
      </div>
  );
}

function ItemTag({content, colour})
{
  return (
    <div className="itemTag" style={{backgroundColor: colour}}>
      <p>{content}</p>
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
      <div style={{backgroundColor: '#FFFFFF'}}>
        <div className="mainBody">
          <div id="home" style={{marginTop: '350px', marginBottom: '60px'}}>
            <h1 className="helloMessage">
                Hey! I'm Mae, 
            </h1>
            <h2 className="helloMessage" style={{fontSize: '20px'}}>
                an aspiring developer interested in applications and games.
            </h2>
            <p style={{marginTop: '5px', marginLeft: '5px'}}>
                I'm a second year student at Edith Cowan University studying a 
                Bachelor of Computer Science and majoring in Software Engineering. 
                <br/><br/>
                My current goal is to expand my knowledge and experience by attaining a role
                in a computer-related field.
            </p>
          </div>
      </div>
      <div style={{backgroundColor: '#413D46'}}>
        <div className="mainBody lowerHeading">
          <div id="intro" className="bioContainer contentSection">
              <p>
                  Hello! I'm Mae McLean, a second-year Bachelor of Computer Science student majoring in Software Engineering 
                  at Edith Cowan University. I have 4 years experience in retail & customer service, and I am actively 
                  looking to transition into a position or internship that better suits my skill-set. When I'm not 
                  busy with university assignments, I like to work on games or applications that I find fun / useful - 
                  for example, I built a note-taking-revision app which I now use to take all my notes!
                  <br/><br/>
                  Some of my biggest projects have been games, which I solo publish under the name "Cleanest Cat Studios". 
                  "Delivery Driver" - which can be read about below - has been my greatest so far, and gave me a first experience 
                  in the app deployment pipeline, in which I handled all of iOS provisioning, platform testing, user-acceptance testing 
                  (where I received and incorporated feedback from family and friends!), and finishing with App Store submission.
                  <br/><br/>
                  I am passionate about sharing knowledge and the accessibilty of learning, especially to young adults, 
                  which is why I regularly volunteer as a mentor for weekly coding classes at my local library, where 
                  I guide school-age children through learning programming fundamentals and putting together their first projects. 
                  At these classes, I am primarily tasked with teaching Scratch, HTML, CSS, Python, and C++.
                  <br/><br/>
                  I am currently enhancing my skills by putting a high effort into my units at university, learning as much as possible. 
                  Here I have learned languages and frameworks which I may not have sought out alone, such as Dart and Flutter for mobile 
                  app development, as well as learning to use SQL with SQL Server Management 20. Additionally, I am regularly working on 
                  receiving qualifications from training providers like Cisco Academy and LinkedIn Learning to fill gaps in, and further 
                  strengthen my skill set.
                  <br/><br/>
                  It is vital to my personal growth that I acquire a role in computer-related field,
                   - whether that be Software Engineering, Application Development, Programming, Helpdesk, etc. 
                  I believe that the experiences, tasks, and people I will meet in any of these roles will be a 
                  great opportunity to expand my horizons, build on my knowledge, and grow into a more polished developer.
              </p>

              <div className='skillList'>
                <p>My Languages: </p>
                <SkillWidget skillName={"C#"} imgSource={"resource/Csharp_icon.png"}/>
                <SkillWidget skillName={"Python"} imgSource={"resource/python_icon.png"}/>
                <SkillWidget skillName={"C++"} imgSource={"resource/cplusplus_icon.png"}/>
                <SkillWidget skillName={"JavaScript"} imgSource={"resource/javascript_icon.png"}/>
                <SkillWidget skillName={"HTML & CSS"} imgSource={"resource/html_css_icon.png"}/>
                <SkillWidget skillName={"Dart"} imgSource={"resource/dart_icon.png"}/>
                <SkillWidget skillName={"XAML"} imgSource={"resource/xaml_icon.png"}/>
                <SkillWidget skillName={"SQL"} imgSource={"resource/sql_icon.png"}/>

                <p>My Frameworks and Software: </p>
                <SkillWidget skillName={"Unity"} imgSource={"resource/unity_icon.png"}/>
                <SkillWidget skillName={"React"} imgSource={"logo512.png"}/>
                <SkillWidget skillName={"Flutter"} imgSource={"resource/flutter_icon.png"}/>
                <SkillWidget skillName={".NET"} imgSource={"resource/dotnet_icon.png"}/>

              </div>
          </div>

          <h1 className="helloMessage">Check out my projects!</h1>

          <Section sectionName={"GAMES"}>
            <Item itemName={"Delivery Driver"} imgSource={"resource/dd_icon.png"} imageLeft={true} primaryColour={"#ff6e2b"}>
              <ItemTag content={"C#"} colour={"#000000"}/>
              <ItemTag content={"Unity"} colour={"#000000"}/>
              <ItemTag content={"3D Modelling"} colour={"#000000"}/>
              <p className="itemDescription">
                  An fast-paced endless-runner game with looping objectives, obstacles to avoid, and bonuses for skillful gameplay.
                  Delivery Driver is my first ever app store release, and a huge milestone for me in many ways. 
                  This project gave me a lot of experience employing C# object-oriented practices alongside Unity 
                  to create a sustainable gameplay loop with multiple objectives, in addition to deployment process for iOS devices.
                  <br/>For PC users, there is a (very) beta version available on itch.io.
              </p>
              <ItemLink link={"https://apps.apple.com/app/id1671405752"} iconSource={"resource/apple_icon.png"}/>
              <ItemLink link={"https://cleanestcat.itch.io/delivery-driver"} iconSource={"resource/itch_icon.png"}/>
            </Item>
            <Item itemName={"Between2Stones"} imgSource={"resource/b2s_icon.png"} imageLeft={false} primaryColour={"#d82bff"}>
              <ItemTag content={"C#"} colour={"#000000"}/>
              <ItemTag content={"Unity"} colour={"#000000"}/>
              <ItemTag content={"Game Jam"} colour={"#000000"}/>
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
            <Item itemName={"8-Bit Apocalypse"} imgSource={"resource/temp_apoc_icon.png"} imageLeft={true} primaryColour={"#8bac0f"}>
              <ItemTag content={"C#"} colour={"#000000"}/>
              <ItemTag content={"Unity"} colour={"#000000"}/>
              <p className="itemDescription">
                              A tower-defense and resource-management game which 
                              was built as a proof-of-concept for a Game-Boy style game made within Unity. 
                              This style and concept would eventually extend to my submission for GBJam 11. 
                              I also created all artwork and sound featured within the game!
              </p>
              <ItemLink link={"https://cleanestcat.itch.io/delivery-driver"} iconSource={"resource/itch_icon.png"}/>
            </Item>
          </Section>

          <Section sectionName={"APPS"}>
            <Item itemName={"PinHoard"} imageLeft={true} imgSource={"resource/pinhoard_icon.png"} primaryColour={"#ffae62ff"}>
              <ItemTag content={"C#"} colour={"#000000"}/>
              <ItemTag content={"WPF"} colour={"#000000"}/>
              <p className="itemDescription">
                    PinHoard allows dynamic creation of notes in a grid arrangement where each note 
                    may contain a range of modular components as the user wishes, such as titles, text boxes and lists. 
                    This application further extends the notes taken by a user, allowing them to compile and read multiple 
                    'boards' at one time, as well as revise the contents stored in a board with quizzes based on those notes.
              </p>
              <ItemLink link={"https://github.com/RealEeveahy/PinHoard"} iconSource={"resource/gh_icon.png"}/>
            </Item>
            <Item itemName={"DesktopZoo"} imageLeft={false} imgSource={"resource/gh_icon.png"} primaryColour={"#62a6ffff"}>
              <ItemTag content={"Python"} colour={"#000000"}/>
              <ItemTag content={"TKinter"} colour={"#000000"}/>
              <p className="itemDescription">
                    Allows the user to create and interact with custom Desktop Pets. Pets may be created from sprite-sheets that 
                    the user imports, giving the pet various animations for different actions. 
                    Comes packaged with some pets of my own.
              </p>
              <ItemLink link={"https://github.com/RealEeveahy/DelightfulDesktopZoo"} iconSource={"resource/gh_icon.png"}/>
            </Item>
          </Section>

          <Section sectionName={"OTHER PROJECTS"}>
            <Item itemName={"Teams-R-Us"} imageLeft={true} imgSource={"resource/gh_icon.png"} primaryColour={"#a1a1a1ff"}>
              <ItemTag content={"UI-Design"} colour={"#000000"}/>
              <ItemTag content={"XAML"} colour={"#000000"}/>
              <ItemTag content={"WPF"} colour={"#000000"}/>
              <p className="itemDescription">
                    A visual prototype of a hypothetical application that would allow users to create 
                    'pools' of other users, and group them into teams for projects based on attributes about their 
                    personality and work experience. Created for a university assignment. <br/>
                    ** Note that this is not an application - only an exercise in UI design.
              </p>
              <ItemLink link={"https://github.com/RealEeveahy/TeamsRUs"} iconSource={"resource/gh_icon.png"}/>
            </Item>
          </Section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
