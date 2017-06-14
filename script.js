       d3.json("invoice-taipei.json", function (dataSet) {
           var svg = d3.select("svg");
           var body = d3.select("body");
           var fDataSet = dataSet.filter(function (d) {
               return d.city === "臺北市" &&
                   d.date === "2016/8/1" &&
                   d.amount > 1000000000;
           })
           for (var i = 0; i < fDataSet.length; i++) {
               //              body.append("div").text(fDataSet[i].industry + ":" + fDataSet[i].amount);
               console.log(fDataSet[i].amount);
               svg.append("rect").attr({
                   x: 250,
                   y: 5 + 30 * i,
                   width: fDataSet[i].amount / 19680973217 * 150,
                   height: 20,
                   fill: "navy"
               });
               svg.append("text").attr({
                   x: 0,
                   y: 20 + 30 * i,
                   "font-size": 15
               }).text(fDataSet[i].industry);
           }
       });

       var arr = [85, 60, 99, 49, 77, 82];
       bind(arr);
       render();

       function bind(data) {
           var arrd3 = d3.select("#s2")
               .selectAll("div")
               .data(data);
           arrd3.enter().append("div");
           arrd3.exit().remove();
       }

       function render() {
           d3.selectAll("#s2>div")
               .text(function (d, i) {
                   return (i + 1) + ":" + d;
               })
               .style({
                   color: function (d) {
                       if (d < 70) {
                           return "red";
                       } else {
                           return "green";
                       }
                   }
               });
       }



       var arr_chart = [85, 60, 99, 49, 77, 82, 78, 34, 12];
       var w = 900,
           h = 300,
           p = 100;
       svg();
       bind_chart(arr_chart);
       render_chart();

       function svg() {
           d3.select("#bchart").append("svg").attr({
               width: w,
               height: h,
               id: "bar-chart"
           });
       }

       function bind_chart(dataSet) {
           var arrd3 = d3.select("svg#bar-chart")
               .selectAll("rect")
               .data(dataSet);
           arrd3.enter().append("rect");
           arrd3.exit().remove();
           //-----text-------
           var arrd_t = d3.select("svg#bar-chart")
               .selectAll("text")
               .data(dataSet);
           arrd_t.enter().append("text");
           arrd_t.exit().remove();
       }

       function render_chart() {
           d3.selectAll("#bar-chart>rect")
               .attr({
                   x: function (d, i) {
                       return p + 45 * i;
                   },
                   y: function (d) {
                       return h - p - d;
                   },
                   width: 40,
                   height: function (d) {
                       return d;
                   },
                   fill: function (d) {
                       if (d < 70) {
                           return "red";
                       } else {
                           return "green";
                       }
                   }
               });
           d3.selectAll("#bar-chart>text")
               .attr({
                   x: function (d, i) {
                       return p + 45 * i + 10;
                   },
                   y: function (d) {
                       return h - p + 20;
                   }
               }).text(function (d) {
                   return d;
               });
       }
       //console.log(d3.selectAll("div"));
       function update() {
           var num = random(10, 100);
           arr_chart.push(num);
           bind_chart(arr_chart);
           render_chart();
       }

       function del() {
           arr_chart.shift();
           bind_chart(arr_chart);
           render_chart();
       }
       var random = function (m, n) {
           var rScale = d3.scale.linear()
               .domain([0, 1])
               .rangeRound([m, n]);
           return rScale(Math.random());
           //            return Math.floor(Math.random() * (n - m + 1)) + m;
       }

       //color
       var index = ["中國國民黨", "民主進步黨", "時代力量", "無黨團結聯盟", "親民黨","國民黨","民進黨"];
       var color = ["blue", "green", "yellow", "gray", "orange","blue","green"];
       var xScale = d3.scale.ordinal()
           .domain(index)
           .range(color);

       console.log(xScale("無黨團結聯盟"));

       function showColor() {
           var pname = d3.select("#party").node().value;
           console.log(pname);
           d3.select("#party").style({
               "color": xScale(pname),
               "border-Color":xScale(pname)
           });
       }
