import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    cards = {
        heart: {},
        diamond: {},
        club: {},
        spade: {}
    };
    cards_by_numbers = [];
    total_cards_count = 52;
    game = [];

    constructor() {
        console.log()
        for (var i = 1; i <= 52; i++) this.cards_by_numbers.push(i);
        for (let i = 1; i <= 13; i++) {
            this.cards["heart"][i] = false;
            this.cards["diamond"][i] = false;
            this.cards["club"][i] = false;
            this.cards["spade"][i] = false;
        }
        this.generate_game();
    }

    ngOnInit() {
    }

    generate_game() {
        var game_cnt = 0;
        this.game = [];
        // console.log("test : ", this.cards_by_numbers, _.sample([1, 3, 45]))
        while(game_cnt<52) {
            // var random_num = Math.floor(Math.random() * 52) + 1
            var random_num = _.sample(this.cards_by_numbers);
            // var random_num = _.random(1, 52);
            var random_card = "";
            if(random_num>=1 && random_num<=13) {
                random_card = "heart_"+random_num;
            } else if(random_num>=14 && random_num<=26) {
                random_card = "diamond_"+random_num;
            } else if(random_num>=27 && random_num<=39) {
                random_card = "club_"+random_num;
            } else if(random_num>=40 && random_num<=52) {
                random_card = "spade_"+random_num;
            }
            if(!this.game.includes(random_card)) {
                this.game.push(random_card);
                game_cnt++;
            }
        }
        console.log("this.game : ", this.game);
    }

}
