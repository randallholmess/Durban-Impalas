import React from "react";
import "src/index.css";
import ReactDOM from 'react-dom';


function Section1() {
    return (
        <section className = "section1">
            <h1 style="color: #E5DFB7">Player Statistics</h1>
            <table>
                <tr>
                    <td colspan="1">
                        <img src="Photos/logos/Durban_Impalas.png" width="50" height="70" alt="icon for row" />
                    </td>
                    <td colspan="5">Durban Impalas</td>
                </tr>
                <tr>
                    <td><img src="Photos/Media Content/Players/Allan Baxter.jpeg" width="70" height="50" alt="icon for row" /></td>
                    <td colspan="3">Allan  Baxter</td>
                    <td>Total Tries</td>
                    <td>14</td>
                </tr>
                <tr>
                    <td><img src="Photos/Media Content/Players/Blake Enever.jpeg" width="70" height="50" alt="icon for row" /></td>
                    <td colspan="3">Blake Enever</td>
                    <td>Tackles Per Game</td>
                    <td>8.8</td>
                </tr>
                <tr>
                    <td><img src="Photos/Media Content/Players/Murray Duglas.jpeg" width="70" height="50" alt="icon for row" /></td>
                    <td colspan="3">Murray Duglas</td>
                    <td>Runs</td>
                    <td>130M</td>
                </tr>
                <tr>
                    <td><img src="Photos/Media Content/Players/Tom Banks.jpeg" width="70" height="50" alt="icon for row" /></td>
                    <td colspan="3">Tom Banks</td>
                    <td>Most Minutes</td>
                    <td>47 m</td>
                </tr>                                                                                                        
            </table>
        </section>
    )
}

function Section2() {
    return (
        <section id="section2">
            <h1 id ="Game Statistics" style="color: #E5DFB7">Game Statistics</h1>
            <table id="table1">
                <tr>
                    <td colspan="5">Match Statistics</td>
                </tr>
                <tr>
                    <td><img src="Photos/logos/Durban_Impalas.png" width="50" height="70" alt="icon for row" /></td>
                    <td><h3>IMP</h3></td>
                    <td><h3>    </h3></td>
                    <td><h3>EAG</h3></td>
                    <td><img src="Photos/logos/Pretoria Eagles.png" width="66" height="66" alt="Pretoria Eagles" /></td>
                </tr>
                <tr>
                    <td><h3>84</h3></td>
                    <td colspan="3"><h3>RUNS</h3></td>
                    <td><h3>111</h3></td>
                </tr>
                <tr>
                    <td><h3>426</h3></td>
                    <td colspan="3"><h3>Metres Run</h3></td>
                    <td><h3>298</h3></td>
                </tr>
                <tr>
                    <td><h3>6</h3></td>
                    <td colspan="3"><h3>Clean Breaks</h3></td>
                    <td><h3>1</h3></td>
                </tr>
                <tr>
                    <td><h3>170</h3></td>
                    <td colspan="3"><h3>Tackles</h3></td>
                    <td><h3>78</h3></td>
                </tr>
                <tr>
                    <td><h3>8</h3></td>
                    <td colspan="3"><h3>Missed Tackles</h3></td>
                    <td><h3>31</h3></td>
                </tr>
                <tr>
                    <td><h3>7</h3></td>
                    <td colspan="3"><h3>Turnover Knock On</h3></td>
                    <td><h3>12</h3></td>
                </tr>                                                                                                                                                                         
            </table>
        </section>
    )
}

function Page4() {
    return (
        <section className="page" id="page4" style="background-color: black">
            <section class="fourthpagecontent" id ="Statistics">
                <Section1 />
                <Section2 />
            </section>
        </section>
        )
    }
ReactDOM.render(<Page4 />,document.getElementById("root"))