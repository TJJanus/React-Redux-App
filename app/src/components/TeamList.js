import React from 'react';
import { connect } from 'react-redux';
import { getTeams } from '../actions';

const TeamList = props => {
  
  const fetchTeams = e => {
    e.preventDefault();
    props.getTeams();
  }
  console.log(props)
  return (
    <div>
      <h1>NHL Teams</h1>
      {props.isLoading && <p>Fetching your Teams</p>}


      {/* <div>
      {props.teams.map((teams) => (
        <h1 key={teams.id}>{teams.name}</h1>
      ))}
      </div> */}

      <h2>{props.teams.name}</h2>
      
   

    
      
      {props.error && <p className="error">{props.error}</p>}
      <button onClick={fetchTeams}>Fetch Teams</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    
    teams: state.teams,
    error: state.error,
    isLoading: state.isLoading
  }
};

  export default connect(mapStateToProps, {getTeams})(TeamList);