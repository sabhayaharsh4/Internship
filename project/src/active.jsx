import React, { Component } from "react";

const TableBody = (props) => {
  const { handleDeactive, data } = props;
  console.log(data);
  const rows = data.map((row, index) => {
    if (data[index].status === true) {
      return (
        <React.Fragment>
          <tr key={index + 1}>
            <td className="badge badge-primary  badge-pill mt-1 p-3">
              {row.name}
            </td>
            <td>
              <button
                className="btn btn-grad1 p-1 "
                style={{ width: 500 }}
                id="deactivatebtn"
                type="button"
                onClick={() => {
                  handleDeactive(index);
                }}
              >
                Deactivate
              </button>
            </td>
            <td>
              <button
                className="btn btn-grad p-1"
                style={{ width: 500 }}
                onClick={() => props.handleDelete(index)}
              >
                Remove
              </button>
            </td>
          </tr>
        </React.Fragment>
      );
    }
  });
  return <tbody>{rows}</tbody>;
};
class Active extends Component {
  render() {
    return (
      <div>
        <h1> Active Friends</h1>
        <table>
          <TableBody
            data={this.props.data}
            handleDeactive={this.props.onDeactive}
            handleDelete={this.props.onDelete}
          />
        </table>
      </div>
    );
  }
}

export default Active;
