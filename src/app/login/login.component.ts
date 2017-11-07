import { Component, OnInit, ChangeDetectorRef, TemplateRef } from '@angular/core';

import { BsModalService } from 'ngx-bootstrap/modal';
// import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal.service';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/combineLatest';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  modalRef: BsModalRef;
  subscriptions: Subscription[] = [];
  messages: string[] = [];
  constructor(private modalService: BsModalService, private changeDetection: ChangeDetectorRef) { }

  ngOnInit() {

  }
    

  //打开模态框
  openModal(template: TemplateRef<any>) {
    this.messages = []; 
    const _combine = Observable.combineLatest(
      this.modalService.onShow,
      this.modalService.onShown,
      this.modalService.onHide,
      this.modalService.onHidden
    ).subscribe(() => this.changeDetection.markForCheck());

    this.subscriptions.push(
      this.modalService.onShow.subscribe((reason: string) => {
        this.messages.push(`onShow event has been fired`);
      })
    );
    this.subscriptions.push(
      this.modalService.onShown.subscribe((reason: string) => {
        this.messages.push(`onShown event has been fired`);
      })
    );
    this.subscriptions.push(
      this.modalService.onHide.subscribe((reason: string) => {
        const _reason = reason ? `, dismissed by ${reason}` : '';
        this.messages.push(`onHide event has been fired${_reason}`);
      })
    );
    this.subscriptions.push(
      this.modalService.onHidden.subscribe((reason: string) => {
        const _reason = reason ? `, dismissed by ${reason}` : '';
        this.messages.push(`onHidden event has been fired${_reason}`);
        this.unsubscribe();
      })
    );

    this.subscriptions.push(_combine);

    this.modalRef = this.modalService.show(template);
  }

  unsubscribe() {
    this.subscriptions.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });
    this.subscriptions = [];
  }
}