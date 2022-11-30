import { Component } from '@angular/core';


interface Evaluation {
  tooth: string;
  procedure: string;
  face: string;
}

@Component({
  selector: 'app-dentist-screen',
  templateUrl: './dentist-screen.component.html',
  styleUrls: ['./dentist-screen.component.css']
})

export class DentistScreenComponent {

  test = {
    color: "#707070",
  }

  evaluation = {
    tooth: '',
    procedure: '',
    face: ''
  }

  onClickTest(event: { target: any; srcElement: any; currentTarget: any; }) {
    var target = event.target || event.srcElement || event.currentTarget;

    console.log(event.currentTarget.id);

    this.evaluation.tooth = event.currentTarget.id;

    console.log(this.evaluation.tooth)
    console.log(this.evaluation.procedure)
    console.log(this.evaluation.face)

    if (this.test.color === "#34C04C") {
      this.test.color = "#707070";
    } else if (this.test.color === "#707070") {
      this.test.color = "#34C04C";
    }
  }

  onSelectProcedure(event: { target: any; srcElement: any; currentTarget: any; }) {
    var target = event.target || event.srcElement || event.currentTarget;
    console.log(event.currentTarget.name);
  }

  onSelectFace(event: { target: any; srcElement: any; currentTarget: any; }) {
    var target = event.target || event.srcElement || event.currentTarget;
    console.log(target.value);
  }

  onClickAdd() {}


}

