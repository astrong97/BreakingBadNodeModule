// used to prompt a choice in character selection
const inquirer = require("inquirer");

const breakingBSearch = require("../CustomNode/index.js");

// helper function for printing
const _print = (kwList) => {
  console.log("- - - - - - - - - - - - - - - - - - - - -");
  console.log("- - - - - - - - - - - - - - - - - - - - -");
  console.log(`Name: ${kwList[0].name}`);
  console.log(`Birthday: ${kwList[0].birthday}`);
  console.log(`Occupation: ${kwList[0].occupation}`);
  console.log(`Nickname: ${kwList[0].nickname}`);
  console.log(`Status: ${kwList[0].status}`);
  console.log("- - - - - - - - - - - - - - - - - - - - -");
  console.log("- - - - - - - - - - - - - - - - - - - - - \n");
};


 const _selectCharacterPrompt = async (kwList) => {
     // shows character choices
  const bCharacters = kwList;

  return inquirer.prompt({
    type: "list",
    name: "userSelected",
    message: "choose the character you want to see more information on.",
    choices: bCharacters,
  });
};


const searchStart = async (args) => {
  try {
    const { keyword } = args;

    // creates list from keyword search of characters
    const searchByKeywordList = await breakingBSearch.searchCharacters(keyword);

    // select a character prompt
    const characterSelection = await _selectCharacterPrompt(searchByKeywordList);

    // get character ID from selected character
    let character_id = 0;
    for (let count = 0; count < searchByKeywordList.length; count++) {
        if (searchByKeywordList[count].name === characterSelection.userSelected) {
            character_id = searchByKeywordList[count].char_id;
        }

    }

    // get character details from selected character
    const characterDetails = await breakingBSearch.getCharacter(character_id);

    // print out character details
    _print(characterDetails);
  
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  searchStart,
};