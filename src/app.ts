//our root app component
import {Component, NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {BookmarkModule} from 'aytacworld-angular-bookmark';

@Component({
  selector: 'my-app',
  template: `<aw-bookmark [date]="input" ></aw-bookmark>`,
})
export class App {
  input:Date = new Date();
}

@NgModule({
  imports: [ BrowserModule, BookmarkModule ],
  declarations: [ App ],
  bootstrap: [ App ]
})
export class AppModule {}