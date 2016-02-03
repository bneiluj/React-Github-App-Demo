import React from 'react';
import Router from 'react-router';

class SearchGithub extends React.Component {
    // ATTENTION IT"S FUNCTION INSIDE A CLASS
    //  SO THE SCOPE DOESNT GET AUT BIND
    getRef (ref) {
        this.usernameRef = ref;
    }
    // Grab the username and bring the user to the /profile/username
    handleSubmit () {
        const username = this.usernameRef.value;
        this.usernameRef.value = '';
        this.props.history.pushState(null, '/profile/' + username);
    }
    render () {
        return (
            <div className="col-sm-12">
                <form onSubmit={() => this.handleSubmit()}>
                    <div className="form-group col-sm-7">
                        <input
                            type='text'
                            className='form-control'
                            ref={(ref) => this.getRef(ref)}/>
                    </div>
                    <div className='form-group col-sm-5'>
                        <button
                            type='submit'
                            className='btn btn-block btn-primary'>
                            Search Github
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

SearchGithub.PropTypes = {
    // add router history to the this scope
    //  takes the instance and mixins some methods like the pushState
    history: React.PropTypes.object.isRequired
}

// Exports
export default SearchGithub;
