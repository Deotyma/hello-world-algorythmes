const input = process.argv[2];
const pingsPongs = input.split(" ");
let pings = 0
let pongs = 0

for (let i = 0; i < pingsPongs.length; i++) {
    if (pingsPongs[i] === "ping") {
        pings++
    } else {
        pongs++
    }
    
}

console.log("Match result ping vs pong: " + pings + "-" + pongs)