export default function Status({ status }) {
  if (!status) {
    return;
  }

  return <div className={status.result}>{status.message}</div>;
}
