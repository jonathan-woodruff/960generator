/* select and display one of the 960 possible permutations */
const generateButton = document.getElementById('generate-button');

const placePieceRandomly = (availableSlots, selectedPositions, pieceStr) => {
    const randomIndex = Math.floor(Math.random() * availableSlots.length);
    selectedPositions[availableSlots[randomIndex]] = pieceStr;
    availableSlots.splice(randomIndex, 1);
    console.log(randomIndex);
    console.log(selectedPositions);
    console.log(availableSlots);
    return [availableSlots, selectedPositions, randomIndex];
};

const placeBishop2 = (availableSlots, selectedPositions, bishop1Index) => {
    //The other bishop must be placed on an different-colored square as the first bishop
    let bishop2AvailableSlots;
    if (bishop1Index === 1 || bishop1Index === 3 || bishop1Index === 5 || bishop1Index === 7) {
        bishop2AvailableSlots = [0, 2, 4, 6]
    } else {
        bishop2AvailableSlots = [1, 3, 5, 7]
    }
    let randomIndex = Math.floor(Math.random() * 4);
    const bishop2Position = bishop2AvailableSlots[randomIndex];
    console.log(bishop2Position);
    console.log(selectedPositions);
    console.log(availableSlots);
    selectedPositions[bishop2Position] = "B";
    availableSlots.splice(availableSlots.findIndex((position) => position === bishop2Position), 1);
    return [availableSlots, selectedPositions];
};

const placeRooksAndKing = (availableSlots, selectedPositions) => {
    //place rook 1, then the king, then rook 2
    selectedPositions[availableSlots.shift()] = "R"; //rook 1
    selectedPositions[availableSlots.shift()] = "K"; //king
    selectedPositions[availableSlots.shift()] = "R"; //rook 2
    return selectedPositions;
    
};

const doSetup = () => {
    let availableSlots = [0, 1, 2, 3, 4, 5, 6, 7];
    let selectedPositions = ["", "", "", "", "", "", "", ""];
    let randomIndex;
    [availableSlots, selectedPositions, bishop1Index] = placePieceRandomly(availableSlots, selectedPositions, "B"); //bishop 1
    [availableSlots, selectedPositions] = placeBishop2(availableSlots, selectedPositions, bishop1Index); //bishop 2
    [availableSlots, selectedPositions] = placePieceRandomly(availableSlots, selectedPositions, "N"); //knight 1
    [availableSlots, selectedPositions] = placePieceRandomly(availableSlots, selectedPositions, "N"); //knight 2
    [availableSlots, selectedPositions] = placePieceRandomly(availableSlots, selectedPositions, "Q"); //Queen
    selectedPositions = placeRooksAndKing(availableSlots, selectedPositions); //rook 1, king, rook 2
    //display the randomly generated starting position
    document.getElementById('a1').innerHTML = selectedPositions[0];
    document.getElementById('a8').innerHTML = selectedPositions[0];
    document.getElementById('b1').innerHTML = selectedPositions[1];
    document.getElementById('b8').innerHTML = selectedPositions[1];
    document.getElementById('c1').innerHTML = selectedPositions[2];
    document.getElementById('c8').innerHTML = selectedPositions[2];
    document.getElementById('d1').innerHTML = selectedPositions[3];
    document.getElementById('d8').innerHTML = selectedPositions[3];
    document.getElementById('e1').innerHTML = selectedPositions[4];
    document.getElementById('e8').innerHTML = selectedPositions[4];
    document.getElementById('f1').innerHTML = selectedPositions[5];
    document.getElementById('f8').innerHTML = selectedPositions[5];
    document.getElementById('g1').innerHTML = selectedPositions[6];
    document.getElementById('g8').innerHTML = selectedPositions[6];
    document.getElementById('h1').innerHTML = selectedPositions[7];
    document.getElementById('h8').innerHTML = selectedPositions[7];
};

generateButton.addEventListener('click', doSetup);

doSetup();