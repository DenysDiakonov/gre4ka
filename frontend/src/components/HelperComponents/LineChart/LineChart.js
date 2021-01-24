import React, { Component } from "react";
import Chart from "highcharts-react-official";
import moment from "moment";
import * as Highcharts from "highcharts/highstock";
import "./LineChart.scss";
import "moment/locale/ru";

class LineChart extends Component {
    render() {
        const { data } = this.props;
        const options = {
            title: {
                text: null
            },
            credits: {
                enabled: false
            },
            chart: {
                marginTop: 30,
                height: 600
                // width: "100%"
            },

            xAxis: {
                categories: data && data.map((el) => moment(el.date_created).locale("ua").format("HH:mm, DD/MM/YYYY")),
                labels: {
                    style: {
                        fontFamily: "RobotoRegular",
                        fontSize: "14px",
                        color: "#3796F6",
                        opacity: ".5",
                        color: "#204569"
                    }
                },
                crosshair: true,
                gridLineWidth: 1,
                min: 0,
                max: 12,
                scrollbar: {
                    enabled: true,
                    barBackgroundColor: "#89C4C2",
                    barBorderRadius: 4,
                    trackBackgroundColor: "#EDF5FE",
                    trackBorderRadius: 4,
                    height: 6 / 1,
                    rifleColor: "#EDF5FE",
                    margin: 30
                },
                lineWidth: 1,
                lineColor: "#8FA2B4"
            },
            legend: {
                enabled: false
            },
            yAxis: {
                min: 0,
                gridLineWidth: 1,
                labels: {
                    style: {
                        fontFamily: "RobotoRegular",
                        fontSize: "14px",
                        color: "#3796F6",
                        opacity: ".5",
                        color: "#204569"
                    },
                    format: "{value} грн"
                },
                title: {
                    align: "high",
                    rotation: 0,
                    y: -15,
                    offset: -25,
                    text: "Ціна, ₴",
                    style: {
                        fontFamily: "RobotoRegular",
                        color: "#204569",
                        opacity: ".5",
                        fontSize: "14px"
                    }
                },
                lineWidth: 1,
                lineColor: "#8FA2B4",
                minorGridLineWidth: 0,
                minorTickInterval: "auto",
                minorTickWidth: 1,
                minorTickLength: 5
            },
            tooltip: {
                enabled: true,
                style: {
                    fontFamily: "RobotoMedium",
                    fontSize: "14px",
                    color: "#204569"
                },
                formatter: function () {
                    return "Ціна: " + this.y.toFixed(2) + " грн";
                }
            },
            series: [
                {
                    marker: {
                        enabled: true
                    },
                    name: "Ціна",
                    data: data && data.map((el) => el.price),
                    color: "#DFBC9A",
                    borderRadius: 2,
                    pointWidth: 24,
                    dataLabels: {
                        enabled: false,
                        format: "{point.format}",
                        style: {
                            fontFamily: "RobotoMedium",
                            fontSize: "14px",
                            color: "#204569"
                        },
                        inside: false,
                        align: "right"
                    },
                    shadow: {
                        color: "#FFF7F1",
                        width: 10,
                        opacity: 1
                    }
                }
            ]
        };
        return <Chart highcharts={Highcharts} options={options} />;
    }
}

export default LineChart;
