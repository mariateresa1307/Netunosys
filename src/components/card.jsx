import React from "react"
import { Card, CardContent, Button, Typography, Grid } from "@material-ui/core"
import classsnames from "classnames"

const DetailsCard = ({ icons, title, content, disableMoreInfo, background }) => (
  <div>
    <Card elevation={0} style={{ backgroundImage: background }}>
      <CardContent className="card-content">
        <Grid container spacing={3} justify="center">
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Typography variant="h2" style={{ color: "white", textAlign: "center" }}>
              {icons} {content}
            </Typography>
            <Typography variant="h6" style={{ textAlign: "center", color: "#ffffff", fontWeight: "initial", fontSize: "1.1rem" }}>
              {title}
            </Typography>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={6}
            style={{
              textAlignLast: "end",
              marginTop: "auto",
            }}
          >
            <Button
              style={{
                right: "0px",
                marginRight: "0px",
                marginLeft: "auto",
                display: "block",
                color: "#ffffff",
                padding: "6px 16px",
              }}
            >
              Buscar
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  </div>
)

export default DetailsCard
