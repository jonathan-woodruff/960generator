/* select and display one of the 960 possible permutations */
const generateButton = document.getElementById('generate-button');

const placePieceRandomly = (availableSlots, selectedPositions, pieceStr) => {
    let randomIndex = Math.floor(Math.random() * availableSlots.length);
    selectedPositions.push(availableSlots[randomIndex]);
    availableSlots.splice(randomIndex, 1);
    return [availableSlots, selectedPositions];
};

const placeBishop2 = (availableSlots, selectedPositions) => {
    //The other bishop must be placed on an different-colored square as the first bishop
    const bishop1Position = selectedPositions[0];
    let bishop2AvailableSlots = [];
    if (bishop1Position === 1 || bishop1Position === 3 || bishop1Position === 5 || bishop1Position === 7) {
        bishop2AvailableSlots = [2, 4, 6, 8]
    } else {
        bishop2AvailablleSlots = [1, 3, 5, 7]
    }
    let randomIndex = Math.floor(Math.random() * 4);
    const bishop2Position = bishop2AvailableSlots[randomIndex];
    selectedPositions.push(bishop2Position);
    availableSlots.splice(availableSlots.findIndex(bishop2Position), 1);
    return [availableSlots, selectedPositions];
};

const placeRooksAndKing = (availableSlots, selectedPositions) => {
    //place rook 1, then the king, then rook 2
    for (let i = 0; i < 3; i++) {
        selectedPositions.push(availableSlots.shift());
    }
    return selectedPositions;
    
};

const doSetup = () => {
    let availableSlots = [1, 2, 3, 4, 5, 6, 7, 8];
    let selectedPositions = ["Z", "Z", "Z", "Z", "Z", "Z", "Z", "Z"]; //Z is a placeholder
    [availableSlots, selectedPositions] = placePieceRandomly(availableSlots, selectedPositions); //bishop 1
    [availableSlots, selectedPositions] = placeBishop2(availableSlots, selectedPositions); //bishop 2
    [availableSlots, selectedPositions] = placePieceRandomly(availableSlots, selectedPositions); //knight 1
    [availableSlots, selectedPositions] = placePieceRandomly(availableSlots, selectedPositions); //knight 2
    [availableSlots, selectedPositions] = placePieceRandomly(availableSlots, selectedPositions); //Queen
    selectedPositions = placeRooksAndKing(availableSlots, selectedPositions); //rook 1, king, rook 2
    // Now, selectedPositions stores the position corresponding to [B1, B2, N1, N2, Q, R1, K, R2]

};

generateButton.addEventListener('click', doSetup);