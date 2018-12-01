var db = [
    {name:'Guddu', email:'guddu@gmail.com',age:27},
    {name:'Deepak', email:'deepak@gmail.com',age:24},
    {name:'Sonu', email:'sonu@gmail.com',age:22}
];

(function Avatars(db){
    this.init = function(){
        this.generateList();
    };

    this.generateList = function(){
        var parent = document.querySelector('#parent_avatars');
        var template = '';
        for(var i = 0; i < db.length; i++) {
            template += '<div class="col-sm-4">';
            template += '<div class="card">';
            template += '<div class="card-delete" data-card="' + i +'">x</div>';
            template += '<div class="card-block">';
            template += '<h3 class="card-title">'+ db[i].name +'</h3>';
            template += '<p class="card-text"><strong>Email:</strong>'+ db[i].email +'</p>';
            template += '<p class="card-text"><strong>Age:</strong>'+ db[i].age +'</p>';
            template += '</div>';
            template += '</div>';
            template += '</div>';
        }
        parent.innerHTML = '';
        parent.insertAdjacentHTML('afterbegin',template);
    };
    
    this.init();
})(db);