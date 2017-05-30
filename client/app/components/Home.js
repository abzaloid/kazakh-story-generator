import React from 'react'
import Dropzone from 'react-dropzone'
import {connect} from 'react-redux'
import {getStory} from '../middlewares/getStory'

class Home extends React.Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <Dropzone onDrop={this.handleDrop} />
                {this.props.loading && <span>Loading, please wait</span>}
                {this.props.loaded && <span>Successfully uploaded image {this.props.data.filename}</span>}
                {this.props.error && <div><span>Error occured, please try again</span> <span>{this.props.error.message}</span></div>}

            </div>
        )
    }

    handleDrop = (files) => {
        this.props.getStory(files[0])
    }
}

export default connect((state) => {
    return {
        loading: state.loading,
        loaded: state.loaded,
        error: state.error,
        data: state.data
    }
}, {getStory})(Home)
