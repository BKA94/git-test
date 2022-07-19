import React, { Component } from "react";
import { Card, CardImg, CardTitle, CardBody, CardText } from "reactstrap";

class StaffList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultClass: "col-12 col-md-6 col-lg-3",
    };
  }

  render() {
    const staff = this.props.staffs.map((staff) => {
      return (
        <div className={this.state.defaultClass} key={staff.id}>
          <Card>
            <CardBody>
              <CardTitle>{staff.name}</CardTitle>
            </CardBody>
          </Card>
        </div>
      );
    });
    return (
      <div className="container">
        <div className="row">{staff}</div>
      </div>
    );
  }
}

export default StaffList;
