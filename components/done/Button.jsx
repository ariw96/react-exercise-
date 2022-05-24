export default function Button(props) {
    return (
      <button onClick={props.handleBtnClick} value={props.value}>
        {props.btnText}
      </button>
    );
  }
