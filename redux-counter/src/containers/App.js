import React, {Component} from 'react';
//import Counter from '../components/Counter';
//import CounterContainer from './CounterContainer';
import CounterContainer2 from './CounterContainer2';

/**
 * <Provider>
 *  <App>
 *      <CounterContainer />
 *          <Counter />
 */

// 1. Action
// 2. Reducer
    // 1) provider
// 3. Store
// 4. dispatch
// 5. subscribe
class App extends Component {
    render() {
        return (
            <div>
                <CounterContainer2/>
                {/* <Counter/> */}
            </div>
        );
    }
}
export default App;