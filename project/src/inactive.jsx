import React, { Component } from "react";
class InActive extends Component {
  TableBody = (props) => {
    // console.log(props.data);
    const rows = props.data.map((row, index) => {
      if (props.data[index].status === false) {
        return (
          <tr key={index + 1}>
            <td className="badge badge-warning badge-pill mt-1 p-3   ">
              {row.name}
            </td>
            <td>
              <button
                className="btn btn-grad p-1"
                style={{ width: 1275 }}
                onClick={() => {
                  props.handleDeactive(index);
                }}
              >
                Active
              </button>
            </td>
          </tr>
        );
      }
    });
    return <tbody>{rows}</tbody>;
  };
  render() {
    return (
      <div>
        <h1> Inactive Friends</h1>
        <table>
          <this.TableBody
            data={this.props.data}
            handleDeactive={this.props.onDeactive}
          />
        </table>
      </div>
    );
  }
}

export default InActive;
