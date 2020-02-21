import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

class card extends Component {
  render() {
    return (
      <div style={{ borderBottom: "3px solid #949598" ,  marginBottom: "20px"}}>
        <Card variant="outlined">
          <CardContent>
            <Typography variant="h6">{this.props.title}</Typography>
            <Typography variant="h4">
              <span
                style={{
                  float: "right",
                  marginRight: "20px",
                  
                }}
              >
                {this.props.content}
              </span>
            </Typography>
          </CardContent>
          <CardActions>
          <Link to="/cliente/DSoft">
            <Button  size="small">Mas Informacion</Button>
            </Link>
          </CardActions>
        </Card>

       
      </div>
    );
  }
}

export default card;
