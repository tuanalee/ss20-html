function inCacSoChiaHetCho5(N) {
    let result = [];
    for (let i = 1; i <= N; i++) {
      if (i % 5 === 0) {
        result.push(i); 
      }
    }
    console.log("Các số chia hết cho 5 là:", result.join(", "));
  }
