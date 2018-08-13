import styles from '../index.less';
// @prop: count, comes from model, which was connected in Homepage.js Line 17
// model(state.count) <=> component(countApp)
// dispatch: dispatch Action 'count/add to onClick()
const CountApp = ({count, dispatch}) => {
  return (
    <div className={styles.normal}>
      <div className={styles.record}>Highest Record: {count.record}</div>
      <div className={styles.current}>{count.current}</div>
      <div className={styles.button}>
        <button onClick={() => { dispatch({type: 'count/add'}); }}>+</button>
      </div>
    </div>
  );
};
export default CountApp;