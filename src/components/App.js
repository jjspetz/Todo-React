import React, { Component } from 'react';
import './App.css';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { default as TouchBackend } from 'react-dnd-touch-backend';
import { DragDropContext } from 'react-dnd';
import { Provider } from 'react-redux';
import store from '../store.js';
import database from '../fire.js'

import Todo from './todo.jsx';
import {indigo500, indigo100, indigo900, grey500, grey700, white} from 'material-ui/styles/colors';

// import Contacts from './todo.jsx'

//import {auth} from './firebase';

import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: indigo500,
    primary2Color: indigo100,
    accent1Color: indigo900,
    accent2Color: grey500,
    accent3Color: grey700,
    alternateTextColor: white,
    labelColor: white,
  }
})

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider muiTheme={muiTheme}>
          <div>
            <Todo/>
          </div>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
