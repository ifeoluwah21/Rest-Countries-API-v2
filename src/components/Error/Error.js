import React from "react";
import CountriesContext from "../../store/countriesDataContext";

class ErrorBoundaries extends React.Component {
    static contextType = CountriesContext;
    constructor(props) {
        super(props)
        this.state = {
            hasError: false,
            errorMsg: ""
        }
    }
    componentDidCatch(error) {
        this.setState({
            hasError: true,
            errorMsg: error.message
        })
    }

    render() {
        if (this.state.hasError) {
            return <p>{this.state.errorMsg}</p>
        }
        return this.props.children;
    }
}

export default ErrorBoundaries;