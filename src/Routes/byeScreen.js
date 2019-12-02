import React from 'react';
import styled from "styled-components"
import { Row, Col } from "reactstrap"
import { config } from "./../config"

class ByeScreen extends React.Component {
    constructor(props) {
        super(props)
        this.props = props
        this.state = {}

        this.handleClick = this.handleClick.bind(this)
    }

    render() {
        return (
            <React.Fragment>
                <Title>Feedback</Title>
                <Text>{config.danksagung}</Text>
                <Button onClick={this.handleClick}>Zur Umfrage</Button>
            </React.Fragment>
        )
    }

    handleClick() {
        window.location.replace("https://survey.sogosurvey.com/r/KUX0jg")
    }
}

const Title = styled.h1`
font - weight: bold;
margin: 0.5em auto;
`

const Text = styled.div`
margin: 1em auto;
 padding: 0 5 %;
font - weight: ${ props => props.weight ? props.weight : null}
`



const Button = styled.button`
    background-color: #57D9A3;
    color: white;
    margin: 3em auto;
    border: none;
    padding: 2em;
    border-radius: 5px;
    outline: none
`

export default ByeScreen