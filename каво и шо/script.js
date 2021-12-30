const f1 = new Date();
console.log(f1)
document.writeln(f1)
    function convertTimestamp(timestamp) {
        var d = new Date(timestamp * 1000),	
            yyyy = d.getFullYear(),// Год даты по местному
            	
            dd = ('0' + d.getDate()).slice(-2),	//двузначный формат		
            hh = d.getHours(),
            h = hh,
            min = ('0' + d.getMinutes()).slice(-2),		
            ampm = 'AM',
            time;
                
        if (hh > 12) {
            h = hh - 12;
            ampm = 'PM';
        } else if (hh === 12) {
            h = 12;
            ampm = 'PM';
        } else if (hh == 0) {
            h = 12;
        }
        
        time = yyyy + '-' + mm + '-' + dd + ', ' + h + ':' + min + ' ' + ampm; 
        return time;
        }
    //document.writeln(convertTimestamp)