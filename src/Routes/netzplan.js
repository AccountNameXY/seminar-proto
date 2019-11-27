import React from 'react';
import { config } from "./../config"
import styled from "styled-components"
import { Row, Col } from 'reactstrap';
import Graph from "./../Components/graph"


const data = [
    {
        name: "Schritt 1",
        type: 0,
        allowBackstep: true,
        itemStyle: "#57D9A3",
        subtypes: [
            {
                name: "Schritt 1.1",
                type: "s",
                allowBackstep: false
            },
            {
                name: "Schritt 1.2",
                type: "s",
                allowBackstep: false
            },
            {
                name: "Schritt 1.3",
                type: "s",
                allowBackstep: false
            }
        ],
    },
    {
        name: "Schritt 11",
        type: "m",
        allowBackstep: false,

    },
    {
        name: "Schritt 2",
        type: 0,
        allowBackstep: false,
        subtypes: [
            {
                name: "Schritt 2.1",
                type: "s",
                allowBackstep: true
            },
            {
                name: "Schritt 2.2",
                type: "s",
                allowBackstep: false
            },
            {
                name: "Schritt 2.3",
                type: "s",
                allowBackstep: false
            }
        ],
    },
    {
        name: "Schritt 3",
        type: 0,
        allowBackstep: false,
        subtypes: [
            {
                name: "Schritt 3.1",
                type: "s",
                allowBackstep: true
            },
            {
                name: "Schritt 3.2",
                type: "s",
                allowBackstep: false
            },
            {
                name: "Schritt 3.3",
                type: "s",
                allowBackstep: false
            }
        ]
    },
    {
        name: "Schritt 33",
        type: "m",
        allowBackstep: false

    },
]


