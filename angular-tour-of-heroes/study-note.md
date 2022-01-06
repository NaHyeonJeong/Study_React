# Angular 파일 진행 순서 정리
index.html => (main.ts) => app.module.ts =>    
app.component.ts(selector: 'app-root')/app.component.html/app.component.css(spec.ts는 단위 테스트용)   

결국 index.html의 app-root 태그의 자리에는 app.component.html에 있는 데이터가 뿌려짐

# Component 생성 코드
```bash
ng g component component-name
```
사용하고자 하는 component는 **app.module.ts**에 아래와 같이 적어줘야 한다
```typescript
@NgModule({
  declarations: [
    //사용하는 component를 계속 적어줘야함
    AppComponent,
    HeroesComponent
  ],
```

## interface 생성
```bash
ng g interface interface-name
```

# Pipe
템플릿 HTML에서 표시 값 변환을 선언할 수 있음    
값 변환 지정 위해 파이프 연산자 사용 (|)
```html
<h2>{{ hero.name | titlecase }} Details</h2>

{{hero | json}}

<p>today is {{today | date}}</p>
```

# Data Binding
## {value}
template(html) <- component(ts)   
html에 속성 값을 넣어줌   
## [property]="value"
template(html) <- component(ts)   
## (event)="handler
template(html) -> component(ts)   
이벤트 처리   
이벤트 종류를 () 안에 작성해줘야 함
## [(ngModel)]="property"
template(html) <-> component(ts)    
이벤트 처리와 변수 값을 넣어주는...   
두 가지 기능을 한 번에 처리할 수 있는 Two-way 방식   

단, [(ngModel)]="property"을 사용하기 위해서는 app.module.ts에 아래와 같이 선언해야 함
```typescript
@NgModule({
  imports: [
    BrowserModule,
    FormsModule //ngModel Directive가 포함되어 있음
  ],
```
## Class Binding
class binding의 형식은 [class.some-css-class]="some-condition"

# Directive
## Structural Directive : ngFor, ngIf
template을 동적으로 만들 때 사용함
```html
<ul class="heroes">
  <li *ngFor="let hero of heroes">
    <span class="badge">{{hero.id}}</span>
    {{hero.name}}
  </li>
</ul>
```
## Attribute Directive : ngModel

# Service
**@Injectable Decorator**를 선언해서 사용   

Component들에서 공통적으로 사용하는 것들을 Injector에 Service를 만들어놓고 Component에서는 불러서 사용함   

Angular는 Service를 Component에게 제공하기 위해 **DI(dependency Injection)** 사용
> Dependency Injection은 의존관계에 있는 다른 객체에게 새로운 객체를 제공하기 위한 방법

