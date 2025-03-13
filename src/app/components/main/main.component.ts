import { Component } from '@angular/core';
import { FormComponent } from "../form/form.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main',
  imports: [FormComponent, CommonModule],
  templateUrl: './main.component.html'
})
export class MainComponent {

  isFormShow = false;

  hiringManagerName : string = `[Hiring Manager's Name]`;
  companyName : string = '[Company Name]';
  companyAddress : string = '[Company Address]';

  jobTitle : string = '[Job Title]';

  showHideButton() : void{

    this.isFormShow = !this.isFormShow;

  }


}
