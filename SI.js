   let P, R, T;

        P = 300000;
        T = 10;

        if (P >= 500000 && T >= 10) {
            R = 9.5;
        }
        else if (P >= 300000 && T >= 8) {
            R = 7.5;
        }
        else if (P >= 150000 && T >= 5) {
            R = 4.5;
        }
        else {
            R = 2.5;
        }

        let SI = P * R * T / 100;

        let netPrice = P + SI ;

        console.log(netPrice);
