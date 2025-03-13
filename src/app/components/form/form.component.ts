import { Component, inject, model } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [FormsModule ],
  templateUrl: './form.component.html'
})
export class FormComponent {

  hiringManagerName = model<string>(``);
  companyName = model<string>('');
  companyAddress = model<string>('');

  jobTitle = model<string>('');

}
