import dva from 'dva';
import { Router, Route } from 'dva/router';
import React from 'react';
import key from 'keymaster';
import HomePage from './routes/Homepage';

// 1. Initialize
const app = dva();

// 2. Model
// Remove the comment and define your model.
//app.model({});
app.model({
  namespace: 'count',
  state: {
    record: 0,
    current: 0,
  },
  reducers: {
    add(state) {
      const newCurrent = state.current + 1;
      return { ...state,
        record: newCurrent > state.record ? newCurrent : state.record,
        current: newCurrent,
      };
    },
    minus(state) {
      return { ...state, current: state.current - 1};
    },
  },
  effects: {
    *add(action, { call, put }) {
      yield call(delay, 1000);
      yield put({ type: 'minus' });
    },
  },
  subscriptions: {
    keyboardWatcher({ dispatch }) {
      key('⌘+up, ctrl+up', () => { dispatch({type:'add'}) });
    },
  },
});

// 3. Router

app.router(({ history }) =>
  <Router history={history}>
      <Route path="/" exact component={HomePage} />
  </Router>
);

// 4. Start
app.start('#root');

function delay(timeout){
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}
