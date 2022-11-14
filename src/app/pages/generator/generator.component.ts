import { Component, OnInit } from '@angular/core';
import { toJpeg } from 'html-to-image';
import * as socketIO from 'socket.io-client';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.scss'],
})
export class GeneratorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.socketClient = socketIO.io(environment.apiUrl);
    this.socketClient.on('onShared', (data: any) => {
      console.log('Alguien compartió un meme\n', data);
    });
  }

  socketClient: any;

  notifications: number = 0;

  title = 'meme-generator';
  file: any;
  upper: string = 'Hola <br> Mundo';
  lower: string = 'Hola <br> Mundo';
  color: string = '';
  fontSize: number = 16;
  dataUrl: string = '';
  filename: string = '';

  // @ViewChild('imageElement') imageElement: any; // Permite guardar el tag de HTML del tag con id imageElement

  doOnChange(target: any) {
    this.file = target.files[0];
    const reader = new FileReader();

    reader.onload = (event: any) => {
      console.log('File loaded');
      this.dataUrl = event.target.result;
    };
    reader.readAsDataURL(this.file);
  }

  saveImage() {
    const img: any = document.querySelector('#meme');
    toJpeg(img).then((e: any) => {
      const anchor = document.createElement('a');
      anchor.download = 'cool-meme.jpg';
      anchor.href = e;
      anchor.click();
    });
  }
  shareMeme() {
    this.socketClient.emit('share', {
      name: 'Cool meme',
    });
  }
}
