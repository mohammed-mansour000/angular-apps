export class DataApiObjectArticle{
    id:number;
    name:String;
    description:String;
    year:String;
    linkToImdb:String;
    image:String;

    constructor(id:number, name:String, description:String, year:String, linkToImdb:String, image:String){
        this.id = id;
        this.name = name;
        this.description = description;
        this.year = year;
        this.linkToImdb = linkToImdb;
        this.image = image;
    }

}

export class DataApiObjectTeam{
    id:number;
    name:String;
    subtitle:String;
    image:String;

    constructor(id:number, name:String, subtitle:String, image:String){
        this.id = id;
        this.name = name;
        this.subtitle = subtitle;
        this.image = image;
    }

}

export class DataApiObjectDirector{
    id:number;
    name:String;
    works:String;
    linkToWiki:String;
    image:String;

    constructor(id:number, name:String, works:String, linkToWiki:String, image:String){
        this.id = id;
        this.name = name;
        this.works = works;
        this.linkToWiki = linkToWiki;
        this.image = image;
    }

}