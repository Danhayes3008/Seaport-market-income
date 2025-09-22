//#region Commodities
var commodities = 
[
    {name: "cocoa", gold: 50, stone: 0, wood: 0, iron: 0, fish: 0},
    {name: "wheat", gold: 0, stone: 0, wood: 0, iron: 0, fish: 60},
    {name: "grape vine", gold: 0, stone: 0, wood: 45, iron: 0, fish: 0},
    {name: "sugarcane", gold: 0, stone: 20, wood: 0, iron: 0, fish: 0},
    {name: "wine", gold: 0, stone: 27, wood: 0, iron: 0, fish: 80},
    {name: "flour", gold: 59, stone: 0, wood: 53, iron: 0, fish: 0},
    {name: "cloth", gold: 0, stone: 0, wood: 0, iron: 10, fish: 0},
    {name: "oil", gold: 100, stone: 0, wood: 0, iron: 0, fish: 120},
    {name: "fuel", gold: 200, stone: 80, wood: 0, iron: 0, fish: 0},
    {name: "sugar", gold: 0, stone: 0, wood: 0, iron: 14, fish: 80},
]
//#endregion

//#region table functions
BuildCommoditiesTable(commodities)

function BuildCommoditiesTable(data){
    var priceSheet = document.getElementById('commoditiesTable')
    for (var i = 0; i< data.length; i++){

        // Calculates the amount gained per 100 units sold
        var Gold = data[i].gold * 100;
        var Stone = data[i].stone * 100;
        var Wood = data[i].wood * 100;
        var Iron = data[i].iron * 100;
        var Fish = data[i].fish * 100;

        // sets the data to a string so an comma can split up the numbers
        const formattedGold = Gold.toLocaleString();
        const formattedStone = Stone.toLocaleString();
        const formattedWood = Wood.toLocaleString();
        const formattedIron = Iron.toLocaleString();
        const formattedFish = Fish.toLocaleString();

        // creates the rows based on the data in our array
        var row = `<tr>
                    <td>${data[i].name}</td>
                    <td>${formattedGold}</td>
                    <td>${formattedStone}</td>
                    <td>${formattedWood}</td>
                    <td>${formattedIron}</td>
                    <td>${formattedFish}</td>
                  </tr>`
        priceSheet.innerHTML += row;
    }
}
//#endregion