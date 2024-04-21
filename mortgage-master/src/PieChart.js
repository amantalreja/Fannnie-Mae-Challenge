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
  { id: 2, value: 0,},
  {id: 3, value: 10,},
  {id: 4, value: 10,},
  {id: 5, value: 0,},
  {id: 6, value: 0,},
  {id: 7, value: 4,},

];

export default function PieActiveArc() {
  return (
    <PieChart
    labelFontSize={40}
      series={[
        {
          data,
          highlightScope: { faded: 'global', highlighted: 'item' },
          faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
        },
      ]}
      height={300}
    />
  );
}
