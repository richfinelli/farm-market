import React from "react";

class TotalProducts extends React.Component {
    render() {
        return (
            <React.Fragment>
                Total Products {Object.keys(this.props.totalProducts).length}
            </React.Fragment>
        );
    }
}
export default TotalProducts;
