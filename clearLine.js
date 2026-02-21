// clearLine.js

function checkFullLines(size){
  for(let row=0; row<size; row++){
    let isFull = true;
    const rowCells = [];
    for(let col=0; col<size; col++){
      const idx = row*size + col;
      const cell = document.querySelector(`[data-index='${idx}']`);
      rowCells.push(cell);
      if(!cell.classList.contains("filled")){
        isFull = false;
      }
    }

    if(isFull){
      // hapus semua cell di baris itu
      rowCells.forEach(c=>{
        c.classList.remove("filled");
        if(typeof explodeBlock === "function"){
          explodeBlock(c); // panggil efek ledakan
        }
      });

      // Geser semua baris di atas turun 1
      for(let r=row-1; r>=0; r--){
        for(let col=0; col<size; col++){
          const fromIdx = r*size + col;
          const toIdx = (r+1)*size + col;
          const fromCell = document.querySelector(`[data-index='${fromIdx}']`);
          const toCell = document.querySelector(`[data-index='${toIdx}']`);
          if(fromCell.classList.contains("filled")){
            toCell.classList.add("filled");
            fromCell.classList.remove("filled");
          }
        }
      }

      // Tambah skor
      if(typeof scoreText !== "undefined"){
        score += 50;
        scoreText.textContent = score;
      }
    }
  }
}