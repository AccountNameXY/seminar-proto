import React from 'react';
import styled from "styled-components"
import { Row, Col } from 'reactstrap';


class HelloScreen extends React.Component {

    constructor(props) {
        super(props)
        this.props = props
        this.state = {}
    }

    render() {
        return (
            <Col>
                <Title>Herzlich Willkommen</Title>
                <Text></Text>
                <Row>
                    <Col>
                        <Button onClick={() => this.handleClick(true)}>Mit eigenem UseCase <br /> fortfahren</Button>
                    </Col>
                    <Col>
                        <Button onClick={() => this.handleClick(false)}>Ohne eigenem UseCase<br /> beginnen</Button>
                    </Col>

                </Row>
                <Space />
            </Col>
        )
    }

    handleClick(bool) {
        this.props.history.push("/bruteforce")
    }


}

const Title = styled.h1`
font - weight: bold;
margin: 0.5em auto;
`

const Space = styled.div`
    margin-bottom: 30em
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


const Text = styled.div`

`

export default HelloScreen