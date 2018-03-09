import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="test-form">
          <form action="">

            <input type="text" name="lat" value="Lat"/>

            <input type="text" name="long" value="Long"/>

            <input type="submit" value="Submit"/>
          </form>
        </div>

    <div id="container">
      <div id="left-section">

        <h1>LEFT NAVIGATION DIV</h1>
        <div class="categorie-list">

        <p>GENERAL ACHIEVEMENT CATEGORIES (world/special/time based ?)</p>
        <p>Each list is prob gonna a be a react component we loop through</p>
        <p>LIST that will open and be pretty:</p>

          <ul>
            <li><b>Continents</b></li>
              <li><i>North America</i></li>
              <ul>
                <li><b>Countries</b></li>
                  <li><i>Canada</i></li>
                  <ul>
                    <li><b>Provinces/Regions</b></li>
                      <li><i>Ontario</i></li>
                      <ul>
                        <li><b>Cities</b></li>
                          <li><i>Toronto</i></li>
                          <ul>
                            <li><b>Neighbourhoods</b></li>
                            <li><i>Downtown</i></li>
                            <li><i>Midtown</i></li>
                          </ul>
                          <li><i>Ottawa</i></li>
                          <li><i>etc...</i></li>
                      </ul>
                      <li><i>Quebec</i></li>
                      <li><i>etc...</i></li>
                  </ul>
                  <li><i>Mexico</i></li>
                  <li><i>etc...</i></li>
              </ul>
              <li><i>Asia</i></li>
              <li><i>etc...</i></li>
          </ul>
        </div>
      </div>
    </div>
      <div id="middle-section">

        <h1>MIDDLE OF PAGE</h1>
        <div class="achievements-display">
          <p>TITLE = Achievemnts group we are looking at</p>
          <p>Each list is prob gonna a be a react component we loop through</p>


          <ul>
            <li>List of subcategory Achievements</li>
            <li>///////////////</li>
            <li>Down level achievement opens to show locations</li>
          </ul>


          </div>
         </div>

         <a href="">Diary</a>
        </div>

    );
  }
}

export default App;