class Netzplan extends React.Component {
    constructor(props) {
        super(props)
        this.props = props
        this.state = {
            inputValue: [],
            showInput: [],
            showNetzplan: false
        }

        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {
        this.setState({
            data: data
        })
    }


    render() {
        var { data, showInput, showNetzplan } = this.state
        return (
            <Background>
                <Row>
                    <Col>
                        <Row>
                            <Col >
                                <Title>Netzplan 2.0</Title>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Subtitle>Ihre Aufgabe</Subtitle>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                {config &&
                                    <Text>{config.Aufgabe}</Text>
                                }
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                </Row>


                {showNetzplan ?
                    <React.Fragment>
                        <Graph data={data} />
                        <Button onClick={() => this.setState({ showNetzplan: false })}>zurückspringen</Button>
                    </React.Fragment>
                    :
                    <React.Fragment>
                        <Row>
                            <Col lg="3">
                                <Text>Erstelle einen Schritt</Text>

                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <WhiteFrame color={"white"} >
                                    {data &&
                                        <React.Fragment>
                                            {data.map((process, processIndex) => (
                                                <Col lg="12">
                                                    <WhiteFrame margin={"1em 5em"}>
                                                        <Row>

                                                            <Col lg="6">
                                                                <Text align={"left"}>Typ</Text>
                                                                <Row>
                                                                    <Outline>
                                                                        <ButtonText>{process.name}</ButtonText>
                                                                        <Frame>
                                                                            <Dot src="dot.png" />
                                                                            <Number>{processIndex + 1}</Number>
                                                                        </Frame>
                                                                    </Outline>
                                                                </Row>
                                                            </Col>
                                                            <Col lg="6">
                                                                <Text align={"left"}>Subtyp</Text>
                                                                {process.subtypes ?
                                                                    process.subtypes.map((subtype, subtypeIndex) => (
                                                                        <React.Fragment>
                                                                            <Row>
                                                                                <Outline>
                                                                                    <ButtonText>{subtype.name}</ButtonText>
                                                                                    <Frame>
                                                                                        <Dot src="dot.png" />
                                                                                        <Number>{subtypeIndex + 1}</Number>
                                                                                    </Frame>
                                                                                </Outline>

                                                                            </Row>
                                                                            {process.subtypes.length - 1 === subtypeIndex &&
                                                                                <Row>
                                                                                    <Outline onClick={showInput[processIndex] === true ? null : () => this.showInput(processIndex)}>
                                                                                        {showInput[processIndex] === true ?
                                                                                            <Input placeholder="Subtypen Hinzufügen" onChange={(e) => this.handleChange(e, processIndex)}></Input>
                                                                                            :
                                                                                            <ButtonText>Add Subbtype</ButtonText>
                                                                                        }
                                                                                        <Add src="plus.svg" onClick={showInput[processIndex] === true ? () => this.addSubtype(processIndex) : null} />
                                                                                    </Outline>
                                                                                </Row>
                                                                            }
                                                                        </React.Fragment>
                                                                    ))

                                                                    :
                                                                    <Row>
                                                                        <Outline onClick={showInput[processIndex] === true ? null : () => this.showInput(processIndex)} >
                                                                            {showInput[processIndex] === true ?
                                                                                <Input placeholder="Subtypen Hinzufügen" onChange={(e) => this.handleChange(e, processIndex)}></Input>
                                                                                :
                                                                                <ButtonText>Add Subbtype</ButtonText>
                                                                            }
                                                                            <Add src="plus.svg" onClick={showInput[processIndex] === true ? () => this.addSubtype(processIndex) : null} />
                                                                        </Outline>

                                                                    </Row>
                                                                }
                                                            </Col>
                                                        </Row>

                                                    </WhiteFrame>
                                                </Col>
                                            ))
                                            }
                                            <Row>
                                                <Wrapper>
                                                    <Outline onClick={showInput[data.length] === true ? null : () => this.showInput(data.length)} >
                                                        {showInput[data.length] === true ?
                                                            <Input placeholder="Subtypen Hinzufügen" onChange={(e) => this.handleChange(e, data.length)}></Input>
                                                            :
                                                            <ButtonText>Add Subbtype</ButtonText>
                                                        }
                                                        <Add src="plus.svg" onClick={showInput[data.length] === true ? () => this.addProcess() : null} />
                                                    </Outline>
                                                </Wrapper>

                                            </Row>
                                            <Row>
                                                <Button onClick={() => this.setState({ showNetzplan: true })}>Erstelle Netzplan</Button>
                                            </Row>

                                        </React.Fragment>
                                    }
                                </WhiteFrame>
                            </Col>
                        </Row>
                    </React.Fragment>
                }
            </Background >
        )
    }

    handleChange(event, index) {
        var inputValue = [...this.state.inputValue]
        inputValue[index] = event.target.value
        this.setState({ inputValue: inputValue })
    }

    showInput(index) {
        var showInput = [...this.state.showInput]
        showInput[index] = true
        this.setState({ showInput: showInput })
    }

    addProcess() {
        var data = [...this.state.data]
        var showInput = [...this.state.showInput]
        showInput[data.length] = false
        data.push({ name: this.state.inputValue[data.length], type: "m", allowBackstep: false })
        this.setState({ data: data })
    }


    addSubtype(index) {
        var data = [...this.state.data]
        var showInput = [...this.state.showInput]
        showInput[index] = false

        if (data[index].subtypes === undefined) {
            data[index].subtypes = []
        }
        console.log(showInput);
        data[index].subtypes.push({ name: this.state.inputValue[index], type: "s", allowBackstep: true })

        this.setState({ data: data, showInput: showInput })
    }
}

const Title = styled.h1`
font-weight: bold;
margin: 1em auto; 
`

const Button = styled.button`
    background-color: #F64747;
    color: white;
    margin: 3em auto;
    border: none;
    padding: 2em;
    border-radius: 5px;
    outline: none

`


const Subtitle = styled.h3`
margin-top: 0.5em
`

const ButtonText = styled.div`
margin: 3em auto;
display: inline;
padding: 0 0.5em

`

const Input = styled.input`
`


const Add = styled.img`
width: 1.2rem;
margin - left: 1em
    `

const Wrapper = styled.div`
    margin: 1em auto
`


const Frame = styled.div`
    display: inline
    position: relative
`

const Number = styled.div`
    color: white;
    display: inline;
    position: absolute;
    width: 1em;
    margin-top: ${props => props.type === "input" ? "0.3em " : "0.03em"};
    left: 0;
`

const Dot = styled.img`
    width: 1em
`


const Outline = styled.div`
border: 1px solid #D8DDE6;
min-width: 10em;
border-radius: 3px;
padding: 1em 0.5em;
margin: 1em 3em;
display: inline-block;
cursor: pointer;
margin: ${ props => props.margin ? props.margin : null}
: hover{
    border: 1px solid #54698D
}
`

const Text = styled.div`
text-align: ${props => props.align ? props.align : null}
margin: 0.5em 3em; 
padding: 0 0.5em
`

const Background = styled.div`
background-color: #FAFBFC;
`

const WhiteFrame = styled.div`
background-color: white;
width: 90%;
margin: ${props => props.margin ? props.margin : "1em auto"}
border: 1px solid #D8DDE6

`

export default Netzplan