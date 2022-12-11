import React from "react";
import "/Users/randallholmes/Durban-Impalas/my-app./src/index.css";
import PretoriaWildbacks from "/Users/randallholmes/Durban-Impalas/my-app./src/Images/logos/Pretoria Wildbacks.png";
import EastLondonImperials from "/Users/randallholmes/Durban-Impalas/my-app./src/Images/logos/East London Imperials.png";
import StellenboschWilderbeast from "/Users/randallholmes/Durban-Impalas/my-app./src/Images/logos/Stellenbosch Wilderbeast.png";
import PretoriaEagles from "/Users/randallholmes/Durban-Impalas/my-app./src/Images/logos/Pretoria Eagles.png";

function Section1() {
    return (
        <section class = "section1">
        <h1  style={{color: "#E5DFB7"}}>Standings</h1>
        <table>
            <tr>
                <td><img src={PretoriaWildbacks} width="66" height="66" alt="Pretoria Wildbacks" /></td>
                <td>Pretoria Wildbacks</td>
                <td>16</td>
                <td>2</td>
                <td>2</td>
                <td>1st Place</td>
            </tr>
            <tr>
                <td><img src={EastLondonImperials} width="66" height="66" alt="East London Imperials" /></td>
                <td>East London Imperials</td>
                <td>14</td>
                <td>4</td>
                <td>0</td>
                <td>2nd Place</td>
            </tr>
            <tr>
                <td><img src={StellenboschWilderbeast} width="66" height="66" alt="Stellenbosch Wilderbeast" /></td>
                <td>Stellenbosch Wilderbeast</td>
                <td>9</td>
                <td>6</td>
                <td>5</td>
                <td>third Place</td>
            </tr>
            <tr>
                <td><img src={PretoriaEagles} width="66" height="66" alt="Pretoria Eagles" /></td>
                <td>Pretoria Eagles</td>
                <td>7</td>
                <td>9</td>
                <td>4</td>
                <td>4th Place</td>
            </tr>                                                                                                            
        </table>
    </section>
    );
}


function Section2() {
    return (
        <section id="section2">
            <h1 id ="Games" style={{color: "#E5DFB7"}}>Game Score</h1>
            <section id="firstrow">
                <table id="table1">
                    <tr>
                        <td><img src={PretoriaWildbacks} width="66" height="66" alt="Pretoria Wildbacks" /></td>
                        <td>Pretoria Wildbacks</td>
                        <td>16</td>
                    </tr>
                    <tr>
                        <td><img src={StellenboschWilderbeast} width="66" height="66" alt="Stellenbosch Wilderbeast" /></td>
                        <td>Stellenbosch Wilderbeast</td>
                        <td>9</td>
                    </tr>  
                </table>
                <table id="table2">
                    <tr>
                        <td><img src={PretoriaEagles} width="66" height="66" alt="Pretoria Eagles" /></td>
                        <td>Pretoria Eagles</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td><img src={StellenboschWilderbeast} width="66" height="66" alt="Stellenbosch Wilderbeast" /></td>
                        <td>Stellenbosch Wilderbeast</td>
                        <td>9</td>
                    </tr>  
                </table>
            </section>
            <section id="secondrow">
                    <table id="table1">
                        <tr>
                            <td><img src={EastLondonImperials} width="66" height="66" alt="East London Imperials" /></td>
                            <td>East London Imperials</td>
                            <td>14</td>
                        </tr>
                        <tr>
                            <td><img src={StellenboschWilderbeast} width="66" height="66" alt="Stellenbosch Wilderbeast" /></td>
                            <td>Stellenbosch Wilderbeast</td>
                            <td>16</td>
                        </tr>  
                    </table>
                    <table id="table2">
                        <tr>
                            <td><img src={PretoriaWildbacks} width="66" height="66" alt="Pretoria Wildbacks" /></td>
                            <td>Pretoria Wildbacks</td>
                            <td>16</td>
                        </tr>
                        <tr>
                            <td><img src={PretoriaEagles} width="66" height="66" alt="Pretoria Eagles" /></td>
                            <td>Pretoria Eagles</td>
                            <td>7</td>
                        </tr>  
                    </table>
                </section>
        </section>
        
    );
}

function Widget() {
    return (
        <section>
            <iframe width="300" height="200" src="https://embed.windy.com/embed2.html?lat=-18.288&lon=146.158&detailLat=-27.468&detailLon=153.033&width=650&height=450&zoom=5&level=surface&overlay=clouds&product=ecmwf&menu=&message=&marker=&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=default&metricTemp=default&radarRange=-1" frameborder="0"></iframe> 
        </section>
    );
}

function Page3() {
    return (
    <section className="page" id="page3" style={{backgroundColor: "black"}} >
        <section className="thirdpagecontent" id="Standings/Game Score">
            <Section1 />
            <Section2 />
            <Widget />
        </section>
    </section>

    );
}

// ReactDOM.render(<Page3 />,document.getElementById("root"))

export default Page3;