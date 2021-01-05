class Player {
    constructor() {
        this.index = null;
        this.distance = 0;
        this.name = null;
        this.score =0;
    }

    getCount() {
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value", (data) => {
            playerCount = data.val();
        })
    }

    updateCount(count) {
        database.ref('/').update({
            playerCount: count
        });
    }
    getScore1(){
        var score =database.ref('Score/player1');
        score.on("value", (data)=>{
        ps1 = data.val();
        })
    }
    updateS1(vari){
        database.ref('Score').update({
            'player1' : vari
        })
    }
    getScore2(){
        var score =database.ref( 'Score/player2');
        score.on("value" ,(data)=>{
        ps2 = data.val();
        })
    }
    
    updateS2(vari){
        database.ref('Score').update({
            'player2' : vari
        })
    }



    update() {
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            name: this.name,
            distance: this.distance,
            score:this.score
        });
    }

    static getPlayerInfo() {
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value", (data) => {
            allPlayers = data.val();
        })
    }

    
}
