# Redux
## Redux 구조
1. Action : 상태 변화를 일으킬 때 참조하는 객체입니다. (변경 요청)
2. Reducer : **상태를 변화시키는** 로직이 있는 함수입니다. (상태 값을 변경)
3. Store : 애플리케이션의 상태 값들을 내장하고 있다. (저장소)
4. Dispatch : 액션을 스토어에 전달하는 것을 의미합니다. (Action을 전달)
5. Subscribe : 스토어 값이 필요한 컴포넌트는 스토어를 구독합니다. (알림을 받음)
