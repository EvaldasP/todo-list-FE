import {
  Component,
  EventEmitter,
  Injectable,
  Input,
  OnInit,
  Output,
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
  @Input() isDisabled: boolean;

  @Output() submit = new EventEmitter();
  @Output() close = new EventEmitter();

  @ViewChild('modal')
  private modalContent: TemplateRef<SharedModalComponent>;
  private modalRef: NgbModalRef;

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}

  public open(): void {
    this.modalRef = this.modalService.open(this.modalContent);
    this.modalRef.result.then(
      () => {
        this.submit.emit();
      },
      () => {
        this.close.emit();
      }
    );
  }

  public onClose(): void {
    this.modalRef.close();
  }
}
