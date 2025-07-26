interface ErrorInfoProps {
  message: string;
}

function ErrorInfo(props: ErrorInfoProps) {
  return <div className="error-info">{props.message}</div>;
}

export default ErrorInfo;
