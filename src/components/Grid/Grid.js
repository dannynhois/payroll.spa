import React, { Component } from "react";
import ReactDataGrid from "react-data-grid";
import API from "../../utils/API";

class Grid extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { employees: [], columns: [], rows:[] };
    
  }
  componentDidMount() {
    // this.loadData();
    this.setState({
      columns: [
        { key: "name", name: "Name" },
        { key: "object", name: "Object" },
        { key: "amount", name: "Amount" }
      ]
    });
    this.loadData();
    
  }

  loadData = async () => {
    console.log(`employee should be null ` + this.state.employees);
    console.log(this.state.employees);
    await API.getData()
      .then(res => this.setState({ employees: res.data }))
      .catch(err => console.log(err));
    this.createRows();
  };
  createRows = () => {
    let rows = [];

    console.log(this.state.employees);
    this.state.employees.forEach(e => {
      console.log(e.employeeName);
      rows.push({ name: e.employeeName, object: e.object, amount: e.amount });
    });

    this.setState({rows:rows})
  };

  rowGetter = i => {
    return this.state.rows[i];
  };
  render() {
    // var employeeList = this.state.employees.map(employee => (
    //   <li>{employee.employeeName}</li>
    // ));
    return (
      <div>
        <h1>Payroll Data</h1>
        <ReactDataGrid
          columns={this.state.columns}
          rowGetter={this.rowGetter}
          rowsCount={this.state.rows.length}
          minHeight={500}
        />
      </div>
    );
  }
}

export default Grid;
