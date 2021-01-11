import React from 'react'
//import PropTypes from 'prop-types'
import styled from 'styled-components'
import "@fontsource/ropa-sans"

import {
  VictoryChart,
  VictoryLabel,
  VictoryLegend,
  //VictoryGroup,
  VictoryStack,
  VictoryTheme,
  VictoryAxis,
  VictoryScatter,
  VictoryBar,
  //VictoryTooltip,
} from 'victory'


const CostChart = ({
    title, 
    subTitle,
    costChartData,
    bar1Subtitle,
    bar2Subtitle
  }) => {
  console.log("title: ", title)
  console.log("costChartData: ", costChartData)
  console.log("costChartData[3]?.PV: ", costChartData[3]?.PV)
  console.log("costChartData[7]?.PV: ", costChartData[7]?.PV)
  return(
    <Container> 
    <Title x={150} y={16} text={title} style={{fontSize: "18px", fontFamily: "Ropa Sans"}}/>
    <VictoryChart
        domainPadding={20}
        width={550}
        height={550}
        padding={{ left: 80, right: 50, top: 50, bottom: 50 }}
        theme={VictoryTheme.material}
        // domain={{ y: yDomain }} //removed to fix issue with axis labels not being updated
      >
      
      <VictoryAxis key={0} 
        tickValues={["p","a","f","g","b","q"]} 
        tickFormat={["", bar1Subtitle,"","", bar2Subtitle, ""]} 
        tickLabelComponent={<BarSubtitle dy={-120} style={{fontSize: "12px", fontFamily: "Open Sans"}}/>}
        axisLabelComponent={<VictoryLabel dy={-160} dx={0} style={{fontSize: "16px", fontFamily: "Open Sans"}}/>}
        label={subTitle}/>
      <VictoryAxis
          dependentAxis
          axisLabelComponent={<VictoryLabel dx={0} dy={-35} style={{fontFamily: "Open Sans"}}/>}
          key={2}
          offsetX={80}
          tickFormat={[-2.25,-2,-1.75,-1.5,-1.25,-1,-0.75, -0.5, -0.25, 0, 0.25, 0.5, 0.75]}
          tickValues={[-2.25,-2,-1.75,-1.5,-1.25,-1,-0.75, -0.5, -0.25, 0, 0.25, 0.5, 0.75]}
          label="MEUR/PJ"
        />
      <VictoryStack>
        <VictoryBar 
          data={[{ x: "p", y: 0 },
            { x: "a", y: parseFloat(costChartData[0]?.PV) },
            { x: "f", y: 0 },
            { x: "g", y: 0 },
            { x: "b", y: parseFloat(costChartData[4]?.PV) }]} 
          barRatio={1.2} barWidth={100} />
        <VictoryBar 
          data={[{ x: "a", y: parseFloat(costChartData[1]?.PV) },
            { x: "b", y: parseFloat(costChartData[5]?.PV) }]}
          barRatio={1.2} 
          barWidth={100} />
        <VictoryBar 
          data={[{x:"a", y: parseFloat(costChartData[2]?.PV) },
            {x:"b", y: parseFloat(costChartData[6]?.PV) }]} 
          barRatio={1.2} 
          barWidth={100} />
      </VictoryStack>
      <VictoryScatter 
        key="scatter"
        data={[
          {x:"a", y: parseFloat(costChartData[3]?.PV) },
          {x:"b", y: parseFloat(costChartData[7]?.PV) }
        ]
        }
      />
    <VictoryLegend
          x={140}
          y={540}
          orientation="horizontal"
          gutter={0}
          rowGutter={0}
          symbolSpacer={4}
          itemsPerRow={4}
          style={{
            title: { fontSize: 14, leftPadding: -10 },
          }}
          data={[
            {name: "Variable costs"}, 
            {name: "Fixed O&M costs"}, 
            {name: "Capital costs"}, 
            {name: "Net"}
          ]}
          labelComponent={<VictoryLabel style={{ fontSize: '12px', fontFamily: "Open Sans" }} />}
        />
    </VictoryChart>
    </Container>
    )
}
const Container = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const BarSubtitle = styled(VictoryLabel)`
  ${'' /* text-anchor: start;
  fill: #000000;
  font-family: inherit; */}
  font-size: 18px;
  font-weight: bold;
`
const Title = styled(VictoryLabel)`
  font-size: 24px;
  font-weight: bold;
`

export default CostChart