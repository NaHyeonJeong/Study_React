//event
import React, { Component } from 'react';
class MyComponent extends Component {
    render() {
        return (
            <div>
                <button onClick={() => {
                    this.setState({
                    number: this.state.number + 1
                    })
                }
                }>더하기</button>
            </div>
        );
    }
}
export default MyComponent;


// //state 값 변경
// import React, { Component } from 'react';
// class MyComponent extends Component {
    
//     constructor(props) {
//         super(props);
//         this.state = {
//             name: "홍실동",
//             number: 0
//         }
//     }

//     render() {
//         return (
//             <div>
//                 <p>안녕하세요! 제 이름은 <b>{this.state.name}</b> 입니다.</p>
//                 <p>number 값은 : {this.state.number} </p>
//                 <button onClick={() => {
//                     this.setState({
//                         name: "홍길동",
//                         number: this.state.number + 1
//                     })
//                 }
//                 }>더하기</button>
//             </div>
//         );
//     }
// }
// export default MyComponent;

// //state를 constructor에서 꺼내기
// import React, { Component } from 'react';
// class MyComponent extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             number: 0
//         }
//     }
        
//     static defaultProps = {
//         name: '기본이름'
//     };
//     static propTypes = {
//         name: PropTypes.string,
//         age: PropTypes.number.isRequired
//     }
//     state = {
//         number: 0
//     }
//     render() {
//         return (
//             <div>
//                 <p>안녕하세요! 제 이름은 <b>{this.state.name}</b> 입니다.</p>
//                 <p>number 값은 : {this.state.number} </p>
//                 <button onClick={() => {
//                     this.setState({
//                         name: "홍길동",
//                         number: this.state.number + 1
//                     })
//                 }
//                 }>더하기</button>
//             </div>
//         );
//     }
// }
// export default MyComponent;

// //state
// import React, { Component } from 'react';
// class MyComponent extends Component {
//     constructor(props) { //초기값 설정
//         super(props);
//         this.state = {
//             number: 0
//         }
//     }
//     render() {
//         return (
//             <div>
//                 <p>안녕하세요! 제 이름은 <b>{this.props.name}</b> 입니다.</p>
//                 <p>number 값은 : {this.state.number} </p>
//             </div>
//         );
//     }
// }
// export default MyComponent;

// // 함수형 컴포넌트
// import React, { Children } from 'react';
//     const MyComponentFunc = ( name ) => {
//         return (
//             <div>
//                 <p>안녕하세요! 제 이름은 {name} 입니다.</p>
//                 {Children}
//             </div>
//         );
    
// };
// export default MyComponentFunc;

// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// class MyComponent extends Component {
//     static defaultProps = {
//         name: '기본이름'
//     };
//     static propTypes = {
//         name: PropTypes.string,
//         age: PropTypes.number.isRequired
//     }
//     render() {
//         return (
//             <div>
//                 <p>안녕하세요! 제 이름은 <b>{this.props.name}</b> 입니다.</p>
//                 <p>저는 {this.props.age} 살 입니다</p>
//             </div>
//         );
//     }
// }
// MyComponent.defaultProps = {
//     name: '기본이름'
// };
// MyComponent.propTypes = {
//     name: PropTypes.string, //name props 타입을 문자열로 설정함
// }
//export default MyComponent;
