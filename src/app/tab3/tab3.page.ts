import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  ser = 'ser';
  ser1 = '';
  ser2 = '';
  API_KEY = 'AIzaSyDPG9vOhnT8g_NYQ33bQocDWS8l7AH4AT0';
  SerFname = 'shahid';
  SerLastname = 'kapoor';
  SerResult1: any;
  SerResult2: any;
  calorieAmount: number;
  servingWeight: number;
  foodDisplayName: string;
  FoodIcp4: null;
  result;
  constructor(private SerhttpIcp4: HttpClient) {}

  KGS() {
    this.ser = '';
    this.ser1 = 'ser';
    this.ser2 = '';
    this.SerResult1 = '';
    this.SerResult2 = '';
  }

  foodSer2() {
    this.ser = '';
    this.ser1 = '';
    this.ser2 = 'ser';
    this.SerResult1 = '';
    this.SerResult2 = '';
  }

  SerList() {
    this.ser = 'ser';
    this.ser1 = '';
    this.ser2 = '';
    this.SerResult1 = '';
    this.SerResult2 = '';
  }

  SerShow1() {
    this.SerhttpIcp4.get('https://kgsearch.googleapis.com/v1/entities:search?query=' +
        this.SerFname + '+' + this.SerLastname + '&key=' + this.API_KEY + '&limit=1&indent=True')
        .subscribe((res) => {
          this.SerResult1 = res;
        });
  }

  ngOnInit() {
    this.calorieAmount = 0.0;
    this.servingWeight = 0.0;
  }
  
  getNutrition() {
    if ((this.FoodIcp4 != null)) {
      this.SerhttpIcp4.get('https://api.nutritionix.com/v1_1/search/' +
          this.FoodIcp4 + '?results=0:1&fields=*&appId=9401e382&appKey=2a2056e203d636016e2756e125fdc9f8')
          .subscribe((result) => {
            this.result = result;
            this.foodDisplayName = this.result.hits[0].fields.item_name;
            this.calorieAmount = this.result.hits[0].fields.nf_calories;
            this.servingWeight = this.result.hits[0].fields.nf_serving_weight_grams;
          });
    }
  }
  getFetchData(text: string) {
    if (text) {
      this.getNutrition();
      this.SerResult2 = 'ser2';
    }
    if (text === '') {
      alert('Please enter a food to search');
    }
  }
}
