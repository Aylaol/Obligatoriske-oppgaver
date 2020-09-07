       
        function isDateValid(dato) {
            var leap = isLeapYear(dato);
            var dayLgd = dayLengde(dato);   
            var monthLgd = monthLengde(dato);
            var tallLgd = tallLengde(dato);
            var punktPos = punktumPosisjon(dato);
            var yearLgd = yearLengde(dato);
            var d30 = day30(dato);
            var d31 = day31(dato);
            var feb = februar(dato);

            if ((tallLgd == true) && (punktPos == true) && (yearLgd == true) && (monthLgd == true) &&  (dayLgd == true) && (leap == true) && (d30 == true) && (d31 == true) && (feb == true)) {
                return true;
            }
            else {
                return false;
            }
        }

        function tallLengde(dato) {
            if (dato.length == 10) {
                return true;
            }
            else {
                return false;
            }
        }
       
        function punktumPosisjon(dato) {  
            if ((dato.charAt(2) == '.') && (dato.charAt(5) == '.')) {
                return true;
            }
            else {
                return false;
            }
        }

        function yearLengde(dato) {
            var year = dato.slice(6, 10);
            if (year.length === 4 && year >= '0000' && year <= '9999' ) {
                return true;
            }
            else {
                return false;
            }
        }

        function monthLengde(dato) {
            var month = dato.slice(3, 5);
            if ( month.length === 2 && month >= '01' && month <= '12' ) {
                return true;
            }
            else {
                return false;
            }
}

        function dayLengde(dato) {
            var day = dato.slice(0, 2);
            if (day.length === 2 && day >= '01' && day <= '28') {
                return true;
            }
            else if (day30(dato)) {
                return true;
            }
            else if (day31(dato)) {
                return true;
            }
            else if (februar(dato)) {
                return true;
            }
            else if (isLeapYear(dato)) {
                return true;
            }
            else {
                return false;
            }
        }

        function day30(dato) {
            var month = dato.slice(3, 5);
            var day = dato.slice(0, 2);
            if (month = '04' && '06' && '09' && '11' && day >= '01' && day <= '30') {
                return true;
            }
            else {
                return false;
            }
        }   

        function day31(dato) {
            var month = dato.slice(3, 5);
            var day = dato.slice(0, 2);
            if (month = '01' && '03' && '05' && '07' && '08' && '10' && '12' && day >= '01' && day <= '31') {
                return true;
            }
            else {
                return false;
            }
        }

        function februar(dato) {
            var month = dato.slice(3, 5);
            var day = dato.slice(0, 2);
            if (month = '02' && day >= '01' && day <= '29') {
                return true;
            }
            else {
                return false;
            }
        }
     
        function isLeapYear(dato) {
            var year = dato.slice(6, 10);
            var month = dato.slice(3, 5);
            var day = dato.slice(0, 2);
            if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0) && (month = '02' && day >= '01' && day <= '29')) {
                return true;
            }
            else {
                return false;
            }
        }
        