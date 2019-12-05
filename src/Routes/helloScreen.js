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
                    Pickware möchte die bisherigen Produktfunktionen erweitern und in Zukunft gegebenenfalls auch Herstellungs- und Personalisierungsprozesse von Produkten aufnehmen. Die Erstellung der Endprodukte, benötigter Ressourcen, sowie die dazu nötigen Prozessschritte erfolgt online in der Shopware-Oberfläche. Anschließend erscheint der zur Bestellung des Kunden passende Herstellungsablauf in der Versand-App. der anschließende Fragebogen beschäftigt sich jedoch exklusiv mit der Erstellung von Prozessen bei Herstellung und Personalisierung hin zum fertigen Endprodukt.
                    In Ihrer Mail haben sie Zugriff auf unseren Server erhalten, auf dem die zu testenden Dateien liegen. Es handelt sich hierbei um eine experimentelle Web-Umgebung (später ähnlich eingebunden in Shopware), in der Sie unsere Aufgabe zu einer beispielhaften Erstellung eines Herstellungsprozesses bearbeiten können. Sollten Sie eigene Produkte herstellen oder personalisieren, so können Sie das Web-Tool auch mit Ihren eigenen Produkten testen. Bitte erstellen Sie vor dem Ausfüllen des Fragebogens einen Herstellungsprozess.
                    <br />
                    <br />
                    Falls sie einen Use-Case haben, testen sie gerne diesen. Falls nicht, haben wir uns einen Use-Case für sie ausgedacht, den sie nutzen können.

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
    margin: 1em
`

export default HelloScreen