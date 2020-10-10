import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class SearchBarComponent extends Component {

   @tracked title = "";
   @tracked director = "";
   @tracked genre = "";
   @tracked ratings = [];
   @tracked plot = "";
   @tracked img = "";
   @tracked name = "";
   @tracked item = false;

    @action
    async model(){
        var finaltitle= encodeURI(this.title);
        let response = await fetch(`http://www.omdbapi.com/?t=${finaltitle}&apikey=da6baf2e`);
        let data = await response.json();
        this.director = data.Director;
        this.genre = data.Genre;
        this.ratings = data.Ratings;
        this.plot = data.Plot;
        this.img = data.Poster;
        this.name = data.Title;
        this.item = true;
        console.log(data);
    }

    @action
    limpiar(){
        this.title = "";
        this.item = false;

    }


}