import React from 'react';
import ReactEcharts from 'echarts-for-react';


class Graph extends React.Component {

    constructor(props) {
        super(props)
        this.props = props
        this.state = {}
    }

    componentDidMount() {
        var flattendData = []
        this.props.data.map(p => p.subtypes ? p.subtypes.map(sub => flattendData.push(sub)) : flattendData.push(p))
        var newData = this.createBubbles(flattendData)

        this.setState({ bubbles: newData[0], links: newData[1] })
    }

    render() {
        return (
            <ReactEcharts
                option={this.getOption()}
                style={{ height: '800px', width: '100%' }}
                className='react_for_echarts' />
        )
    }

    createBubbles(flattendData) {
        var bubbles = []
        var links = []
        this.props.data.forEach((process, processIndex) => {
            if (process.subtypes === undefined) {
                var bubble =
                {
                    name: process.name,
                    x: 0,
                    y: (processIndex + 1) * 50,
                    itemStyle: { color: '#57D9A3' }
                }

                for (var i = processIndex + 1; i < this.props.data.length; i++) {
                    if (this.props.data[i].subtypes === undefined) {
                        var link = {
                            source: process.name,
                            target: this.props.data[i].name
                        }
                        links.push(link)
                        if (this.props.data[i].allowBackstep) {
                            const link = {
                                source: this.props.data[i].name,
                                target: process.name
                            }
                            links.push(link)
                        }
                    } else {
                        this.props.data[i].subtypes.forEach((nextSubtype) => {
                            var link = {
                                source: process.name,
                                target: nextSubtype.name
                            }
                            links.push(link)
                            if (nextSubtype.allowBackstep) {
                                const link = {
                                    source: nextSubtype.name,
                                    target: process.name
                                }
                                links.push(link)
                            }
                        })
                    }
                }

                bubbles.push(bubble)

            } else {
                process.subtypes.forEach((subtype, subtypeIndex) => {
                    var bubble =
                    {
                        name: subtype.name,
                        x: subtypeIndex * 200,
                        y: (processIndex + 1) * 50,
                        itemStyle: { color: '#57D9A3' }
                    }
                    for (var nextProcessIndex = processIndex + 1; nextProcessIndex < this.props.data.length; nextProcessIndex++) {
                        if (this.props.data[nextProcessIndex].subtypes === undefined) {
                            console.log(subtype, this.props.data[nextProcessIndex]);

                            var link = {
                                source: subtype.name,
                                target: this.props.data[nextProcessIndex].name
                            }
                            links.push(link)

                            if (this.props.data[nextProcessIndex].allowBackstep) {
                                const link = {
                                    source: this.props.data[nextProcessIndex].name,
                                    target: subtype.name,
                                }
                                links.push(link)
                            }
                        } else {
                            this.props.data[nextProcessIndex].subtypes.forEach((nextSubtype) => {
                                var link = {
                                    source: subtype.name,
                                    target: nextSubtype.name
                                }
                                links.push(link)
                                if (nextSubtype.allowBackstep) {
                                    const link = {
                                        source: nextSubtype.name,
                                        target: subtype.name,
                                    }
                                    links.push(link)
                                }
                            })
                        }
                    }
                    bubbles.push(bubble)
                })
            }

            if (processIndex === this.props.data.length - 1) {
                bubbles.push({ name: "X", x: 200, y: (processIndex + 2) * 50, itemStyle: { color: '#F64747' }, symbolSize: "50" })
            }
        })

        var allLinks = this.addEndpoints(links, flattendData)
        bubbles.splice(0, 0, { name: "S", x: 200, y: 0, itemStyle: { color: '#57D9A3' }, symbolSize: "50" })
        console.log(allLinks);
        return [bubbles, allLinks]
    }

    addEndpoints(links, flattendData) {
        flattendData.forEach(p => {
            if (p.type !== 0) {
                var link1 = {
                    source: "S",
                    target: p.name
                }
                var link2 = {
                    source: p.name,
                    target: "X"
                }
                links.push(link1)
                links.push(link2)
            }

        })
        return links
    }

    getOption = () => ({
        tooltip: {},
        animationDurationUpdate: 1500,
        animationEasingUpdate: 'quinticInOut',
        series: [
            {
                type: 'graph',
                layout: 'none',
                symbolSize: 50,
                roam: true,
                label: {
                    normal: {
                        show: true
                    }
                },
                edgeSymbol: ['circle', 'arrow'],
                edgeSymbolSize: [4, 10],
                edgeLabel: {
                    normal: {
                        textStyle: {
                            fontSize: 20
                        }
                    }
                },
                data: this.state.bubbles,
                links: this.state.links,
                lineStyle: {
                    normal: {
                        opacity: 0.9,
                        width: 1,
                        curveness: 0
                    }
                }
            }
        ]
    })
}

export default Graph