// First try
{
  let chessboard = '';

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (i % 2) {
        if (j % 2) {
          chessboard += ' ';
        } else {
          chessboard += '#';
        }
      } else {
        if (j % 2) {
          chessboard += '#';
        } else {
          chessboard += ' ';
        }
      }
    }
    chessboard += '\n';
  }
  console.log(chessboard);
}

// Adding size variable to return the chessboard with its value

{
  const size = 8;
  let chessboard = '';

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const evenColumn = j % 2;
      const evenLine = i % 2;

      if (evenLine) {
        if (evenColumn) {
          chessboard += ' ';
        } else {
          chessboard += '#';
        }
      } else {
        if (evenColumn) {
          chessboard += '#';
        } else {
          chessboard += ' ';
        }
      }
    }
    chessboard += '\n';
  }
  console.log(chessboard);
}
