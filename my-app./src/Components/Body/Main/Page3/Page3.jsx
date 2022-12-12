import React from "react";
import "/Users/randallholmes/Durban-Impalas/my-app./src/index.css";
import PretoriaWildbacks from "/Users/randallholmes/Durban-Impalas/my-app./src/Images/logos/Pretoria Wildbacks.png";
import EastLondonImperials from "/Users/randallholmes/Durban-Impalas/my-app./src/Images/logos/East London Imperials.png";
import StellenboschWilderbeast from "/Users/randallholmes/Durban-Impalas/my-app./src/Images/logos/Stellenbosch Wilderbeast.png";
import PretoriaEagles from "/Users/randallholmes/Durban-Impalas/my-app./src/Images/logos/Pretoria Eagles.png";
import { create, all } from 'mathjs'
const math = create(all,  {})


// this Class is set to help with the Standings table of different teams, consisting of its Image,Name,Wins,Draws,losses, and place, It is a higher-order component, used to simplify
// the table data
class Standings extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return  <tr>
                <td><img src={this.props.Image} width="66" height="66" alt={this.props.Name} /></td>
                <td>{this.props.Name}</td>
                <td>{this.props.Wins}</td>
                <td>{this.props.Draws}</td>
                <td>{this.props.Losses}</td>
                <td>{this.props.Place}</td>
            </tr>;
    }
  }

// Section1 Which displays the standings is a function which populates the table of standings and uses the class standings to populate data"
function Section1() {
    return (
        <section class = "section1">
        <h1  style={{color: "#E5DFB7"}}>Standings</h1>
        <table>
            <Standings Image={PretoriaWildbacks} Name="Pretoria Wildbacks" Wins="16" Draws="2" Losses="2" Place="1st Place"/>
            <Standings Image={EastLondonImperials} Name="East London Imperials" Wins="14" Draws="4" Losses="0" Place="2nd Place"/>
            <Standings Image={StellenboschWilderbeast} Name="Stellenbosch Wilderbeast" Wins="9" Draws="6" Losses="5" Place="3rd Place"/>
            <Standings Image={PretoriaEagles} Name="Pretoria Eagles" Wins="7" Draws="9" Losses="4" Place="4th Place"/>                                                                                       
        </table>
    </section>
    );
}

// A third party app math is used to get random scores for the teams so each time app is opened it is randomly populated
const ScoreValue =  (arrlength,Values) => Array.from({length: arrlength}, () => math.randomInt(0,Values));
// const ScoreValue =[math.randomInt(0,35),math.randomInt(0,35),math.randomInt(0,35),math.randomInt(0,35),math.randomInt(0,35),math.randomInt(0,35),math.randomInt(0,35),math.randomInt(0,35)]


// Similar to the Standings class this is a class used for the scores on a table with the different teams, consisting of its Image,Name and scores It is a higher-order component, used to simplify
// the table data of the Standings
class Score extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return  <tr>
                    <td><img src={this.props.Image} width="66" height="66" alt={this.props.Name} /></td>
                    <td>{this.props.Name}</td>
                    <td>{this.props.Score}</td>
                </tr>;
    }
    }


// Section2 Which displays the Scores table  is a function which populates the table of standings and using the class score to populate data"
 
function Section2() {
    return (
        <section id="section2">
            <h1 id ="Games" style={{color: "#E5DFB7"}}>Game Score</h1>
            <section id="firstrow">
                <table id="table1">
                    <Score Image={PretoriaWildbacks} Name="Pretoria Wildbacks" Score={ScoreValue(10,35)[0]} />
                    <Score Image={StellenboschWilderbeast} Name="Stellenbosch Wilderbeast" Score={ScoreValue(10,35)[1]}/>
                </table>
                <table id="table2">
                    <Score Image={PretoriaEagles} Name="Pretoria Eagles" Score={ScoreValue(10,35)[2]} />
                    <Score Image={StellenboschWilderbeast} Name="Stellenbosch Wilderbeast" Score={ScoreValue(10,35)[3]} />  
                </table>
            </section>
            <section id="secondrow">
                    <table id="table1">
                        <Score Image={EastLondonImperials} Name="East London Imperials" Score={ScoreValue(10,35)[4]} />
                        <Score Image={StellenboschWilderbeast} Name="Stellenbosch Wilderbeast" Score={ScoreValue(10,35)[5]}/>
                    </table>
                    <table id="table2">
                        <Score Image={PretoriaWildbacks} Name="Pretoria Wildbacks" Score={ScoreValue(10,35)[6]} />
                        <Score Image={PretoriaEagles} Name="Pretoria Eagles" Score={ScoreValue(10,35)[7]} />  
                    </table>
                </section>
                <section>
                    <iframe width="300" height="200" src="https://embed.windy.com/embed2.html?lat=-18.288&lon=146.158&detailLat=-27.468&detailLon=153.033&width=650&height=450&zoom=5&level=surface&overlay=clouds&product=ecmwf&menu=&message=&marker=&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=default&metricTemp=default&radarRange=-1" frameborder="0"></iframe> 
                </section>
        </section>
        
    );
}

// Main function which Displays the Third Page containing all the data above.
function Page3() {
    return (
    <section className="page" id="page3" style={{backgroundColor: "black"}} >
        <section className="thirdpagecontent" id="Standings/Game Score">
            <Section1 />
            <Section2 />
        </section>
    </section>

    );
}


// ReactDOM.render(<Page3 />,document.getElementById("root"))

export default Page3;