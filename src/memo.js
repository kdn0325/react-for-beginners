//***********1***********


// • 리액트를 사용하는 이유: 최소 단위의 렌더링을 위해
// • useState(): 변수, 변수를 제어하는 함수로 구성되며 변하는 값을 제어, 해당 부분의 리렌더링을 위함
// • props: 태그의 속성 값을 함수의 아규먼트 처럼 컴포넌트에 값을 전달해준다.
// • useEffect(): 코드의 실행 시점을 관리할 수 있는 선택권을 얻는 방어막 같은 존재, 디펜던시가 없을 경우 최초 1회 실행, 있을 경우 해당 값이 변할 경우 실행한다. 이 때 디펜던시는 여러개 입력이 가능하다.

// 🏴 부모 컴포넌트에서 리렌더링이 일어날 경우 모든 자식들이 리렌더링이 된다.(wa can use memo)
// 🏴 propType을 설치하고 props의 타입을 지정해 줄 수 있다. 이 때 isRequired로 필수값을 지정 가능

// import Button from "./Button";
// import styles from "./App.module.css";
// import {useState,useEffect} from "react";
// function App(){
//     const [counter,setValue] = useState(0); // state 변경시 다시 실행됌
//     const [keyword, setKeyword] = useState("")
//     const onClick = () =>setValue((prev)=>prev+1);
//     const onChange = (event)=> setKeyword(event.target.value);
//     useEffect(()=>{
//         console.log("I run only once");
//     },[]);
//     useEffect(()=>{
//         console.log("I Run when keyword change") 
//     },[keyword]);
//     // useEffect에 대괄호는 몇번 실행할 지 가능
//     useEffect(()=>{
//         console.log("I Run when 'counter' change") 
//     },[counter]);
//     useEffect(()=>{
//         console.log("I Run when 'keyword' change % 'counter' change") 
//     },[counter,keyword]);
//     return(
//     <div>
//         <input onChange={onChange} type="text" placeholder="Search here.."/>
//         <h1>{counter}</h1>
//         <button onClick ={onClick}>Click</button>
//     </div>
// );
// }

//***********2***********

// export default App;

// Hello 컴포넌트를 hide할 때는 컴포넌트가 스크린에서 지워지고
// show를 누르면 컴포넌트가 다시 생성되므로 
// useEffect도 다시 실행됨을 알 수 있다.
// -> 정해준 useEffect가 컴포넌트가 생성될 때 콘솔 로그를 하라는 것이기 때문
// function Hello() {
// useEffect(() => {
// console.log("Hi");
// }, []);

// 컴포넌트가 destroy될 때도 코드를 실행할 수 있다
// -> return으로 함수를 만들어주면 된다.
// useEffect는 함수를 받고, 이 함수는 dependency가 변화할 때 호출됨
// 현재는 dependency가 비어있으니 컴포넌트가 처음 생성될 때 함수가 호출된 후 다시
// 호출 되지 않음
// 그래서 컴포넌트가 파괴될 때도 함수를 실행하고 싶으면
// useEffect 함수가 새로운 함수를 return해야 함
// -> 왜냐면 deps가 비어있으면 자동으로 컴포넌트가 파괴될 때 cleanup함수가 실행되는데 그 과정이 리렌더링으로 useEffect함수가 실행되고 클린업하면서 이전에 있던 이펙트인 console.log(“created :) )가 삭제되고 새로운 이펙트 함수인 return함수가 실행되기 때문이다.
// 리렌더링 -> 이전 이펙트 클린업 -> 이펙트 실행

// // import Button from "./Button";
// // import styles from "./App.module.css";
// import {useState,useEffect} from "react";

// function Hello(){
//     useEffect(()=> {
//         console.log("created");
//         return ()=>console.log("destroyed") // cleanup function
//     },[]);
//     return(
//         <h1>Hello</h1>
//     )
// }
// function App(){
//     const [showing,setShowing] = useState(false);
//     const onClick = ()=> setShowing(prev=> !prev);
//     return(
//         <div>
//             {showing ? <Hello/> : null}
//             <button onClick={onClick}>{showing ? "hide" : "show"}</button>
//         </div>
//     );
// };

// export default App;

//***********3***********

