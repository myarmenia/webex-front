import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import { VictoryTooltip, VictoryChart, VictoryArea, VictoryTheme, VictoryScatter } from 'victory';
import { userTestGradeData } from '../../../../../../../redux/Variables/Let/';

function Chart(){

  return (
    <>
      <ListItem>
        <VictoryChart
          domain={{y: [0, 5]}}
          theme={VictoryTheme.material}
          width={680}
          height={250}
          animate={{ duration: 1000 }}
        >
          <VictoryArea
            style={{data: {fill: "#5867ddd1", stroke: "#5867dd00"}}}
            data={userTestGradeData}
            interpolation="linear"
          />
          <VictoryScatter
            style={{
              data: {fill: "tomato"}, labels: {fill: "tomato"}
            }}
            size={({ active }) => active ? 5 : 3}
            labels={({ datum }) => datum.y}
            labelComponent={<VictoryTooltip/>}
            data={userTestGradeData}
          />
        </VictoryChart>
      </ListItem>
    </>
  )
}

export default Chart;