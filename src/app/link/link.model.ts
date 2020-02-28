export class Link{
    title: string;
    link:string;
    votes:number;  

    constructor(title:string, link:string, votes?:number){
        this.title = title;
        this.link = link;
        this.votes = votes || 0;//Si no trae valor 'votes' se asigna 0
    }

    voteUp(){
        this.votes++;
    }

    voteDown(){
        this.votes--;
    }
}

