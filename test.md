

var tableQualities: [{id, qual, value}];   // Sorted by value desc

var nbResultMin = 5;
var tableResult = [];

int i=0;
int j=0;
while (tableResult.length < nbResultMin) {
    var quality = tableQualities[j++]
    tableResult[i++] = quality;
    for (k=j; k<tableQualities.length; k++){
        if (tableQualities[k].value === quality.value) {
            tableResult[i++] = tableQualities[k];
            j = j+1;
        } else {
            break;
        }
    }
} 