// map() 함수
// -> 배열을 가지고 있을 때 각각의 element들을 바꿀 수 있게 해줌map() 은 ()에 함수를 넣을 수 있는데 배열의 모든 item에 대해 실행됨
// 즉 배열에 6개의 item이 있다면 6번 함수가 실행됨
// 그리고 그 함수로부터 내가 return한 값은 새로운 배열에 들어가게 함
// [‘a’, ‘b’, ‘c’, ‘d’, ‘e’, ‘f’].map(() => “:)”)
// -> [‘:)’, ‘:)’, ‘:)’, ‘:)’, ‘:)’ ‘:)’] 인 새 배열을 만들어줌
// 다만 기존의 배열에 접근할 수 없게됨
// 그러나 map은 함수의 첫 번째 argument로 현재의 item을 가지고 올 수 있음
// map(item) -> item이나 원하는 어떤 변수명을 넣으면 item자체를 리턴하는 것도 가능
// map((item) => item.toUpperCase())
// 로 하면 item이 대문자로 바뀐 새로운 배열은 만들어줌

// 리액트는 기본적으로 list에 있는 모든 item을 인식하기 때문에 key를 넣어 고유하게 만들어줘야함
// map의 첫 번째 argument는 값이고 두번째는 index 즉 숫자를 의미함
// 그래서
// {toDos.map((item, index) => {item})}
// 만들어줌
// 즉, 
// {{item},{item},{item}...}
// 배열을 만들어 각자 고유의 key를 가지게 함

// import { useState } from "react"

// function App(){
//     const [toDo,setTodo] = useState("");
//     const [toDos,setTodos] = useState([])
//     const onChange =(event)=>setTodo(event.target.value);
//     const onSubmit = (event)=>{
//         event.preventDefault();
//         if(toDo === ""){
//             return;
//         }
//         setTodos((currentArray) => [toDo,...currentArray])
//         setTodo("");
//     };
//     console.log(toDos)
//     return(
//         <div>
//             <h1>My To Dos ({toDos.length})</h1>
//             <form onSubmit={onSubmit}>
//                 <input onChange={onChange} value={toDo} type="text" placeholder="Write your to do..."/>
//                 <button>Add To Do</button>
//             </form>
//             <hr/>
//             <ul>
//                 {toDos.map((item,index)=><li key={index}>{item}</li>)}
//             </ul>
//             {/* map()은 array들의 item들을 바꿔주는 역할 */}
//         </div>
//     );
// };

// export default App;

// Movie 컴포넌트는 medium_cover_image, title, summary, genres 
// -> 이 props를 모두 부모 컴포넌트로부터 받아옴

// coverImg={movie.medium_cover_image}
// 자바스크립트에서는 medium_cover_image가 아닌mediumCoverImage로 쓰지만
// 내가 만든 컴포넌트라 아무렇게 써도 됨.
// 그러나 movie.medium_cover_image 에서는 API에서 가져오므로 API 정보와 똑같이 써야함 
// 이미지 element들을 alt속성을 가짐 -> alt={title}


// home 라우트(페이지)는 모든 영화를 보여주고
// Movie 라우트는 영화 하나만 보여줌
// 이렇게 라우트 별로 생각해야함
// home 라우트는 기본적으로 App 컴포넌트 전체를 가지고 있게 만듦

// App에 있는 것을 모두 Home라우트로 옮겼으니 
// App.js는 라우터를 렌더한다.

// 1) 더이상 Switch는 쓰이지 않는다(버젼 6이상). 이제 그역할은 Routes가 대신할 것이다 (공식문서 참조), 또한 Route 태그의 exact 속성도 더이상 쓰이지 않으며 Routes가 알아서 최적의 경로배정을 해주기 때문에 Switch를 썼을 때의 고민을 말끔히 해결해 준다
// 2) BROWSER ROUTER가 일반적인 방식이며, HASHROUTER는 잘 쓰이진 않는다(뒤에 #이런게 붙음)
// 3) 한 라우트에서 다른 라우트로 가고 싶을 땐 a태그의 href을 속성이 가장 먼저 생각이 날 것이고, 실제로도 그렇게 코드를 작성하면 이동이 가능하다. 하지만 페이지 전체가 새로고침되기 때문에 리액트의 장점을 깎아먹는다. 따라서 재실행되는 것을 막기 위해 react-router-dom에서 import한 link 태그를 사용하면 된다
