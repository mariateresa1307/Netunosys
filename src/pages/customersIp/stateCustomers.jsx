import React from "react"
import SimpleCard from "../../components/simpleCard"
import CardContent from "@material-ui/core/CardContent"
import { useSelector } from "react-redux"
import { Pie } from "react-chartjs-2"

export default function ChartEstadoPropiedad() {
  const informacionPropiedadesResumen = useSelector((store) => store.informacionPropiedadesResumen)
  const data = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  }

  return (
    <SimpleCard title="Clientes">
      <CardContent>
        <div
          style={{
            position: "relative",
            maxHeight: "300px",
          }}
        >
          <Pie
            data={data}
            options={{
              maintainAspectRatio: false,
              responsive: true,
              aspectRatio: 2,
              legend: {
                position: "right",
              },
              tooltips: {
                position: "nearest",
                mode: "index",
                intersect: false,
              },
            }}
          />
        </div>
      </CardContent>
    </SimpleCard>
  )
}
