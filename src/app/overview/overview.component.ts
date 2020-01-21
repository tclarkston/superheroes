import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SuperHero } from 'src/Models/SuperHero';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})

export class OverviewComponent implements OnInit {

  hero: any = {};
  heroes: any = [];
  heroModel: SuperHero = new SuperHero();
  
  heroForm = new FormGroup({
    name: new FormControl(),
    team: new FormControl(),
    intelligence: new FormControl(),
    strength: new FormControl(),
    combat: new FormControl()
  })
  
  constructor() { }
 
  ngOnInit() {
    this.hero = { id: 0, name: 'Dark Titan', team: '', intelligence:60,strength:40,combat:68,pin:'' };
    this.heroes.push({ id: 1, name: 'Captain Water Guardian', team: '', intelligence:48,strength:62,combat:71,pin:'' });
    this.heroes.push({ id: 2, name: 'Agent Hypnotic Monarch', team: '', intelligence:91,strength:5,combat:32,pin:'' });
    this.heroes.push({ id: 3, name: 'The Smooth Prince', team: '', intelligence:14,strength:57,combat:29,pin:'' });
  
    //Best is to use a model object
    this.heroModel.id = 1;
    this.heroModel.name = "Joe Schmoe";
    this.heroModel.intelligence = 25;
    this.heroModel.strength = 50;
    this.heroModel.combat = 75;
  }

  setScores(): void{
    var lastHero = this.heroes.slice(-1).pop();

    this.heroes.push(
      { 
        id: lastHero.id + 1,
        name: this.heroForm.get("name").value, 
        team: this.heroForm.get("team").value, 
        intelligence: this.heroForm.get("intelligence").value,
        strength: this.heroForm.get("strength").value,
        combat: this.heroForm.get("combat").value,
        pin:'' }
    );
  }
}
