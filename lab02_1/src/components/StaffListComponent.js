import React, { Component } from "react";
import { Card, CardImg, CardTitle, CardBody, CardText } from "reactstrap";
import dateformat from "dateformat";

class StaffList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStaff: null,
      defaultClass: "col-12 col-md-6 col-lg-3 mt-3",
    };
  }

  onStaffSelect(staff) {
    this.setState({ selectedStaff: staff });
  }

  onColumSelected(col) {
    this.setState({ defaultClass: col });
  }

  renderStaff(staff) {
    if (staff != null) {
      return (
        <Card>
          <CardImg width="100%" src={staff.image} alt={staff.name} />
          <CardBody>
            <CardTitle>Họ và tên: {staff.name}</CardTitle>
            <CardText>
              Ngày sinh: {dateformat(staff.doB, "dd/mm/yyyy")}
            </CardText>
            <CardText>
              Ngày vào công ty: {dateformat(staff.startDate, "dd/mm/yyyy")}
            </CardText>
            <CardText>Phòng ban: {staff.department.name}</CardText>
            <CardText>Số ngày nghỉ còn lại: {staff.annualLeave}</CardText>
            <CardText>Số ngày đã làm thêm: {staff.overTime}</CardText>
          </CardBody>
        </Card>
      );
    } else {
      return <div></div>;
    }
  }

  render() {
    const staff = this.props.staffs.map((staff) => {
      return (
        <div className={this.state.defaultClass} key={staff.id}>
          <Card onClick={() => this.onStaffSelect(staff)}>
            <CardBody>
              <CardTitle>{staff.name}</CardTitle>
            </CardBody>
          </Card>
        </div>
      );
    });
    return (
      <div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button
            className="m-3"
            onClick={() => this.onColumSelected("col-12")}
          >
            1 cột
          </button>
          <button className="m-3">2 cột</button>
          <button className="m-3">3 cột</button>
          <button className="m-3">4 cột</button>
          <button className="m-3">6 cột</button>
        </div>
        <div className="container">
          <div className="row mt-5">{staff}</div>
          <div className="row">
            {this.renderStaff(this.state.selectedStaff)}
          </div>
        </div>
      </div>
    );
  }
}

export default StaffList;
