function nthRowPascal(n) {
   if(n === 0) {
      return [1]
   }

   let currentRow = [1];
   let previousRow;
   let nextNumber;

   for(let i = 1; i <= n; i++) {
      //store current row 
      previousRow = currentRow;
      //initialize new row
      currentRow = [1];

      for(let j = 1; j < i; j++) {
         nextNumber = previousRow[j] + previousRow[j - 1];
         currentRow.push(nextNumber);       
      }

      currentRow.push(1);
   }

   return currentRow;
}

module.exports = {
   nthRowPascal
}