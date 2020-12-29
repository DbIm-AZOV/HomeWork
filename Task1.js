function converterRome(s) {
    if (!/^[IVXLCDMZ]+$/i.test(s)) return alert ('not roman')    
    if (s.length < 1 || s.length > 15) return alert("bad length");
    let n;
    let i = 0;
    let result = 0;
    if (s[i] === "M") {                             
        for( n = 0; s[i] === 'M'; n++) {                   //M - 1000
          i++;
        }
        if(n > 4) return;
        result += n * 1000
    }
    if (s[i] === 'D' || s[i] === 'C') {                       //D - 500
      if (s[i] === 'D') {
          i++;
          result += 500;
      }
      if (s[i] === 'C' && s[i+1] === 'M'){                    //CM - 900
          i += 2 
          result += 900;
      } else if (s[i] === 'C' && s[i+1] === 'D'){            //CD -400
          i+=2
          result += 400;
      } else {
          for(n = 0; s[i] === 'C'; n++) {               //C-100
            i++;
          }
          if(n > 4) return;
          result += n * 100;
        }
    }
    if (s[i] === 'L' || s[i] === 'X') {     
        if (s[i] === 'L') {                                 // L - 50
            i++;
            result += 50;
        }
        if (s[i] === 'X' && s[i+1] === 'C'){                // XC - 90
            i += 2 
            result += 90;
        } else if (s[i] === 'X' && s[i+1] === 'L'){            //XL - 40
            i += 2
            result += 40;
        } else {
            for(n = 0; s[i] === 'X'; n++) {                 //X - 10
              i++;
            }
            if(n > 4) return;
            result += n * 10;
          }
      }
      if (s[i] === 'V' || s[i] === 'I') {     
        if (s[i] === 'V') {                                 // V - 5
            i++;
            result += 5;
        }
        if (s[i] === 'I' && s[i+1] === 'X'){                // IX - 9
            i += 2 
            result += 9;
        } else if (s[i] === 'I' && s[i+1] === 'V'){            //IV - 4
            i += 2
            result += 4;
        } else {
            for( n = 0; s[i] === 'I'; n++) {                 //I - 1
              i++;
            }
            if(n > 4) return;
            result += n;
          }
      }
      if ((result < 1) || (result > 3999)) { return alert('Roman not in range')}
      return result
}