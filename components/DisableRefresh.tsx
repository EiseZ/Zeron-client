export default function DisableRefresh(props) {
  props.refresh(false);
  return (
    <div>
      Loading
    </div>
  );
}