import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import TeamList from './components/TeamList';

function App(props) {


  return (
    <div className="App">
     <TeamList teams={props.teams} />
    </div>
  );
}


const mapStateToProps = (state) => {
  return {
    teams: state.teams
  };
};


export default connect(mapStateToProps, {getTeams})(App);
