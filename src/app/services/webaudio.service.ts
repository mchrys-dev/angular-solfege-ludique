import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebaudioService {

  C4: any = null;
  Csharp4: any = null;
  Db4: any = null;
  D4: any = null;
  Dsharp4: any = null;
  Eb4: any = null;
  E4: any = null;
  Fb4: any = null;
  Esharp4: any = null;
  F4: any = null;
  Fsharp4: any = null;
  Gb4: any = null;
  Gsharp4: any = null;
  Ab4: any = null;
  A4: any = null;
  Asharp4: any = null;
  Bb4: any = null;
  B4: any = null;
  Cb5: any = null;
  Bsharp4: any = null;

  C5: any = null;
  Csharp5: any = null;
  Db5: any = null;
  D5: any = null;
  Dsharp5: any = null;
  Eb5: any = null;
  E5: any = null;
  Fb5: any = null;
  Esharp5: any = null;
  F5: any = null;
  Fsharp5: any = null;
  Gb5: any = null;
  Gsharp5: any = null;
  Ab5: any = null;
  A5: any = null;
  Asharp5: any = null;
  Bb5: any = null;
  B5: any = null;
  Cb6: any = null;
  Bsharp5: any = null;

  sounds: any[] = [];
  buffer: any = null;
  audioCtx = new AudioContext();

  sources: any[] = [
    'C4', 'Csharp4', 'Db4', 'D4', 'Dsharp4', 'Eb4', 'E4', 'Fb4', 'Esharp4', 'F', 'Fsharp4', 'Gb4', 'G4', 'Gsharp4', 'Ab4', 'A4', 'Asharp4', 'Bb4', 'B4', 'Cb5', 'Bsharp4',
    'C5', 'Csharp5', 'Db5', 'D5', 'Dsharp5', 'Eb5', 'E5', 'Fb5', 'Esharp5', 'F', 'Fsharp5', 'Gb5', 'G5', 'Gsharp5', 'Ab5', 'A5', 'Asharp5', 'Bb5', 'B5', 'Cb5', 'Bsharp5'
  ];

  constructor() { 
    this.sounds.forEach(function(this: any, soundName: any) {
      this.loadSound(this.audioCtx, this.buffer, soundName);
    }.bind(this));
  }

  loadSound(this: any, audioCtx: any, buffer: any, bufferName: any) {
    const request = new XMLHttpRequest();
    request.open("GET", "assets/sounds/" + bufferName + ".mp3");
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
