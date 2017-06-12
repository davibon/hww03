       d3.json("invoice-taipei.json", function(dataSet){
           var svg = d3.select("svg");
            var body = d3.select("body");
           var fDataSet = dataSet.filter(function(d){
               return d.city === "臺北市" 
               && d.date === "2016/8/1"
               && d.amount > 1000000000;
           })
           for(var i=0; i<fDataSet.length; i++){
//              body.append("div").text(fDataSet[i].industry + ":" + fDataSet[i].amount);
              console.log(fDataSet[i].amount);
               svg.append("rect").attr({
                   x : 250,
                   y : 5+30*i,
                   width : fDataSet[i].amount / 19680973217 * 150,
                   height : 20,
                   fill : "navy"
               });
               svg.append("text").attr({
                   x : 0,
                   y : 20+30*i,
                   "font-size" : 15
               }).text(fDataSet[i].industry);               
           }
       });