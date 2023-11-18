function bugFinder7 (w1,w2,w3) {
  let ss = SpreadsheetApp.getActiveSpreadsheet();
  let word1, word2, word3;
  word1 = w1.toLowerCase().trim();
  word2 = w2.toLowerCase().trim();
  if (w3 == "") {word3 = " ";} else { word3 = w3.toLowerCase().trim();};
  let text ="";
  let result = "";
  for (let i=3; i<= ss.getLastRow() ; i++){       //i - строка j - столбец
  text = "";
    for (let j of [4,16,17,18,19,20]) {
          text = text + ss.getActiveSheet().getRange(i,j).getValue();
          text = text.toLowerCase();
    };
    if (text.includes(word1) * text.includes(word2) * text.includes(word3) == 1) {
      result = result + " " + ss.getActiveSheet().getRange(i,3).getValue();
    };
  };
  if (result == ""){return ("Подходящих Багрепортов нет");} else { return (result);};
};