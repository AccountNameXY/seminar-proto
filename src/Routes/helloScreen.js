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
                    Wir sind ein Team aus Studenten der TU Darmstadt und haben aufbauend auf dem Warenwirtschaftssytem von Pickware einen<br />
                    Prototyp erstellt, der helfen soll, Individualisierungsprozesse zu erfassen und zu visualisieren. Dabei könnte es sich um Personalisierungs- und Herstellungsprozesse handeln.<br />
                    <br />
                    Der Prototyp beinhaltet zwei unterschiedliche Arten Individualisierungsschritte abzubilden.
                    <br />
                    Die erste Variante konzentriert sich darauf, den Ablauf aller Schritte zu visualisieren und automatisch zu organisieren.
                    <br />
                    Die zweite Variante lässt Sie alle Möglichkeiten selbst organisieren. Dabei nutzen Sie ein Drag-and-Drop-System.
                    <br />
                    Um die beiden Varianten zu testen, haben wir uns einen Use Case ausgedacht, den Sie mit dem Prototyp abbilden sollen.
                    <br />
                    Falls Sie über die Aufgabe hinaus weitere Prozessschritte abbilden möchten, können sie dies natürlich auch sehr gerne tun.
                    <br />
                    <br />
                    Viel Spaß
                </Text>
                <Row>
                    {/* <Col>
                        <Button onClick={() => this.handleClick(false)}>Mit eigenen Use-Case <br /> fortfahren</Button>
                    </Col> */}
                    <Col>
                        <Button onClick={() => this.handleClick(true)}>Prototyp testen</Button>
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
    margin: 1em
`

export default HelloScreen