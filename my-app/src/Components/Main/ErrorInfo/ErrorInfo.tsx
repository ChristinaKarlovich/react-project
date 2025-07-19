import React from "react";

interface ErrorInfoProps {
  message: string;
}

class ErrorInfo extends React.Component<ErrorInfoProps> {
  render(): React.ReactNode {
    return <div className="error-info">{this.props.message}</div>;
  }
}

export default ErrorInfo;
