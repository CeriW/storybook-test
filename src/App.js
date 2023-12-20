import './App.css';

function App({ props }) {
  return (
    <div className="App">
      <div id="deliveries-widget">
        <div
          className="deliveries-widget__row-1"
          under-min-spend={props.underMinSpend ? 'true' : 'false'}
          order-status-ok={props.orderStatusOK ? 'true' : 'false'}
          basket-is-empty={props.basketIsEmpty ? 'true' : 'false'}
        >
          {props.underMinSpend && <div>You're under min spend</div>}
          {props.orderStatusOK && <div>Your order is confirmed</div>}
          {props.basketIsEmpty && <div>Your basket is empty</div>}
        </div>
      </div>
    </div>
  );
}

export default App;
