import { MessageService } from '../common/message.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  constructor(public messageService: MessageService) {  }//template 영역에서도 사용을 위해 service를 public으로 사용
  ngOnInit(): void {}
}
