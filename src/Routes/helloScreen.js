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
                <Text>
                    Wir sind ein Team aus Studenten der TU Darmstadt und haben im Auftrag von Pickware diesen <br />
                    Prototyp erstellt. Dieser soll helfen Personalisierungsschritte zu erfassen und zu visualisieren. <br />
                    <br />


                    Wir möchten sie einladen unseren Prototypen zu testen und uns zu helfen ihn zu verbessern

                    <br />
                    Falls sie einen Use-Case haben, testen sie gerne diesen. Ansonsten haben wir uns einen Use-Case für sie ausgedacht den sie nutzen können.

                </Text>
                <Row>
                    <Col>
                        <Button onClick={() => this.handleClick(false)}>Mit eigenen Use-Case <br /> fortfahren</Button>
                    </Col>
                    <Col>
                        <Button onClick={() => this.handleClick(true)}>Ohne eigenen Use-Case<br /> beginnen</Button>
                    </Col>

                </Row>
                <Space />
            </Col>
        )
    }

    handleClick(bool) {

        this.props.useCase(bool)
        this.props.history.push("/netzplan")
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