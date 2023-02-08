import {
  Component,
  Injectable,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'shared-modal',
  templateUrl: './shared-modal.component.html',
  styleUrls: ['./shared-modal.component.scss'],
})
@Injectable()
export class SharedModalComponent implements OnInit {
  @Input() title: string;
  @Input() buttonTitle: string;
  @ViewChild('modal')
  private modalContent: TemplateRef<SharedModalComponent>;
  private modalRef: NgbModalRef;

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}

  open(): void {
    this.modalRef = this.modalService.open(this.modalContent);
    // this.modalRef.result.then(
    //   () => {
    //     console.log('When user closes');
    //   },
    //   () => {
    //     console.log('Backdrop click');
    //   }
    // );
  }

  async close() {
    this.modalRef.close();
  }
}
