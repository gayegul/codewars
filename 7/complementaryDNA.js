function DNAStrand(dna) {
  dna = dna.split("");
  for(var i = 0; i < dna.length; i++) {
    switch(dna[i]) {
      case "A":
        dna[i] = "T";
        break;
      case "T":
        dna[i] = "A";
        break;
      case "G":
        dna[i] = "C";
        break;
      case "C":
        dna[i] = "G";
        break;
      }
   }
    return dna.join("");
}
