import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { lastValueFrom } from 'rxjs';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App implements OnInit {
  
  private http = inject(HttpClient);
  protected title = 'Dating app';
  protected members = signal<any> ([])

  async ngOnInit() {
   this.members.set(await this.getMembers())
  }

  async getMembers() {
    try{
      return await lastValueFrom(this.http.get('https://localhost:5001/api/members'));
    }catch(error) {
      console.log(error);
      throw error;
    }
    
  }

 
}
