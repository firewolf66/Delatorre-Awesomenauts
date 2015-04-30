game.resources = [
    /* Graphics. 
     * @example
     * {name: "example", type:"image", src: "data/img/example.png"},
     */
    //this adds a image for the background-tiles and meta tiles for the tiled application.
    {name: "background-tiles", type: "image", src: "data/img/background-tiles.png"},
    {name: "meta-tiles", type: "image", src: "data/img/meta-tiles.png"},
    //this makes the orc and his spear show up when u press play.
    {name: "player", type: "image", src: "data/img/orcSpear.png"},
    // this makes the image of the of the tower/castle to show up.
    {name: "tower", type: "image", src: "data/img/tower_round.svg.png"},
    //this makes the creep  show up when it is called into the map 
    {name: "creep1", type: "image", src: "data/img/brainmonster.png"},
    //this makes tthe title screen show upbefore the game
    {name: "title-screen", type: "image", src: "data/img/title.png"},
    //this shows before the game starts for the player knows what to do and or the game policys. 
    {name: "exp-screen", type: "image", src: "data/img/loadpic.png"},
    {name: "gold-screen", type: "image", src: "data/img/spend.png"},
    //the load screen shows up when the game is loading  
    {name: "load-screen", type: "image", src: "data/img/loadpic.png"},
    {name: "new-screen", type: "image", src: "data/img/newpic.png"},
    /* Atlases 
     * @example
     * {name: "example_tps", type: "tps", src: "data/img/example_tps.json"},
     */

    /* Maps. 
     * @example
     * {name: "example01", type: "tmx", src: "data/map/example01.tmx"},
     * {name: "example01", type: "tmx", src: "data/map/example01.json"},
     */
    {name: "level01", type: "tmx", src: "data/map/test.tmx"}


    /* Background music. 
     * @example
     * {name: "example_bgm", type: "audio", src: "data/bgm/"},
     */

    /* Sound effects. 
     * @example
     * {name: "example_sfx", type: "audio", src: "data/sfx/"}
     */
];