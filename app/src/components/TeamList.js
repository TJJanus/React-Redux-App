import React from 'react';
import { connect } from 'react-redux';
import { getTeams } from '../actions';

const TeamList = props => {
  
  const fetchTeams = e => {
    e.preventDefault();
    props.getTeams();
  }

  const { teams } = props;

  console.log('Props', props)
  return (
    <div>
      <h1>NHL Teams</h1>
      {props.isLoading && <p>Fetching your Teams</p>}

      
       <div>
      {teams.map((team) => (
        <>
        <h1 key={team.id}>{team.name}</h1>
        <h4>{team.venue.name}</h4>
        <a href={team.officialSiteUrl}>{team.name}</a>
        </>
      ))}
      </div> 

    
      
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