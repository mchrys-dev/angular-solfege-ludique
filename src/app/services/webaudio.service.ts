import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebaudioService {

  // C: any = null;

  sounds: any[] = [];
  buffer: any = null;
  audioCtx = new AudioContext();

  sources: any[] = [];

  constructor() { 
    this.sounds.forEach(function(this: any, soundName: any) {
      this.loadSound(this.audioCtx, this.buffer, soundName);
    }.bind(this));
  }

  loadSound(this: any, audioCtx: any, buffer: any, bufferName: any) {
    const request = new XMLHttpRequest();
    request.open("GET", "assets/sounds/" + bufferName + ".wav");
    request.responseType = "arraybuffer";
    request.onload = function(this: any) {
      let undecodedAudio = request.response;
      audioCtx.decodeAudioData(undecodedAudio, (data: any) => {
        buffer = data;
        this.setSoundReady(buffer, bufferName);
      });
    }.bind(this);
    request.send();
  }

  setSoundReady(this: any, buffer: any, bufferName: any) {
    this[bufferName] = buffer;
  }

  play(buffer: any, time: any) {
    const source = this.audioCtx.createBufferSource();
    source.buffer = buffer;

    this.sources.push(source);
    console.log(this.sources);

    source.connect(this.audioCtx.destination);
    source.start(this.audioCtx.currentTime + time);
  };

  stopAll() {
    this.sources.forEach(function(source) {
      source.stop();
    });
  }
}
