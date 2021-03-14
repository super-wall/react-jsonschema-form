import { Component } from "react";
import * as types from "../../types";

// Null Field 这是有啥用呢。
class NullField extends Component {
  componentDidMount() {
    if (this.props.formData === undefined) {
      this.props.onChange(null);
    }
  }

  render() {
    return null;
  }
}

if (process.env.NODE_ENV !== "production") {
  NullField.propTypes = types.fieldProps;
}

export default NullField;
