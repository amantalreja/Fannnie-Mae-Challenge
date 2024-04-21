import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      pieChart: { // Create a custom section for pie chart colors
        text: 'red',
      }
    }
  });
const data = [
  { id: 0, value: 10,},
  { id: 1, value: 15,},
  { id: 2, value: 20,},
];

export default function PieActiveArc() {
  return (
    <div style={{ margin: '10px' ,display: 'flex'}}>
    <PieChart
    labelFontSize={40}
      series={[
        {
          data,
          highlightScope: { faded: 'global', highlighted: 'item' },
          faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
        },
      ]}
      height={200}
    />
    <div>
    <p style={{color:"red",marginTop: "30px"}}> SERIEEEES</p>
    <p style={{color:"blue"}}> SERIEEEES</p>
    <p style={{color:"green"}}> SERIEEEES</p>
    </div>
    </div>
  );
}
