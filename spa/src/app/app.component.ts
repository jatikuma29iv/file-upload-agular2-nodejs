import { Component } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-file-upload';
  apiUrl = 'http://localhost:3000';
  public uploader: FileUploader = new FileUploader({url: `${this.apiUrl}/upload`});
}
