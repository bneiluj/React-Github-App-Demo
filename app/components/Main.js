import React from 'react';
import SearchGithub from './SearchGithub';

class Main extends React.Component {
    // Main component has access to this.props.history is because
    // the main component is being controlled by the router
    render () {
        return (
          <div className="main-container">
            <nav className="navbar navbar-default" role="navigation">
              <div className="col-sm-7 col-sm-offset-2" style={{marginTop: 15}}>
                <SearchGithub history={this.props.history}/>
              </div>
            </nav>
            <div className="container">
              {this.props.children}
            </div>
          </div>
        )
    }
}

// Exports
export default Main;
