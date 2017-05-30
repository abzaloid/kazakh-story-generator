import React from 'react'
import Dropzone from 'react-dropzone'
import {connect} from 'react-redux'
import {getStory} from '../../middlewares/getStory'
import {HomeContainer, Title, DropzoneText} from './HomeStyles'
import './HomeStyles.css'

class Home extends React.Component {
    render() {

        console.log(this.props)
        return (
            <HomeContainer>
                <Title>Kazakh story generator</Title>
                <Dropzone className={'dropzone'} activeClassName={'dropzoneActive'} onDrop={this.handleDrop}>
                    <DropzoneText>Drop your image here or click to upload an image</DropzoneText>
                </Dropzone>
                {this.props.loading && <span>Loading, please wait</span>}
                {this.props.loaded && <span>Successfully uploaded image {this.props.data.filename}</span>}
                {this.props.error && <div><span>Error occured, please try again</span> <span>{this.props.error.message}</span></div>}
            </HomeContainer>
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
