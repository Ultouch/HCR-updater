import { Component } from '@angular/core';
const checkInternetConnected = (window as any).require('check-internet-connected');
const uaup = (window as any).require('uaup-js');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  connected:number = 0;

  ngAfterViewInit(){
    let progress:any = document.getElementById('progress');
    let label:any = document.getElementById('label');
    checkInternetConnected().then(() => { 
      this.connected = 0;
      const defaultStages = {
        Checking: "Initialisation",
        Found: "Mise à jour",
        NotFound: "Sychonisation",
        Downloading: "Téléchargement",
        Unzipping: "Installation",
        Cleaning: "Optimisation",
        Launch: "Démarrage"
      };
      const updateOptions = {
        gitUsername: "Ultouch",
        gitRepo: "Hcr-updater",
      
        appName: "hcr",
        appExecutableName: "hcr.exe",
      
        progressBar: progress,
        label: label,
        stageTitles: defaultStages,
      };
      uaup.Update(updateOptions);
    }).catch(() => {
      this.connected = 1;
      this.ngAfterViewInit();
    });
  }
  
}