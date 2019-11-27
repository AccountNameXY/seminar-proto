import React from 'react';
import { config } from "./../config"
import styled from "styled-components"
import { Row, Col } from 'reactstrap';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

class BruteForce extends React.Component {

    constructor(props) {
        super(props)
        this.props = props
        this.state = {
            steps: [{ name: "Prozesschritt1", id: "item-0" }, { name: "Prozesschritt2", id: "item-1" }, { name: "Prozesschritt3", id: "item-2" }],
            processes: [
                {
                    steps:
                        [{ name: "Prozesschritt1", id: "proc-0-item-0" }, { name: "Prozesschritt2", id: "proc-0-item-1" }]
                },
                {
                    steps:
                        [{ name: "Prozesschritt1", id: "proc-1-item-0" }, { name: "Prozesschritt2", id: "proc-1-item-1" }]
                }
            ],
            newValue: "",
            showNewDroppable: false
        }
        this.addName = this.addName.bind(this)
        this.onDragStart = this.onDragStart.bind(this)
        this.onDragEnd = this.onDragEnd.bind(this)
        this.shiftWithinFirstDroppable = this.shiftWithinFirstDroppable.bind(this)
        this.shiftWithinProcess = this.shiftWithinProcess.bind(this)
        this.addProcess = this.addProcess.bind(this)
        this.keyPressed = this.keyPressed.bind(this)
    }



