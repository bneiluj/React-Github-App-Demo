import React from 'react';
import SearchGithub from './SearchGithub';

// save as this:
// const Main = (props) => {
const Main = ({history, children}) => {
    // Main component has access to this.props.history is because
    // the main component is being controlled by the router
    return (
      <div className="main-container">
        <nav className="navbar navbar-default" role="navigation">
          <div className="col-sm-7 col-sm-offset-2" style={{marginTop: 15}}>
            <SearchGithub history={history}/>
          </div>
        </nav>
        <div className="container">
          {children}
        </div>
      </div>
    )
}

// Exports
export default Main;
