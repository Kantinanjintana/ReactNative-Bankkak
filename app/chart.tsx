import { LineChart, PieChart } from 'react-native-chart-kit';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default function Chart() {  
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 2 // optional
      }
    ],
    legend: ["Rainy Days"] // optional
  };

  const pieData = [
    { name: "Savings", population: 40, color: "#FF6384", legendFontColor: "#7F7F7F", legendFontSize: 14 },
    { name: "Food", population: 25, color: "#36A2EB", legendFontColor: "#7F7F7F", legendFontSize: 14 },
    { name: "Transport", population: 20, color: "#FFCE56", legendFontColor: "#7F7F7F", legendFontSize: 14 },
    { name: "Others", population: 15, color: "#4BC0C0", legendFontColor: "#7F7F7F", legendFontSize: 14 },
  ];

  const chartConfig = {
    backgroundColor: '#e26a00',
    backgroundGradientFrom: '#fb8c00',
    backgroundGradientTo: '#ffa726',
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16
    }
  };

  const screenWidth = Dimensions.get("window").width;

  return (
    <View style={{ flex: 1 , padding : 10 }}>
      <Text style={{ fontSize : 20 }}>
        Bezier Line Chart
      </Text>
      <LineChart
        data={data}
        width={screenWidth-20} // from react-native
        height={220}
        chartConfig={chartConfig}
        bezier={true}
        style={{
          marginVertical : 10,
          borderRadius: 15
        }}
      />

      <Text style={{ fontSize: 20, marginTop: 10 }}>
        Pie Chart
      </Text>
      <PieChart
        data={pieData}
        width={screenWidth-20}
        height={220}
        accessor={"population"}
        backgroundColor={"transparent"}
        paddingLeft={"15"}
        absolute
      />
    </View>
  );
}