    render() {
        const { steps, processes } = this.state
        return (
            <React.Fragment>
                <Row>
                    <Col>
                        <Row>
                            <Col >
                                <Title>BruteForce</Title>
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

                <DragDropContext onDragEnd={this.onDragEnd.bind(this)} onDragStart={this.onDragStart.bind(this)}>
                    <Row >
                        {/* INITIAL STEPS */}
                        <Col >
                            <Outline>
                                <Text weight={"bold"}>Alle Ihre Personalisierungsschritte</Text>
                                <Droppable droppableId="droppable-init" >
                                    {(provided) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.droppableProps}
                                        >
                                            {steps.length === 0 ?
                                                null
                                                :
                                                steps.map((step, index) => {
                                                    return (
                                                        <Draggable key={step.id} draggableId={step.id} index={index}>
                                                            {(provided) => (
                                                                <div ref={provided.innerRef} {...provided.dragHandleProps} {...provided.draggableProps}>
                                                                    <Row key={index}>
                                                                        <Col >
                                                                            <Outline margin="1em">
                                                                                {step.name !== "" ?
                                                                                    <ButtonText>{step.name}</ButtonText>
                                                                                    :
                                                                                    <Input onChange={this.handleInput.bind(this)} placeholder="Benne Prozesschritt..." onBlur={() => this.addName(index)} onKeyDown={this.keyPressed} />
                                                                                }
                                                                                <Frame>
                                                                                    <Dot src="dot.png" />
                                                                                    <Number type={step.name === "" ? "input" : "reg"}>{index + 1}</Number>
                                                                                </Frame>
                                                                            </Outline>
                                                                        </Col>
                                                                    </Row>

                                                                </div>
                                                            )}
                                                        </Draggable>
                                                    )
                                                })
                                            }
                                            {provided.placeholder}
                                            <Row>
                                                <Col lg="auto">
                                                    <Outline margin="2em">
                                                        <ButtonText>Schritt Hinzufügen </ButtonText>
                                                        <Add src="plus.svg" onClick={this.addMainStep.bind(this)} />
                                                    </Outline>
                                                </Col>
                                            </Row>
                                        </div>
                                    )}
                                </Droppable>
                            </Outline>
                        </Col>
                        {/* Processes */}
                        {processes.length !== null &&
                            processes.map((process, index) => (
                                <Droppable droppableId={"droppable-" + index} key={index}>
                                    {(provided) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.droppableProps}>
                                            <Col>
                                                <Outline key={index} >
                                                    <Text weight={"bold"}>Prozess {index + 1}</Text>
                                                    {process.steps.map((step, index) => {
                                                        return (
                                                            <Draggable key={step.id} draggableId={step.id} index={index}>
                                                                {(provided) => (
                                                                    <div ref={provided.innerRef} {...provided.dragHandleProps} {...provided.draggableProps}>
                                                                        <Row key={index}>
                                                                            <Col >
                                                                                <Outline margin="1em">
                                                                                    {process.name !== "" ?
                                                                                        <ButtonText>{step.name}</ButtonText>
                                                                                        :
                                                                                        <Input onChange={this.handleInput.bind(this)} onBlur={() => this.addName(index)} />
                                                                                    }
                                                                                    <Frame>
                                                                                        <Dot src="dot.png" />
                                                                                        <Number>{index + 1}</Number>
                                                                                    </Frame>
                                                                                </Outline>
                                                                            </Col>
                                                                        </Row>

                                                                    </div>
                                                                )}
                                                            </Draggable>
                                                        )
                                                    })}
                                                    {provided.placeholder}
                                                </Outline>
                                            </Col>
                                        </div>
                                    )}
                                </Droppable>
                            ))
                        }
                    </Row>
                    {/* NEW Process */}
                    <Wrapper>
                        <Droppable droppableId="droppable-new">
                            {(provided) => (
                                <div
                                    ref={provided.innerRef}
                                    {...provided.droppableProps}>
                                    <Outline>
                                        Personalisierungsschritte in dieses <br /> Feld ziehen um neuen Prozess zu erstellen
                                    </Outline>
                                    {provided.placeholder}

                                </div>
                            )}
                        </Droppable>
                    </Wrapper>
                </DragDropContext>
                <Button onClick={() => this.props.history.push("/netzplan")}>Zur Nächsten Option</Button>
            </React.Fragment >
        )
    }

    onDragEnd(result) {
        if (result.destination !== null) {
            if (((result.destination.droppableId === result.source.droppableId) && (result.destination.index !== result.source.index))) {
                ((result.destination.droppableId === "droppable-init") && (result.source.droppableId === "droppable-init")) ? this.shiftWithinFirstDroppable(result) : this.shiftWithinProcess(result)
            } else if ((result.source.droppableId === "droppable-init") && (result.destination.droppableId === "droppable-new")) {
                this.addProcess(result)
            } else if (result.destination.droppableId !== result.source.droppableId) {
                this.addSteptoProcess(result)
            }
        }
    }

    onDragStart(result) {
        if (result.source.droppableId === "droppable-init") {
            this.setState({ showNewDroppable: true })
        }
    }

    shiftWithinFirstDroppable(result) {
        const steps = [...this.state.steps]
        var dest = steps[result.destination.index]
        var source = steps[result.source.index]

        steps[result.source.index] = dest
        steps[result.destination.index] = source

        this.setState({ steps: steps })
    }

    addSteptoProcess(result) {
        var steps = [...this.state.steps]
        var processes = [...this.state.processes]
        var droppableIndex = result.destination.droppableId.slice(-1)
        // var step = steps[result.source.index]
        var lastDraggableID = processes[droppableIndex].steps[processes[droppableIndex].steps.length - 1].id + 1
        var id = "proc-" + droppableIndex + "-" + lastDraggableID

        processes[droppableIndex].steps.splice(result.destination.index, 0, { name: steps[result.source.index].name, id: id })
        // var secondHalf = processes[droppableIndex].steps.splice(result.destination.index, processes[droppableIndex].steps.length)

    }

    shiftWithinProcess(result) {
        const droppableIndex = result.destination.droppableId.slice(-1)
        var process = [...this.state.processes]
        var steps = process[droppableIndex].steps
        var dest = steps[result.destination.index]
        var source = steps[result.source.index]

        steps[result.source.index] = dest
        steps[result.destination.index] = source
        process[droppableIndex].steps = steps

        this.setState({ processes: process })

    }

    addProcess(result) {
        var processes = [...this.state.processes]
        if (result.destination.droppableId === "droppable-new") {
            const newProcess = {
                steps: [
                    { name: this.state.steps[result.source.index].name, index: "proc-" + this.state.processes.length + "-item-0" }
                ]
            }
            processes.push(newProcess)
            this.setState({ processes: processes })
        }
    }

    handleInput(event) {
        // console.log(event.target.value);
        this.setState({
            newValue: event.target.value
        })
    }

    keyPressed(event) {
        if (event.key === "Enter") {
            this.addName(this.state.steps.length - 1)
        }
    }

    addMainStep() {
        const steps = [...this.state.steps]
        var draggableID = steps[steps.length - 1].id.slice(-1) + 1
        steps.push({ name: "", id: `item-${draggableID}`, substeps: [] })
        this.setState({ steps: steps })
    }

    addName(index) {
        const steps = [...this.state.steps]
        steps[index].name = this.state.newValue
        steps[index].id = `item-${index}`

        this.setState({
            steps: steps
        })
    }


}

const Wrapper = styled.div`
    margin:auto
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

const Frame = styled.div`
    display: inline
    position: relative
`

const Dot = styled.img`
    width: 1em
`

const Number = styled.div`
    color: white;
    display: inline;
    position: absolute;
    width: 1em;
    margin-top: ${props => props.type === "input" ? "0.3em " : "0.03em"};
    left: 0;
`

const Input = styled.input`
border: 1px solid #D8DDE6;
padding: 0.25em 0.5em;
outline: none
    `

const Title = styled.h1`
font - weight: bold;
margin: 0.5em auto;
`

const Subtitle = styled.h3`
margin - top: 0.5em
    `

const Text = styled.div`
margin: 1em auto;
 padding: 0 5 %;
font - weight: ${ props => props.weight ? props.weight : null}

`
const ButtonText = styled.div`
margin: 3em auto;;
display: inline;
padding: 0 0.5em

    `

const Add = styled.img`
width: 1.2rem;
margin - left: 1em
    `

const Outline = styled.div`
border: 1px solid #D8DDE6;
min - width: 5em;
border - radius: 3px;
padding: 1em 0.5em;
margin: 2em 5em;
display: inline - block;
cursor: pointer;
margin: ${ props => props.margin ? props.margin : null}
    : hover{
    border: 1px solid #54698D
}
`

export default BruteForce