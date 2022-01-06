import { Component } from '@angular/core';

@Component({
  //selector : 이 컴포넌트 요청 시 index.html에서 사용하는 element 이름 같은거
  selector: 'app-root', //매우 중요중요! index.html에 있었음
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '투어 오브 히어로즈';

  constructor(){
    console.log('App Component Constructor Called...')
  }
}
