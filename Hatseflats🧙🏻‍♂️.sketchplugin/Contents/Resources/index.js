var d = true;

var components =  [];
var elements =  [];

console.log(elements);

var projectVariables = {
    // Project goals divide 100
    business: 0.1,
    creative: 0.1,
    ecommerce: 0.9,
    informative: 0.4,
    inspire: 0.1,
    service: 0.4,
 
    // page goals divide 100
    browse: 0.6,
    showOptions: 0.4,
    read: 0.0,
    converse: 0.0,

    //msic
    projectSize: 0.2,
    brandAwereness: 0.1,
    seoImportance: 0.8,
    usersAge: 0.5,
    usersTechSavy: 0.8,
};

function start() {

  try {
    hatseflats();
  }
  catch(err) {
    // start();
  }
}



function hatseflats() {
    hashTemp_ = "";

    initUI();

  //
  var componentsToDraw = [];

	// Rate all components
	var componentsToDraw = componentsModel();


  // // remove all emptys components:
  for (var p = 0; p < componentsToDraw.length; p++) {
     if(componentsToDraw.length == 0) componentsToDraw.splice(p, 1);
  }



  console.log("");
  console.log("#ROWS:");
  for (var i = 0; i < componentsToDraw.length; i++) {
    rowsModel(componentsToDraw[i]);
  }

  console.log("");
  console.log("#Elements for row:");

  for (var i = 0; i < componentsToDraw.length; i++) {
    componentsToDraw[i].setRowElements();
  }






  // console.log("");
  // console.log("#Height, width per element and Max height per component");
  for (var i = 0; i < componentsToDraw.length; i++) {
    componentsToDraw[i].calculateHighOfElements();
  }

  // console.log("");
  // console.log("# xpos for each element in a row");
  for (var i = 0; i < componentsToDraw.length; i++) {
    componentsToDraw[i].setXForAllRowsAndElements();
  }





  // console.log("");
  // console.log("# Make Hash");
  var yBase = 0;



  for (var i = 0; i < componentsToDraw.length; i++) {
    // console.log("");
    // console.log("");
    var rowsAndElements = componentsToDraw[i].getRowsAndelements();
    // console.log(componentsToDraw[i].returnTitle() + " / rows: " + rowsAndElements.length);
    // console.log("y: "+yBase);

    hashAddComponent(componentsToDraw[i].returnTitle(), yBase);
    yBase += componentsToDraw[i].returnY() + componentsToDraw[i].returnMargin();

    //      %

    for (var z = 0; z < rowsAndElements.length; z++) {
      // console.log("");
      // console.log("Row: " + z +" with elmenent count: " + rowsAndElements[z].length);
      // console.log(rowsAndElements);
      // console.log(rowsAndElements[z]);
      var rowY = componentsToDraw[i].returnRowY(z);
      // console.log("row y: "+ rowY);

      var rowHeight = componentsToDraw[i].returnRowHeight(z);
      // console.log("rowHeight: "+ rowHeight);

      var margin = componentsToDraw[i].returnRowsAndELementsMargin(z);
      // console.log("rowMargin: "+ margin);




      hashAddRow(rowY, margin, rowHeight)

      for (var p = 0; p < rowsAndElements[z].length; p++) {
        var eName = rowsAndElements[z][p][1].returnTitle();
        // console.log("Element: " + z + " " + eName);
        var height = rowsAndElements[z][p][1].returnheight();
        var width = rowsAndElements[z][p][1].returnWidth();

        var xpos = componentsToDraw[i].returnRowXpos(z,p);
        // console.log("xpos: "+ xpos);

        // console.log("width: "+ width);
        // console.log("height: "+ height);


        hashAddElement(eName, xpos, width, height);
      }
    }
  }


  /*            */



  /*

   ontcijfer script voor plugin

  */
  // var locationHash = hashTemp_;
  // var hash = locationHash;
  // var res = hash.replace("#", "");
  // console.log(res);
  //
  //
  // var hashComponents = res.split("=");
  // for (var i = 1; i < hashComponents.length; i++) {
  //
  //
  //   console.log("");
  //   console.log("#COMPONENT");
  //   var componentValues = hashComponents[i].split(":");
  //   var componentName = componentValues[0];
  //   var componentY = componentValues[1];
  //   componentY.replace("%", "");
  //   componentY = parseInt(componentY);
  //
  //   console.log("componentName: "+ componentName);
  //   console.log("componentY: "+ componentY);
  //
  //
  //
  //   var hashRows = hashComponents[i].split("%");
  //   for (var r = 1; r < hashRows.length; r++) {
  //       console.log("#Row num: " + r);
  //       console.log(hashRows[r]);
  //
  //       var rowValues = hashRows[r].split(":");
  //
  //       var rowY = parseInt(rowValues[1]);
  //       var rowMargin = parseInt(rowValues[2]);
  //       var rowHeight = rowValues[3].split("&");;
  //       rowHeight = parseInt(rowHeight[0]);
  //
  //       console.log("rowY: "+ rowY);
  //       console.log("rowMargin: "+ rowMargin);
  //       console.log("rowHeight: "+ rowHeight);
  //
  //
  //       var elementsOnRow = hashRows[r].split("&");
  //       console.log(elementsOnRow);
  //
  //         for (var e = 1; e < elementsOnRow.length; e++) {
  //           console.log("");
  //           console.log("#ELEMENT ");
  //           console.log(elementsOnRow[e]);
  //           var elementValues = elementsOnRow[e].split(":");
  //
  //
  //           var eName = elementValues[0];
  //           var eXpos = parseInt(elementValues[1]);
  //           var eWidth = parseInt(elementValues[2]);
  //           var eHeight = parseInt(elementValues[3]);
  //
  //           console.log("eName: "+ eName);
  //           console.log("eXpos: "+ eXpos);
  //
  //           console.log("eWidth: "+ eWidth);
  //           console.log("eHeight: "+ eHeight);
  //         }
  //
  //   }
  // }



  /*            */

  console.log(" ");
  console.log(hashTemp_);
  hashLog();

  for (var i = 0; i < components.length; i++) {
      var name = components[i].reset();
  }
}


// setTimeout(function () {
//     start();
// }, 10);



function makeid(length) {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}



function componentsModel(){

	//output
	var componentsNames = []
	var componentsWitProb =  [];

	// var componentsNamesProbability = ['menu'];
	var componentsOrder = [];


    // loop all components for rating on this project
    if(d)console.log("");
    if(d)console.log("Start: rating for " + components.length + " components");
    if(d)console.log("");
    for (var i = 0; i < components.length; i++) {
        var name = components[i].returnTitle();

        var prob = components[i].returnMatch();

        if (projectVariables.browse >= 0.0 && components[i].pagegoals.browse){

            componentsWitProb.push([prob,name,components[i]]);
        }else{
            if(d)console.log("Kill: " +name +": Because:  Browse value is set to 0.0");
        }
    }
    if(d)console.log("");
    if(d)console.log("Done:rating:"  + componentsWitProb.length);
    if(d)console.log("");
	if(d)console.log(componentsWitProb);
    if(d)console.log("Start: Sort the array done");
    // sort it  // thx to https://stackoverflow.com/questions/2824145/sorting-a-multidimensional-array-in-javascript
    componentsWitProb.sort((function(index){
        return function(a, b){
            return (a[index] === b[index] ? 0 : (a[index] < b[index] ? -1 : 1));
        };
    })(0));
	if(d)console.log(componentsWitProb);

    if(d)console.log("Done: arry sort");
    if(d)console.log("");


    if(d)console.log("");
    if(d)console.log("Update: Current components en versions in order of highest rating for this case:");
    for (var i = 0; i < componentsWitProb.length; i++) {
        var nameCleanLog = componentsWitProb[i][2].title;
        if(d)console.log("#"+i+":"+nameCleanLog+":");
    }
    if(d)console.log("");

    if(d)console.log("Start: Apply Probabilty theory * Rating for a variable proposal of the order");
    if(d)console.log("");

    function findMatchingClass(p_){
        if(d)console.log("Search matching classObject for: " + p_);
        var theOne = [];
        for (var i = 0; i < componentsWitProb.length; i++) {
            if(componentsWitProb[i].includes(p_)) {

                theOne = componentsWitProb[i][2];
                if(d)console.log("Found matching classObject for: " + p_);

            }
        }
        return theOne;
    }



    var currentObject = componentsWitProb[0][2];
    var currentObjectTitle = currentObject.title;

    var potentialnewName = "none"
    var usedComponentNames = [];
    var componentOrder = [];
    var probabilties = [];

    while (currentObjectTitle != "END"){



            if(d)console.log("Continue with: " + currentObjectTitle);

            //Get objetct from just name
            currentObject = findMatchingClass(currentObjectTitle);

            //Get objetct from just name
            currentObjectTitle = currentObject.title;

            //Get 'random' new  possibilities
            if(d)console.log("Get probabilties from: " + currentObjectTitle);
			var mainPagegoal = getMainPagegoal();
            probabilties = currentObject.returnProbability(mainPagegoal);
            if(d)console.log(probabilties);

            var arrayExented = [];
            if(probabilties === 'undefined'){
                if(d)console.log("No preset array. Use all components");

                var temppArray = [["search",0.2], ["header",0.4], ["usp",0.1], ["text",0.2], ["articles",0.1]];

                for (var i = 0; i < temppArray.length; i++) {
                    for (var p = 0; p < temppArray[i][1]*100; p++) {
                        if( usedComponentNames.includes(temppArray[i][0]) == false){
                            arrayExented.push(temppArray[i][0]);
                        }
                    }
                }
            }else{
                for (var i = 0; i < probabilties.length; i++) {
                    for (var p = 0; p < probabilties[i][1]*100; p++) {
                        if( usedComponentNames.includes(probabilties[i][1]) == false){
                            arrayExented.push(probabilties[i][0]);
                        }
                    }
                }
            }


            // check if there is any unique option left?
            if(probabilties.length == 0){
                if(d)console.log("All unique components have been used. So use: Footer");
                potentialnewName = "footer";

            }else{
                var r = Math.floor(Math.random()*arrayExented.length);
                // found an option
                potentialnewName = arrayExented[r];
                if(d)console.log("Found a radom option: " + potentialnewName);

            }


            if(d)console.log("Set to use: " + potentialnewName);
            if(d)console.log("");


            //old Object
            componentOrder.push(currentObject);

            // console.log(componentOrder);
            // for (var i = 0; i < componentOrder.length; i++) {
            //   console.log(componentOrder[i].returnTitle());
            // }
            // console.log("-");
            //
            //old name before searching
            usedComponentNames.push(currentObjectTitle);

            // set the NEW ObjectTitle
            currentObjectTitle = potentialnewName;

    }

	console.log("");
	console.log("#COMPONENTS:");

	// componentOrder.push(menuComponent);
	for (var p = 0; p < componentOrder.length; p++) {
		console.log(p + " : " + componentOrder[p].returnTitle());

      var changeOf90 = Math.floor(map_range(projectVariables.projectSize, 0, 1, 20, 2));
      changeOf90 += Math.floor(map_range(projectVariables.creative, 0, 1, 10, 80));
      changeOf90 += Math.floor(map_range(projectVariables.inspire, 0, 1, 10, 80));

      var changeOf60 = Math.floor(map_range(projectVariables.informative, 0, 1, 20, 2));
      changeOf60 += Math.floor(map_range(projectVariables.ecommerce, 0, 1, 10, 80));

      var changeOf30 = Math.floor(map_range(projectVariables.business, 0, 1, 20, 2));
      changeOf30 += Math.floor(map_range(projectVariables.ecommerce, 0, 1, 10, 80));
      changeOf30 += Math.floor(map_range(projectVariables.projectSize, 0, 1, 1, 20));
      changeOf30 += Math.floor(map_range(projectVariables.userAge, 0, 1, -10, 50));

      var componentMargin = [];
      for (var i = 0; i < changeOf90; i++)  componentMargin.push(90);
      for (var i = 0; i < changeOf60; i++)  componentMargin.push(60);
      for (var i = 0; i < changeOf30; i++)  componentMargin.push(30);

      var componentMargin = componentMargin[Math.floor(Math.random() * componentMargin.length)];

      // console.log("Margin: " + componentMargin +" px");

      componentOrder[p].setMargin(componentMargin);
	}





  componentsToDraw = componentOrder;


	// console.log(componentOrder);

	return componentOrder;
}



function elementsModel(p){

  var elementsWithProb = [];

  for (var i = 0; i < p.length; i++) {
          // console.log( p[i]  );
          // console.log( p[i][0][0]   );

          var prob = p[i][0][0].returnMatch();


          // console.log("start prob:" + prob);
          // console.log(prob);
          // console.log(p[i][0].returnMatch());

          // console.log(p[i][1]);
          var elementPrefWeight = parseFloat(p[i][1])*100;//weird but uses . instead of , need to remove tha
          // console.log("element preference weight:" + elementPrefWeight/100);

          var precentageToRemove =  (100 - elementPrefWeight/3)/100;
          // console.log("percentage to keep:" + precentageToRemove);
          prob *= precentageToRemove;
          // console.log("Result :" + prob);

          // (lower is better but importance is marked as higher is better)
          if (projectVariables.browse >= 0.0 && p[i][0][0].pagegoals.browse){
              elementsWithProb.push([ prob, p[i][0][0]]);
          }else{
              // console.log("Kill: " +name +": Because:  Browse value is set to 0.0");
          }
  }
  // console.log("prefferd Elements:");
  // console.log(elementsWithProb);


  // sort prefferd from best to worst
  elementsWithProb.sort((function(index){
      return function(a, b){
          return (a[index] === b[index] ? 0 : (a[index] < b[index] ? -1 : 1));
      };
  })(0));

  return elementsWithProb;
}



function getElementsInRowModel(row_, single_, side_, rowI_){
  /*

    rate all elements
    Add all sets up togheter
    select next best set
    define amount of items

    select most prefferd items
    select most and best rated items

    exclude dupilicate elements

  */



  //RATING
  var singelElementSetsAndRatings = [];
  var singelElementSetsTooRate = [];
  var usedNamesSingle = [];


  for (var i = 0; i < single_.preffedElements.length; i++) {
    for (var p = 0; p < single_.preffedElements[i].length; p++) {
      for (var z = 0; z < elements.length; z++) {
        if(elements[z].returnTitle() == single_.preffedElements[i][p][0]){
            // console.log("yay");
            // console.log(elements[z].returnTitle());
            // console.log(single_.preffedElements[i][p][0]);

           if(contains(usedNamesSingle,elements[i].returnTitle()  )  == false){
              singelElementSetsTooRate.push( [    [elements[z]] , single_.preffedElements[i][p][1]] );
              usedNamesSingle.push(elements[i].returnTitle() );
          }
        }
      }
    }
  }

  //RATING
  var sideElementSetsAndRatings = [];
  var sideElementSetsTooRate= [];
  var usedNamesSide = [];

  for (var i = 0; i < single_.preffedElements.length; i++) {
    for (var p = 0; p < single_.preffedElements[i].length; p++) {
      for (var z = 0; z < elements.length; z++) {
        if(elements[z].returnTitle() == single_.preffedElements[i][p][0]){
          if(contains(usedNamesSide,elements[i].returnTitle()  )  == false){
              sideElementSetsTooRate.push( [    [elements[z]] , single_.preffedElements[i][p][1]] );
              usedNamesSide.push(elements[i].returnTitle() );
          }
        }
      }
    }
  }


  function contains(a, obj) {
    var i = a.length;
    while (i--) {
       if (a[i] === obj) {
           return true;
       }
    }
    return false;
}


  if(singelElementSetsTooRate.length == 0){
    // console.log("BAD2");
    return "BAD";
  }

  if(sideElementSetsTooRate.length == 0){
    // console.log("BAD3");
    return "BAD";
  }


  if(singelElementSetsTooRate.length >= 1)singelElementSetsAndRatings = elementsModel(singelElementSetsTooRate);
  if(sideElementSetsTooRate.length >= 1)sideElementSetsAndRatings = elementsModel(sideElementSetsTooRate);

  var mixElementSetsAndRatings = [];
  for (var i = 0; i < singelElementSetsAndRatings.length; i++) mixElementSetsAndRatings.push(singelElementSetsAndRatings[i]);
  for (var i = 0; i < sideElementSetsAndRatings.length; i++) mixElementSetsAndRatings.push(sideElementSetsAndRatings[i]);

  mixElementSetsAndRatings.sort((function(index){
      return function(a, b){
          return (a[index] === b[index] ? 0 : (a[index] < b[index] ? -1 : 1));
      };
  })(0));

  singelElementSetsTooRate.sort((function(index){
      return function(a, b){
          return (a[index] === b[index] ? 0 : (a[index] < b[index] ? -1 : 1));
      };
  })(0));

  sideElementSetsTooRate.sort((function(index){
      return function(a, b){
          return (a[index] === b[index] ? 0 : (a[index] < b[index] ? -1 : 1));
      };
  })(0));






  var thisRowsElements = []



    var elementAmount = 0;
    if(row_[0] =="single"){
      elementAmount = getRndInteger(1,3);
      console.log("elementAmount: "+elementAmount);
      // elementAmount = 12;
      if( elementAmount >= singelElementSetsAndRatings.lenght)elementAmount = singelElementSetsAndRatings.lenght;


      for (var i = 0; i < elementAmount; i++) {
        if(i == 1)thisRowsElements.push(singelElementSetsAndRatings[0]);
        if(i == 2)thisRowsElements.push(singelElementSetsAndRatings[1]);
        if(i == 3)thisRowsElements.push(singelElementSetsAndRatings[2]);
        if(i == 4)thisRowsElements.push(singelElementSetsAndRatings[3]);
        if(i == 5)thisRowsElements.push(singelElementSetsAndRatings[4]);
        if(i == 6)thisRowsElements.push(singelElementSetsAndRatings[5]);
        if(i == 7)thisRowsElements.push(singelElementSetsAndRatings[6]);
        if(i == 8)thisRowsElements.push(singelElementSetsAndRatings[7]);
        if(i == 9)thisRowsElements.push(singelElementSetsAndRatings[8]);
        if(i == 10)thisRowsElements.push(singelElementSetsAndRatings[9]);

      }

    }
    if(row_[0] =="side"){
      elementAmount = getRndInteger(1,5);
      // console.log(elementAmount);

      if( elementAmount >= singelElementSetsAndRatings.lenght)elementAmount = singelElementSetsAndRatings.lenght;
      if( elementAmount >= sideElementSetsAndRatings.lenght)elementAmount = sideElementSetsAndRatings.lenght;

      for (var i = 0; i < elementAmount; i++) {

        if(elementAmount <= 3){
          if(i == 1)thisRowsElements.push(sideElementSetsAndRatings[0]);
          if(i == 2)thisRowsElements.push(sideElementSetsAndRatings[1]);
          if(i == 3)thisRowsElements.push(sideElementSetsAndRatings[2]);
        }

        if(elementAmount >= 4){
          var sameOrNot = getRndInteger(0,10);
          if(sameOrNot >= 7){
              if(i == 1)thisRowsElements.push(sideElementSetsAndRatings[0]);
              if(i == 2)thisRowsElements.push(sideElementSetsAndRatings[0]);
              var switchOrNot = getRndInteger(0,10);
              if(switchOrNot >= 5){
                  if(i == 3)thisRowsElements.push(sideElementSetsAndRatings[0]);
              }else{
                if(i == 3)thisRowsElements.push(sideElementSetsAndRatings[1]);
              }
              if(i == 4)thisRowsElements.push(sideElementSetsAndRatings[0]);
              if(i == 5)thisRowsElements.push(sideElementSetsAndRatings[0]);
              if(i == 6)thisRowsElements.push(sideElementSetsAndRatings[0]);
              if(i == 7)thisRowsElements.push(sideElementSetsAndRatings[0]);
              if(i == 8)thisRowsElements.push(sideElementSetsAndRatings[0]);
              if(i == 9)thisRowsElements.push(sideElementSetsAndRatings[0]);
              if(i == 10)thisRowsElements.push(sideElementSetsAndRatings[0]);
          }else{
            if(i == 0)thisRowsElements.push(sideElementSetsAndRatings[0]);
            if(i == 1)thisRowsElements.push(sideElementSetsAndRatings[1]);
            if(i == 3)thisRowsElements.push(sideElementSetsAndRatings[2]);
          }
        }
      }


    }
    if(row_[0] =="mix"){
      elementAmount = getRndInteger(2,4);
      if( elementAmount >= singelElementSetsAndRatings.lenght)elementAmount = singelElementSetsAndRatings.lenght;
      if( elementAmount >= sideElementSetsAndRatings.lenght)elementAmount = sideElementSetsAndRatings.lenght;

      for (var i = 0; i < elementAmount; i++) {
        if(i == 1)thisRowsElements.push(singelElementSetsAndRatings[1]);
        if(i == 2)thisRowsElements.push(singelElementSetsAndRatings[2]);
        if(i == 3)thisRowsElements.push(sideElementSetsAndRatings[3]);
        if(i == 4)thisRowsElements.push(sideElementSetsAndRatings[4 ]);
      }

    }



    if(thisRowsElements.length == 0){
      if(row_[0] =="single")thisRowsElements.push(singelElementSetsAndRatings[1]);
      if(row_[0] =="side")thisRowsElements.push(sideElementSetsAndRatings[1]);
      if(row_[0] =="mix")thisRowsElements.push(singelElementSetsAndRatings[1]);
    }

    var finalThisRowsElements = [];
    if(thisRowsElements.length == 0){
      // console.log("bad");
      return "BAD";
    }else{
      // console.log(thisRowsElements.length);
      // console.log(thisRowsElements);
      // console.log("");
      console.log("ROW: " + rowI_);
      for (var i = 0; i < thisRowsElements.length; i++) {
        if(thisRowsElements[i] != null  && thisRowsElements.length >= 0){
          // console.log(i +"  : "+thisRowsElements[i][1].returnTitle());
          finalThisRowsElements.push(thisRowsElements[i]);
        }else{
          // thisRowsElements.splice(i, 1);
          // console.log(i +" : " + "nothing..");
        }
      }
      for (var i = 0; i < finalThisRowsElements.length; i++) {
        console.log(i +" : "+finalThisRowsElements[i][0] + " : " + finalThisRowsElements[i][1].returnTitle());
      }

      return finalThisRowsElements;
    }

}



function rowsModel(component_){

  var rows = component_.returnRowAmount();

  console.log(component_.returnTitle() + " rows: " +rows);


    for (var p = 0; p < rows; p++) {
      var rowTypes = ['single','side','mix'];
      var rowType = rowTypes[Math.floor(Math.random() * 3)];
      // console.log("Type: " + rowType);

      var changeOf30 = Math.floor(map_range(projectVariables.projectSize, 0, 1, 20, 2));
      changeOf30 += Math.floor(map_range(projectVariables.creative, 0, 1, 10, 80));
      changeOf30 += Math.floor(map_range(projectVariables.inspire, 0, 1, 10, 80));

      var changeOf15 = Math.floor(map_range(projectVariables.informative, 0, 1, 20, 2));
      changeOf15 += Math.floor(map_range(projectVariables.ecommerce, 0, 1, 10, 80));
      changeOf15 += Math.floor(map_range(projectVariables.business, 0, 1, 20, 2));
      changeOf15 += Math.floor(map_range(projectVariables.userAge, 0, 1, -10, 50));


      var rowPaddings = [];
      for (var i = 0; i < changeOf30; i++)  rowPaddings.push(30);
      for (var i = 0; i < changeOf15; i++)  rowPaddings.push(15);

      var rowPadding = rowPaddings[Math.floor(Math.random() * rowPaddings.length)];
      // console.log("Padding: " + rowPadding + " px");

      component_.addRow(rowType, rowPadding);
    }


}

/*

    The component class/object

*/


class component {
  constructor(title_, zindex_, goals_, project_, users_, pagegoals_, propas_, rows_, preffedElements_, preffedElementsSide_) {
    this.title = title_;
    this.zindex = zindex_;
    this.goals = goals_;
    this.project = project_;
    this.users = users_;
    this.pagegoals = pagegoals_;
    this.propas = propas_;
    this.elementsSingle = preffedElements_;
    this.elementsSide = preffedElementsSide_;

    this.minrows= rows_.minrows;
    this.maxrows= rows_.maxrows;

    this.margin= "0";
    this.rows = [];

    this.rowsAndELements = [];
    this.rowsAndELementsMargin = []
    this.rowHeights = []
    this.rowYs = []
    this.rowXposses = []

    this.row0Xpos = [];
    this.row1Xpos = [];
    this.row2Xpos = [];
    this.row3Xpos = [];
    this.row4Xpos = [];
    this.row5Xpos = [];
    this.row6Xpos = [];
    this.row7Xpos = [];
    this.row8Xpos = [];
    this.row9Xpos = [];
    this.row10Xpos = [];
    this.row11Xpos = [];



    this.height = 0;

    this.maxTotalHeight = 0;

  }


  reset(){
    this.margin= "0";
    this.rows = [];

    this.rowsAndELements = [];
    this.rowsAndELementsMargin = []
    this.rowHeights = []
    this.rowYs = []
    this.rowXposses = []

    this.row0Xpos = [];
    this.row1Xpos = [];
    this.row2Xpos = [];
    this.row3Xpos = [];
    this.row4Xpos = [];
    this.row5Xpos = [];
    this.row6Xpos = [];
    this.row7Xpos = [];
    this.row8Xpos = [];
    this.row9Xpos = [];
    this.row10Xpos = [];
    this.row11Xpos = [];



    this.height = 0;

    this.maxTotalHeight = 0;

  }

  returnRowsAndELementsMargin(i_){
    return this.rowsAndELementsMargin[i_];
  }
  returnRowHeight(i_){
    return this.rowHeights[i_];
  }

  returnRowY(i_){
    return this.rowYs[i_];
  }

  returnRowXpos(row_, i_){
    // console.log("Get x pos from row: " + row_);
    // console.log("And element: " + i_);

    // console.log(this.row0Xpos);
    // console.log(this.row1Xpos);
    // console.log(this.row2Xpos);

    var x = 0;

    if(row_ == 0)x  = this.row0Xpos[i_];
    if(row_ == 1)x  = this.row1Xpos[i_];
    if(row_ == 2)x  = this.row2Xpos[i_];
    if(row_ == 3)x  = this.row3Xpos[i_];
    if(row_ == 4)x  = this.row4Xpos[i_];
    if(row_ == 5)x  = this.row5Xpos[i_];
    if(row_ == 6)x  = this.row6Xpos[i_];
    if(row_ == 7)x  = this.row7Xpos[i_];
    if(row_ == 8)x  = this.row8Xpos[i_];
    if(row_ == 9)x  = this.row9Xpos[i_];
    if(row_ == 10)x  = this.row10Xpos[i_];
    if(row_ == 11)x  = this.row11Xpos[i_];
    if(row_ == 12)x  = this.row12Xpos[i_];
    if(row_ == 13)x  = this.row13Xpos[i_];
    if(row_ == 14)x  = this.row14Xpos[i_];
    if(row_ == 15)x  = this.row15Xpos[i_];
    if(row_ == 16)x  = this.row16Xpos[i_];
    if(row_ == 17)x  = this.row17Xpos[i_];
    if(row_ == 18)x  = this.row18Xpos[i_];
    if(row_ == 19)x  = this.row19Xpos[i_];
    if(row_ == 20)x  = this.row20Xpos[i_];

    // console.log("X is: "+ x);
    return x
  }

  returnComponentHeight(){
    return this.maxTotalHeight;
  }

  getRowsAndelements(){
    return this.rowsAndELements;

  }

  returnY(){
    return this.maxTotalHeight;
  }

  setXForAllRowsAndElements(){
    var baseX = destkopStart;
    // // remove all emptys:
    for (var p = 0; p < this.rowsAndELements.length; p++) {
       if(this.rowsAndELements[p].length == 0) this.rowsAndELements.splice(p, 1);
    }


    //Loop the none emptys
    for (var p = 0; p < this.rowsAndELements.length; p++) {
        baseX = destkopStart;
        for (var i = 0; i < this.rowsAndELements[p].length; i++) {

          if(p == 0)this.row0Xpos.push(baseX);
          if(p == 1)this.row1Xpos.push(baseX);
          if(p == 2)this.row2Xpos.push(baseX);
          if(p == 3)this.row3Xpos.push(baseX);
          if(p == 4)this.row4Xpos.push(baseX);
          if(p == 5)this.row5Xpos.push(baseX);
          if(p == 6)this.row6Xpos.push(baseX);
          if(p == 7)this.row7Xpos.push(baseX);
          if(p == 8)this.row8Xpos.push(baseX);
          if(p == 9)this.row9Xpos.push(baseX);
          if(p == 10)this.row10Xpos.push(baseX);
          if(p == 11)this.row11Xpos.push(baseX);
          if(p == 12)this.row12Xpos.push(baseX);
          if(p == 13)this.row13Xpos.push(baseX);
          if(p == 14)this.row14Xpos.push(baseX);
          if(p == 15)this.row15Xpos.push(baseX);
          if(p == 16)this.row16Xpos.push(baseX);
          if(p == 17)this.row17Xpos.push(baseX);
          if(p == 18)this.row18Xpos.push(baseX);
          if(p == 19)this.row19Xpos.push(baseX);
          if(p == 20)this.row20Xpos.push(baseX);


          baseX += this.rowsAndELements[p][i][1].returnWidth();
          baseX += marginDesktop;
        }
    }
    console.log("done");
  }



  calculateHighOfElements(){

    var maxTotalHeight = 0;
    var rowYTotal = 0;
    for (var p = 0; p < this.rowsAndELements.length; p++) {


      var maxPadding = 0;
      for (var z = 0; z < this.rowsAndELements.length; z++) {

        //add margin to rows
        var changeOf30 = Math.floor(map_range(projectVariables.projectSize, 0, 1, 20, 2));
        changeOf30 += Math.floor(map_range(projectVariables.creative, 0, 1, 10, 80));
        changeOf30 += Math.floor(map_range(projectVariables.inspire, 0, 1, 10, 80));

        var changeOf15 = Math.floor(map_range(projectVariables.informative, 0, 1, 20, 2));
        changeOf15 += Math.floor(map_range(projectVariables.ecommerce, 0, 1, 10, 80));
        changeOf15 += Math.floor(map_range(projectVariables.business, 0, 1, 20, 2));
        changeOf15 += Math.floor(map_range(projectVariables.userAge, 0, 1, -10, 50));

        var rowPaddings = [];
        for (var i = 0; i < changeOf30; i++)  rowPaddings.push(120);
        for (var i = 0; i < changeOf15; i++)  rowPaddings.push(30);

        var rowPadding = rowPaddings[Math.floor(Math.random() * rowPaddings.length)];

        if(rowPadding >= maxPadding)maxPadding = rowPadding;

        this.rowsAndELementsMargin.push(rowPadding);


        // console.log("padding row:");
        // console.log(this.rowsAndELementsMargin[z]);

      }

      // console.log(" ");
      // console.log(this.title +" row: " + p + " elementcount: " + this.rowsAndELements[p].length);
      for (var z = 0; z < this.rowsAndELements[p].length; z++) {
        this.rowsAndELements[p][z][1].calculateHight();
      }


      var maxhHeight = 0;

      for (var z = 0; z < this.rowsAndELements[p].length; z++) {
        var elementHeight = this.rowsAndELements[p][z][1].returnheight();
        if(elementHeight >= maxhHeight){
          maxhHeight = elementHeight;
        }
      }


      this.height = maxhHeight;
      this.rowHeights.push(maxhHeight + 15);
      maxTotalHeight += maxhHeight + 15 + 50;


      // this.height = maxhHeight;
      // this.rowHeights.push(maxhHeight + 15);
      // maxTotalHeight += maxhHeight + 15 + this.rowsAndELementsMargin[z];


    }



    // console.log(this.title + " maxTotalHeight: "+maxTotalHeight + " px");


    this.maxTotalHeight = maxTotalHeight;



    //add row y
    var yTotal = 0;
    for (var i = 0; i < this.rowHeights.length; i++) {
      if(i == 0) this.maxTotalHeight +=50;

      // console.log("ROW HEIGHT");
      // console.log(yTotal);
      this.rowYs.push(yTotal + this.rowsAndELementsMargin[i]);
      yTotal+= this.rowHeights[i];
    }



  }


  returnRowAmount(){
    var maxAddon = Math.floor(map_range(projectVariables.projectSize, 0, 1, 0, 4));
    var amount = getRndInteger(this.minrows, this.maxrows + maxAddon );

    return amount;
  }

  setMargin(margin_){
    this.margin = margin_;
  }

  returnMargin(){
    return this.margin;
  }


  addRow(type_, padding_){
    this.rows.push([type_,padding_]);
  }

  setRowElements(){
    console.log("");
    console.log(this.title);
    // console.log( this.rows.length);
    for (var i = 0; i < this.rows.length; i++) {
        this.rowsAndELements.push(getElementsInRowModel(this.rows[i], this.elementsSingle, this.elementsSide, i));
    }
  }
  returnRows(type, padding){
    return this.rows;
  }

  returnRowsAndElements(type, padding){
    return this.rowsAndELements;
  }





  returnMatch(){
      var prob = 0;
      var difference = 0;

      difference += Math.abs(projectVariables.business - this.goals.business);
      difference += Math.abs(projectVariables.creative - this.goals.creative);
      difference += Math.abs(projectVariables.ecommerce - this.goals.ecommerce);
      difference += Math.abs(projectVariables.informative - this.goals.informative);
      difference += Math.abs(projectVariables.inspire - this.goals.inspire);
      difference += Math.abs(projectVariables.service - this.goals.service);
      difference = difference / 6;

      difference += Math.abs(projectVariables.projectSize - this.project.projectSize);
      difference += Math.abs(projectVariables.seoImportance - this.project.seoImportance);
      difference = difference / 2;

      difference += Math.abs(projectVariables.userAge - this.users.userAge);
      difference += Math.abs(projectVariables.usersTechSavy - this.users.usersTechSavy);
      difference += Math.abs(projectVariables.brandAwereness - this.users.brandAwereness);
      difference = difference / 3;


      if(d)console.log(this.title  + ": rating: " + difference);

      difference += this.zindex.zindexStartVSend;
      difference = difference/2;

      return difference;
  }

    returPrefferdElements(){
        return this.preffedElements;
    }

  returnProbability(mainPagegoal_){
        if(mainPagegoal_ == "browse")
            return this.propas.browse;
        if(mainPagegoal_ == "showOptions")
            return this.propas.showOptions;
        if(mainPagegoal_ == "read")
            return this.propas.read;
        if(mainPagegoal_ == "converse")
            return this.propas.converse;
  }

  returnTitle(){
      return this.title;
  }

}

/*

	Element class

*/

class element {
    constructor(title_, zindex_, goals_, project_, users_, pagegoals_, propas_, size_) {
      this.title = title_;
      this.zindex = zindex_;
      this.goals = goals_;
      this.project = project_;
      this.users = users_;
      this.pagegoals = pagegoals_;
      this.propas = propas_;
      this.size = size_;
      this.rating = 0;

      this.width = 0;
      this.height = 0;


      this.margin = 15;


    }


    returnWidth(){
      return this.width;
    }


    returnMargin(){
      return this.margin;
    }

    returnheight(){
      return this.height;
    }


    calculateHight(padding_){

      if(this.height == 0){
        // console.log(this.title);
        // console.log(this.size);

        var tiles = 1;
        var rows = 1;

        var widthDesktop = 0;
        var heightDesktop = 0;

        if(this.size == 1){
            tiles = 1;
            rows = 1;
        }
        if(this.size >= 2){
          var r = Math.random()*100;
          if(r <= 33)rows = 1;
          if(r >= 34 && r <= 60)rows = 2;
          if(r >= 60)rows = 3;

          if (rows == 3 && this.size == 2)rows = 2;
        }

        if(this.size == 3){
          if(rows == 1)tiles = 4
          if(rows == 2)tiles = 2
          if(rows == 3)tiles = 2
        }
        if(this.size == 4){
          if(rows == 1)tiles = 7
          if(rows == 2)tiles = 8
          if(rows == 3)tiles = 4

        }
        if(this.size == 5){
          if(rows == 1)tiles = 12
          if(rows == 2)tiles = 6
          if(rows == 3)tiles = 4
        }



        if(rows == 1){
            widthDesktop = tiles* (squareDesktop + marginDesktop)
            widthDesktop -= marginDesktop *1;
            heightDesktop = squareDesktop*rows;
        }

        if(rows == 2){
            widthDesktop = (tiles)* (squareDesktop + marginDesktop)
            widthDesktop -= marginDesktop *1;
            heightDesktop = (squareDesktop*rows) + (marginDesktop * (rows -1));
        }
        if(rows == 3){
            widthDesktop = (tiles)* (squareDesktop + marginDesktop)
            widthDesktop -= marginDesktop *1;
            heightDesktop = (squareDesktop*rows) + (marginDesktop * (rows -1));
        }

        this.width = widthDesktop;
        this.height = heightDesktop;

        // console.log("widthDesktop: "+ widthDesktop);
        // console.log("heightDesktop: "+ heightDesktop);
      }


    }


    saveElementRating(prob){
      this.rating = prob;
    }

    returnElementRating(prob){
      return this.rating;
    }


  returnMatch(){
      var prob = 0;
      var difference = 0;

      difference += Math.abs(projectVariables.business - this.goals.business);
      difference += Math.abs(projectVariables.creative - this.goals.creative);
      difference += Math.abs(projectVariables.ecommerce - this.goals.ecommerce);
      difference += Math.abs(projectVariables.informative - this.goals.informative);
      difference += Math.abs(projectVariables.inspire - this.goals.inspire);
      difference += Math.abs(projectVariables.service - this.goals.service);
      difference = difference / 6;

      difference += Math.abs(projectVariables.projectSize - this.project.projectSize);
      difference += Math.abs(projectVariables.seoImportance - this.project.seoImportance);
      difference = difference / 2;

      difference += Math.abs(projectVariables.usersAge - this.users.userAge);
      difference += Math.abs(projectVariables.usersTechSavy - this.users.usersTechSavy);
      difference += Math.abs(projectVariables.brandAwereness - this.users.brandAwereness);
      difference = difference / 3;

      // difference += "";

      var randomInt = Math.floor((Math.random() * 10000000) + 1);
      // console.log("%**($*$)");
      // console.log(difference);
      // console.log(randomInt);
      // console.log(difference+randomInt);
      var theDif = difference+randomInt

      if(d)console.log(this.title  + ": rating: " + parseFloat(theDif));

      difference += this.zindex.zindexStartVSend;
      difference = difference/2;

      return difference;
  }


  returnSize(){
     return this.size;
  }

  returnTitle(){
	  return this.title;
  }
}

articlesComponent = new component(
    "articles",                 //symbol
    {                       // zindex
        zindexStartVSend: 0.3,
    },
    {                       // goals
        business: 0.5,
        creative: 0.1,
        ecommerce: 0.1,
        informative: 0.7,
        inspire: 0.4,
        service: 0.1,
    },
    {                       // project
        projectSize: 0.3,
        seoImportance: 0.2,
    },
    {                       // users
        userAge: 0.30,
        usersTechSavy: 0.0,
        brandAwereness: 0.0,
    },
    {                       // goals page
        browse: 0.1,
        showOptions: 0.0,
        read: 0.6,
        converse: 0.1,
    },{
		browse:[["buttons",0.2], ["footer",0.6], ["usp",0.2]],
		showOptions:[],//any
		read:[],//any
		converse:[],//any
	},
  {                       // users
      minrows: 1,
      maxrows: 4,
  },{ //single
	preffedElements:[
          [   ["h2", 0.6], ["filter", 0.3], ["share", 0.4], ["cta", 0.6] ],
          [   ["card", 0.9], ["text", 0.1], ],
          [   ["textline", 0.9],  ],
        ],
	},
  { //side
	preffedElementsSide:[
          [   ["card", 0.9], ["text", 0.1], ["textline", 0.1],  ],
          [   ["card", 0.8],["card", 0.8],   ],
          [   ["textline", 0.9],["text", 0.1]  ],
        ],
	},
);
components.push(articlesComponent);

buttonListComponent =  new component(
    "buttons",                 //symbol
    {                       // zindex
        zindexStartVSend: 0.5,
    },
    {                       // goals
        business: 0.4,
        creative: 0.2,
        ecommerce: 0.2,
        informative: 0.4,
        inspire: 0.0,
        service: 0.4,
    },
    {                       // project
        projectSize: 0.45,
        seoImportance: 0.45,
    },
    {                       // users
    	userAge: 0.30,
        usersTechSavy: 0.0,
        brandAwereness: 0.0,
    },
    {                       // goals page
        browse: 0.4,
        showOptions: 0.4,
        read: 0.1,
        converse: 0.1,
    },{
		browse:[], // any
		showOptions:[],// any
		read:[],// any
		converse:[],// any
	},{                       // users
      minrows: 1,
      maxrows: 4,
  },{ //single
	preffedElements:[
          [   ["h2", 0.9],  ["cta", 0.9],],
        ],
	},
  { //side
	preffedElementsSide:[
          [   ["cta", 0.9] ],
          [   ["textline", 0.9] ],
        ],
	},
);
components.push(buttonListComponent);

footerComponent = new component(
    "footer",                 //symbol
    {                       // zindex
        zindexStartVSend: 0.9999,
    },
    {                       // goals
        business: 0.7,
        creative: 0.0,
        ecommerce: 0.7,
        informative: 0.7,
        inspire: 0.1,
        service: 0.7,
    },
    {                       // project
        projectSize: 0.7,
        seoImportance: 0.7,
    },
    {                       // users
        userAge: 0.30,
        usersTechSavy: 0.0,
        brandAwereness: 0.0,
    },
    {                       // goals page
        browse: 0.4,
        showOptions: 0.4,
        read: 0.0,
        converse: 0.2,
    },{
		browse:[["END",1]], // any
	    showOptions:[["END",1]],
	    read:[["END",1]],
	    converse:[["END",1]],
	},
  {                       // users
      minrows: 1,
      maxrows: 4,
  },{ //single
  preffedElements:[
          [   ["logo", 0.2],["share", 0.3],],        
          [   ["textline", 0.9],  ["share", 0.9],],
        ],
  },
  { //side
  preffedElementsSide:[
    [   ["logo", 0.6], ["cta", 0.3], ["share", 0.3],],
    [   ["h3", 0.6], ],
    [   ["textline", 0.9],  ["share", 0.9],],
        ],
  },
);
components.push(footerComponent);

headerComponent = new component(
    "header",                 //symbol
	{                       // zindex
        zindexStartVSend: 0.2,
    },
    {                       // goals project
        business: 0.4,
        creative: 0.8,
        ecommerce: 0.5,
        informative: 0.1,
        inspire: 0.9,
        service: 0.2,
    },
    {                       // project
        projectSize: 0.1,
        seoImportance: 0.2,
    },
    {                       // users
        userAge: 0.30,
        usersTechSavy: 0.2,
        brandAwereness: 0.2,
    },
    {                       // goals page
		browse: 0.4,
        showOptions: 0.4,
        read: 0.3,
        converse: 0.3,
    },{
	   browse:[["search",0.2],  ["usp",0.1], ["text",0.2], ["articles",0.1]],
	   showOptions:[["search",0.5], ["articles",0.1], ['buttons', 0.2]],
	   read:[ ["text",0.2], ["articles",0.1]],
	   converse:[ ["text",0.2], ["articles",0.1]],
	},  {                       // users
        minrows: 1,
        maxrows: 4,
    },{ //single
    preffedElements:[
            [   ["h1", 0.6], ["search-icon", 0.3],],
            [   ["textline", 0.6], ],
            [   ["text", 0.6], ],
            [   ["cta", 0.6],],
          ],
    },
    { //side
    preffedElementsSide:[
            [   ["logo", 0.6], ["h3", 0.6] ],
          ],
    },
);
components.push(headerComponent);

menuComponent = new component(
    "menu",
    {                       // zindex
        zindexStartVSend: 0.05,
    },{                       // goals
        business: 0.1,
        creative: 1,
        ecommerce: 0.9,
        informative: 0.5,
        inspire: 0.5,
        service: 0.5,
    },{                       // project
        projectSize: 0.5,
        seoImportance: 0.5,
    },{                       // users
        userAge: 0.25,
        usersTechSavy: 0.8,
        brandAwereness: 0.8,
    },{                       // goals page
        browse: 0.3,
        showOptions: 0.1,
        read: 0.7, 
        converse: 0.1,
    },{	//propa's
	    browse:[["search",0.2], ["header",0.4], ["usp",0.1], ["text",0.2], ["articles",0.1]],
	    showOptions:[["search",0.5], ["header",0.2], ["articles",0.1], ['buttons', 0.2]],
	    read:[["header",0.7], ["text",0.2], ["articles",0.1]],
      converse:[["header",0.7], ["text",0.2], ["articles",0.1]],

	}, {                       // users
        minrows: 1,
        maxrows: 4,
    },{ //single
    preffedElements:[
            [   ["cta", 0.3],["menuitems", 0.6],["menuitems", 0.6]],
            [   ["logo", 0.2], ["menuitems", 0.6], ["search-icon", 0.3],["menuitems", 0.6]],
            [   ["profile-icon", 0.3] ],
          ],
    },
    { //side
    preffedElementsSide:[
            [   ["menuitems", 0.6]],
            [   ["icontextline", 0.6], ["cta", 0.1],],
          ],
    },
);
components.push(menuComponent);

searchbarComponent = new component(
    "search",                 //symbol
    {                       // zindex
        zindexStartVSend: 0.15,
    },{                       // goals
        business: 0.7,
        creative: 0.1,
        ecommerce: 0.7,
        informative: 0.1,
        inspire: 0.1,
        service: 0.7,
    },{                       // project
        projectSize: 1.0,
        seoImportance: 0.0,
    },{                       // users
        userAge: 0.30,
        usersTechSavy: 0.0,
        brandAwereness: 0.0,
    },{                       // goals page
        browse: 0.5,
        showOptions: 0.5,
        read: 0.0,
        converse: 0.0,
    },{
		browse:[["articles",0.8],["buttons",0.2]], // any
		showOptions:[["articles",0.8],["buttons",0.2]],
    read:[["articles",0.8],["buttons",0.2]], // any
		converse:[["articles",0.8],["buttons",0.2]],		
	},{                       // users
        minrows: 1,
        maxrows: 2,
    },{ //single
    preffedElements:[
            [   ["h1", 0.6]  ],
            [   ["textline", 0.6], ["inputtext", 0.6], ["search-icon", 0.3] ],
          ],
    },
    { //side
    preffedElementsSide:[
            [   ["search", 0.6],],
            [   ["cta", 0.6],],
          ],
    },
);
components.push(searchbarComponent);

textComponent= new component(
    "text",                 //symbol
    {                       // zindex
        zindexStartVSend: 0.5,
    },
    {                       // goals
        business: 0.7,
        creative: 0.1,
        ecommerce: 0.1,
        informative: 0.7,
        inspire: 0.1,
        service: 0.7,
    },
    {                       // project
        projectSize: 0.45,
        seoImportance: 0.45,
    },
    {                       // users
        userAge: 0.30,
        usersTechSavy: 0.1,
        brandAwereness: 0.1,
    },
    {                       // goals page
        browse: 0.1,
        showOptions: 0.2,
        read: 0.2,
        converse: 0.6,
    },{
		browse:[["buttons",0.8],["footer",0.2]],
	    showOptions:[["buttons",0.9], ["footer",0.1]],
	    read:[["buttons",0.9], ["footer",0.1]],
	    converse:[["buttons",0.9], ["footer",0.1]],
	},{                       // users
        minrows: 1,
        maxrows: 4,
    },{ //single
    preffedElements:[
            [   ["h1", 0.6], ["text", 0.6], ],
            [   ["h2", 0.6], ["text", 0.6], ],
            [   ["card", 0.6],["card", 0.6],["card", 0.6],],
            [   ["bulletlist", 0.6],  ["text", 0.6],],
            [   ["text", 0.6], ["text", 0.1], ],
            [   ["text-line", 0.6], ],
            [   ["image", 0.9], ],
          ],
    },
    { //side
    preffedElementsSide:[
            [   ["image", 0.6], ["text", 0.6] ,],
            [   ["image", 0.6],["image", 0.6],  ],
            [   ["card", 0.6],["card", 0.6],  ],
          ],
    },
);
components.push(textComponent);

uspComponent = new component(
    "usp",                 //symbol
    {                       // zindex
        zindexStartVSend: 0.05,
    },{                       // goals
        business: 0.1,
        creative: 0.0,
        ecommerce: 0.9,
        informative: 0.4,
        inspire: 0.0,
        service: 0.0,
    },{                       // project
        projectSize: 0.8,
        seoImportance: 0.85,
    },{                       // users
        userAge: 0.30,
        usersTechSavy: 0.2,
        brandAwereness: 0.1,
    },{                       // goals page
        browse: 0.1,
        showOptions: 0.2,
        read: 0.2,
        converse: 0.5,
    },{
        browse:[["search",0.2], ["menu",0.6],  ["header",0.2], ["articles",0.1]],
       showOptions:[["search",0.2], ["menu",0.6], ["articles",0.1], ['buttons', 0.2]],
       read:[["menu",0.6], ["header",0.2],  ["text",0.2], ["articles",0.1]],
        converse:[["menu",0.6], ["header",0.2],  ["text",0.2], ["articles",0.1]],

	  },{                       // users
        minrows: 1,
        maxrows: 1,
    },{ //single
    preffedElements:[
            [  ["iconTextline", 0.6],["cta", 0.1]],
          ],
    },
    { //side
    preffedElementsSide:[
            [   ["iconTextline", 0.6], ,["iconTextline", 0.6], ["cta", 0.1],],
          ],
    },
);
components.push(uspComponent);


var hashTemp_ = "";

function hashAddComponent(componentName_, componentY_) {
  hashTemp_ += "=";
  hashTemp_ += componentName_;
  hashTemp_ += ":"+componentY_;
}

function hashAddRow(rowY_, rowMargin_, rowHeight) {
  hashTemp_ += "%";
  // hashTemp_ += rowNum_;
  hashTemp_ += ":"+rowY_;
  hashTemp_ += ":"+rowMargin_;
  hashTemp_ += ":"+rowHeight;
}

function hashAddElement(eName_, xpos_, width_, height_) {

  hashTemp_ += "&";
  hashTemp_ += eName_;

  hashTemp_ += ":"+xpos_;
  hashTemp_ += ":"+width_;
  hashTemp_ += ":"+height_;
}


function hashLog() {
  window.location.hash = hashTemp_;
}

/* map inputs */
function map_range(value, low1, high1, low2, high2) {
	return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}


function getMainPagegoal() {
    var highest = 0;
    var highestString = "none";

    if(projectVariables.browse > highest){ highest = projectVariables.browse; highestString = "browse"}
    if(projectVariables.showOptions > highest){highest = projectVariables.showOptions; highestString = "showOptions"}
    if(projectVariables.read > highest){highest = projectVariables.read; highestString = "read"}
    if(projectVariables.converse > highest){highest =projectVariables.converse; highestString = "converse"}

    /*
        Somtimes nothing gets found.. (I dont know why. Seems random. Dont care atm.)
    */
    if (highestString == "none")highestString = "browse"; // sorry


    return highestString;
}





    function getRndInteger(min, max) {
      return Math.floor(Math.random() * (max - min + 1) ) + min;
    }

var squareMobile = 20;
var marginMobile = 5;
var squareDesktop = 80;
var marginDesktop = 20;

var mobileStart = 12.5;
var destkopStart = 50;

//generate columns;
var colsXDesktop = [];
var colsXbase = destkopStart;
colsXDesktop.push(destkopStart);
for (var i = 0; i < 12; i++) {
    colsXbase += squareDesktop
    colsXDesktop.push(colsXbase);
    if(i < 11){
        colsXbase += marginDesktop
        colsXDesktop.push(colsXbase);
    }
}


function firstNonConsecutive(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] - arr[i] !== 1) {
      return i;
    }
  }
  return null;
}


colsXDesktop.push(1280);
console.log("colsXDesktop");
console.log(colsXDesktop);

//generate columns mobile
var colsXMobile = [];
colsXbase = mobileStart;
colsXMobile.push(mobileStart);
for (var i = 0; i < 12; i++) {
    colsXbase += squareMobile
    colsXMobile.push(colsXbase);
    if(i < 11){
        colsXbase += marginMobile
        colsXMobile.push(colsXbase);
    }
}
colsXMobile.push(320);
console.log("colsXMobile");
console.log(colsXMobile);

contentBullets = new element(
    "bulletlist",
    {                       // zindex
        zindexStartVSend: 0.0,
    },{                       // goals
        business: 0.5,
        creative: 0.1,
        ecommerce: 0.7,
        informative: 0.5,
        inspire: 0.2,
        service: 0.3,
    },{                       // project
        projectSize: 0.6,
        seoImportance: 0.9,
    },{                       // users
        userAge: 0.5,
        usersTechSavy: 0.2,
        brandAwereness: 0.1,
    },{                       // goals page
        browse: 0.1,
        showOptions: 0.1,
        read: 0.8,
        converse: 0.8,
    },{	//propa's
	    browse:[],
	    showOptions:[],
	    read:[],
	    converse:[],
	},
    "4"// sizes S = 1   |   M = 2   |   L = 3
);
elements.push(contentBullets);

contentCard = new element(
    "card",
    {                       // zindex
        zindexStartVSend: 0.0,
    },{                       // goals
        business: 0.5,
        creative: 0.3,
        ecommerce: 0.9,
        informative: 0.5,
        inspire: 0.5,
        service: 0.4,
    },{                       // project
        projectSize: 0.5,
        seoImportance: 0.5,
    },{                       // users
        userAge: 0.5,
        usersTechSavy: 0.2,
        brandAwereness: 0.1,
    },{                       // goals page
        browse: 0.4,
        showOptions: 0.9,
        read: 0.1,
        converse: 0.3,
    },{	//propa's
	    browse:[],
	    showOptions:[],
	    read:[],
	    converse:[],
	},
    "4"// sizes S = 1   |   M = 2   |   L = 3
);
elements.push(contentCard);

ctaElement = new element(
    "cta",
    {                       // zindex
        zindexStartVSend: 0.8,
    },{                       // goals
        business: 0.5,
        creative: 5,
        ecommerce: 0.5,
        informative: 0.5,
        inspire: 0.5,
        service: 0.5,
    },{                       // project
        projectSize: 0.5,
        seoImportance: 0.5,
    },{                       // users
        userAge: 0.5,
        usersTechSavy: 0.5,
        brandAwereness: 0.5,
    },{                       // goals page
        browse: 0.5,
        showOptions: 0.5,
        read: 0.5,
        converse: 0.5,
    },{	//propa's
	    browse:[],
	    showOptions:[],
	    read:[],
	    converse:[],
	},
    "2"// sizes S = 1   |   M = 2   |   L = 3
);
elements.push(ctaElement);

filters = new element(
    "filter",
    {                       // zindex
        zindexStartVSend: 0.0,
    },{                       // goals
        business: 0.4,
        creative: 0.1,
        ecommerce: 0.8,
        informative: 0.1,
        inspire: 0.2,
        service: 0.1,
    },{                       // project
        projectSize: 0.9,
        seoImportance: 0.3,
    },{                       // users
        userAge: 0.3,
        usersTechSavy: 0.2,
        brandAwereness: 0.1,
    },{                       // goals page
        browse: 0.2,
        showOptions: 0.9,
        read: 0.1,
        converse: 0.1,
    },{	//propa's
	    browse:[],
	    showOptions:[],
	    read:[],
	    converse:[],
	},
    "2"// sizes S = 1   |   M = 2   |   L = 3
);
elements.push(filters);

contentH1 = new element(
    "h1",
    {                       // zindex
        zindexStartVSend: 0.0,
    },{                       // goals
        business: 0.5,
        creative: 0.5,
        ecommerce: 0.5,
        informative: 0.5,
        inspire: 0.5,
        service: 0.5,
    },{                       // project
        projectSize: 0.6,
        seoImportance: 0.9,
    },{                       // users
        userAge: 0.5,
        usersTechSavy: 0.2,
        brandAwereness: 0.1,
    },{                       // goals page
        browse: 0.3,
        showOptions: 0.3,
        read: 0.8,
        converse: 0.5,
    },{	//propa's
	    browse:[],
	    showOptions:[],
	    read:[],
	    converse:[],
	},
    "3"// sizes S = 1   |   M = 2   |   L = 3
);
elements.push(contentH1);

contentH2 = new element(
    "h2",
    {                       // zindex
        zindexStartVSend: 0.0,
    },{                       // goals
        business: 0.5,
        creative: 0.5,
        ecommerce: 0.5,
        informative: 0.5,
        inspire: 0.5,
        service: 0.5,
    },{                       // project
        projectSize: 0.6,
        seoImportance: 0.9,
    },{                       // users
        userAge: 0.5,
        usersTechSavy: 0.2,
        brandAwereness: 0.1,
    },{                       // goals page
        browse: 0.3,
        showOptions: 0.3,
        read: 0.8,
        converse: 0.5,
    },{	//propa's
	    browse:[],
	    showOptions:[],
	    read:[],
	    converse:[],
	},
    "2"// sizes S = 1   |   M = 2   |   L = 3
);
elements.push(contentH2);

contentH3 = new element(
    "h3",
    {                       // zindex
        zindexStartVSend: 0.0,
    },{                       // goals
        business: 0.5,
        creative: 0.5,
        ecommerce: 0.5,
        informative: 0.5,
        inspire: 0.5,
        service: 0.5,
    },{                       // project
        projectSize: 0.6,
        seoImportance: 0.9,
    },{                       // users
        userAge: 0.5,
        usersTechSavy: 0.2,
        brandAwereness: 0.1,
    },{                       // goals page
        browse: 0.3,
        showOptions: 0.3,
        read: 0.8,
        converse: 0.5,
    },{	//propa's
	    browse:[],
	    showOptions:[],
	    read:[],
	    converse:[],
	},
    "2"// sizes S = 1   |   M = 2   |   L = 3
);
elements.push(contentH3);

contentTextLineIcon = new element(
    "iconTextline",
    {                       // zindex
        zindexStartVSend: 0.0,
    },{                       // goals
        business: 0.5,
        creative: 0.5,
        ecommerce: 0.5,
        informative: 0.5,
        inspire: 0.5,
        service: 0.5,
    },{                       // project
        projectSize: 0.6,
        seoImportance: 0.9,
    },{                       // users
        userAge: 0.5,
        usersTechSavy: 0.2,
        brandAwereness: 0.1,
    },{                       // goals page
        browse: 0.3,
        showOptions: 0.3,
        read: 0.8,
        converse: 0.5,
    },{	//propa's
	    browse:[],
	    showOptions:[],
	    read:[],
	    converse:[],
	},
    "3"// sizes S = 1   |   M = 2   |   L = 3
);
elements.push(contentTextLineIcon);

contentImage = new element(
    "image",
    {                       // zindex
        zindexStartVSend: 0.0,
    },{                       // goals
        business: 0.1,
        creative: 0.9,
        ecommerce: 0.8,
        informative: 0.6,
        inspire: 0.8,
        service: 0.1,
    },{                       // project
        projectSize: 0.5,
        seoImportance: 0.1,
    },{                       // users
        userAge: 0.5,
        usersTechSavy: 0.2,
        brandAwereness: 0.1,
    },{                       // goals page
        browse: 0.3,
        showOptions: 0.6,
        read: 0.5,
        converse: 0.5,
    },{	//propa's
	    browse:[],
	    showOptions:[],
	    read:[],
	    converse:[],
	},
    "5"// sizes S = 1   |   M = 2   |   L = 3
);
elements.push(contentImage);

inputText = new element(
    "inputText",
    {                       // zindex
        zindexStartVSend: 0.0,
    },{                       // goals
        business: 0.5,
        creative: 0.5,
        ecommerce: 0.5,
        informative: 0.5,
        inspire: 0.5,
        service: 0.5,
    },{                       // project
        projectSize: 0.5,
        seoImportance: 0.5,
    },{                       // users
        userAge: 0.5,
        usersTechSavy: 0.2,
        brandAwereness: 0.1,
    },{                       // goals page
        browse: 0.5,
        showOptions: 0.3,
        read: 0.1,
        converse: 0.6,
    },{	//propa's
	    browse:[],
	    showOptions:[],
	    read:[],
	    converse:[],
	},
    "3"// sizes S = 1   |   M = 2   |   L = 3
);
elements.push(inputText);

logoElement = new element(
    "logo",
    {                       // zindex
        zindexStartVSend: 0.0,
    },{                       // goals
        business: 0.8,
        creative: 2,
        ecommerce: 0.5,
        informative: 0.5,
        inspire: 0.5,
        service: 0.5,
    },{                       // project
        projectSize: 0.5,
        seoImportance: 0.5,
    },{                       // users
        userAge: 0.5,
        usersTechSavy: 0.2,
        brandAwereness: 0.1,
    },{                       // goals page
        browse: 0.5,
        showOptions: 0.5,
        read: 0.1,
        converse: 0.5,
    },{	//propa's
	    browse:[],
	    showOptions:[],
	    read:[],
	    converse:[],
	},
    "3"// sizes S = 1   |   M = 2   |   L = 3
);
elements.push(logoElement);

menuItemsElement = new element(
    "menuItem",
    {                       // zindex
        zindexStartVSend: 0.2,
    },{                       // goals
        business: 0.5,
        creative: 0.5,
        ecommerce: 0.5,
        informative: 0.5,
        inspire: 0.5,
        service: 0.5,
    },{                       // project
        projectSize: 0.7,
        seoImportance: 0.9,
    },{                       // users
        userAge: 0.5,
        usersTechSavy: 0.5,
        brandAwereness: 0.5,
    },{                       // goals page
        browse: 0.5,
        showOptions: 0.5,
        read: 0.1,
        converse: 0.1,
    },{	//propa's
	    browse:[],
	    showOptions:[],
	    read:[],
	    converse:[],
	},
    "3"// sizes S = 1   |   M = 2   |   L = 3
);
elements.push(menuItemsElement);

shareOptions = new element(
    "share",
    {                       // zindex
        zindexStartVSend: 0.0,
    },{                       // goals
        business: 0.6,
        creative: 0.1,
        ecommerce: 0.7,
        informative: 0.1,
        inspire: 0.7,
        service: 0.1,
    },{                       // project
        projectSize: 0.6,
        seoImportance: 0.3,
    },{                       // users
        userAge: 0.2,
        usersTechSavy: 0.6,
        brandAwereness: 0.1,
    },{                       // goals page
        browse: 0.5,
        showOptions: 0.5,
        read: 0.6,
        converse: 0.1,
    },{	//propa's
	    browse:[],
	    showOptions:[],
	    read:[],
	    converse:[],
	},
    "2"// sizes S = 1   |   M = 2   |   L = 3
);
elements.push(shareOptions);

contentText = new element(
    "text",
    {                       // zindex
        zindexStartVSend: 0.0,
    },{                       // goals
        business: 0.5,
        creative: 0.5,
        ecommerce: 0.5,
        informative: 0.5,
        inspire: 0.5,
        service: 0.5,
    },{                       // project
        projectSize: 0.6,
        seoImportance: 0.9,
    },{                       // users
        userAge: 0.5,
        usersTechSavy: 0.2,
        brandAwereness: 0.1,
    },{                       // goals page
        browse: 0.3,
        showOptions: 0.3,
        read: 0.8,
        converse: 0.5,
    },{	//propa's
	    browse:[],
	    showOptions:[],
	    read:[],
	    converse:[],
	},
    "5"// sizes S = 1   |   M = 2   |   L = 3
);
elements.push(contentText);

contentTextLine = new element(
    "textline",
    {                       // zindex
        zindexStartVSend: 0.0,
    },{                       // goals
        business: 0.5,
        creative: 0.5,
        ecommerce: 0.5,
        informative: 0.5,
        inspire: 0.5,
        service: 0.5,
    },{                       // project
        projectSize: 0.6,
        seoImportance: 0.9,
    },{                       // users
        userAge: 0.5,
        usersTechSavy: 0.2,
        brandAwereness: 0.1,
    },{                       // goals page
        browse: 0.3,
        showOptions: 0.3,
        read: 0.8,
        converse: 0.5,
    },{	//propa's
	    browse:[],
	    showOptions:[],
	    read:[],
	    converse:[],
	},
    "3"// sizes S = 1   |   M = 2   |   L = 3
);
elements.push(contentTextLine);

function initUI(){
    console.log("Init UI");
    updateBusiness();
    updateCreative();
    updateEcommerce();
    updateInformative();
    updateInspire();
    updateService();

    updateBrowse();
    updateShowOptions();
    updateRead();
    updateConverse();

    updateprojectSize();
    updatebrandAwereness();
    updateseoImportance();
    updateuserAge();
    updateusersTechSavy();

    checkProjectGoalsState();
    checkPageGoalState();

    console.log(projectVariables);
}

function updateProjectGoals() {
    start();
}

    var projectVariables = {
        // Project goals divide 100
        business: 0.1,
        creative: 0.1,
        ecommerce: 0.9,
        informative: 0.4,
        inspire: 0.1,
        service: 0.4,

        // page goals divide 100
        browse: 0.6,
        showOptions: 0.4,
        read: 0.0,
        converse: 0.0,

        //msic
        projectSize: 0.2,
        brandAwereness: 0.1,
        seoImportance: 0.8,
        usersAge: 0.5,
        usersTechSavy: 0.8,
    };


	function updateBusinessRange(v_) {updateBusiness();document.getElementById('js-BusinessText').value = v_;}
	function updateBusinessText(v_) {updateBusiness();document.getElementById('js-BusinessRange').value = v_;}
	function updateBusiness() {projectVariables.business = document.getElementById('js-BusinessRange').value / 100;checkProjectGoalsState();}

	function updateCreativeRange(v_) {updateCreative();document.getElementById('js-CreativeText').value = v_;}
	function updateCreativeText(v_) {updateCreative();document.getElementById('js-CreativeRange').value = v_;}
	function updateCreative() {projectVariables.creative = document.getElementById('js-CreativeRange').value / 100;checkProjectGoalsState();}

	function updateEcommerceRange(v_) {updateEcommerce();document.getElementById('js-EcommerceText').value = v_;}
	function updateEcommerceText(v_) {updateEcommerce();document.getElementById('js-EcommerceRange').value = v_;}
	function updateEcommerce() {projectVariables.ecommerce = document.getElementById('js-EcommerceRange').value / 100;checkProjectGoalsState();}

	function updateInformativeRange(v_) {updateInformative();document.getElementById('js-InformativeText').value = v_;}
	function updateInformativeText(v_) {updateInformative();document.getElementById('js-InformativeRange').value = v_;}
	function updateInformative() {projectVariables.informative = document.getElementById('js-InformativeRange').value / 100;checkProjectGoalsState();}

	function updateInspireRange(v_) {updateInspire();document.getElementById('js-InspireText').value = v_;}
	function updateInspireText(v_) {updateInspire();document.getElementById('js-InspireRange').value = v_;}
	function updateInspire() {projectVariables.inspire = document.getElementById('js-InspireRange').value / 100;checkProjectGoalsState();}

	function updateServiceRange(v_) {;document.getElementById('js-ServiceText').value = v_;updateService()}
	function updateServiceText(v_) {document.getElementById('js-ServiceRange').value = v_;updateService()}
	function updateService() {projectVariables.service = document.getElementById('js-ServiceRange').value / 100;checkProjectGoalsState();}

	function checkProjectGoalsState() {
		var b = parseInt(document.getElementById('js-BusinessText').value);
		var c = parseInt(document.getElementById('js-CreativeText').value);
		var e = parseInt(document.getElementById('js-EcommerceText').value);
		var i = parseInt(document.getElementById('js-InformativeText').value);
		var i2 = parseInt(document.getElementById('js-InspireText').value);
		var s = parseInt(document.getElementById('js-ServiceText').value);

		var totalCount = b+c+e+i+i2+s;

		var element = document.getElementById('js-projectGoalPointsLeft');
		if(totalCount <= 200){
			element.classList.remove("bad");
			element.classList.add("good");
		}else{
			element.classList.remove("good");
			element.classList.add("bad");
		}
		element.value = totalCount;
	}


	function updateBrowseRange(v_) {;document.getElementById('js-BrowseText').value = v_;updateBrowse()}
	function updateBrowseText(v_) {document.getElementById('js-BrowseRange').value = v_;updateBrowse()}
	function updateBrowse() {projectVariables.browse = document.getElementById('js-BrowseRange').value / 100;checkPageGoalState();}

	function updateShowOptionsRange(v_) {;document.getElementById('js-ShowOptionsText').value = v_;updateShowOptions()}
	function updateShowOptionsText(v_) {document.getElementById('js-ShowOptionsRange').value = v_;updateShowOptions()}
	function updateShowOptions() {projectVariables.ShowOptions = document.getElementById('js-ShowOptionsRange').value / 100;checkPageGoalState();}


	function updateReadRange(v_) {;document.getElementById('js-ReadText').value = v_;updateRead()}
	function updateReadText(v_) {document.getElementById('js-ReadRange').value = v_;updateRead()}
	function updateRead() {projectVariables.read = document.getElementById('js-ReadRange').value / 100;checkPageGoalState();}

	function updateConverseRange(v_) {;document.getElementById('js-ConverseText').value = v_;updateConverse()}
	function updateConverseText(v_) {document.getElementById('js-ConverseRange').value = v_;updateConverse()}
	function updateConverse() {projectVariables.converse = document.getElementById('js-ConverseRange').value / 100;checkPageGoalState();}



	function checkPageGoalState() {
		var browse = parseInt(document.getElementById('js-BrowseText').value);
		var showOptions = parseInt(document.getElementById('js-ShowOptionsText').value);
		var read = parseInt(document.getElementById('js-ReadText').value);
		var converse = parseInt(document.getElementById('js-ConverseText').value);

		var totalCount = browse + showOptions + read + converse;

		var element = document.getElementById('js-pageGoalPointsLeft');
		if(totalCount <= 100){
			// console.log("good");
		}else{
			// console.log("bad");
		}
		element.value = totalCount;
	}


	// misc
	function updateprojectSizeRange(v_) {;document.getElementById('js-projectSizeText').value = v_;updateprojectSize()}
	function updateprojectSizeText(v_) {document.getElementById('js-projectSizeRange').value = v_;updateprojectSize()}
	function updateprojectSize() {projectVariables.projectSize = document.getElementById('js-projectSizeRange').value / 100;checkPageGoalState();}


	function updatebrandAwerenessRange(v_) {;document.getElementById('js-brandAwerenessText').value = v_;updatebrandAwereness()}
	function updatebrandAwerenessText(v_) {document.getElementById('js-brandAwerenessRange').value = v_;updatebrandAwereness()}
	function updatebrandAwereness() {projectVariables.brandAwereness = document.getElementById('js-brandAwerenessRange').value / 100;checkPageGoalState();}

	function updateseoImportanceRange(v_) {;document.getElementById('js-seoImportanceText').value = v_;updateseoImportance()}
	function updateseoImportanceText(v_) {document.getElementById('js-seoImportanceRange').value = v_;updateseoImportance()}
	function updateseoImportance() {projectVariables.seoImportance = document.getElementById('js-seoImportanceRange').value / 100;checkPageGoalState();}



	function updateusersTechSavyRange(v_) {;document.getElementById('js-usersTechSavyText').value = v_;updateusersTechSavy()}
	function updateusersTechSavyText(v_) {document.getElementById('js-usersTechSavyRange').value = v_;updateusersTechSavy()}
	function updateusersTechSavy() {projectVariables.usersTechSavy = document.getElementById('js-usersTechSavyRange').value / 100;checkPageGoalState();}

	function updateuserAgeRange(v_) {;document.getElementById('js-userAgeText').value = v_;updateuserAge()}
	function updateuserAgeText(v_) {document.getElementById('js-userAgeRange').value = v_;updateuserAge()}
	function updateuserAge() {projectVariables.userAge = document.getElementById('js-userAgeRange').value / 100;checkPageGoalState();}


bulletIcon = new element(
    "bullet-icon",
    {                       // zindex
        zindexStartVSend: 0.9,
    },{                       // goals
        business: 0.5,
        creative: 5,
        ecommerce: 0.5,
        informative: 0.5,
        inspire: 0.5,
        service: 0.5,
    },{                       // project
        projectSize: 0.5,
        seoImportance: 0.5,
    },{                       // users
        userAge: 0.5,
        usersTechSavy: 0.5,
        brandAwereness: 0.5,
    },{                       // goals page
        browse: 0.5,
        showOptions: 0.5,
        read: 0.5,
        converse: 0.5,
    },{	//propa's
	    browse:[],
	    showOptions:[],
	    read:[],
	    converse:[],
	},
    "1"// sizes S = 1   |   M = 2   |   L = 3
);
elements.push(bulletIcon);

cartIcon = new element(
    "cart-icon",
    {                       // zindex
        zindexStartVSend: 0.9,
    },{                       // goals
        business: 0.5,
        creative: 5,
        ecommerce: 0.5,
        informative: 0.5,
        inspire: 0.5,
        service: 0.5,
    },{                       // project
        projectSize: 0.5,
        seoImportance: 0.5,
    },{                       // users
        userAge: 0.5,
        usersTechSavy: 0.5,
        brandAwereness: 0.5,
    },{                       // goals page
        browse: 0.5,
        showOptions: 0.5,
        read: 0.5,
        converse: 0.5,
    },{	//propa's
	    browse:[],
	    showOptions:[],
	    read:[],
	    converse:[],
	},
    "1"// sizes S = 1   |   M = 2   |   L = 3
);
elements.push(cartIcon);

checkIcon = new element(
    "check-icon",
    {                       // zindex
        zindexStartVSend: 0.9,
    },{                       // goals
        business: 0.5,
        creative: 5,
        ecommerce: 0.5,
        informative: 0.5,
        inspire: 0.5,
        service: 0.5,
    },{                       // project
        projectSize: 0.5,
        seoImportance: 0.0,
    },{                       // users
        userAge: 0.5,
        usersTechSavy: 0.5,
        brandAwereness: 0.5,
    },{                       // goals page
        browse: 0.7,
        showOptions: 0.7,
        read: 0.3,
        converse: 0.7,
    },{	//propa's
	    browse:[],
	    showOptions:[],
	    read:[],
	    converse:[],
	},
    "1"// sizes S = 1   |   M = 2   |   L = 3
);
elements.push(checkIcon);

cartProfile = new element(
    "profile-icon",
    {                       // zindex
        zindexStartVSend: 0.9,
    },{                       // goals
        business: 0.1,
        creative: 0.1,
        ecommerce: 0.9,
        informative: 0.1,
        inspire: 0.4,
        service: 0.7,
    },{                       // project
        projectSize: 0.9,
        seoImportance: 0.1,
    },{                       // users
        userAge: 0.6,
        usersTechSavy: 0.6,
        brandAwereness: 0.7,
    },{                       // goals page
        browse: 0.1,
        showOptions: 0.1,
        read: 0.1,
        converse: 0.1,
    },{	//propa's
	    browse:[],
	    showOptions:[],
	    read:[],
	    converse:[],
	},
    "1"// sizes S = 1   |   M = 2   |   L = 3
);
elements.push(cartProfile);

searchElement = new element(
    "search-icon",
    {                       // zindex
        zindexStartVSend: 0.7,
    },{                       // goals
        business: 0.7,
        creative: 0.1,
        ecommerce: 0.7,
        informative: 0.2,
        inspire: 0.6,
        service: 0.2,
    },{                       // project
        projectSize: 0.8,
        seoImportance: 0.1,
    },{                       // users
        userAge: 0.4,
        usersTechSavy: 0.6,
        brandAwereness: 0.1,
    },{                       // goals page
        browse: 0.8,
        showOptions: 0.8,
        read: 0.1,
        converse: 0.1,
    },{	//propa's
	    browse:[],
	    showOptions:[],
	    read:[],
	    converse:[],
	},
    "1"// sizes S = 1   |   M = 2   |   L = 3
);
elements.push(searchElement);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUuanMiLCJtb2RlbC1jb21wb25lbnRzLmpzIiwibW9kZWwtZWxlbWVudHMuanMiLCJtb2RlbC1lbGVtZW50c1BlclJvdy5qcyIsIm1vZGVsLXJvd3MuanMiLCJjbGFzc2VzL2NsYXNzLWNvbXBvbmVudC5qcyIsImNsYXNzZXMvY2xhc3MtZWxlbWVudC5qcyIsImNvbXBvbmVudHMvYy1hcnRpY2xlcy5qcyIsImNvbXBvbmVudHMvYy1idXR0b25zLmpzIiwiY29tcG9uZW50cy9jLWZvb3Rlci5qcyIsImNvbXBvbmVudHMvYy1oZWFkZXIuanMiLCJjb21wb25lbnRzL2MtbWVudS5qcyIsImNvbXBvbmVudHMvYy1zZWFyY2guanMiLCJjb21wb25lbnRzL2MtdGV4dC5qcyIsImNvbXBvbmVudHMvYy11c3AuanMiLCJmdW5jdGlvbnMvYWxpZ25tZW50LmpzIiwiZnVuY3Rpb25zL2hhc2guanMiLCJmdW5jdGlvbnMvbWFwLmpzIiwiZnVuY3Rpb25zL3BhZ2Vnb2FsLmpzIiwiZnVuY3Rpb25zL3JhbmRvbVJhbmdlLmpzIiwiZnVuY3Rpb25zL3NldHVwQ29sdW1ucy5qcyIsImVsZW1lbnRzL2UtYnVsbGV0cy5qcyIsImVsZW1lbnRzL2UtY2FyZC5qcyIsImVsZW1lbnRzL2UtY3RhLmpzIiwiZWxlbWVudHMvZS1maWx0ZXIuanMiLCJlbGVtZW50cy9lLWgxLmpzIiwiZWxlbWVudHMvZS1oMi5qcyIsImVsZW1lbnRzL2UtaDMuanMiLCJlbGVtZW50cy9lLWljb24tdGV4dGxpbmUuanMiLCJlbGVtZW50cy9lLWltYWdlLmpzIiwiZWxlbWVudHMvZS1pbnB1dC10ZXh0LmpzIiwiZWxlbWVudHMvZS1sb2dvLmpzIiwiZWxlbWVudHMvZS1tZW51SXRlbXMuanMiLCJlbGVtZW50cy9lLXNoYXJlLmpzIiwiZWxlbWVudHMvZS10ZXh0LmpzIiwiZWxlbWVudHMvZS10ZXh0bGluZS5qcyIsInVpL2luaXRVSS5qcyIsInVpL3VpLmpzIiwidWkvdXBkYXRlVmFsdWVzLmpzIiwiZWxlbWVudHMvaWNvbnMvZS1idWxldC1pY29uLmpzIiwiZWxlbWVudHMvaWNvbnMvZS1jYXJ0LWljb24uanMiLCJlbGVtZW50cy9pY29ucy9lLWNoZWNrLWljb24uanMiLCJlbGVtZW50cy9pY29ucy9lLXByb2ZpbGUtaWNvbi5qcyIsImVsZW1lbnRzL2ljb25zL2Utc2VhcmNoLWljb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbFBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNuTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3ZPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMxS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3BEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNsREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDL0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDN0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN2REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDNUNBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2xJQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZCA9IHRydWU7XG5cbnZhciBjb21wb25lbnRzID0gIFtdO1xudmFyIGVsZW1lbnRzID0gIFtdO1xuXG5jb25zb2xlLmxvZyhlbGVtZW50cyk7XG5cbnZhciBwcm9qZWN0VmFyaWFibGVzID0ge1xuICAgIC8vIFByb2plY3QgZ29hbHMgZGl2aWRlIDEwMFxuICAgIGJ1c2luZXNzOiAwLjEsXG4gICAgY3JlYXRpdmU6IDAuMSxcbiAgICBlY29tbWVyY2U6IDAuOSxcbiAgICBpbmZvcm1hdGl2ZTogMC40LFxuICAgIGluc3BpcmU6IDAuMSxcbiAgICBzZXJ2aWNlOiAwLjQsXG4gXG4gICAgLy8gcGFnZSBnb2FscyBkaXZpZGUgMTAwXG4gICAgYnJvd3NlOiAwLjYsXG4gICAgc2hvd09wdGlvbnM6IDAuNCxcbiAgICByZWFkOiAwLjAsXG4gICAgY29udmVyc2U6IDAuMCxcblxuICAgIC8vbXNpY1xuICAgIHByb2plY3RTaXplOiAwLjIsXG4gICAgYnJhbmRBd2VyZW5lc3M6IDAuMSxcbiAgICBzZW9JbXBvcnRhbmNlOiAwLjgsXG4gICAgdXNlcnNBZ2U6IDAuNSxcbiAgICB1c2Vyc1RlY2hTYXZ5OiAwLjgsXG59O1xuXG5mdW5jdGlvbiBzdGFydCgpIHtcblxuICB0cnkge1xuICAgIGhhdHNlZmxhdHMoKTtcbiAgfVxuICBjYXRjaChlcnIpIHtcbiAgICAvLyBzdGFydCgpO1xuICB9XG59XG5cblxuXG5mdW5jdGlvbiBoYXRzZWZsYXRzKCkge1xuICAgIGhhc2hUZW1wXyA9IFwiXCI7XG5cbiAgICBpbml0VUkoKTtcblxuICAvL1xuICB2YXIgY29tcG9uZW50c1RvRHJhdyA9IFtdO1xuXG5cdC8vIFJhdGUgYWxsIGNvbXBvbmVudHNcblx0dmFyIGNvbXBvbmVudHNUb0RyYXcgPSBjb21wb25lbnRzTW9kZWwoKTtcblxuXG4gIC8vIC8vIHJlbW92ZSBhbGwgZW1wdHlzIGNvbXBvbmVudHM6XG4gIGZvciAodmFyIHAgPSAwOyBwIDwgY29tcG9uZW50c1RvRHJhdy5sZW5ndGg7IHArKykge1xuICAgICBpZihjb21wb25lbnRzVG9EcmF3Lmxlbmd0aCA9PSAwKSBjb21wb25lbnRzVG9EcmF3LnNwbGljZShwLCAxKTtcbiAgfVxuXG5cblxuICBjb25zb2xlLmxvZyhcIlwiKTtcbiAgY29uc29sZS5sb2coXCIjUk9XUzpcIik7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgY29tcG9uZW50c1RvRHJhdy5sZW5ndGg7IGkrKykge1xuICAgIHJvd3NNb2RlbChjb21wb25lbnRzVG9EcmF3W2ldKTtcbiAgfVxuXG4gIGNvbnNvbGUubG9nKFwiXCIpO1xuICBjb25zb2xlLmxvZyhcIiNFbGVtZW50cyBmb3Igcm93OlwiKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbXBvbmVudHNUb0RyYXcubGVuZ3RoOyBpKyspIHtcbiAgICBjb21wb25lbnRzVG9EcmF3W2ldLnNldFJvd0VsZW1lbnRzKCk7XG4gIH1cblxuXG5cblxuXG5cbiAgLy8gY29uc29sZS5sb2coXCJcIik7XG4gIC8vIGNvbnNvbGUubG9nKFwiI0hlaWdodCwgd2lkdGggcGVyIGVsZW1lbnQgYW5kIE1heCBoZWlnaHQgcGVyIGNvbXBvbmVudFwiKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb21wb25lbnRzVG9EcmF3Lmxlbmd0aDsgaSsrKSB7XG4gICAgY29tcG9uZW50c1RvRHJhd1tpXS5jYWxjdWxhdGVIaWdoT2ZFbGVtZW50cygpO1xuICB9XG5cbiAgLy8gY29uc29sZS5sb2coXCJcIik7XG4gIC8vIGNvbnNvbGUubG9nKFwiIyB4cG9zIGZvciBlYWNoIGVsZW1lbnQgaW4gYSByb3dcIik7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgY29tcG9uZW50c1RvRHJhdy5sZW5ndGg7IGkrKykge1xuICAgIGNvbXBvbmVudHNUb0RyYXdbaV0uc2V0WEZvckFsbFJvd3NBbmRFbGVtZW50cygpO1xuICB9XG5cblxuXG5cblxuICAvLyBjb25zb2xlLmxvZyhcIlwiKTtcbiAgLy8gY29uc29sZS5sb2coXCIjIE1ha2UgSGFzaFwiKTtcbiAgdmFyIHlCYXNlID0gMDtcblxuXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb21wb25lbnRzVG9EcmF3Lmxlbmd0aDsgaSsrKSB7XG4gICAgLy8gY29uc29sZS5sb2coXCJcIik7XG4gICAgLy8gY29uc29sZS5sb2coXCJcIik7XG4gICAgdmFyIHJvd3NBbmRFbGVtZW50cyA9IGNvbXBvbmVudHNUb0RyYXdbaV0uZ2V0Um93c0FuZGVsZW1lbnRzKCk7XG4gICAgLy8gY29uc29sZS5sb2coY29tcG9uZW50c1RvRHJhd1tpXS5yZXR1cm5UaXRsZSgpICsgXCIgLyByb3dzOiBcIiArIHJvd3NBbmRFbGVtZW50cy5sZW5ndGgpO1xuICAgIC8vIGNvbnNvbGUubG9nKFwieTogXCIreUJhc2UpO1xuXG4gICAgaGFzaEFkZENvbXBvbmVudChjb21wb25lbnRzVG9EcmF3W2ldLnJldHVyblRpdGxlKCksIHlCYXNlKTtcbiAgICB5QmFzZSArPSBjb21wb25lbnRzVG9EcmF3W2ldLnJldHVyblkoKSArIGNvbXBvbmVudHNUb0RyYXdbaV0ucmV0dXJuTWFyZ2luKCk7XG5cbiAgICAvLyAgICAgICVcblxuICAgIGZvciAodmFyIHogPSAwOyB6IDwgcm93c0FuZEVsZW1lbnRzLmxlbmd0aDsgeisrKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcIlwiKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiUm93OiBcIiArIHogK1wiIHdpdGggZWxtZW5lbnQgY291bnQ6IFwiICsgcm93c0FuZEVsZW1lbnRzW3pdLmxlbmd0aCk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhyb3dzQW5kRWxlbWVudHMpO1xuICAgICAgLy8gY29uc29sZS5sb2cocm93c0FuZEVsZW1lbnRzW3pdKTtcbiAgICAgIHZhciByb3dZID0gY29tcG9uZW50c1RvRHJhd1tpXS5yZXR1cm5Sb3dZKHopO1xuICAgICAgLy8gY29uc29sZS5sb2coXCJyb3cgeTogXCIrIHJvd1kpO1xuXG4gICAgICB2YXIgcm93SGVpZ2h0ID0gY29tcG9uZW50c1RvRHJhd1tpXS5yZXR1cm5Sb3dIZWlnaHQoeik7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcInJvd0hlaWdodDogXCIrIHJvd0hlaWdodCk7XG5cbiAgICAgIHZhciBtYXJnaW4gPSBjb21wb25lbnRzVG9EcmF3W2ldLnJldHVyblJvd3NBbmRFTGVtZW50c01hcmdpbih6KTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwicm93TWFyZ2luOiBcIisgbWFyZ2luKTtcblxuXG5cblxuICAgICAgaGFzaEFkZFJvdyhyb3dZLCBtYXJnaW4sIHJvd0hlaWdodClcblxuICAgICAgZm9yICh2YXIgcCA9IDA7IHAgPCByb3dzQW5kRWxlbWVudHNbel0ubGVuZ3RoOyBwKyspIHtcbiAgICAgICAgdmFyIGVOYW1lID0gcm93c0FuZEVsZW1lbnRzW3pdW3BdWzFdLnJldHVyblRpdGxlKCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiRWxlbWVudDogXCIgKyB6ICsgXCIgXCIgKyBlTmFtZSk7XG4gICAgICAgIHZhciBoZWlnaHQgPSByb3dzQW5kRWxlbWVudHNbel1bcF1bMV0ucmV0dXJuaGVpZ2h0KCk7XG4gICAgICAgIHZhciB3aWR0aCA9IHJvd3NBbmRFbGVtZW50c1t6XVtwXVsxXS5yZXR1cm5XaWR0aCgpO1xuXG4gICAgICAgIHZhciB4cG9zID0gY29tcG9uZW50c1RvRHJhd1tpXS5yZXR1cm5Sb3dYcG9zKHoscCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwieHBvczogXCIrIHhwb3MpO1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwid2lkdGg6IFwiKyB3aWR0aCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaGVpZ2h0OiBcIisgaGVpZ2h0KTtcblxuXG4gICAgICAgIGhhc2hBZGRFbGVtZW50KGVOYW1lLCB4cG9zLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuXG4gIC8qICAgICAgICAgICAgKi9cblxuXG5cbiAgLypcblxuICAgb250Y2lqZmVyIHNjcmlwdCB2b29yIHBsdWdpblxuXG4gICovXG4gIC8vIHZhciBsb2NhdGlvbkhhc2ggPSBoYXNoVGVtcF87XG4gIC8vIHZhciBoYXNoID0gbG9jYXRpb25IYXNoO1xuICAvLyB2YXIgcmVzID0gaGFzaC5yZXBsYWNlKFwiI1wiLCBcIlwiKTtcbiAgLy8gY29uc29sZS5sb2cocmVzKTtcbiAgLy9cbiAgLy9cbiAgLy8gdmFyIGhhc2hDb21wb25lbnRzID0gcmVzLnNwbGl0KFwiPVwiKTtcbiAgLy8gZm9yICh2YXIgaSA9IDE7IGkgPCBoYXNoQ29tcG9uZW50cy5sZW5ndGg7IGkrKykge1xuICAvL1xuICAvL1xuICAvLyAgIGNvbnNvbGUubG9nKFwiXCIpO1xuICAvLyAgIGNvbnNvbGUubG9nKFwiI0NPTVBPTkVOVFwiKTtcbiAgLy8gICB2YXIgY29tcG9uZW50VmFsdWVzID0gaGFzaENvbXBvbmVudHNbaV0uc3BsaXQoXCI6XCIpO1xuICAvLyAgIHZhciBjb21wb25lbnROYW1lID0gY29tcG9uZW50VmFsdWVzWzBdO1xuICAvLyAgIHZhciBjb21wb25lbnRZID0gY29tcG9uZW50VmFsdWVzWzFdO1xuICAvLyAgIGNvbXBvbmVudFkucmVwbGFjZShcIiVcIiwgXCJcIik7XG4gIC8vICAgY29tcG9uZW50WSA9IHBhcnNlSW50KGNvbXBvbmVudFkpO1xuICAvL1xuICAvLyAgIGNvbnNvbGUubG9nKFwiY29tcG9uZW50TmFtZTogXCIrIGNvbXBvbmVudE5hbWUpO1xuICAvLyAgIGNvbnNvbGUubG9nKFwiY29tcG9uZW50WTogXCIrIGNvbXBvbmVudFkpO1xuICAvL1xuICAvL1xuICAvL1xuICAvLyAgIHZhciBoYXNoUm93cyA9IGhhc2hDb21wb25lbnRzW2ldLnNwbGl0KFwiJVwiKTtcbiAgLy8gICBmb3IgKHZhciByID0gMTsgciA8IGhhc2hSb3dzLmxlbmd0aDsgcisrKSB7XG4gIC8vICAgICAgIGNvbnNvbGUubG9nKFwiI1JvdyBudW06IFwiICsgcik7XG4gIC8vICAgICAgIGNvbnNvbGUubG9nKGhhc2hSb3dzW3JdKTtcbiAgLy9cbiAgLy8gICAgICAgdmFyIHJvd1ZhbHVlcyA9IGhhc2hSb3dzW3JdLnNwbGl0KFwiOlwiKTtcbiAgLy9cbiAgLy8gICAgICAgdmFyIHJvd1kgPSBwYXJzZUludChyb3dWYWx1ZXNbMV0pO1xuICAvLyAgICAgICB2YXIgcm93TWFyZ2luID0gcGFyc2VJbnQocm93VmFsdWVzWzJdKTtcbiAgLy8gICAgICAgdmFyIHJvd0hlaWdodCA9IHJvd1ZhbHVlc1szXS5zcGxpdChcIiZcIik7O1xuICAvLyAgICAgICByb3dIZWlnaHQgPSBwYXJzZUludChyb3dIZWlnaHRbMF0pO1xuICAvL1xuICAvLyAgICAgICBjb25zb2xlLmxvZyhcInJvd1k6IFwiKyByb3dZKTtcbiAgLy8gICAgICAgY29uc29sZS5sb2coXCJyb3dNYXJnaW46IFwiKyByb3dNYXJnaW4pO1xuICAvLyAgICAgICBjb25zb2xlLmxvZyhcInJvd0hlaWdodDogXCIrIHJvd0hlaWdodCk7XG4gIC8vXG4gIC8vXG4gIC8vICAgICAgIHZhciBlbGVtZW50c09uUm93ID0gaGFzaFJvd3Nbcl0uc3BsaXQoXCImXCIpO1xuICAvLyAgICAgICBjb25zb2xlLmxvZyhlbGVtZW50c09uUm93KTtcbiAgLy9cbiAgLy8gICAgICAgICBmb3IgKHZhciBlID0gMTsgZSA8IGVsZW1lbnRzT25Sb3cubGVuZ3RoOyBlKyspIHtcbiAgLy8gICAgICAgICAgIGNvbnNvbGUubG9nKFwiXCIpO1xuICAvLyAgICAgICAgICAgY29uc29sZS5sb2coXCIjRUxFTUVOVCBcIik7XG4gIC8vICAgICAgICAgICBjb25zb2xlLmxvZyhlbGVtZW50c09uUm93W2VdKTtcbiAgLy8gICAgICAgICAgIHZhciBlbGVtZW50VmFsdWVzID0gZWxlbWVudHNPblJvd1tlXS5zcGxpdChcIjpcIik7XG4gIC8vXG4gIC8vXG4gIC8vICAgICAgICAgICB2YXIgZU5hbWUgPSBlbGVtZW50VmFsdWVzWzBdO1xuICAvLyAgICAgICAgICAgdmFyIGVYcG9zID0gcGFyc2VJbnQoZWxlbWVudFZhbHVlc1sxXSk7XG4gIC8vICAgICAgICAgICB2YXIgZVdpZHRoID0gcGFyc2VJbnQoZWxlbWVudFZhbHVlc1syXSk7XG4gIC8vICAgICAgICAgICB2YXIgZUhlaWdodCA9IHBhcnNlSW50KGVsZW1lbnRWYWx1ZXNbM10pO1xuICAvL1xuICAvLyAgICAgICAgICAgY29uc29sZS5sb2coXCJlTmFtZTogXCIrIGVOYW1lKTtcbiAgLy8gICAgICAgICAgIGNvbnNvbGUubG9nKFwiZVhwb3M6IFwiKyBlWHBvcyk7XG4gIC8vXG4gIC8vICAgICAgICAgICBjb25zb2xlLmxvZyhcImVXaWR0aDogXCIrIGVXaWR0aCk7XG4gIC8vICAgICAgICAgICBjb25zb2xlLmxvZyhcImVIZWlnaHQ6IFwiKyBlSGVpZ2h0KTtcbiAgLy8gICAgICAgICB9XG4gIC8vXG4gIC8vICAgfVxuICAvLyB9XG5cblxuXG4gIC8qICAgICAgICAgICAgKi9cblxuICBjb25zb2xlLmxvZyhcIiBcIik7XG4gIGNvbnNvbGUubG9nKGhhc2hUZW1wXyk7XG4gIGhhc2hMb2coKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbXBvbmVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBuYW1lID0gY29tcG9uZW50c1tpXS5yZXNldCgpO1xuICB9XG59XG5cblxuLy8gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4vLyAgICAgc3RhcnQoKTtcbi8vIH0sIDEwKTtcbiIsIlxuXG5mdW5jdGlvbiBtYWtlaWQobGVuZ3RoKSB7XG4gICB2YXIgcmVzdWx0ICAgICAgICAgICA9ICcnO1xuICAgdmFyIGNoYXJhY3RlcnMgICAgICAgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODknO1xuICAgdmFyIGNoYXJhY3RlcnNMZW5ndGggPSBjaGFyYWN0ZXJzLmxlbmd0aDtcbiAgIGZvciAoIHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrICkge1xuICAgICAgcmVzdWx0ICs9IGNoYXJhY3RlcnMuY2hhckF0KE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNoYXJhY3RlcnNMZW5ndGgpKTtcbiAgIH1cbiAgIHJldHVybiByZXN1bHQ7XG59XG5cblxuXG5mdW5jdGlvbiBjb21wb25lbnRzTW9kZWwoKXtcblxuXHQvL291dHB1dFxuXHR2YXIgY29tcG9uZW50c05hbWVzID0gW11cblx0dmFyIGNvbXBvbmVudHNXaXRQcm9iID0gIFtdO1xuXG5cdC8vIHZhciBjb21wb25lbnRzTmFtZXNQcm9iYWJpbGl0eSA9IFsnbWVudSddO1xuXHR2YXIgY29tcG9uZW50c09yZGVyID0gW107XG5cblxuICAgIC8vIGxvb3AgYWxsIGNvbXBvbmVudHMgZm9yIHJhdGluZyBvbiB0aGlzIHByb2plY3RcbiAgICBpZihkKWNvbnNvbGUubG9nKFwiXCIpO1xuICAgIGlmKGQpY29uc29sZS5sb2coXCJTdGFydDogcmF0aW5nIGZvciBcIiArIGNvbXBvbmVudHMubGVuZ3RoICsgXCIgY29tcG9uZW50c1wiKTtcbiAgICBpZihkKWNvbnNvbGUubG9nKFwiXCIpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29tcG9uZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgbmFtZSA9IGNvbXBvbmVudHNbaV0ucmV0dXJuVGl0bGUoKTtcblxuICAgICAgICB2YXIgcHJvYiA9IGNvbXBvbmVudHNbaV0ucmV0dXJuTWF0Y2goKTtcblxuICAgICAgICBpZiAocHJvamVjdFZhcmlhYmxlcy5icm93c2UgPj0gMC4wICYmIGNvbXBvbmVudHNbaV0ucGFnZWdvYWxzLmJyb3dzZSl7XG5cbiAgICAgICAgICAgIGNvbXBvbmVudHNXaXRQcm9iLnB1c2goW3Byb2IsbmFtZSxjb21wb25lbnRzW2ldXSk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgaWYoZCljb25zb2xlLmxvZyhcIktpbGw6IFwiICtuYW1lICtcIjogQmVjYXVzZTogIEJyb3dzZSB2YWx1ZSBpcyBzZXQgdG8gMC4wXCIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmKGQpY29uc29sZS5sb2coXCJcIik7XG4gICAgaWYoZCljb25zb2xlLmxvZyhcIkRvbmU6cmF0aW5nOlwiICArIGNvbXBvbmVudHNXaXRQcm9iLmxlbmd0aCk7XG4gICAgaWYoZCljb25zb2xlLmxvZyhcIlwiKTtcblx0aWYoZCljb25zb2xlLmxvZyhjb21wb25lbnRzV2l0UHJvYik7XG4gICAgaWYoZCljb25zb2xlLmxvZyhcIlN0YXJ0OiBTb3J0IHRoZSBhcnJheSBkb25lXCIpO1xuICAgIC8vIHNvcnQgaXQgIC8vIHRoeCB0byBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yODI0MTQ1L3NvcnRpbmctYS1tdWx0aWRpbWVuc2lvbmFsLWFycmF5LWluLWphdmFzY3JpcHRcbiAgICBjb21wb25lbnRzV2l0UHJvYi5zb3J0KChmdW5jdGlvbihpbmRleCl7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbihhLCBiKXtcbiAgICAgICAgICAgIHJldHVybiAoYVtpbmRleF0gPT09IGJbaW5kZXhdID8gMCA6IChhW2luZGV4XSA8IGJbaW5kZXhdID8gLTEgOiAxKSk7XG4gICAgICAgIH07XG4gICAgfSkoMCkpO1xuXHRpZihkKWNvbnNvbGUubG9nKGNvbXBvbmVudHNXaXRQcm9iKTtcblxuICAgIGlmKGQpY29uc29sZS5sb2coXCJEb25lOiBhcnJ5IHNvcnRcIik7XG4gICAgaWYoZCljb25zb2xlLmxvZyhcIlwiKTtcblxuXG4gICAgaWYoZCljb25zb2xlLmxvZyhcIlwiKTtcbiAgICBpZihkKWNvbnNvbGUubG9nKFwiVXBkYXRlOiBDdXJyZW50IGNvbXBvbmVudHMgZW4gdmVyc2lvbnMgaW4gb3JkZXIgb2YgaGlnaGVzdCByYXRpbmcgZm9yIHRoaXMgY2FzZTpcIik7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb21wb25lbnRzV2l0UHJvYi5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgbmFtZUNsZWFuTG9nID0gY29tcG9uZW50c1dpdFByb2JbaV1bMl0udGl0bGU7XG4gICAgICAgIGlmKGQpY29uc29sZS5sb2coXCIjXCIraStcIjpcIituYW1lQ2xlYW5Mb2crXCI6XCIpO1xuICAgIH1cbiAgICBpZihkKWNvbnNvbGUubG9nKFwiXCIpO1xuXG4gICAgaWYoZCljb25zb2xlLmxvZyhcIlN0YXJ0OiBBcHBseSBQcm9iYWJpbHR5IHRoZW9yeSAqIFJhdGluZyBmb3IgYSB2YXJpYWJsZSBwcm9wb3NhbCBvZiB0aGUgb3JkZXJcIik7XG4gICAgaWYoZCljb25zb2xlLmxvZyhcIlwiKTtcblxuICAgIGZ1bmN0aW9uIGZpbmRNYXRjaGluZ0NsYXNzKHBfKXtcbiAgICAgICAgaWYoZCljb25zb2xlLmxvZyhcIlNlYXJjaCBtYXRjaGluZyBjbGFzc09iamVjdCBmb3I6IFwiICsgcF8pO1xuICAgICAgICB2YXIgdGhlT25lID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29tcG9uZW50c1dpdFByb2IubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmKGNvbXBvbmVudHNXaXRQcm9iW2ldLmluY2x1ZGVzKHBfKSkge1xuXG4gICAgICAgICAgICAgICAgdGhlT25lID0gY29tcG9uZW50c1dpdFByb2JbaV1bMl07XG4gICAgICAgICAgICAgICAgaWYoZCljb25zb2xlLmxvZyhcIkZvdW5kIG1hdGNoaW5nIGNsYXNzT2JqZWN0IGZvcjogXCIgKyBwXyk7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhlT25lO1xuICAgIH1cblxuXG5cbiAgICB2YXIgY3VycmVudE9iamVjdCA9IGNvbXBvbmVudHNXaXRQcm9iWzBdWzJdO1xuICAgIHZhciBjdXJyZW50T2JqZWN0VGl0bGUgPSBjdXJyZW50T2JqZWN0LnRpdGxlO1xuXG4gICAgdmFyIHBvdGVudGlhbG5ld05hbWUgPSBcIm5vbmVcIlxuICAgIHZhciB1c2VkQ29tcG9uZW50TmFtZXMgPSBbXTtcbiAgICB2YXIgY29tcG9uZW50T3JkZXIgPSBbXTtcbiAgICB2YXIgcHJvYmFiaWx0aWVzID0gW107XG5cbiAgICB3aGlsZSAoY3VycmVudE9iamVjdFRpdGxlICE9IFwiRU5EXCIpe1xuXG5cblxuICAgICAgICAgICAgaWYoZCljb25zb2xlLmxvZyhcIkNvbnRpbnVlIHdpdGg6IFwiICsgY3VycmVudE9iamVjdFRpdGxlKTtcblxuICAgICAgICAgICAgLy9HZXQgb2JqZXRjdCBmcm9tIGp1c3QgbmFtZVxuICAgICAgICAgICAgY3VycmVudE9iamVjdCA9IGZpbmRNYXRjaGluZ0NsYXNzKGN1cnJlbnRPYmplY3RUaXRsZSk7XG5cbiAgICAgICAgICAgIC8vR2V0IG9iamV0Y3QgZnJvbSBqdXN0IG5hbWVcbiAgICAgICAgICAgIGN1cnJlbnRPYmplY3RUaXRsZSA9IGN1cnJlbnRPYmplY3QudGl0bGU7XG5cbiAgICAgICAgICAgIC8vR2V0ICdyYW5kb20nIG5ldyAgcG9zc2liaWxpdGllc1xuICAgICAgICAgICAgaWYoZCljb25zb2xlLmxvZyhcIkdldCBwcm9iYWJpbHRpZXMgZnJvbTogXCIgKyBjdXJyZW50T2JqZWN0VGl0bGUpO1xuXHRcdFx0dmFyIG1haW5QYWdlZ29hbCA9IGdldE1haW5QYWdlZ29hbCgpO1xuICAgICAgICAgICAgcHJvYmFiaWx0aWVzID0gY3VycmVudE9iamVjdC5yZXR1cm5Qcm9iYWJpbGl0eShtYWluUGFnZWdvYWwpO1xuICAgICAgICAgICAgaWYoZCljb25zb2xlLmxvZyhwcm9iYWJpbHRpZXMpO1xuXG4gICAgICAgICAgICB2YXIgYXJyYXlFeGVudGVkID0gW107XG4gICAgICAgICAgICBpZihwcm9iYWJpbHRpZXMgPT09ICd1bmRlZmluZWQnKXtcbiAgICAgICAgICAgICAgICBpZihkKWNvbnNvbGUubG9nKFwiTm8gcHJlc2V0IGFycmF5LiBVc2UgYWxsIGNvbXBvbmVudHNcIik7XG5cbiAgICAgICAgICAgICAgICB2YXIgdGVtcHBBcnJheSA9IFtbXCJzZWFyY2hcIiwwLjJdLCBbXCJoZWFkZXJcIiwwLjRdLCBbXCJ1c3BcIiwwLjFdLCBbXCJ0ZXh0XCIsMC4yXSwgW1wiYXJ0aWNsZXNcIiwwLjFdXTtcblxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGVtcHBBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBwID0gMDsgcCA8IHRlbXBwQXJyYXlbaV1bMV0qMTAwOyBwKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCB1c2VkQ29tcG9uZW50TmFtZXMuaW5jbHVkZXModGVtcHBBcnJheVtpXVswXSkgPT0gZmFsc2Upe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5RXhlbnRlZC5wdXNoKHRlbXBwQXJyYXlbaV1bMF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9iYWJpbHRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgcCA9IDA7IHAgPCBwcm9iYWJpbHRpZXNbaV1bMV0qMTAwOyBwKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCB1c2VkQ29tcG9uZW50TmFtZXMuaW5jbHVkZXMocHJvYmFiaWx0aWVzW2ldWzFdKSA9PSBmYWxzZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlFeGVudGVkLnB1c2gocHJvYmFiaWx0aWVzW2ldWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAvLyBjaGVjayBpZiB0aGVyZSBpcyBhbnkgdW5pcXVlIG9wdGlvbiBsZWZ0P1xuICAgICAgICAgICAgaWYocHJvYmFiaWx0aWVzLmxlbmd0aCA9PSAwKXtcbiAgICAgICAgICAgICAgICBpZihkKWNvbnNvbGUubG9nKFwiQWxsIHVuaXF1ZSBjb21wb25lbnRzIGhhdmUgYmVlbiB1c2VkLiBTbyB1c2U6IEZvb3RlclwiKTtcbiAgICAgICAgICAgICAgICBwb3RlbnRpYWxuZXdOYW1lID0gXCJmb290ZXJcIjtcblxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgdmFyIHIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqYXJyYXlFeGVudGVkLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgLy8gZm91bmQgYW4gb3B0aW9uXG4gICAgICAgICAgICAgICAgcG90ZW50aWFsbmV3TmFtZSA9IGFycmF5RXhlbnRlZFtyXTtcbiAgICAgICAgICAgICAgICBpZihkKWNvbnNvbGUubG9nKFwiRm91bmQgYSByYWRvbSBvcHRpb246IFwiICsgcG90ZW50aWFsbmV3TmFtZSk7XG5cbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICBpZihkKWNvbnNvbGUubG9nKFwiU2V0IHRvIHVzZTogXCIgKyBwb3RlbnRpYWxuZXdOYW1lKTtcbiAgICAgICAgICAgIGlmKGQpY29uc29sZS5sb2coXCJcIik7XG5cblxuICAgICAgICAgICAgLy9vbGQgT2JqZWN0XG4gICAgICAgICAgICBjb21wb25lbnRPcmRlci5wdXNoKGN1cnJlbnRPYmplY3QpO1xuXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjb21wb25lbnRPcmRlcik7XG4gICAgICAgICAgICAvLyBmb3IgKHZhciBpID0gMDsgaSA8IGNvbXBvbmVudE9yZGVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAvLyAgIGNvbnNvbGUubG9nKGNvbXBvbmVudE9yZGVyW2ldLnJldHVyblRpdGxlKCkpO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCItXCIpO1xuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vb2xkIG5hbWUgYmVmb3JlIHNlYXJjaGluZ1xuICAgICAgICAgICAgdXNlZENvbXBvbmVudE5hbWVzLnB1c2goY3VycmVudE9iamVjdFRpdGxlKTtcblxuICAgICAgICAgICAgLy8gc2V0IHRoZSBORVcgT2JqZWN0VGl0bGVcbiAgICAgICAgICAgIGN1cnJlbnRPYmplY3RUaXRsZSA9IHBvdGVudGlhbG5ld05hbWU7XG5cbiAgICB9XG5cblx0Y29uc29sZS5sb2coXCJcIik7XG5cdGNvbnNvbGUubG9nKFwiI0NPTVBPTkVOVFM6XCIpO1xuXG5cdC8vIGNvbXBvbmVudE9yZGVyLnB1c2gobWVudUNvbXBvbmVudCk7XG5cdGZvciAodmFyIHAgPSAwOyBwIDwgY29tcG9uZW50T3JkZXIubGVuZ3RoOyBwKyspIHtcblx0XHRjb25zb2xlLmxvZyhwICsgXCIgOiBcIiArIGNvbXBvbmVudE9yZGVyW3BdLnJldHVyblRpdGxlKCkpO1xuXG4gICAgICB2YXIgY2hhbmdlT2Y5MCA9IE1hdGguZmxvb3IobWFwX3JhbmdlKHByb2plY3RWYXJpYWJsZXMucHJvamVjdFNpemUsIDAsIDEsIDIwLCAyKSk7XG4gICAgICBjaGFuZ2VPZjkwICs9IE1hdGguZmxvb3IobWFwX3JhbmdlKHByb2plY3RWYXJpYWJsZXMuY3JlYXRpdmUsIDAsIDEsIDEwLCA4MCkpO1xuICAgICAgY2hhbmdlT2Y5MCArPSBNYXRoLmZsb29yKG1hcF9yYW5nZShwcm9qZWN0VmFyaWFibGVzLmluc3BpcmUsIDAsIDEsIDEwLCA4MCkpO1xuXG4gICAgICB2YXIgY2hhbmdlT2Y2MCA9IE1hdGguZmxvb3IobWFwX3JhbmdlKHByb2plY3RWYXJpYWJsZXMuaW5mb3JtYXRpdmUsIDAsIDEsIDIwLCAyKSk7XG4gICAgICBjaGFuZ2VPZjYwICs9IE1hdGguZmxvb3IobWFwX3JhbmdlKHByb2plY3RWYXJpYWJsZXMuZWNvbW1lcmNlLCAwLCAxLCAxMCwgODApKTtcblxuICAgICAgdmFyIGNoYW5nZU9mMzAgPSBNYXRoLmZsb29yKG1hcF9yYW5nZShwcm9qZWN0VmFyaWFibGVzLmJ1c2luZXNzLCAwLCAxLCAyMCwgMikpO1xuICAgICAgY2hhbmdlT2YzMCArPSBNYXRoLmZsb29yKG1hcF9yYW5nZShwcm9qZWN0VmFyaWFibGVzLmVjb21tZXJjZSwgMCwgMSwgMTAsIDgwKSk7XG4gICAgICBjaGFuZ2VPZjMwICs9IE1hdGguZmxvb3IobWFwX3JhbmdlKHByb2plY3RWYXJpYWJsZXMucHJvamVjdFNpemUsIDAsIDEsIDEsIDIwKSk7XG4gICAgICBjaGFuZ2VPZjMwICs9IE1hdGguZmxvb3IobWFwX3JhbmdlKHByb2plY3RWYXJpYWJsZXMudXNlckFnZSwgMCwgMSwgLTEwLCA1MCkpO1xuXG4gICAgICB2YXIgY29tcG9uZW50TWFyZ2luID0gW107XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoYW5nZU9mOTA7IGkrKykgIGNvbXBvbmVudE1hcmdpbi5wdXNoKDkwKTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hhbmdlT2Y2MDsgaSsrKSAgY29tcG9uZW50TWFyZ2luLnB1c2goNjApO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGFuZ2VPZjMwOyBpKyspICBjb21wb25lbnRNYXJnaW4ucHVzaCgzMCk7XG5cbiAgICAgIHZhciBjb21wb25lbnRNYXJnaW4gPSBjb21wb25lbnRNYXJnaW5bTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY29tcG9uZW50TWFyZ2luLmxlbmd0aCldO1xuXG4gICAgICAvLyBjb25zb2xlLmxvZyhcIk1hcmdpbjogXCIgKyBjb21wb25lbnRNYXJnaW4gK1wiIHB4XCIpO1xuXG4gICAgICBjb21wb25lbnRPcmRlcltwXS5zZXRNYXJnaW4oY29tcG9uZW50TWFyZ2luKTtcblx0fVxuXG5cblxuXG5cbiAgY29tcG9uZW50c1RvRHJhdyA9IGNvbXBvbmVudE9yZGVyO1xuXG5cblx0Ly8gY29uc29sZS5sb2coY29tcG9uZW50T3JkZXIpO1xuXG5cdHJldHVybiBjb21wb25lbnRPcmRlcjtcbn1cbiIsIlxuXG5mdW5jdGlvbiBlbGVtZW50c01vZGVsKHApe1xuXG4gIHZhciBlbGVtZW50c1dpdGhQcm9iID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coIHBbaV0gICk7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coIHBbaV1bMF1bMF0gICApO1xuXG4gICAgICAgICAgdmFyIHByb2IgPSBwW2ldWzBdWzBdLnJldHVybk1hdGNoKCk7XG5cblxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwic3RhcnQgcHJvYjpcIiArIHByb2IpO1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHByb2IpO1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHBbaV1bMF0ucmV0dXJuTWF0Y2goKSk7XG5cbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhwW2ldWzFdKTtcbiAgICAgICAgICB2YXIgZWxlbWVudFByZWZXZWlnaHQgPSBwYXJzZUZsb2F0KHBbaV1bMV0pKjEwMDsvL3dlaXJkIGJ1dCB1c2VzIC4gaW5zdGVhZCBvZiAsIG5lZWQgdG8gcmVtb3ZlIHRoYVxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZWxlbWVudCBwcmVmZXJlbmNlIHdlaWdodDpcIiArIGVsZW1lbnRQcmVmV2VpZ2h0LzEwMCk7XG5cbiAgICAgICAgICB2YXIgcHJlY2VudGFnZVRvUmVtb3ZlID0gICgxMDAgLSBlbGVtZW50UHJlZldlaWdodC8zKS8xMDA7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coXCJwZXJjZW50YWdlIHRvIGtlZXA6XCIgKyBwcmVjZW50YWdlVG9SZW1vdmUpO1xuICAgICAgICAgIHByb2IgKj0gcHJlY2VudGFnZVRvUmVtb3ZlO1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiUmVzdWx0IDpcIiArIHByb2IpO1xuXG4gICAgICAgICAgLy8gKGxvd2VyIGlzIGJldHRlciBidXQgaW1wb3J0YW5jZSBpcyBtYXJrZWQgYXMgaGlnaGVyIGlzIGJldHRlcilcbiAgICAgICAgICBpZiAocHJvamVjdFZhcmlhYmxlcy5icm93c2UgPj0gMC4wICYmIHBbaV1bMF1bMF0ucGFnZWdvYWxzLmJyb3dzZSl7XG4gICAgICAgICAgICAgIGVsZW1lbnRzV2l0aFByb2IucHVzaChbIHByb2IsIHBbaV1bMF1bMF1dKTtcbiAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJLaWxsOiBcIiArbmFtZSArXCI6IEJlY2F1c2U6ICBCcm93c2UgdmFsdWUgaXMgc2V0IHRvIDAuMFwiKTtcbiAgICAgICAgICB9XG4gIH1cbiAgLy8gY29uc29sZS5sb2coXCJwcmVmZmVyZCBFbGVtZW50czpcIik7XG4gIC8vIGNvbnNvbGUubG9nKGVsZW1lbnRzV2l0aFByb2IpO1xuXG5cbiAgLy8gc29ydCBwcmVmZmVyZCBmcm9tIGJlc3QgdG8gd29yc3RcbiAgZWxlbWVudHNXaXRoUHJvYi5zb3J0KChmdW5jdGlvbihpbmRleCl7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oYSwgYil7XG4gICAgICAgICAgcmV0dXJuIChhW2luZGV4XSA9PT0gYltpbmRleF0gPyAwIDogKGFbaW5kZXhdIDwgYltpbmRleF0gPyAtMSA6IDEpKTtcbiAgICAgIH07XG4gIH0pKDApKTtcblxuICByZXR1cm4gZWxlbWVudHNXaXRoUHJvYjtcbn1cbiIsIlxuXG5mdW5jdGlvbiBnZXRFbGVtZW50c0luUm93TW9kZWwocm93Xywgc2luZ2xlXywgc2lkZV8sIHJvd0lfKXtcbiAgLypcblxuICAgIHJhdGUgYWxsIGVsZW1lbnRzXG4gICAgQWRkIGFsbCBzZXRzIHVwIHRvZ2hldGVyXG4gICAgc2VsZWN0IG5leHQgYmVzdCBzZXRcbiAgICBkZWZpbmUgYW1vdW50IG9mIGl0ZW1zXG5cbiAgICBzZWxlY3QgbW9zdCBwcmVmZmVyZCBpdGVtc1xuICAgIHNlbGVjdCBtb3N0IGFuZCBiZXN0IHJhdGVkIGl0ZW1zXG5cbiAgICBleGNsdWRlIGR1cGlsaWNhdGUgZWxlbWVudHNcblxuICAqL1xuXG5cblxuICAvL1JBVElOR1xuICB2YXIgc2luZ2VsRWxlbWVudFNldHNBbmRSYXRpbmdzID0gW107XG4gIHZhciBzaW5nZWxFbGVtZW50U2V0c1Rvb1JhdGUgPSBbXTtcbiAgdmFyIHVzZWROYW1lc1NpbmdsZSA9IFtdO1xuXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzaW5nbGVfLnByZWZmZWRFbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIGZvciAodmFyIHAgPSAwOyBwIDwgc2luZ2xlXy5wcmVmZmVkRWxlbWVudHNbaV0ubGVuZ3RoOyBwKyspIHtcbiAgICAgIGZvciAodmFyIHogPSAwOyB6IDwgZWxlbWVudHMubGVuZ3RoOyB6KyspIHtcbiAgICAgICAgaWYoZWxlbWVudHNbel0ucmV0dXJuVGl0bGUoKSA9PSBzaW5nbGVfLnByZWZmZWRFbGVtZW50c1tpXVtwXVswXSl7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInlheVwiKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGVsZW1lbnRzW3pdLnJldHVyblRpdGxlKCkpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coc2luZ2xlXy5wcmVmZmVkRWxlbWVudHNbaV1bcF1bMF0pO1xuXG4gICAgICAgICAgIGlmKGNvbnRhaW5zKHVzZWROYW1lc1NpbmdsZSxlbGVtZW50c1tpXS5yZXR1cm5UaXRsZSgpICApICA9PSBmYWxzZSl7XG4gICAgICAgICAgICAgIHNpbmdlbEVsZW1lbnRTZXRzVG9vUmF0ZS5wdXNoKCBbICAgIFtlbGVtZW50c1t6XV0gLCBzaW5nbGVfLnByZWZmZWRFbGVtZW50c1tpXVtwXVsxXV0gKTtcbiAgICAgICAgICAgICAgdXNlZE5hbWVzU2luZ2xlLnB1c2goZWxlbWVudHNbaV0ucmV0dXJuVGl0bGUoKSApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vUkFUSU5HXG4gIHZhciBzaWRlRWxlbWVudFNldHNBbmRSYXRpbmdzID0gW107XG4gIHZhciBzaWRlRWxlbWVudFNldHNUb29SYXRlPSBbXTtcbiAgdmFyIHVzZWROYW1lc1NpZGUgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHNpbmdsZV8ucHJlZmZlZEVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgZm9yICh2YXIgcCA9IDA7IHAgPCBzaW5nbGVfLnByZWZmZWRFbGVtZW50c1tpXS5sZW5ndGg7IHArKykge1xuICAgICAgZm9yICh2YXIgeiA9IDA7IHogPCBlbGVtZW50cy5sZW5ndGg7IHorKykge1xuICAgICAgICBpZihlbGVtZW50c1t6XS5yZXR1cm5UaXRsZSgpID09IHNpbmdsZV8ucHJlZmZlZEVsZW1lbnRzW2ldW3BdWzBdKXtcbiAgICAgICAgICBpZihjb250YWlucyh1c2VkTmFtZXNTaWRlLGVsZW1lbnRzW2ldLnJldHVyblRpdGxlKCkgICkgID09IGZhbHNlKXtcbiAgICAgICAgICAgICAgc2lkZUVsZW1lbnRTZXRzVG9vUmF0ZS5wdXNoKCBbICAgIFtlbGVtZW50c1t6XV0gLCBzaW5nbGVfLnByZWZmZWRFbGVtZW50c1tpXVtwXVsxXV0gKTtcbiAgICAgICAgICAgICAgdXNlZE5hbWVzU2lkZS5wdXNoKGVsZW1lbnRzW2ldLnJldHVyblRpdGxlKCkgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuXG4gIGZ1bmN0aW9uIGNvbnRhaW5zKGEsIG9iaikge1xuICAgIHZhciBpID0gYS5sZW5ndGg7XG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgIGlmIChhW2ldID09PSBvYmopIHtcbiAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cblxuICBpZihzaW5nZWxFbGVtZW50U2V0c1Rvb1JhdGUubGVuZ3RoID09IDApe1xuICAgIC8vIGNvbnNvbGUubG9nKFwiQkFEMlwiKTtcbiAgICByZXR1cm4gXCJCQURcIjtcbiAgfVxuXG4gIGlmKHNpZGVFbGVtZW50U2V0c1Rvb1JhdGUubGVuZ3RoID09IDApe1xuICAgIC8vIGNvbnNvbGUubG9nKFwiQkFEM1wiKTtcbiAgICByZXR1cm4gXCJCQURcIjtcbiAgfVxuXG5cbiAgaWYoc2luZ2VsRWxlbWVudFNldHNUb29SYXRlLmxlbmd0aCA+PSAxKXNpbmdlbEVsZW1lbnRTZXRzQW5kUmF0aW5ncyA9IGVsZW1lbnRzTW9kZWwoc2luZ2VsRWxlbWVudFNldHNUb29SYXRlKTtcbiAgaWYoc2lkZUVsZW1lbnRTZXRzVG9vUmF0ZS5sZW5ndGggPj0gMSlzaWRlRWxlbWVudFNldHNBbmRSYXRpbmdzID0gZWxlbWVudHNNb2RlbChzaWRlRWxlbWVudFNldHNUb29SYXRlKTtcblxuICB2YXIgbWl4RWxlbWVudFNldHNBbmRSYXRpbmdzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc2luZ2VsRWxlbWVudFNldHNBbmRSYXRpbmdzLmxlbmd0aDsgaSsrKSBtaXhFbGVtZW50U2V0c0FuZFJhdGluZ3MucHVzaChzaW5nZWxFbGVtZW50U2V0c0FuZFJhdGluZ3NbaV0pO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHNpZGVFbGVtZW50U2V0c0FuZFJhdGluZ3MubGVuZ3RoOyBpKyspIG1peEVsZW1lbnRTZXRzQW5kUmF0aW5ncy5wdXNoKHNpZGVFbGVtZW50U2V0c0FuZFJhdGluZ3NbaV0pO1xuXG4gIG1peEVsZW1lbnRTZXRzQW5kUmF0aW5ncy5zb3J0KChmdW5jdGlvbihpbmRleCl7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oYSwgYil7XG4gICAgICAgICAgcmV0dXJuIChhW2luZGV4XSA9PT0gYltpbmRleF0gPyAwIDogKGFbaW5kZXhdIDwgYltpbmRleF0gPyAtMSA6IDEpKTtcbiAgICAgIH07XG4gIH0pKDApKTtcblxuICBzaW5nZWxFbGVtZW50U2V0c1Rvb1JhdGUuc29ydCgoZnVuY3Rpb24oaW5kZXgpe1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGEsIGIpe1xuICAgICAgICAgIHJldHVybiAoYVtpbmRleF0gPT09IGJbaW5kZXhdID8gMCA6IChhW2luZGV4XSA8IGJbaW5kZXhdID8gLTEgOiAxKSk7XG4gICAgICB9O1xuICB9KSgwKSk7XG5cbiAgc2lkZUVsZW1lbnRTZXRzVG9vUmF0ZS5zb3J0KChmdW5jdGlvbihpbmRleCl7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oYSwgYil7XG4gICAgICAgICAgcmV0dXJuIChhW2luZGV4XSA9PT0gYltpbmRleF0gPyAwIDogKGFbaW5kZXhdIDwgYltpbmRleF0gPyAtMSA6IDEpKTtcbiAgICAgIH07XG4gIH0pKDApKTtcblxuXG5cblxuXG5cbiAgdmFyIHRoaXNSb3dzRWxlbWVudHMgPSBbXVxuXG5cblxuICAgIHZhciBlbGVtZW50QW1vdW50ID0gMDtcbiAgICBpZihyb3dfWzBdID09XCJzaW5nbGVcIil7XG4gICAgICBlbGVtZW50QW1vdW50ID0gZ2V0Um5kSW50ZWdlcigxLDMpO1xuICAgICAgY29uc29sZS5sb2coXCJlbGVtZW50QW1vdW50OiBcIitlbGVtZW50QW1vdW50KTtcbiAgICAgIC8vIGVsZW1lbnRBbW91bnQgPSAxMjtcbiAgICAgIGlmKCBlbGVtZW50QW1vdW50ID49IHNpbmdlbEVsZW1lbnRTZXRzQW5kUmF0aW5ncy5sZW5naHQpZWxlbWVudEFtb3VudCA9IHNpbmdlbEVsZW1lbnRTZXRzQW5kUmF0aW5ncy5sZW5naHQ7XG5cblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbGVtZW50QW1vdW50OyBpKyspIHtcbiAgICAgICAgaWYoaSA9PSAxKXRoaXNSb3dzRWxlbWVudHMucHVzaChzaW5nZWxFbGVtZW50U2V0c0FuZFJhdGluZ3NbMF0pO1xuICAgICAgICBpZihpID09IDIpdGhpc1Jvd3NFbGVtZW50cy5wdXNoKHNpbmdlbEVsZW1lbnRTZXRzQW5kUmF0aW5nc1sxXSk7XG4gICAgICAgIGlmKGkgPT0gMyl0aGlzUm93c0VsZW1lbnRzLnB1c2goc2luZ2VsRWxlbWVudFNldHNBbmRSYXRpbmdzWzJdKTtcbiAgICAgICAgaWYoaSA9PSA0KXRoaXNSb3dzRWxlbWVudHMucHVzaChzaW5nZWxFbGVtZW50U2V0c0FuZFJhdGluZ3NbM10pO1xuICAgICAgICBpZihpID09IDUpdGhpc1Jvd3NFbGVtZW50cy5wdXNoKHNpbmdlbEVsZW1lbnRTZXRzQW5kUmF0aW5nc1s0XSk7XG4gICAgICAgIGlmKGkgPT0gNil0aGlzUm93c0VsZW1lbnRzLnB1c2goc2luZ2VsRWxlbWVudFNldHNBbmRSYXRpbmdzWzVdKTtcbiAgICAgICAgaWYoaSA9PSA3KXRoaXNSb3dzRWxlbWVudHMucHVzaChzaW5nZWxFbGVtZW50U2V0c0FuZFJhdGluZ3NbNl0pO1xuICAgICAgICBpZihpID09IDgpdGhpc1Jvd3NFbGVtZW50cy5wdXNoKHNpbmdlbEVsZW1lbnRTZXRzQW5kUmF0aW5nc1s3XSk7XG4gICAgICAgIGlmKGkgPT0gOSl0aGlzUm93c0VsZW1lbnRzLnB1c2goc2luZ2VsRWxlbWVudFNldHNBbmRSYXRpbmdzWzhdKTtcbiAgICAgICAgaWYoaSA9PSAxMCl0aGlzUm93c0VsZW1lbnRzLnB1c2goc2luZ2VsRWxlbWVudFNldHNBbmRSYXRpbmdzWzldKTtcblxuICAgICAgfVxuXG4gICAgfVxuICAgIGlmKHJvd19bMF0gPT1cInNpZGVcIil7XG4gICAgICBlbGVtZW50QW1vdW50ID0gZ2V0Um5kSW50ZWdlcigxLDUpO1xuICAgICAgLy8gY29uc29sZS5sb2coZWxlbWVudEFtb3VudCk7XG5cbiAgICAgIGlmKCBlbGVtZW50QW1vdW50ID49IHNpbmdlbEVsZW1lbnRTZXRzQW5kUmF0aW5ncy5sZW5naHQpZWxlbWVudEFtb3VudCA9IHNpbmdlbEVsZW1lbnRTZXRzQW5kUmF0aW5ncy5sZW5naHQ7XG4gICAgICBpZiggZWxlbWVudEFtb3VudCA+PSBzaWRlRWxlbWVudFNldHNBbmRSYXRpbmdzLmxlbmdodCllbGVtZW50QW1vdW50ID0gc2lkZUVsZW1lbnRTZXRzQW5kUmF0aW5ncy5sZW5naHQ7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZWxlbWVudEFtb3VudDsgaSsrKSB7XG5cbiAgICAgICAgaWYoZWxlbWVudEFtb3VudCA8PSAzKXtcbiAgICAgICAgICBpZihpID09IDEpdGhpc1Jvd3NFbGVtZW50cy5wdXNoKHNpZGVFbGVtZW50U2V0c0FuZFJhdGluZ3NbMF0pO1xuICAgICAgICAgIGlmKGkgPT0gMil0aGlzUm93c0VsZW1lbnRzLnB1c2goc2lkZUVsZW1lbnRTZXRzQW5kUmF0aW5nc1sxXSk7XG4gICAgICAgICAgaWYoaSA9PSAzKXRoaXNSb3dzRWxlbWVudHMucHVzaChzaWRlRWxlbWVudFNldHNBbmRSYXRpbmdzWzJdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGVsZW1lbnRBbW91bnQgPj0gNCl7XG4gICAgICAgICAgdmFyIHNhbWVPck5vdCA9IGdldFJuZEludGVnZXIoMCwxMCk7XG4gICAgICAgICAgaWYoc2FtZU9yTm90ID49IDcpe1xuICAgICAgICAgICAgICBpZihpID09IDEpdGhpc1Jvd3NFbGVtZW50cy5wdXNoKHNpZGVFbGVtZW50U2V0c0FuZFJhdGluZ3NbMF0pO1xuICAgICAgICAgICAgICBpZihpID09IDIpdGhpc1Jvd3NFbGVtZW50cy5wdXNoKHNpZGVFbGVtZW50U2V0c0FuZFJhdGluZ3NbMF0pO1xuICAgICAgICAgICAgICB2YXIgc3dpdGNoT3JOb3QgPSBnZXRSbmRJbnRlZ2VyKDAsMTApO1xuICAgICAgICAgICAgICBpZihzd2l0Y2hPck5vdCA+PSA1KXtcbiAgICAgICAgICAgICAgICAgIGlmKGkgPT0gMyl0aGlzUm93c0VsZW1lbnRzLnB1c2goc2lkZUVsZW1lbnRTZXRzQW5kUmF0aW5nc1swXSk7XG4gICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGlmKGkgPT0gMyl0aGlzUm93c0VsZW1lbnRzLnB1c2goc2lkZUVsZW1lbnRTZXRzQW5kUmF0aW5nc1sxXSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYoaSA9PSA0KXRoaXNSb3dzRWxlbWVudHMucHVzaChzaWRlRWxlbWVudFNldHNBbmRSYXRpbmdzWzBdKTtcbiAgICAgICAgICAgICAgaWYoaSA9PSA1KXRoaXNSb3dzRWxlbWVudHMucHVzaChzaWRlRWxlbWVudFNldHNBbmRSYXRpbmdzWzBdKTtcbiAgICAgICAgICAgICAgaWYoaSA9PSA2KXRoaXNSb3dzRWxlbWVudHMucHVzaChzaWRlRWxlbWVudFNldHNBbmRSYXRpbmdzWzBdKTtcbiAgICAgICAgICAgICAgaWYoaSA9PSA3KXRoaXNSb3dzRWxlbWVudHMucHVzaChzaWRlRWxlbWVudFNldHNBbmRSYXRpbmdzWzBdKTtcbiAgICAgICAgICAgICAgaWYoaSA9PSA4KXRoaXNSb3dzRWxlbWVudHMucHVzaChzaWRlRWxlbWVudFNldHNBbmRSYXRpbmdzWzBdKTtcbiAgICAgICAgICAgICAgaWYoaSA9PSA5KXRoaXNSb3dzRWxlbWVudHMucHVzaChzaWRlRWxlbWVudFNldHNBbmRSYXRpbmdzWzBdKTtcbiAgICAgICAgICAgICAgaWYoaSA9PSAxMCl0aGlzUm93c0VsZW1lbnRzLnB1c2goc2lkZUVsZW1lbnRTZXRzQW5kUmF0aW5nc1swXSk7XG4gICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBpZihpID09IDApdGhpc1Jvd3NFbGVtZW50cy5wdXNoKHNpZGVFbGVtZW50U2V0c0FuZFJhdGluZ3NbMF0pO1xuICAgICAgICAgICAgaWYoaSA9PSAxKXRoaXNSb3dzRWxlbWVudHMucHVzaChzaWRlRWxlbWVudFNldHNBbmRSYXRpbmdzWzFdKTtcbiAgICAgICAgICAgIGlmKGkgPT0gMyl0aGlzUm93c0VsZW1lbnRzLnB1c2goc2lkZUVsZW1lbnRTZXRzQW5kUmF0aW5nc1syXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cblxuICAgIH1cbiAgICBpZihyb3dfWzBdID09XCJtaXhcIil7XG4gICAgICBlbGVtZW50QW1vdW50ID0gZ2V0Um5kSW50ZWdlcigyLDQpO1xuICAgICAgaWYoIGVsZW1lbnRBbW91bnQgPj0gc2luZ2VsRWxlbWVudFNldHNBbmRSYXRpbmdzLmxlbmdodCllbGVtZW50QW1vdW50ID0gc2luZ2VsRWxlbWVudFNldHNBbmRSYXRpbmdzLmxlbmdodDtcbiAgICAgIGlmKCBlbGVtZW50QW1vdW50ID49IHNpZGVFbGVtZW50U2V0c0FuZFJhdGluZ3MubGVuZ2h0KWVsZW1lbnRBbW91bnQgPSBzaWRlRWxlbWVudFNldHNBbmRSYXRpbmdzLmxlbmdodDtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbGVtZW50QW1vdW50OyBpKyspIHtcbiAgICAgICAgaWYoaSA9PSAxKXRoaXNSb3dzRWxlbWVudHMucHVzaChzaW5nZWxFbGVtZW50U2V0c0FuZFJhdGluZ3NbMV0pO1xuICAgICAgICBpZihpID09IDIpdGhpc1Jvd3NFbGVtZW50cy5wdXNoKHNpbmdlbEVsZW1lbnRTZXRzQW5kUmF0aW5nc1syXSk7XG4gICAgICAgIGlmKGkgPT0gMyl0aGlzUm93c0VsZW1lbnRzLnB1c2goc2lkZUVsZW1lbnRTZXRzQW5kUmF0aW5nc1szXSk7XG4gICAgICAgIGlmKGkgPT0gNCl0aGlzUm93c0VsZW1lbnRzLnB1c2goc2lkZUVsZW1lbnRTZXRzQW5kUmF0aW5nc1s0IF0pO1xuICAgICAgfVxuXG4gICAgfVxuXG5cblxuICAgIGlmKHRoaXNSb3dzRWxlbWVudHMubGVuZ3RoID09IDApe1xuICAgICAgaWYocm93X1swXSA9PVwic2luZ2xlXCIpdGhpc1Jvd3NFbGVtZW50cy5wdXNoKHNpbmdlbEVsZW1lbnRTZXRzQW5kUmF0aW5nc1sxXSk7XG4gICAgICBpZihyb3dfWzBdID09XCJzaWRlXCIpdGhpc1Jvd3NFbGVtZW50cy5wdXNoKHNpZGVFbGVtZW50U2V0c0FuZFJhdGluZ3NbMV0pO1xuICAgICAgaWYocm93X1swXSA9PVwibWl4XCIpdGhpc1Jvd3NFbGVtZW50cy5wdXNoKHNpbmdlbEVsZW1lbnRTZXRzQW5kUmF0aW5nc1sxXSk7XG4gICAgfVxuXG4gICAgdmFyIGZpbmFsVGhpc1Jvd3NFbGVtZW50cyA9IFtdO1xuICAgIGlmKHRoaXNSb3dzRWxlbWVudHMubGVuZ3RoID09IDApe1xuICAgICAgLy8gY29uc29sZS5sb2coXCJiYWRcIik7XG4gICAgICByZXR1cm4gXCJCQURcIjtcbiAgICB9ZWxzZXtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXNSb3dzRWxlbWVudHMubGVuZ3RoKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXNSb3dzRWxlbWVudHMpO1xuICAgICAgLy8gY29uc29sZS5sb2coXCJcIik7XG4gICAgICBjb25zb2xlLmxvZyhcIlJPVzogXCIgKyByb3dJXyk7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXNSb3dzRWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYodGhpc1Jvd3NFbGVtZW50c1tpXSAhPSBudWxsICAmJiB0aGlzUm93c0VsZW1lbnRzLmxlbmd0aCA+PSAwKXtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhpICtcIiAgOiBcIit0aGlzUm93c0VsZW1lbnRzW2ldWzFdLnJldHVyblRpdGxlKCkpO1xuICAgICAgICAgIGZpbmFsVGhpc1Jvd3NFbGVtZW50cy5wdXNoKHRoaXNSb3dzRWxlbWVudHNbaV0pO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAvLyB0aGlzUm93c0VsZW1lbnRzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhpICtcIiA6IFwiICsgXCJub3RoaW5nLi5cIik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZmluYWxUaGlzUm93c0VsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGkgK1wiIDogXCIrZmluYWxUaGlzUm93c0VsZW1lbnRzW2ldWzBdICsgXCIgOiBcIiArIGZpbmFsVGhpc1Jvd3NFbGVtZW50c1tpXVsxXS5yZXR1cm5UaXRsZSgpKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZpbmFsVGhpc1Jvd3NFbGVtZW50cztcbiAgICB9XG5cbn1cbiIsIlxuXG5mdW5jdGlvbiByb3dzTW9kZWwoY29tcG9uZW50Xyl7XG5cbiAgdmFyIHJvd3MgPSBjb21wb25lbnRfLnJldHVyblJvd0Ftb3VudCgpO1xuXG4gIGNvbnNvbGUubG9nKGNvbXBvbmVudF8ucmV0dXJuVGl0bGUoKSArIFwiIHJvd3M6IFwiICtyb3dzKTtcblxuXG4gICAgZm9yICh2YXIgcCA9IDA7IHAgPCByb3dzOyBwKyspIHtcbiAgICAgIHZhciByb3dUeXBlcyA9IFsnc2luZ2xlJywnc2lkZScsJ21peCddO1xuICAgICAgdmFyIHJvd1R5cGUgPSByb3dUeXBlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzKV07XG4gICAgICAvLyBjb25zb2xlLmxvZyhcIlR5cGU6IFwiICsgcm93VHlwZSk7XG5cbiAgICAgIHZhciBjaGFuZ2VPZjMwID0gTWF0aC5mbG9vcihtYXBfcmFuZ2UocHJvamVjdFZhcmlhYmxlcy5wcm9qZWN0U2l6ZSwgMCwgMSwgMjAsIDIpKTtcbiAgICAgIGNoYW5nZU9mMzAgKz0gTWF0aC5mbG9vcihtYXBfcmFuZ2UocHJvamVjdFZhcmlhYmxlcy5jcmVhdGl2ZSwgMCwgMSwgMTAsIDgwKSk7XG4gICAgICBjaGFuZ2VPZjMwICs9IE1hdGguZmxvb3IobWFwX3JhbmdlKHByb2plY3RWYXJpYWJsZXMuaW5zcGlyZSwgMCwgMSwgMTAsIDgwKSk7XG5cbiAgICAgIHZhciBjaGFuZ2VPZjE1ID0gTWF0aC5mbG9vcihtYXBfcmFuZ2UocHJvamVjdFZhcmlhYmxlcy5pbmZvcm1hdGl2ZSwgMCwgMSwgMjAsIDIpKTtcbiAgICAgIGNoYW5nZU9mMTUgKz0gTWF0aC5mbG9vcihtYXBfcmFuZ2UocHJvamVjdFZhcmlhYmxlcy5lY29tbWVyY2UsIDAsIDEsIDEwLCA4MCkpO1xuICAgICAgY2hhbmdlT2YxNSArPSBNYXRoLmZsb29yKG1hcF9yYW5nZShwcm9qZWN0VmFyaWFibGVzLmJ1c2luZXNzLCAwLCAxLCAyMCwgMikpO1xuICAgICAgY2hhbmdlT2YxNSArPSBNYXRoLmZsb29yKG1hcF9yYW5nZShwcm9qZWN0VmFyaWFibGVzLnVzZXJBZ2UsIDAsIDEsIC0xMCwgNTApKTtcblxuXG4gICAgICB2YXIgcm93UGFkZGluZ3MgPSBbXTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hhbmdlT2YzMDsgaSsrKSAgcm93UGFkZGluZ3MucHVzaCgzMCk7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoYW5nZU9mMTU7IGkrKykgIHJvd1BhZGRpbmdzLnB1c2goMTUpO1xuXG4gICAgICB2YXIgcm93UGFkZGluZyA9IHJvd1BhZGRpbmdzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHJvd1BhZGRpbmdzLmxlbmd0aCldO1xuICAgICAgLy8gY29uc29sZS5sb2coXCJQYWRkaW5nOiBcIiArIHJvd1BhZGRpbmcgKyBcIiBweFwiKTtcblxuICAgICAgY29tcG9uZW50Xy5hZGRSb3cocm93VHlwZSwgcm93UGFkZGluZyk7XG4gICAgfVxuXG5cbn1cbiIsIi8qXG5cbiAgICBUaGUgY29tcG9uZW50IGNsYXNzL29iamVjdFxuXG4qL1xuXG5cbmNsYXNzIGNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlXywgemluZGV4XywgZ29hbHNfLCBwcm9qZWN0XywgdXNlcnNfLCBwYWdlZ29hbHNfLCBwcm9wYXNfLCByb3dzXywgcHJlZmZlZEVsZW1lbnRzXywgcHJlZmZlZEVsZW1lbnRzU2lkZV8pIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGVfO1xuICAgIHRoaXMuemluZGV4ID0gemluZGV4XztcbiAgICB0aGlzLmdvYWxzID0gZ29hbHNfO1xuICAgIHRoaXMucHJvamVjdCA9IHByb2plY3RfO1xuICAgIHRoaXMudXNlcnMgPSB1c2Vyc187XG4gICAgdGhpcy5wYWdlZ29hbHMgPSBwYWdlZ29hbHNfO1xuICAgIHRoaXMucHJvcGFzID0gcHJvcGFzXztcbiAgICB0aGlzLmVsZW1lbnRzU2luZ2xlID0gcHJlZmZlZEVsZW1lbnRzXztcbiAgICB0aGlzLmVsZW1lbnRzU2lkZSA9IHByZWZmZWRFbGVtZW50c1NpZGVfO1xuXG4gICAgdGhpcy5taW5yb3dzPSByb3dzXy5taW5yb3dzO1xuICAgIHRoaXMubWF4cm93cz0gcm93c18ubWF4cm93cztcblxuICAgIHRoaXMubWFyZ2luPSBcIjBcIjtcbiAgICB0aGlzLnJvd3MgPSBbXTtcblxuICAgIHRoaXMucm93c0FuZEVMZW1lbnRzID0gW107XG4gICAgdGhpcy5yb3dzQW5kRUxlbWVudHNNYXJnaW4gPSBbXVxuICAgIHRoaXMucm93SGVpZ2h0cyA9IFtdXG4gICAgdGhpcy5yb3dZcyA9IFtdXG4gICAgdGhpcy5yb3dYcG9zc2VzID0gW11cblxuICAgIHRoaXMucm93MFhwb3MgPSBbXTtcbiAgICB0aGlzLnJvdzFYcG9zID0gW107XG4gICAgdGhpcy5yb3cyWHBvcyA9IFtdO1xuICAgIHRoaXMucm93M1hwb3MgPSBbXTtcbiAgICB0aGlzLnJvdzRYcG9zID0gW107XG4gICAgdGhpcy5yb3c1WHBvcyA9IFtdO1xuICAgIHRoaXMucm93Nlhwb3MgPSBbXTtcbiAgICB0aGlzLnJvdzdYcG9zID0gW107XG4gICAgdGhpcy5yb3c4WHBvcyA9IFtdO1xuICAgIHRoaXMucm93OVhwb3MgPSBbXTtcbiAgICB0aGlzLnJvdzEwWHBvcyA9IFtdO1xuICAgIHRoaXMucm93MTFYcG9zID0gW107XG5cblxuXG4gICAgdGhpcy5oZWlnaHQgPSAwO1xuXG4gICAgdGhpcy5tYXhUb3RhbEhlaWdodCA9IDA7XG5cbiAgfVxuXG5cbiAgcmVzZXQoKXtcbiAgICB0aGlzLm1hcmdpbj0gXCIwXCI7XG4gICAgdGhpcy5yb3dzID0gW107XG5cbiAgICB0aGlzLnJvd3NBbmRFTGVtZW50cyA9IFtdO1xuICAgIHRoaXMucm93c0FuZEVMZW1lbnRzTWFyZ2luID0gW11cbiAgICB0aGlzLnJvd0hlaWdodHMgPSBbXVxuICAgIHRoaXMucm93WXMgPSBbXVxuICAgIHRoaXMucm93WHBvc3NlcyA9IFtdXG5cbiAgICB0aGlzLnJvdzBYcG9zID0gW107XG4gICAgdGhpcy5yb3cxWHBvcyA9IFtdO1xuICAgIHRoaXMucm93Mlhwb3MgPSBbXTtcbiAgICB0aGlzLnJvdzNYcG9zID0gW107XG4gICAgdGhpcy5yb3c0WHBvcyA9IFtdO1xuICAgIHRoaXMucm93NVhwb3MgPSBbXTtcbiAgICB0aGlzLnJvdzZYcG9zID0gW107XG4gICAgdGhpcy5yb3c3WHBvcyA9IFtdO1xuICAgIHRoaXMucm93OFhwb3MgPSBbXTtcbiAgICB0aGlzLnJvdzlYcG9zID0gW107XG4gICAgdGhpcy5yb3cxMFhwb3MgPSBbXTtcbiAgICB0aGlzLnJvdzExWHBvcyA9IFtdO1xuXG5cblxuICAgIHRoaXMuaGVpZ2h0ID0gMDtcblxuICAgIHRoaXMubWF4VG90YWxIZWlnaHQgPSAwO1xuXG4gIH1cblxuICByZXR1cm5Sb3dzQW5kRUxlbWVudHNNYXJnaW4oaV8pe1xuICAgIHJldHVybiB0aGlzLnJvd3NBbmRFTGVtZW50c01hcmdpbltpX107XG4gIH1cbiAgcmV0dXJuUm93SGVpZ2h0KGlfKXtcbiAgICByZXR1cm4gdGhpcy5yb3dIZWlnaHRzW2lfXTtcbiAgfVxuXG4gIHJldHVyblJvd1koaV8pe1xuICAgIHJldHVybiB0aGlzLnJvd1lzW2lfXTtcbiAgfVxuXG4gIHJldHVyblJvd1hwb3Mocm93XywgaV8pe1xuICAgIC8vIGNvbnNvbGUubG9nKFwiR2V0IHggcG9zIGZyb20gcm93OiBcIiArIHJvd18pO1xuICAgIC8vIGNvbnNvbGUubG9nKFwiQW5kIGVsZW1lbnQ6IFwiICsgaV8pO1xuXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5yb3cwWHBvcyk7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5yb3cxWHBvcyk7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5yb3cyWHBvcyk7XG5cbiAgICB2YXIgeCA9IDA7XG5cbiAgICBpZihyb3dfID09IDApeCAgPSB0aGlzLnJvdzBYcG9zW2lfXTtcbiAgICBpZihyb3dfID09IDEpeCAgPSB0aGlzLnJvdzFYcG9zW2lfXTtcbiAgICBpZihyb3dfID09IDIpeCAgPSB0aGlzLnJvdzJYcG9zW2lfXTtcbiAgICBpZihyb3dfID09IDMpeCAgPSB0aGlzLnJvdzNYcG9zW2lfXTtcbiAgICBpZihyb3dfID09IDQpeCAgPSB0aGlzLnJvdzRYcG9zW2lfXTtcbiAgICBpZihyb3dfID09IDUpeCAgPSB0aGlzLnJvdzVYcG9zW2lfXTtcbiAgICBpZihyb3dfID09IDYpeCAgPSB0aGlzLnJvdzZYcG9zW2lfXTtcbiAgICBpZihyb3dfID09IDcpeCAgPSB0aGlzLnJvdzdYcG9zW2lfXTtcbiAgICBpZihyb3dfID09IDgpeCAgPSB0aGlzLnJvdzhYcG9zW2lfXTtcbiAgICBpZihyb3dfID09IDkpeCAgPSB0aGlzLnJvdzlYcG9zW2lfXTtcbiAgICBpZihyb3dfID09IDEwKXggID0gdGhpcy5yb3cxMFhwb3NbaV9dO1xuICAgIGlmKHJvd18gPT0gMTEpeCAgPSB0aGlzLnJvdzExWHBvc1tpX107XG4gICAgaWYocm93XyA9PSAxMil4ICA9IHRoaXMucm93MTJYcG9zW2lfXTtcbiAgICBpZihyb3dfID09IDEzKXggID0gdGhpcy5yb3cxM1hwb3NbaV9dO1xuICAgIGlmKHJvd18gPT0gMTQpeCAgPSB0aGlzLnJvdzE0WHBvc1tpX107XG4gICAgaWYocm93XyA9PSAxNSl4ICA9IHRoaXMucm93MTVYcG9zW2lfXTtcbiAgICBpZihyb3dfID09IDE2KXggID0gdGhpcy5yb3cxNlhwb3NbaV9dO1xuICAgIGlmKHJvd18gPT0gMTcpeCAgPSB0aGlzLnJvdzE3WHBvc1tpX107XG4gICAgaWYocm93XyA9PSAxOCl4ICA9IHRoaXMucm93MThYcG9zW2lfXTtcbiAgICBpZihyb3dfID09IDE5KXggID0gdGhpcy5yb3cxOVhwb3NbaV9dO1xuICAgIGlmKHJvd18gPT0gMjApeCAgPSB0aGlzLnJvdzIwWHBvc1tpX107XG5cbiAgICAvLyBjb25zb2xlLmxvZyhcIlggaXM6IFwiKyB4KTtcbiAgICByZXR1cm4geFxuICB9XG5cbiAgcmV0dXJuQ29tcG9uZW50SGVpZ2h0KCl7XG4gICAgcmV0dXJuIHRoaXMubWF4VG90YWxIZWlnaHQ7XG4gIH1cblxuICBnZXRSb3dzQW5kZWxlbWVudHMoKXtcbiAgICByZXR1cm4gdGhpcy5yb3dzQW5kRUxlbWVudHM7XG5cbiAgfVxuXG4gIHJldHVyblkoKXtcbiAgICByZXR1cm4gdGhpcy5tYXhUb3RhbEhlaWdodDtcbiAgfVxuXG4gIHNldFhGb3JBbGxSb3dzQW5kRWxlbWVudHMoKXtcbiAgICB2YXIgYmFzZVggPSBkZXN0a29wU3RhcnQ7XG4gICAgLy8gLy8gcmVtb3ZlIGFsbCBlbXB0eXM6XG4gICAgZm9yICh2YXIgcCA9IDA7IHAgPCB0aGlzLnJvd3NBbmRFTGVtZW50cy5sZW5ndGg7IHArKykge1xuICAgICAgIGlmKHRoaXMucm93c0FuZEVMZW1lbnRzW3BdLmxlbmd0aCA9PSAwKSB0aGlzLnJvd3NBbmRFTGVtZW50cy5zcGxpY2UocCwgMSk7XG4gICAgfVxuXG5cbiAgICAvL0xvb3AgdGhlIG5vbmUgZW1wdHlzXG4gICAgZm9yICh2YXIgcCA9IDA7IHAgPCB0aGlzLnJvd3NBbmRFTGVtZW50cy5sZW5ndGg7IHArKykge1xuICAgICAgICBiYXNlWCA9IGRlc3Rrb3BTdGFydDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnJvd3NBbmRFTGVtZW50c1twXS5sZW5ndGg7IGkrKykge1xuXG4gICAgICAgICAgaWYocCA9PSAwKXRoaXMucm93MFhwb3MucHVzaChiYXNlWCk7XG4gICAgICAgICAgaWYocCA9PSAxKXRoaXMucm93MVhwb3MucHVzaChiYXNlWCk7XG4gICAgICAgICAgaWYocCA9PSAyKXRoaXMucm93Mlhwb3MucHVzaChiYXNlWCk7XG4gICAgICAgICAgaWYocCA9PSAzKXRoaXMucm93M1hwb3MucHVzaChiYXNlWCk7XG4gICAgICAgICAgaWYocCA9PSA0KXRoaXMucm93NFhwb3MucHVzaChiYXNlWCk7XG4gICAgICAgICAgaWYocCA9PSA1KXRoaXMucm93NVhwb3MucHVzaChiYXNlWCk7XG4gICAgICAgICAgaWYocCA9PSA2KXRoaXMucm93Nlhwb3MucHVzaChiYXNlWCk7XG4gICAgICAgICAgaWYocCA9PSA3KXRoaXMucm93N1hwb3MucHVzaChiYXNlWCk7XG4gICAgICAgICAgaWYocCA9PSA4KXRoaXMucm93OFhwb3MucHVzaChiYXNlWCk7XG4gICAgICAgICAgaWYocCA9PSA5KXRoaXMucm93OVhwb3MucHVzaChiYXNlWCk7XG4gICAgICAgICAgaWYocCA9PSAxMCl0aGlzLnJvdzEwWHBvcy5wdXNoKGJhc2VYKTtcbiAgICAgICAgICBpZihwID09IDExKXRoaXMucm93MTFYcG9zLnB1c2goYmFzZVgpO1xuICAgICAgICAgIGlmKHAgPT0gMTIpdGhpcy5yb3cxMlhwb3MucHVzaChiYXNlWCk7XG4gICAgICAgICAgaWYocCA9PSAxMyl0aGlzLnJvdzEzWHBvcy5wdXNoKGJhc2VYKTtcbiAgICAgICAgICBpZihwID09IDE0KXRoaXMucm93MTRYcG9zLnB1c2goYmFzZVgpO1xuICAgICAgICAgIGlmKHAgPT0gMTUpdGhpcy5yb3cxNVhwb3MucHVzaChiYXNlWCk7XG4gICAgICAgICAgaWYocCA9PSAxNil0aGlzLnJvdzE2WHBvcy5wdXNoKGJhc2VYKTtcbiAgICAgICAgICBpZihwID09IDE3KXRoaXMucm93MTdYcG9zLnB1c2goYmFzZVgpO1xuICAgICAgICAgIGlmKHAgPT0gMTgpdGhpcy5yb3cxOFhwb3MucHVzaChiYXNlWCk7XG4gICAgICAgICAgaWYocCA9PSAxOSl0aGlzLnJvdzE5WHBvcy5wdXNoKGJhc2VYKTtcbiAgICAgICAgICBpZihwID09IDIwKXRoaXMucm93MjBYcG9zLnB1c2goYmFzZVgpO1xuXG5cbiAgICAgICAgICBiYXNlWCArPSB0aGlzLnJvd3NBbmRFTGVtZW50c1twXVtpXVsxXS5yZXR1cm5XaWR0aCgpO1xuICAgICAgICAgIGJhc2VYICs9IG1hcmdpbkRlc2t0b3A7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc29sZS5sb2coXCJkb25lXCIpO1xuICB9XG5cblxuXG4gIGNhbGN1bGF0ZUhpZ2hPZkVsZW1lbnRzKCl7XG5cbiAgICB2YXIgbWF4VG90YWxIZWlnaHQgPSAwO1xuICAgIHZhciByb3dZVG90YWwgPSAwO1xuICAgIGZvciAodmFyIHAgPSAwOyBwIDwgdGhpcy5yb3dzQW5kRUxlbWVudHMubGVuZ3RoOyBwKyspIHtcblxuXG4gICAgICB2YXIgbWF4UGFkZGluZyA9IDA7XG4gICAgICBmb3IgKHZhciB6ID0gMDsgeiA8IHRoaXMucm93c0FuZEVMZW1lbnRzLmxlbmd0aDsgeisrKSB7XG5cbiAgICAgICAgLy9hZGQgbWFyZ2luIHRvIHJvd3NcbiAgICAgICAgdmFyIGNoYW5nZU9mMzAgPSBNYXRoLmZsb29yKG1hcF9yYW5nZShwcm9qZWN0VmFyaWFibGVzLnByb2plY3RTaXplLCAwLCAxLCAyMCwgMikpO1xuICAgICAgICBjaGFuZ2VPZjMwICs9IE1hdGguZmxvb3IobWFwX3JhbmdlKHByb2plY3RWYXJpYWJsZXMuY3JlYXRpdmUsIDAsIDEsIDEwLCA4MCkpO1xuICAgICAgICBjaGFuZ2VPZjMwICs9IE1hdGguZmxvb3IobWFwX3JhbmdlKHByb2plY3RWYXJpYWJsZXMuaW5zcGlyZSwgMCwgMSwgMTAsIDgwKSk7XG5cbiAgICAgICAgdmFyIGNoYW5nZU9mMTUgPSBNYXRoLmZsb29yKG1hcF9yYW5nZShwcm9qZWN0VmFyaWFibGVzLmluZm9ybWF0aXZlLCAwLCAxLCAyMCwgMikpO1xuICAgICAgICBjaGFuZ2VPZjE1ICs9IE1hdGguZmxvb3IobWFwX3JhbmdlKHByb2plY3RWYXJpYWJsZXMuZWNvbW1lcmNlLCAwLCAxLCAxMCwgODApKTtcbiAgICAgICAgY2hhbmdlT2YxNSArPSBNYXRoLmZsb29yKG1hcF9yYW5nZShwcm9qZWN0VmFyaWFibGVzLmJ1c2luZXNzLCAwLCAxLCAyMCwgMikpO1xuICAgICAgICBjaGFuZ2VPZjE1ICs9IE1hdGguZmxvb3IobWFwX3JhbmdlKHByb2plY3RWYXJpYWJsZXMudXNlckFnZSwgMCwgMSwgLTEwLCA1MCkpO1xuXG4gICAgICAgIHZhciByb3dQYWRkaW5ncyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoYW5nZU9mMzA7IGkrKykgIHJvd1BhZGRpbmdzLnB1c2goMTIwKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGFuZ2VPZjE1OyBpKyspICByb3dQYWRkaW5ncy5wdXNoKDMwKTtcblxuICAgICAgICB2YXIgcm93UGFkZGluZyA9IHJvd1BhZGRpbmdzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHJvd1BhZGRpbmdzLmxlbmd0aCldO1xuXG4gICAgICAgIGlmKHJvd1BhZGRpbmcgPj0gbWF4UGFkZGluZyltYXhQYWRkaW5nID0gcm93UGFkZGluZztcblxuICAgICAgICB0aGlzLnJvd3NBbmRFTGVtZW50c01hcmdpbi5wdXNoKHJvd1BhZGRpbmcpO1xuXG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJwYWRkaW5nIHJvdzpcIik7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMucm93c0FuZEVMZW1lbnRzTWFyZ2luW3pdKTtcblxuICAgICAgfVxuXG4gICAgICAvLyBjb25zb2xlLmxvZyhcIiBcIik7XG4gICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnRpdGxlICtcIiByb3c6IFwiICsgcCArIFwiIGVsZW1lbnRjb3VudDogXCIgKyB0aGlzLnJvd3NBbmRFTGVtZW50c1twXS5sZW5ndGgpO1xuICAgICAgZm9yICh2YXIgeiA9IDA7IHogPCB0aGlzLnJvd3NBbmRFTGVtZW50c1twXS5sZW5ndGg7IHorKykge1xuICAgICAgICB0aGlzLnJvd3NBbmRFTGVtZW50c1twXVt6XVsxXS5jYWxjdWxhdGVIaWdodCgpO1xuICAgICAgfVxuXG5cbiAgICAgIHZhciBtYXhoSGVpZ2h0ID0gMDtcblxuICAgICAgZm9yICh2YXIgeiA9IDA7IHogPCB0aGlzLnJvd3NBbmRFTGVtZW50c1twXS5sZW5ndGg7IHorKykge1xuICAgICAgICB2YXIgZWxlbWVudEhlaWdodCA9IHRoaXMucm93c0FuZEVMZW1lbnRzW3BdW3pdWzFdLnJldHVybmhlaWdodCgpO1xuICAgICAgICBpZihlbGVtZW50SGVpZ2h0ID49IG1heGhIZWlnaHQpe1xuICAgICAgICAgIG1heGhIZWlnaHQgPSBlbGVtZW50SGVpZ2h0O1xuICAgICAgICB9XG4gICAgICB9XG5cblxuICAgICAgdGhpcy5oZWlnaHQgPSBtYXhoSGVpZ2h0O1xuICAgICAgdGhpcy5yb3dIZWlnaHRzLnB1c2gobWF4aEhlaWdodCArIDE1KTtcbiAgICAgIG1heFRvdGFsSGVpZ2h0ICs9IG1heGhIZWlnaHQgKyAxNSArIDUwO1xuXG5cbiAgICAgIC8vIHRoaXMuaGVpZ2h0ID0gbWF4aEhlaWdodDtcbiAgICAgIC8vIHRoaXMucm93SGVpZ2h0cy5wdXNoKG1heGhIZWlnaHQgKyAxNSk7XG4gICAgICAvLyBtYXhUb3RhbEhlaWdodCArPSBtYXhoSGVpZ2h0ICsgMTUgKyB0aGlzLnJvd3NBbmRFTGVtZW50c01hcmdpblt6XTtcblxuXG4gICAgfVxuXG5cblxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMudGl0bGUgKyBcIiBtYXhUb3RhbEhlaWdodDogXCIrbWF4VG90YWxIZWlnaHQgKyBcIiBweFwiKTtcblxuXG4gICAgdGhpcy5tYXhUb3RhbEhlaWdodCA9IG1heFRvdGFsSGVpZ2h0O1xuXG5cblxuICAgIC8vYWRkIHJvdyB5XG4gICAgdmFyIHlUb3RhbCA9IDA7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnJvd0hlaWdodHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmKGkgPT0gMCkgdGhpcy5tYXhUb3RhbEhlaWdodCArPTUwO1xuXG4gICAgICAvLyBjb25zb2xlLmxvZyhcIlJPVyBIRUlHSFRcIik7XG4gICAgICAvLyBjb25zb2xlLmxvZyh5VG90YWwpO1xuICAgICAgdGhpcy5yb3dZcy5wdXNoKHlUb3RhbCArIHRoaXMucm93c0FuZEVMZW1lbnRzTWFyZ2luW2ldKTtcbiAgICAgIHlUb3RhbCs9IHRoaXMucm93SGVpZ2h0c1tpXTtcbiAgICB9XG5cblxuXG4gIH1cblxuXG4gIHJldHVyblJvd0Ftb3VudCgpe1xuICAgIHZhciBtYXhBZGRvbiA9IE1hdGguZmxvb3IobWFwX3JhbmdlKHByb2plY3RWYXJpYWJsZXMucHJvamVjdFNpemUsIDAsIDEsIDAsIDQpKTtcbiAgICB2YXIgYW1vdW50ID0gZ2V0Um5kSW50ZWdlcih0aGlzLm1pbnJvd3MsIHRoaXMubWF4cm93cyArIG1heEFkZG9uICk7XG5cbiAgICByZXR1cm4gYW1vdW50O1xuICB9XG5cbiAgc2V0TWFyZ2luKG1hcmdpbl8pe1xuICAgIHRoaXMubWFyZ2luID0gbWFyZ2luXztcbiAgfVxuXG4gIHJldHVybk1hcmdpbigpe1xuICAgIHJldHVybiB0aGlzLm1hcmdpbjtcbiAgfVxuXG5cbiAgYWRkUm93KHR5cGVfLCBwYWRkaW5nXyl7XG4gICAgdGhpcy5yb3dzLnB1c2goW3R5cGVfLHBhZGRpbmdfXSk7XG4gIH1cblxuICBzZXRSb3dFbGVtZW50cygpe1xuICAgIGNvbnNvbGUubG9nKFwiXCIpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMudGl0bGUpO1xuICAgIC8vIGNvbnNvbGUubG9nKCB0aGlzLnJvd3MubGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucm93cy5sZW5ndGg7IGkrKykge1xuICAgICAgICB0aGlzLnJvd3NBbmRFTGVtZW50cy5wdXNoKGdldEVsZW1lbnRzSW5Sb3dNb2RlbCh0aGlzLnJvd3NbaV0sIHRoaXMuZWxlbWVudHNTaW5nbGUsIHRoaXMuZWxlbWVudHNTaWRlLCBpKSk7XG4gICAgfVxuICB9XG4gIHJldHVyblJvd3ModHlwZSwgcGFkZGluZyl7XG4gICAgcmV0dXJuIHRoaXMucm93cztcbiAgfVxuXG4gIHJldHVyblJvd3NBbmRFbGVtZW50cyh0eXBlLCBwYWRkaW5nKXtcbiAgICByZXR1cm4gdGhpcy5yb3dzQW5kRUxlbWVudHM7XG4gIH1cblxuXG5cblxuXG4gIHJldHVybk1hdGNoKCl7XG4gICAgICB2YXIgcHJvYiA9IDA7XG4gICAgICB2YXIgZGlmZmVyZW5jZSA9IDA7XG5cbiAgICAgIGRpZmZlcmVuY2UgKz0gTWF0aC5hYnMocHJvamVjdFZhcmlhYmxlcy5idXNpbmVzcyAtIHRoaXMuZ29hbHMuYnVzaW5lc3MpO1xuICAgICAgZGlmZmVyZW5jZSArPSBNYXRoLmFicyhwcm9qZWN0VmFyaWFibGVzLmNyZWF0aXZlIC0gdGhpcy5nb2Fscy5jcmVhdGl2ZSk7XG4gICAgICBkaWZmZXJlbmNlICs9IE1hdGguYWJzKHByb2plY3RWYXJpYWJsZXMuZWNvbW1lcmNlIC0gdGhpcy5nb2Fscy5lY29tbWVyY2UpO1xuICAgICAgZGlmZmVyZW5jZSArPSBNYXRoLmFicyhwcm9qZWN0VmFyaWFibGVzLmluZm9ybWF0aXZlIC0gdGhpcy5nb2Fscy5pbmZvcm1hdGl2ZSk7XG4gICAgICBkaWZmZXJlbmNlICs9IE1hdGguYWJzKHByb2plY3RWYXJpYWJsZXMuaW5zcGlyZSAtIHRoaXMuZ29hbHMuaW5zcGlyZSk7XG4gICAgICBkaWZmZXJlbmNlICs9IE1hdGguYWJzKHByb2plY3RWYXJpYWJsZXMuc2VydmljZSAtIHRoaXMuZ29hbHMuc2VydmljZSk7XG4gICAgICBkaWZmZXJlbmNlID0gZGlmZmVyZW5jZSAvIDY7XG5cbiAgICAgIGRpZmZlcmVuY2UgKz0gTWF0aC5hYnMocHJvamVjdFZhcmlhYmxlcy5wcm9qZWN0U2l6ZSAtIHRoaXMucHJvamVjdC5wcm9qZWN0U2l6ZSk7XG4gICAgICBkaWZmZXJlbmNlICs9IE1hdGguYWJzKHByb2plY3RWYXJpYWJsZXMuc2VvSW1wb3J0YW5jZSAtIHRoaXMucHJvamVjdC5zZW9JbXBvcnRhbmNlKTtcbiAgICAgIGRpZmZlcmVuY2UgPSBkaWZmZXJlbmNlIC8gMjtcblxuICAgICAgZGlmZmVyZW5jZSArPSBNYXRoLmFicyhwcm9qZWN0VmFyaWFibGVzLnVzZXJBZ2UgLSB0aGlzLnVzZXJzLnVzZXJBZ2UpO1xuICAgICAgZGlmZmVyZW5jZSArPSBNYXRoLmFicyhwcm9qZWN0VmFyaWFibGVzLnVzZXJzVGVjaFNhdnkgLSB0aGlzLnVzZXJzLnVzZXJzVGVjaFNhdnkpO1xuICAgICAgZGlmZmVyZW5jZSArPSBNYXRoLmFicyhwcm9qZWN0VmFyaWFibGVzLmJyYW5kQXdlcmVuZXNzIC0gdGhpcy51c2Vycy5icmFuZEF3ZXJlbmVzcyk7XG4gICAgICBkaWZmZXJlbmNlID0gZGlmZmVyZW5jZSAvIDM7XG5cblxuICAgICAgaWYoZCljb25zb2xlLmxvZyh0aGlzLnRpdGxlICArIFwiOiByYXRpbmc6IFwiICsgZGlmZmVyZW5jZSk7XG5cbiAgICAgIGRpZmZlcmVuY2UgKz0gdGhpcy56aW5kZXguemluZGV4U3RhcnRWU2VuZDtcbiAgICAgIGRpZmZlcmVuY2UgPSBkaWZmZXJlbmNlLzI7XG5cbiAgICAgIHJldHVybiBkaWZmZXJlbmNlO1xuICB9XG5cbiAgICByZXR1clByZWZmZXJkRWxlbWVudHMoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJlZmZlZEVsZW1lbnRzO1xuICAgIH1cblxuICByZXR1cm5Qcm9iYWJpbGl0eShtYWluUGFnZWdvYWxfKXtcbiAgICAgICAgaWYobWFpblBhZ2Vnb2FsXyA9PSBcImJyb3dzZVwiKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvcGFzLmJyb3dzZTtcbiAgICAgICAgaWYobWFpblBhZ2Vnb2FsXyA9PSBcInNob3dPcHRpb25zXCIpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9wYXMuc2hvd09wdGlvbnM7XG4gICAgICAgIGlmKG1haW5QYWdlZ29hbF8gPT0gXCJyZWFkXCIpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9wYXMucmVhZDtcbiAgICAgICAgaWYobWFpblBhZ2Vnb2FsXyA9PSBcImNvbnZlcnNlXCIpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9wYXMuY29udmVyc2U7XG4gIH1cblxuICByZXR1cm5UaXRsZSgpe1xuICAgICAgcmV0dXJuIHRoaXMudGl0bGU7XG4gIH1cblxufVxuIiwiLypcblxuXHRFbGVtZW50IGNsYXNzXG5cbiovXG5cbmNsYXNzIGVsZW1lbnQge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlXywgemluZGV4XywgZ29hbHNfLCBwcm9qZWN0XywgdXNlcnNfLCBwYWdlZ29hbHNfLCBwcm9wYXNfLCBzaXplXykge1xuICAgICAgdGhpcy50aXRsZSA9IHRpdGxlXztcbiAgICAgIHRoaXMuemluZGV4ID0gemluZGV4XztcbiAgICAgIHRoaXMuZ29hbHMgPSBnb2Fsc187XG4gICAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0XztcbiAgICAgIHRoaXMudXNlcnMgPSB1c2Vyc187XG4gICAgICB0aGlzLnBhZ2Vnb2FscyA9IHBhZ2Vnb2Fsc187XG4gICAgICB0aGlzLnByb3BhcyA9IHByb3Bhc187XG4gICAgICB0aGlzLnNpemUgPSBzaXplXztcbiAgICAgIHRoaXMucmF0aW5nID0gMDtcblxuICAgICAgdGhpcy53aWR0aCA9IDA7XG4gICAgICB0aGlzLmhlaWdodCA9IDA7XG5cblxuICAgICAgdGhpcy5tYXJnaW4gPSAxNTtcblxuXG4gICAgfVxuXG5cbiAgICByZXR1cm5XaWR0aCgpe1xuICAgICAgcmV0dXJuIHRoaXMud2lkdGg7XG4gICAgfVxuXG5cbiAgICByZXR1cm5NYXJnaW4oKXtcbiAgICAgIHJldHVybiB0aGlzLm1hcmdpbjtcbiAgICB9XG5cbiAgICByZXR1cm5oZWlnaHQoKXtcbiAgICAgIHJldHVybiB0aGlzLmhlaWdodDtcbiAgICB9XG5cblxuICAgIGNhbGN1bGF0ZUhpZ2h0KHBhZGRpbmdfKXtcblxuICAgICAgaWYodGhpcy5oZWlnaHQgPT0gMCl7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMudGl0bGUpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnNpemUpO1xuXG4gICAgICAgIHZhciB0aWxlcyA9IDE7XG4gICAgICAgIHZhciByb3dzID0gMTtcblxuICAgICAgICB2YXIgd2lkdGhEZXNrdG9wID0gMDtcbiAgICAgICAgdmFyIGhlaWdodERlc2t0b3AgPSAwO1xuXG4gICAgICAgIGlmKHRoaXMuc2l6ZSA9PSAxKXtcbiAgICAgICAgICAgIHRpbGVzID0gMTtcbiAgICAgICAgICAgIHJvd3MgPSAxO1xuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMuc2l6ZSA+PSAyKXtcbiAgICAgICAgICB2YXIgciA9IE1hdGgucmFuZG9tKCkqMTAwO1xuICAgICAgICAgIGlmKHIgPD0gMzMpcm93cyA9IDE7XG4gICAgICAgICAgaWYociA+PSAzNCAmJiByIDw9IDYwKXJvd3MgPSAyO1xuICAgICAgICAgIGlmKHIgPj0gNjApcm93cyA9IDM7XG5cbiAgICAgICAgICBpZiAocm93cyA9PSAzICYmIHRoaXMuc2l6ZSA9PSAyKXJvd3MgPSAyO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYodGhpcy5zaXplID09IDMpe1xuICAgICAgICAgIGlmKHJvd3MgPT0gMSl0aWxlcyA9IDRcbiAgICAgICAgICBpZihyb3dzID09IDIpdGlsZXMgPSAyXG4gICAgICAgICAgaWYocm93cyA9PSAzKXRpbGVzID0gMlxuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMuc2l6ZSA9PSA0KXtcbiAgICAgICAgICBpZihyb3dzID09IDEpdGlsZXMgPSA3XG4gICAgICAgICAgaWYocm93cyA9PSAyKXRpbGVzID0gOFxuICAgICAgICAgIGlmKHJvd3MgPT0gMyl0aWxlcyA9IDRcblxuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMuc2l6ZSA9PSA1KXtcbiAgICAgICAgICBpZihyb3dzID09IDEpdGlsZXMgPSAxMlxuICAgICAgICAgIGlmKHJvd3MgPT0gMil0aWxlcyA9IDZcbiAgICAgICAgICBpZihyb3dzID09IDMpdGlsZXMgPSA0XG4gICAgICAgIH1cblxuXG5cbiAgICAgICAgaWYocm93cyA9PSAxKXtcbiAgICAgICAgICAgIHdpZHRoRGVza3RvcCA9IHRpbGVzKiAoc3F1YXJlRGVza3RvcCArIG1hcmdpbkRlc2t0b3ApXG4gICAgICAgICAgICB3aWR0aERlc2t0b3AgLT0gbWFyZ2luRGVza3RvcCAqMTtcbiAgICAgICAgICAgIGhlaWdodERlc2t0b3AgPSBzcXVhcmVEZXNrdG9wKnJvd3M7XG4gICAgICAgIH1cblxuICAgICAgICBpZihyb3dzID09IDIpe1xuICAgICAgICAgICAgd2lkdGhEZXNrdG9wID0gKHRpbGVzKSogKHNxdWFyZURlc2t0b3AgKyBtYXJnaW5EZXNrdG9wKVxuICAgICAgICAgICAgd2lkdGhEZXNrdG9wIC09IG1hcmdpbkRlc2t0b3AgKjE7XG4gICAgICAgICAgICBoZWlnaHREZXNrdG9wID0gKHNxdWFyZURlc2t0b3Aqcm93cykgKyAobWFyZ2luRGVza3RvcCAqIChyb3dzIC0xKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYocm93cyA9PSAzKXtcbiAgICAgICAgICAgIHdpZHRoRGVza3RvcCA9ICh0aWxlcykqIChzcXVhcmVEZXNrdG9wICsgbWFyZ2luRGVza3RvcClcbiAgICAgICAgICAgIHdpZHRoRGVza3RvcCAtPSBtYXJnaW5EZXNrdG9wICoxO1xuICAgICAgICAgICAgaGVpZ2h0RGVza3RvcCA9IChzcXVhcmVEZXNrdG9wKnJvd3MpICsgKG1hcmdpbkRlc2t0b3AgKiAocm93cyAtMSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoRGVza3RvcDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHREZXNrdG9wO1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwid2lkdGhEZXNrdG9wOiBcIisgd2lkdGhEZXNrdG9wKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJoZWlnaHREZXNrdG9wOiBcIisgaGVpZ2h0RGVza3RvcCk7XG4gICAgICB9XG5cblxuICAgIH1cblxuXG4gICAgc2F2ZUVsZW1lbnRSYXRpbmcocHJvYil7XG4gICAgICB0aGlzLnJhdGluZyA9IHByb2I7XG4gICAgfVxuXG4gICAgcmV0dXJuRWxlbWVudFJhdGluZyhwcm9iKXtcbiAgICAgIHJldHVybiB0aGlzLnJhdGluZztcbiAgICB9XG5cblxuICByZXR1cm5NYXRjaCgpe1xuICAgICAgdmFyIHByb2IgPSAwO1xuICAgICAgdmFyIGRpZmZlcmVuY2UgPSAwO1xuXG4gICAgICBkaWZmZXJlbmNlICs9IE1hdGguYWJzKHByb2plY3RWYXJpYWJsZXMuYnVzaW5lc3MgLSB0aGlzLmdvYWxzLmJ1c2luZXNzKTtcbiAgICAgIGRpZmZlcmVuY2UgKz0gTWF0aC5hYnMocHJvamVjdFZhcmlhYmxlcy5jcmVhdGl2ZSAtIHRoaXMuZ29hbHMuY3JlYXRpdmUpO1xuICAgICAgZGlmZmVyZW5jZSArPSBNYXRoLmFicyhwcm9qZWN0VmFyaWFibGVzLmVjb21tZXJjZSAtIHRoaXMuZ29hbHMuZWNvbW1lcmNlKTtcbiAgICAgIGRpZmZlcmVuY2UgKz0gTWF0aC5hYnMocHJvamVjdFZhcmlhYmxlcy5pbmZvcm1hdGl2ZSAtIHRoaXMuZ29hbHMuaW5mb3JtYXRpdmUpO1xuICAgICAgZGlmZmVyZW5jZSArPSBNYXRoLmFicyhwcm9qZWN0VmFyaWFibGVzLmluc3BpcmUgLSB0aGlzLmdvYWxzLmluc3BpcmUpO1xuICAgICAgZGlmZmVyZW5jZSArPSBNYXRoLmFicyhwcm9qZWN0VmFyaWFibGVzLnNlcnZpY2UgLSB0aGlzLmdvYWxzLnNlcnZpY2UpO1xuICAgICAgZGlmZmVyZW5jZSA9IGRpZmZlcmVuY2UgLyA2O1xuXG4gICAgICBkaWZmZXJlbmNlICs9IE1hdGguYWJzKHByb2plY3RWYXJpYWJsZXMucHJvamVjdFNpemUgLSB0aGlzLnByb2plY3QucHJvamVjdFNpemUpO1xuICAgICAgZGlmZmVyZW5jZSArPSBNYXRoLmFicyhwcm9qZWN0VmFyaWFibGVzLnNlb0ltcG9ydGFuY2UgLSB0aGlzLnByb2plY3Quc2VvSW1wb3J0YW5jZSk7XG4gICAgICBkaWZmZXJlbmNlID0gZGlmZmVyZW5jZSAvIDI7XG5cbiAgICAgIGRpZmZlcmVuY2UgKz0gTWF0aC5hYnMocHJvamVjdFZhcmlhYmxlcy51c2Vyc0FnZSAtIHRoaXMudXNlcnMudXNlckFnZSk7XG4gICAgICBkaWZmZXJlbmNlICs9IE1hdGguYWJzKHByb2plY3RWYXJpYWJsZXMudXNlcnNUZWNoU2F2eSAtIHRoaXMudXNlcnMudXNlcnNUZWNoU2F2eSk7XG4gICAgICBkaWZmZXJlbmNlICs9IE1hdGguYWJzKHByb2plY3RWYXJpYWJsZXMuYnJhbmRBd2VyZW5lc3MgLSB0aGlzLnVzZXJzLmJyYW5kQXdlcmVuZXNzKTtcbiAgICAgIGRpZmZlcmVuY2UgPSBkaWZmZXJlbmNlIC8gMztcblxuICAgICAgLy8gZGlmZmVyZW5jZSArPSBcIlwiO1xuXG4gICAgICB2YXIgcmFuZG9tSW50ID0gTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqIDEwMDAwMDAwKSArIDEpO1xuICAgICAgLy8gY29uc29sZS5sb2coXCIlKiooJCokKVwiKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGRpZmZlcmVuY2UpO1xuICAgICAgLy8gY29uc29sZS5sb2cocmFuZG9tSW50KTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGRpZmZlcmVuY2UrcmFuZG9tSW50KTtcbiAgICAgIHZhciB0aGVEaWYgPSBkaWZmZXJlbmNlK3JhbmRvbUludFxuXG4gICAgICBpZihkKWNvbnNvbGUubG9nKHRoaXMudGl0bGUgICsgXCI6IHJhdGluZzogXCIgKyBwYXJzZUZsb2F0KHRoZURpZikpO1xuXG4gICAgICBkaWZmZXJlbmNlICs9IHRoaXMuemluZGV4LnppbmRleFN0YXJ0VlNlbmQ7XG4gICAgICBkaWZmZXJlbmNlID0gZGlmZmVyZW5jZS8yO1xuXG4gICAgICByZXR1cm4gZGlmZmVyZW5jZTtcbiAgfVxuXG5cbiAgcmV0dXJuU2l6ZSgpe1xuICAgICByZXR1cm4gdGhpcy5zaXplO1xuICB9XG5cbiAgcmV0dXJuVGl0bGUoKXtcblx0ICByZXR1cm4gdGhpcy50aXRsZTtcbiAgfVxufVxuIiwiYXJ0aWNsZXNDb21wb25lbnQgPSBuZXcgY29tcG9uZW50KFxuICAgIFwiYXJ0aWNsZXNcIiwgICAgICAgICAgICAgICAgIC8vc3ltYm9sXG4gICAgeyAgICAgICAgICAgICAgICAgICAgICAgLy8gemluZGV4XG4gICAgICAgIHppbmRleFN0YXJ0VlNlbmQ6IDAuMyxcbiAgICB9LFxuICAgIHsgICAgICAgICAgICAgICAgICAgICAgIC8vIGdvYWxzXG4gICAgICAgIGJ1c2luZXNzOiAwLjUsXG4gICAgICAgIGNyZWF0aXZlOiAwLjEsXG4gICAgICAgIGVjb21tZXJjZTogMC4xLFxuICAgICAgICBpbmZvcm1hdGl2ZTogMC43LFxuICAgICAgICBpbnNwaXJlOiAwLjQsXG4gICAgICAgIHNlcnZpY2U6IDAuMSxcbiAgICB9LFxuICAgIHsgICAgICAgICAgICAgICAgICAgICAgIC8vIHByb2plY3RcbiAgICAgICAgcHJvamVjdFNpemU6IDAuMyxcbiAgICAgICAgc2VvSW1wb3J0YW5jZTogMC4yLFxuICAgIH0sXG4gICAgeyAgICAgICAgICAgICAgICAgICAgICAgLy8gdXNlcnNcbiAgICAgICAgdXNlckFnZTogMC4zMCxcbiAgICAgICAgdXNlcnNUZWNoU2F2eTogMC4wLFxuICAgICAgICBicmFuZEF3ZXJlbmVzczogMC4wLFxuICAgIH0sXG4gICAgeyAgICAgICAgICAgICAgICAgICAgICAgLy8gZ29hbHMgcGFnZVxuICAgICAgICBicm93c2U6IDAuMSxcbiAgICAgICAgc2hvd09wdGlvbnM6IDAuMCxcbiAgICAgICAgcmVhZDogMC42LFxuICAgICAgICBjb252ZXJzZTogMC4xLFxuICAgIH0se1xuXHRcdGJyb3dzZTpbW1wiYnV0dG9uc1wiLDAuMl0sIFtcImZvb3RlclwiLDAuNl0sIFtcInVzcFwiLDAuMl1dLFxuXHRcdHNob3dPcHRpb25zOltdLC8vYW55XG5cdFx0cmVhZDpbXSwvL2FueVxuXHRcdGNvbnZlcnNlOltdLC8vYW55XG5cdH0sXG4gIHsgICAgICAgICAgICAgICAgICAgICAgIC8vIHVzZXJzXG4gICAgICBtaW5yb3dzOiAxLFxuICAgICAgbWF4cm93czogNCxcbiAgfSx7IC8vc2luZ2xlXG5cdHByZWZmZWRFbGVtZW50czpbXG4gICAgICAgICAgWyAgIFtcImgyXCIsIDAuNl0sIFtcImZpbHRlclwiLCAwLjNdLCBbXCJzaGFyZVwiLCAwLjRdLCBbXCJjdGFcIiwgMC42XSBdLFxuICAgICAgICAgIFsgICBbXCJjYXJkXCIsIDAuOV0sIFtcInRleHRcIiwgMC4xXSwgXSxcbiAgICAgICAgICBbICAgW1widGV4dGxpbmVcIiwgMC45XSwgIF0sXG4gICAgICAgIF0sXG5cdH0sXG4gIHsgLy9zaWRlXG5cdHByZWZmZWRFbGVtZW50c1NpZGU6W1xuICAgICAgICAgIFsgICBbXCJjYXJkXCIsIDAuOV0sIFtcInRleHRcIiwgMC4xXSwgW1widGV4dGxpbmVcIiwgMC4xXSwgIF0sXG4gICAgICAgICAgWyAgIFtcImNhcmRcIiwgMC44XSxbXCJjYXJkXCIsIDAuOF0sICAgXSxcbiAgICAgICAgICBbICAgW1widGV4dGxpbmVcIiwgMC45XSxbXCJ0ZXh0XCIsIDAuMV0gIF0sXG4gICAgICAgIF0sXG5cdH0sXG4pO1xuY29tcG9uZW50cy5wdXNoKGFydGljbGVzQ29tcG9uZW50KTtcbiIsImJ1dHRvbkxpc3RDb21wb25lbnQgPSAgbmV3IGNvbXBvbmVudChcbiAgICBcImJ1dHRvbnNcIiwgICAgICAgICAgICAgICAgIC8vc3ltYm9sXG4gICAgeyAgICAgICAgICAgICAgICAgICAgICAgLy8gemluZGV4XG4gICAgICAgIHppbmRleFN0YXJ0VlNlbmQ6IDAuNSxcbiAgICB9LFxuICAgIHsgICAgICAgICAgICAgICAgICAgICAgIC8vIGdvYWxzXG4gICAgICAgIGJ1c2luZXNzOiAwLjQsXG4gICAgICAgIGNyZWF0aXZlOiAwLjIsXG4gICAgICAgIGVjb21tZXJjZTogMC4yLFxuICAgICAgICBpbmZvcm1hdGl2ZTogMC40LFxuICAgICAgICBpbnNwaXJlOiAwLjAsXG4gICAgICAgIHNlcnZpY2U6IDAuNCxcbiAgICB9LFxuICAgIHsgICAgICAgICAgICAgICAgICAgICAgIC8vIHByb2plY3RcbiAgICAgICAgcHJvamVjdFNpemU6IDAuNDUsXG4gICAgICAgIHNlb0ltcG9ydGFuY2U6IDAuNDUsXG4gICAgfSxcbiAgICB7ICAgICAgICAgICAgICAgICAgICAgICAvLyB1c2Vyc1xuICAgIFx0dXNlckFnZTogMC4zMCxcbiAgICAgICAgdXNlcnNUZWNoU2F2eTogMC4wLFxuICAgICAgICBicmFuZEF3ZXJlbmVzczogMC4wLFxuICAgIH0sXG4gICAgeyAgICAgICAgICAgICAgICAgICAgICAgLy8gZ29hbHMgcGFnZVxuICAgICAgICBicm93c2U6IDAuNCxcbiAgICAgICAgc2hvd09wdGlvbnM6IDAuNCxcbiAgICAgICAgcmVhZDogMC4xLFxuICAgICAgICBjb252ZXJzZTogMC4xLFxuICAgIH0se1xuXHRcdGJyb3dzZTpbXSwgLy8gYW55XG5cdFx0c2hvd09wdGlvbnM6W10sLy8gYW55XG5cdFx0cmVhZDpbXSwvLyBhbnlcblx0XHRjb252ZXJzZTpbXSwvLyBhbnlcblx0fSx7ICAgICAgICAgICAgICAgICAgICAgICAvLyB1c2Vyc1xuICAgICAgbWlucm93czogMSxcbiAgICAgIG1heHJvd3M6IDQsXG4gIH0seyAvL3NpbmdsZVxuXHRwcmVmZmVkRWxlbWVudHM6W1xuICAgICAgICAgIFsgICBbXCJoMlwiLCAwLjldLCAgW1wiY3RhXCIsIDAuOV0sXSxcbiAgICAgICAgXSxcblx0fSxcbiAgeyAvL3NpZGVcblx0cHJlZmZlZEVsZW1lbnRzU2lkZTpbXG4gICAgICAgICAgWyAgIFtcImN0YVwiLCAwLjldIF0sXG4gICAgICAgICAgWyAgIFtcInRleHRsaW5lXCIsIDAuOV0gXSxcbiAgICAgICAgXSxcblx0fSxcbik7XG5jb21wb25lbnRzLnB1c2goYnV0dG9uTGlzdENvbXBvbmVudCk7XG4iLCJmb290ZXJDb21wb25lbnQgPSBuZXcgY29tcG9uZW50KFxuICAgIFwiZm9vdGVyXCIsICAgICAgICAgICAgICAgICAvL3N5bWJvbFxuICAgIHsgICAgICAgICAgICAgICAgICAgICAgIC8vIHppbmRleFxuICAgICAgICB6aW5kZXhTdGFydFZTZW5kOiAwLjk5OTksXG4gICAgfSxcbiAgICB7ICAgICAgICAgICAgICAgICAgICAgICAvLyBnb2Fsc1xuICAgICAgICBidXNpbmVzczogMC43LFxuICAgICAgICBjcmVhdGl2ZTogMC4wLFxuICAgICAgICBlY29tbWVyY2U6IDAuNyxcbiAgICAgICAgaW5mb3JtYXRpdmU6IDAuNyxcbiAgICAgICAgaW5zcGlyZTogMC4xLFxuICAgICAgICBzZXJ2aWNlOiAwLjcsXG4gICAgfSxcbiAgICB7ICAgICAgICAgICAgICAgICAgICAgICAvLyBwcm9qZWN0XG4gICAgICAgIHByb2plY3RTaXplOiAwLjcsXG4gICAgICAgIHNlb0ltcG9ydGFuY2U6IDAuNyxcbiAgICB9LFxuICAgIHsgICAgICAgICAgICAgICAgICAgICAgIC8vIHVzZXJzXG4gICAgICAgIHVzZXJBZ2U6IDAuMzAsXG4gICAgICAgIHVzZXJzVGVjaFNhdnk6IDAuMCxcbiAgICAgICAgYnJhbmRBd2VyZW5lc3M6IDAuMCxcbiAgICB9LFxuICAgIHsgICAgICAgICAgICAgICAgICAgICAgIC8vIGdvYWxzIHBhZ2VcbiAgICAgICAgYnJvd3NlOiAwLjQsXG4gICAgICAgIHNob3dPcHRpb25zOiAwLjQsXG4gICAgICAgIHJlYWQ6IDAuMCxcbiAgICAgICAgY29udmVyc2U6IDAuMixcbiAgICB9LHtcblx0XHRicm93c2U6W1tcIkVORFwiLDFdXSwgLy8gYW55XG5cdCAgICBzaG93T3B0aW9uczpbW1wiRU5EXCIsMV1dLFxuXHQgICAgcmVhZDpbW1wiRU5EXCIsMV1dLFxuXHQgICAgY29udmVyc2U6W1tcIkVORFwiLDFdXSxcblx0fSxcbiAgeyAgICAgICAgICAgICAgICAgICAgICAgLy8gdXNlcnNcbiAgICAgIG1pbnJvd3M6IDEsXG4gICAgICBtYXhyb3dzOiA0LFxuICB9LHsgLy9zaW5nbGVcbiAgcHJlZmZlZEVsZW1lbnRzOltcbiAgICAgICAgICBbICAgW1wibG9nb1wiLCAwLjJdLFtcInNoYXJlXCIsIDAuM10sXSwgICAgICAgIFxuICAgICAgICAgIFsgICBbXCJ0ZXh0bGluZVwiLCAwLjldLCAgW1wic2hhcmVcIiwgMC45XSxdLFxuICAgICAgICBdLFxuICB9LFxuICB7IC8vc2lkZVxuICBwcmVmZmVkRWxlbWVudHNTaWRlOltcbiAgICBbICAgW1wibG9nb1wiLCAwLjZdLCBbXCJjdGFcIiwgMC4zXSwgW1wic2hhcmVcIiwgMC4zXSxdLFxuICAgIFsgICBbXCJoM1wiLCAwLjZdLCBdLFxuICAgIFsgICBbXCJ0ZXh0bGluZVwiLCAwLjldLCAgW1wic2hhcmVcIiwgMC45XSxdLFxuICAgICAgICBdLFxuICB9LFxuKTtcbmNvbXBvbmVudHMucHVzaChmb290ZXJDb21wb25lbnQpO1xuIiwiaGVhZGVyQ29tcG9uZW50ID0gbmV3IGNvbXBvbmVudChcbiAgICBcImhlYWRlclwiLCAgICAgICAgICAgICAgICAgLy9zeW1ib2xcblx0eyAgICAgICAgICAgICAgICAgICAgICAgLy8gemluZGV4XG4gICAgICAgIHppbmRleFN0YXJ0VlNlbmQ6IDAuMixcbiAgICB9LFxuICAgIHsgICAgICAgICAgICAgICAgICAgICAgIC8vIGdvYWxzIHByb2plY3RcbiAgICAgICAgYnVzaW5lc3M6IDAuNCxcbiAgICAgICAgY3JlYXRpdmU6IDAuOCxcbiAgICAgICAgZWNvbW1lcmNlOiAwLjUsXG4gICAgICAgIGluZm9ybWF0aXZlOiAwLjEsXG4gICAgICAgIGluc3BpcmU6IDAuOSxcbiAgICAgICAgc2VydmljZTogMC4yLFxuICAgIH0sXG4gICAgeyAgICAgICAgICAgICAgICAgICAgICAgLy8gcHJvamVjdFxuICAgICAgICBwcm9qZWN0U2l6ZTogMC4xLFxuICAgICAgICBzZW9JbXBvcnRhbmNlOiAwLjIsXG4gICAgfSxcbiAgICB7ICAgICAgICAgICAgICAgICAgICAgICAvLyB1c2Vyc1xuICAgICAgICB1c2VyQWdlOiAwLjMwLFxuICAgICAgICB1c2Vyc1RlY2hTYXZ5OiAwLjIsXG4gICAgICAgIGJyYW5kQXdlcmVuZXNzOiAwLjIsXG4gICAgfSxcbiAgICB7ICAgICAgICAgICAgICAgICAgICAgICAvLyBnb2FscyBwYWdlXG5cdFx0YnJvd3NlOiAwLjQsXG4gICAgICAgIHNob3dPcHRpb25zOiAwLjQsXG4gICAgICAgIHJlYWQ6IDAuMyxcbiAgICAgICAgY29udmVyc2U6IDAuMyxcbiAgICB9LHtcblx0ICAgYnJvd3NlOltbXCJzZWFyY2hcIiwwLjJdLCAgW1widXNwXCIsMC4xXSwgW1widGV4dFwiLDAuMl0sIFtcImFydGljbGVzXCIsMC4xXV0sXG5cdCAgIHNob3dPcHRpb25zOltbXCJzZWFyY2hcIiwwLjVdLCBbXCJhcnRpY2xlc1wiLDAuMV0sIFsnYnV0dG9ucycsIDAuMl1dLFxuXHQgICByZWFkOlsgW1widGV4dFwiLDAuMl0sIFtcImFydGljbGVzXCIsMC4xXV0sXG5cdCAgIGNvbnZlcnNlOlsgW1widGV4dFwiLDAuMl0sIFtcImFydGljbGVzXCIsMC4xXV0sXG5cdH0sICB7ICAgICAgICAgICAgICAgICAgICAgICAvLyB1c2Vyc1xuICAgICAgICBtaW5yb3dzOiAxLFxuICAgICAgICBtYXhyb3dzOiA0LFxuICAgIH0seyAvL3NpbmdsZVxuICAgIHByZWZmZWRFbGVtZW50czpbXG4gICAgICAgICAgICBbICAgW1wiaDFcIiwgMC42XSwgW1wic2VhcmNoLWljb25cIiwgMC4zXSxdLFxuICAgICAgICAgICAgWyAgIFtcInRleHRsaW5lXCIsIDAuNl0sIF0sXG4gICAgICAgICAgICBbICAgW1widGV4dFwiLCAwLjZdLCBdLFxuICAgICAgICAgICAgWyAgIFtcImN0YVwiLCAwLjZdLF0sXG4gICAgICAgICAgXSxcbiAgICB9LFxuICAgIHsgLy9zaWRlXG4gICAgcHJlZmZlZEVsZW1lbnRzU2lkZTpbXG4gICAgICAgICAgICBbICAgW1wibG9nb1wiLCAwLjZdLCBbXCJoM1wiLCAwLjZdIF0sXG4gICAgICAgICAgXSxcbiAgICB9LFxuKTtcbmNvbXBvbmVudHMucHVzaChoZWFkZXJDb21wb25lbnQpO1xuIiwibWVudUNvbXBvbmVudCA9IG5ldyBjb21wb25lbnQoXG4gICAgXCJtZW51XCIsXG4gICAgeyAgICAgICAgICAgICAgICAgICAgICAgLy8gemluZGV4XG4gICAgICAgIHppbmRleFN0YXJ0VlNlbmQ6IDAuMDUsXG4gICAgfSx7ICAgICAgICAgICAgICAgICAgICAgICAvLyBnb2Fsc1xuICAgICAgICBidXNpbmVzczogMC4xLFxuICAgICAgICBjcmVhdGl2ZTogMSxcbiAgICAgICAgZWNvbW1lcmNlOiAwLjksXG4gICAgICAgIGluZm9ybWF0aXZlOiAwLjUsXG4gICAgICAgIGluc3BpcmU6IDAuNSxcbiAgICAgICAgc2VydmljZTogMC41LFxuICAgIH0seyAgICAgICAgICAgICAgICAgICAgICAgLy8gcHJvamVjdFxuICAgICAgICBwcm9qZWN0U2l6ZTogMC41LFxuICAgICAgICBzZW9JbXBvcnRhbmNlOiAwLjUsXG4gICAgfSx7ICAgICAgICAgICAgICAgICAgICAgICAvLyB1c2Vyc1xuICAgICAgICB1c2VyQWdlOiAwLjI1LFxuICAgICAgICB1c2Vyc1RlY2hTYXZ5OiAwLjgsXG4gICAgICAgIGJyYW5kQXdlcmVuZXNzOiAwLjgsXG4gICAgfSx7ICAgICAgICAgICAgICAgICAgICAgICAvLyBnb2FscyBwYWdlXG4gICAgICAgIGJyb3dzZTogMC4zLFxuICAgICAgICBzaG93T3B0aW9uczogMC4xLFxuICAgICAgICByZWFkOiAwLjcsIFxuICAgICAgICBjb252ZXJzZTogMC4xLFxuICAgIH0se1x0Ly9wcm9wYSdzXG5cdCAgICBicm93c2U6W1tcInNlYXJjaFwiLDAuMl0sIFtcImhlYWRlclwiLDAuNF0sIFtcInVzcFwiLDAuMV0sIFtcInRleHRcIiwwLjJdLCBbXCJhcnRpY2xlc1wiLDAuMV1dLFxuXHQgICAgc2hvd09wdGlvbnM6W1tcInNlYXJjaFwiLDAuNV0sIFtcImhlYWRlclwiLDAuMl0sIFtcImFydGljbGVzXCIsMC4xXSwgWydidXR0b25zJywgMC4yXV0sXG5cdCAgICByZWFkOltbXCJoZWFkZXJcIiwwLjddLCBbXCJ0ZXh0XCIsMC4yXSwgW1wiYXJ0aWNsZXNcIiwwLjFdXSxcbiAgICAgIGNvbnZlcnNlOltbXCJoZWFkZXJcIiwwLjddLCBbXCJ0ZXh0XCIsMC4yXSwgW1wiYXJ0aWNsZXNcIiwwLjFdXSxcblxuXHR9LCB7ICAgICAgICAgICAgICAgICAgICAgICAvLyB1c2Vyc1xuICAgICAgICBtaW5yb3dzOiAxLFxuICAgICAgICBtYXhyb3dzOiA0LFxuICAgIH0seyAvL3NpbmdsZVxuICAgIHByZWZmZWRFbGVtZW50czpbXG4gICAgICAgICAgICBbICAgW1wiY3RhXCIsIDAuM10sW1wibWVudWl0ZW1zXCIsIDAuNl0sW1wibWVudWl0ZW1zXCIsIDAuNl1dLFxuICAgICAgICAgICAgWyAgIFtcImxvZ29cIiwgMC4yXSwgW1wibWVudWl0ZW1zXCIsIDAuNl0sIFtcInNlYXJjaC1pY29uXCIsIDAuM10sW1wibWVudWl0ZW1zXCIsIDAuNl1dLFxuICAgICAgICAgICAgWyAgIFtcInByb2ZpbGUtaWNvblwiLCAwLjNdIF0sXG4gICAgICAgICAgXSxcbiAgICB9LFxuICAgIHsgLy9zaWRlXG4gICAgcHJlZmZlZEVsZW1lbnRzU2lkZTpbXG4gICAgICAgICAgICBbICAgW1wibWVudWl0ZW1zXCIsIDAuNl1dLFxuICAgICAgICAgICAgWyAgIFtcImljb250ZXh0bGluZVwiLCAwLjZdLCBbXCJjdGFcIiwgMC4xXSxdLFxuICAgICAgICAgIF0sXG4gICAgfSxcbik7XG5jb21wb25lbnRzLnB1c2gobWVudUNvbXBvbmVudCk7XG4iLCJzZWFyY2hiYXJDb21wb25lbnQgPSBuZXcgY29tcG9uZW50KFxuICAgIFwic2VhcmNoXCIsICAgICAgICAgICAgICAgICAvL3N5bWJvbFxuICAgIHsgICAgICAgICAgICAgICAgICAgICAgIC8vIHppbmRleFxuICAgICAgICB6aW5kZXhTdGFydFZTZW5kOiAwLjE1LFxuICAgIH0seyAgICAgICAgICAgICAgICAgICAgICAgLy8gZ29hbHNcbiAgICAgICAgYnVzaW5lc3M6IDAuNyxcbiAgICAgICAgY3JlYXRpdmU6IDAuMSxcbiAgICAgICAgZWNvbW1lcmNlOiAwLjcsXG4gICAgICAgIGluZm9ybWF0aXZlOiAwLjEsXG4gICAgICAgIGluc3BpcmU6IDAuMSxcbiAgICAgICAgc2VydmljZTogMC43LFxuICAgIH0seyAgICAgICAgICAgICAgICAgICAgICAgLy8gcHJvamVjdFxuICAgICAgICBwcm9qZWN0U2l6ZTogMS4wLFxuICAgICAgICBzZW9JbXBvcnRhbmNlOiAwLjAsXG4gICAgfSx7ICAgICAgICAgICAgICAgICAgICAgICAvLyB1c2Vyc1xuICAgICAgICB1c2VyQWdlOiAwLjMwLFxuICAgICAgICB1c2Vyc1RlY2hTYXZ5OiAwLjAsXG4gICAgICAgIGJyYW5kQXdlcmVuZXNzOiAwLjAsXG4gICAgfSx7ICAgICAgICAgICAgICAgICAgICAgICAvLyBnb2FscyBwYWdlXG4gICAgICAgIGJyb3dzZTogMC41LFxuICAgICAgICBzaG93T3B0aW9uczogMC41LFxuICAgICAgICByZWFkOiAwLjAsXG4gICAgICAgIGNvbnZlcnNlOiAwLjAsXG4gICAgfSx7XG5cdFx0YnJvd3NlOltbXCJhcnRpY2xlc1wiLDAuOF0sW1wiYnV0dG9uc1wiLDAuMl1dLCAvLyBhbnlcblx0XHRzaG93T3B0aW9uczpbW1wiYXJ0aWNsZXNcIiwwLjhdLFtcImJ1dHRvbnNcIiwwLjJdXSxcbiAgICByZWFkOltbXCJhcnRpY2xlc1wiLDAuOF0sW1wiYnV0dG9uc1wiLDAuMl1dLCAvLyBhbnlcblx0XHRjb252ZXJzZTpbW1wiYXJ0aWNsZXNcIiwwLjhdLFtcImJ1dHRvbnNcIiwwLjJdXSxcdFx0XG5cdH0seyAgICAgICAgICAgICAgICAgICAgICAgLy8gdXNlcnNcbiAgICAgICAgbWlucm93czogMSxcbiAgICAgICAgbWF4cm93czogMixcbiAgICB9LHsgLy9zaW5nbGVcbiAgICBwcmVmZmVkRWxlbWVudHM6W1xuICAgICAgICAgICAgWyAgIFtcImgxXCIsIDAuNl0gIF0sXG4gICAgICAgICAgICBbICAgW1widGV4dGxpbmVcIiwgMC42XSwgW1wiaW5wdXR0ZXh0XCIsIDAuNl0sIFtcInNlYXJjaC1pY29uXCIsIDAuM10gXSxcbiAgICAgICAgICBdLFxuICAgIH0sXG4gICAgeyAvL3NpZGVcbiAgICBwcmVmZmVkRWxlbWVudHNTaWRlOltcbiAgICAgICAgICAgIFsgICBbXCJzZWFyY2hcIiwgMC42XSxdLFxuICAgICAgICAgICAgWyAgIFtcImN0YVwiLCAwLjZdLF0sXG4gICAgICAgICAgXSxcbiAgICB9LFxuKTtcbmNvbXBvbmVudHMucHVzaChzZWFyY2hiYXJDb21wb25lbnQpO1xuIiwidGV4dENvbXBvbmVudD0gbmV3IGNvbXBvbmVudChcbiAgICBcInRleHRcIiwgICAgICAgICAgICAgICAgIC8vc3ltYm9sXG4gICAgeyAgICAgICAgICAgICAgICAgICAgICAgLy8gemluZGV4XG4gICAgICAgIHppbmRleFN0YXJ0VlNlbmQ6IDAuNSxcbiAgICB9LFxuICAgIHsgICAgICAgICAgICAgICAgICAgICAgIC8vIGdvYWxzXG4gICAgICAgIGJ1c2luZXNzOiAwLjcsXG4gICAgICAgIGNyZWF0aXZlOiAwLjEsXG4gICAgICAgIGVjb21tZXJjZTogMC4xLFxuICAgICAgICBpbmZvcm1hdGl2ZTogMC43LFxuICAgICAgICBpbnNwaXJlOiAwLjEsXG4gICAgICAgIHNlcnZpY2U6IDAuNyxcbiAgICB9LFxuICAgIHsgICAgICAgICAgICAgICAgICAgICAgIC8vIHByb2plY3RcbiAgICAgICAgcHJvamVjdFNpemU6IDAuNDUsXG4gICAgICAgIHNlb0ltcG9ydGFuY2U6IDAuNDUsXG4gICAgfSxcbiAgICB7ICAgICAgICAgICAgICAgICAgICAgICAvLyB1c2Vyc1xuICAgICAgICB1c2VyQWdlOiAwLjMwLFxuICAgICAgICB1c2Vyc1RlY2hTYXZ5OiAwLjEsXG4gICAgICAgIGJyYW5kQXdlcmVuZXNzOiAwLjEsXG4gICAgfSxcbiAgICB7ICAgICAgICAgICAgICAgICAgICAgICAvLyBnb2FscyBwYWdlXG4gICAgICAgIGJyb3dzZTogMC4xLFxuICAgICAgICBzaG93T3B0aW9uczogMC4yLFxuICAgICAgICByZWFkOiAwLjIsXG4gICAgICAgIGNvbnZlcnNlOiAwLjYsXG4gICAgfSx7XG5cdFx0YnJvd3NlOltbXCJidXR0b25zXCIsMC44XSxbXCJmb290ZXJcIiwwLjJdXSxcblx0ICAgIHNob3dPcHRpb25zOltbXCJidXR0b25zXCIsMC45XSwgW1wiZm9vdGVyXCIsMC4xXV0sXG5cdCAgICByZWFkOltbXCJidXR0b25zXCIsMC45XSwgW1wiZm9vdGVyXCIsMC4xXV0sXG5cdCAgICBjb252ZXJzZTpbW1wiYnV0dG9uc1wiLDAuOV0sIFtcImZvb3RlclwiLDAuMV1dLFxuXHR9LHsgICAgICAgICAgICAgICAgICAgICAgIC8vIHVzZXJzXG4gICAgICAgIG1pbnJvd3M6IDEsXG4gICAgICAgIG1heHJvd3M6IDQsXG4gICAgfSx7IC8vc2luZ2xlXG4gICAgcHJlZmZlZEVsZW1lbnRzOltcbiAgICAgICAgICAgIFsgICBbXCJoMVwiLCAwLjZdLCBbXCJ0ZXh0XCIsIDAuNl0sIF0sXG4gICAgICAgICAgICBbICAgW1wiaDJcIiwgMC42XSwgW1widGV4dFwiLCAwLjZdLCBdLFxuICAgICAgICAgICAgWyAgIFtcImNhcmRcIiwgMC42XSxbXCJjYXJkXCIsIDAuNl0sW1wiY2FyZFwiLCAwLjZdLF0sXG4gICAgICAgICAgICBbICAgW1wiYnVsbGV0bGlzdFwiLCAwLjZdLCAgW1widGV4dFwiLCAwLjZdLF0sXG4gICAgICAgICAgICBbICAgW1widGV4dFwiLCAwLjZdLCBbXCJ0ZXh0XCIsIDAuMV0sIF0sXG4gICAgICAgICAgICBbICAgW1widGV4dC1saW5lXCIsIDAuNl0sIF0sXG4gICAgICAgICAgICBbICAgW1wiaW1hZ2VcIiwgMC45XSwgXSxcbiAgICAgICAgICBdLFxuICAgIH0sXG4gICAgeyAvL3NpZGVcbiAgICBwcmVmZmVkRWxlbWVudHNTaWRlOltcbiAgICAgICAgICAgIFsgICBbXCJpbWFnZVwiLCAwLjZdLCBbXCJ0ZXh0XCIsIDAuNl0gLF0sXG4gICAgICAgICAgICBbICAgW1wiaW1hZ2VcIiwgMC42XSxbXCJpbWFnZVwiLCAwLjZdLCAgXSxcbiAgICAgICAgICAgIFsgICBbXCJjYXJkXCIsIDAuNl0sW1wiY2FyZFwiLCAwLjZdLCAgXSxcbiAgICAgICAgICBdLFxuICAgIH0sXG4pO1xuY29tcG9uZW50cy5wdXNoKHRleHRDb21wb25lbnQpO1xuIiwidXNwQ29tcG9uZW50ID0gbmV3IGNvbXBvbmVudChcbiAgICBcInVzcFwiLCAgICAgICAgICAgICAgICAgLy9zeW1ib2xcbiAgICB7ICAgICAgICAgICAgICAgICAgICAgICAvLyB6aW5kZXhcbiAgICAgICAgemluZGV4U3RhcnRWU2VuZDogMC4wNSxcbiAgICB9LHsgICAgICAgICAgICAgICAgICAgICAgIC8vIGdvYWxzXG4gICAgICAgIGJ1c2luZXNzOiAwLjEsXG4gICAgICAgIGNyZWF0aXZlOiAwLjAsXG4gICAgICAgIGVjb21tZXJjZTogMC45LFxuICAgICAgICBpbmZvcm1hdGl2ZTogMC40LFxuICAgICAgICBpbnNwaXJlOiAwLjAsXG4gICAgICAgIHNlcnZpY2U6IDAuMCxcbiAgICB9LHsgICAgICAgICAgICAgICAgICAgICAgIC8vIHByb2plY3RcbiAgICAgICAgcHJvamVjdFNpemU6IDAuOCxcbiAgICAgICAgc2VvSW1wb3J0YW5jZTogMC44NSxcbiAgICB9LHsgICAgICAgICAgICAgICAgICAgICAgIC8vIHVzZXJzXG4gICAgICAgIHVzZXJBZ2U6IDAuMzAsXG4gICAgICAgIHVzZXJzVGVjaFNhdnk6IDAuMixcbiAgICAgICAgYnJhbmRBd2VyZW5lc3M6IDAuMSxcbiAgICB9LHsgICAgICAgICAgICAgICAgICAgICAgIC8vIGdvYWxzIHBhZ2VcbiAgICAgICAgYnJvd3NlOiAwLjEsXG4gICAgICAgIHNob3dPcHRpb25zOiAwLjIsXG4gICAgICAgIHJlYWQ6IDAuMixcbiAgICAgICAgY29udmVyc2U6IDAuNSxcbiAgICB9LHtcbiAgICAgICAgYnJvd3NlOltbXCJzZWFyY2hcIiwwLjJdLCBbXCJtZW51XCIsMC42XSwgIFtcImhlYWRlclwiLDAuMl0sIFtcImFydGljbGVzXCIsMC4xXV0sXG4gICAgICAgc2hvd09wdGlvbnM6W1tcInNlYXJjaFwiLDAuMl0sIFtcIm1lbnVcIiwwLjZdLCBbXCJhcnRpY2xlc1wiLDAuMV0sIFsnYnV0dG9ucycsIDAuMl1dLFxuICAgICAgIHJlYWQ6W1tcIm1lbnVcIiwwLjZdLCBbXCJoZWFkZXJcIiwwLjJdLCAgW1widGV4dFwiLDAuMl0sIFtcImFydGljbGVzXCIsMC4xXV0sXG4gICAgICAgIGNvbnZlcnNlOltbXCJtZW51XCIsMC42XSwgW1wiaGVhZGVyXCIsMC4yXSwgIFtcInRleHRcIiwwLjJdLCBbXCJhcnRpY2xlc1wiLDAuMV1dLFxuXG5cdCAgfSx7ICAgICAgICAgICAgICAgICAgICAgICAvLyB1c2Vyc1xuICAgICAgICBtaW5yb3dzOiAxLFxuICAgICAgICBtYXhyb3dzOiAxLFxuICAgIH0seyAvL3NpbmdsZVxuICAgIHByZWZmZWRFbGVtZW50czpbXG4gICAgICAgICAgICBbICBbXCJpY29uVGV4dGxpbmVcIiwgMC42XSxbXCJjdGFcIiwgMC4xXV0sXG4gICAgICAgICAgXSxcbiAgICB9LFxuICAgIHsgLy9zaWRlXG4gICAgcHJlZmZlZEVsZW1lbnRzU2lkZTpbXG4gICAgICAgICAgICBbICAgW1wiaWNvblRleHRsaW5lXCIsIDAuNl0sICxbXCJpY29uVGV4dGxpbmVcIiwgMC42XSwgW1wiY3RhXCIsIDAuMV0sXSxcbiAgICAgICAgICBdLFxuICAgIH0sXG4pO1xuY29tcG9uZW50cy5wdXNoKHVzcENvbXBvbmVudCk7XG4iLCIiLCJ2YXIgaGFzaFRlbXBfID0gXCJcIjtcblxuZnVuY3Rpb24gaGFzaEFkZENvbXBvbmVudChjb21wb25lbnROYW1lXywgY29tcG9uZW50WV8pIHtcbiAgaGFzaFRlbXBfICs9IFwiPVwiO1xuICBoYXNoVGVtcF8gKz0gY29tcG9uZW50TmFtZV87XG4gIGhhc2hUZW1wXyArPSBcIjpcIitjb21wb25lbnRZXztcbn1cblxuZnVuY3Rpb24gaGFzaEFkZFJvdyhyb3dZXywgcm93TWFyZ2luXywgcm93SGVpZ2h0KSB7XG4gIGhhc2hUZW1wXyArPSBcIiVcIjtcbiAgLy8gaGFzaFRlbXBfICs9IHJvd051bV87XG4gIGhhc2hUZW1wXyArPSBcIjpcIityb3dZXztcbiAgaGFzaFRlbXBfICs9IFwiOlwiK3Jvd01hcmdpbl87XG4gIGhhc2hUZW1wXyArPSBcIjpcIityb3dIZWlnaHQ7XG59XG5cbmZ1bmN0aW9uIGhhc2hBZGRFbGVtZW50KGVOYW1lXywgeHBvc18sIHdpZHRoXywgaGVpZ2h0Xykge1xuXG4gIGhhc2hUZW1wXyArPSBcIiZcIjtcbiAgaGFzaFRlbXBfICs9IGVOYW1lXztcblxuICBoYXNoVGVtcF8gKz0gXCI6XCIreHBvc187XG4gIGhhc2hUZW1wXyArPSBcIjpcIit3aWR0aF87XG4gIGhhc2hUZW1wXyArPSBcIjpcIitoZWlnaHRfO1xufVxuXG5cbmZ1bmN0aW9uIGhhc2hMb2coKSB7XG4gIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gaGFzaFRlbXBfO1xufVxuIiwiLyogbWFwIGlucHV0cyAqL1xuZnVuY3Rpb24gbWFwX3JhbmdlKHZhbHVlLCBsb3cxLCBoaWdoMSwgbG93MiwgaGlnaDIpIHtcblx0cmV0dXJuIGxvdzIgKyAoaGlnaDIgLSBsb3cyKSAqICh2YWx1ZSAtIGxvdzEpIC8gKGhpZ2gxIC0gbG93MSk7XG59XG4iLCJcbmZ1bmN0aW9uIGdldE1haW5QYWdlZ29hbCgpIHtcbiAgICB2YXIgaGlnaGVzdCA9IDA7XG4gICAgdmFyIGhpZ2hlc3RTdHJpbmcgPSBcIm5vbmVcIjtcblxuICAgIGlmKHByb2plY3RWYXJpYWJsZXMuYnJvd3NlID4gaGlnaGVzdCl7IGhpZ2hlc3QgPSBwcm9qZWN0VmFyaWFibGVzLmJyb3dzZTsgaGlnaGVzdFN0cmluZyA9IFwiYnJvd3NlXCJ9XG4gICAgaWYocHJvamVjdFZhcmlhYmxlcy5zaG93T3B0aW9ucyA+IGhpZ2hlc3Qpe2hpZ2hlc3QgPSBwcm9qZWN0VmFyaWFibGVzLnNob3dPcHRpb25zOyBoaWdoZXN0U3RyaW5nID0gXCJzaG93T3B0aW9uc1wifVxuICAgIGlmKHByb2plY3RWYXJpYWJsZXMucmVhZCA+IGhpZ2hlc3Qpe2hpZ2hlc3QgPSBwcm9qZWN0VmFyaWFibGVzLnJlYWQ7IGhpZ2hlc3RTdHJpbmcgPSBcInJlYWRcIn1cbiAgICBpZihwcm9qZWN0VmFyaWFibGVzLmNvbnZlcnNlID4gaGlnaGVzdCl7aGlnaGVzdCA9cHJvamVjdFZhcmlhYmxlcy5jb252ZXJzZTsgaGlnaGVzdFN0cmluZyA9IFwiY29udmVyc2VcIn1cblxuICAgIC8qXG4gICAgICAgIFNvbXRpbWVzIG5vdGhpbmcgZ2V0cyBmb3VuZC4uIChJIGRvbnQga25vdyB3aHkuIFNlZW1zIHJhbmRvbS4gRG9udCBjYXJlIGF0bS4pXG4gICAgKi9cbiAgICBpZiAoaGlnaGVzdFN0cmluZyA9PSBcIm5vbmVcIiloaWdoZXN0U3RyaW5nID0gXCJicm93c2VcIjsgLy8gc29ycnlcblxuXG4gICAgcmV0dXJuIGhpZ2hlc3RTdHJpbmc7XG59XG4iLCJcblxuXG5cbiAgICBmdW5jdGlvbiBnZXRSbmRJbnRlZ2VyKG1pbiwgbWF4KSB7XG4gICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpICkgKyBtaW47XG4gICAgfVxuIiwidmFyIHNxdWFyZU1vYmlsZSA9IDIwO1xudmFyIG1hcmdpbk1vYmlsZSA9IDU7XG52YXIgc3F1YXJlRGVza3RvcCA9IDgwO1xudmFyIG1hcmdpbkRlc2t0b3AgPSAyMDtcblxudmFyIG1vYmlsZVN0YXJ0ID0gMTIuNTtcbnZhciBkZXN0a29wU3RhcnQgPSA1MDtcblxuLy9nZW5lcmF0ZSBjb2x1bW5zO1xudmFyIGNvbHNYRGVza3RvcCA9IFtdO1xudmFyIGNvbHNYYmFzZSA9IGRlc3Rrb3BTdGFydDtcbmNvbHNYRGVza3RvcC5wdXNoKGRlc3Rrb3BTdGFydCk7XG5mb3IgKHZhciBpID0gMDsgaSA8IDEyOyBpKyspIHtcbiAgICBjb2xzWGJhc2UgKz0gc3F1YXJlRGVza3RvcFxuICAgIGNvbHNYRGVza3RvcC5wdXNoKGNvbHNYYmFzZSk7XG4gICAgaWYoaSA8IDExKXtcbiAgICAgICAgY29sc1hiYXNlICs9IG1hcmdpbkRlc2t0b3BcbiAgICAgICAgY29sc1hEZXNrdG9wLnB1c2goY29sc1hiYXNlKTtcbiAgICB9XG59XG5cblxuZnVuY3Rpb24gZmlyc3ROb25Db25zZWN1dGl2ZShhcnIpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoYXJyW2kgKyAxXSAtIGFycltpXSAhPT0gMSkge1xuICAgICAgcmV0dXJuIGk7XG4gICAgfVxuICB9XG4gIHJldHVybiBudWxsO1xufVxuXG5cbmNvbHNYRGVza3RvcC5wdXNoKDEyODApO1xuY29uc29sZS5sb2coXCJjb2xzWERlc2t0b3BcIik7XG5jb25zb2xlLmxvZyhjb2xzWERlc2t0b3ApO1xuXG4vL2dlbmVyYXRlIGNvbHVtbnMgbW9iaWxlXG52YXIgY29sc1hNb2JpbGUgPSBbXTtcbmNvbHNYYmFzZSA9IG1vYmlsZVN0YXJ0O1xuY29sc1hNb2JpbGUucHVzaChtb2JpbGVTdGFydCk7XG5mb3IgKHZhciBpID0gMDsgaSA8IDEyOyBpKyspIHtcbiAgICBjb2xzWGJhc2UgKz0gc3F1YXJlTW9iaWxlXG4gICAgY29sc1hNb2JpbGUucHVzaChjb2xzWGJhc2UpO1xuICAgIGlmKGkgPCAxMSl7XG4gICAgICAgIGNvbHNYYmFzZSArPSBtYXJnaW5Nb2JpbGVcbiAgICAgICAgY29sc1hNb2JpbGUucHVzaChjb2xzWGJhc2UpO1xuICAgIH1cbn1cbmNvbHNYTW9iaWxlLnB1c2goMzIwKTtcbmNvbnNvbGUubG9nKFwiY29sc1hNb2JpbGVcIik7XG5jb25zb2xlLmxvZyhjb2xzWE1vYmlsZSk7XG4iLCJjb250ZW50QnVsbGV0cyA9IG5ldyBlbGVtZW50KFxuICAgIFwiYnVsbGV0bGlzdFwiLFxuICAgIHsgICAgICAgICAgICAgICAgICAgICAgIC8vIHppbmRleFxuICAgICAgICB6aW5kZXhTdGFydFZTZW5kOiAwLjAsXG4gICAgfSx7ICAgICAgICAgICAgICAgICAgICAgICAvLyBnb2Fsc1xuICAgICAgICBidXNpbmVzczogMC41LFxuICAgICAgICBjcmVhdGl2ZTogMC4xLFxuICAgICAgICBlY29tbWVyY2U6IDAuNyxcbiAgICAgICAgaW5mb3JtYXRpdmU6IDAuNSxcbiAgICAgICAgaW5zcGlyZTogMC4yLFxuICAgICAgICBzZXJ2aWNlOiAwLjMsXG4gICAgfSx7ICAgICAgICAgICAgICAgICAgICAgICAvLyBwcm9qZWN0XG4gICAgICAgIHByb2plY3RTaXplOiAwLjYsXG4gICAgICAgIHNlb0ltcG9ydGFuY2U6IDAuOSxcbiAgICB9LHsgICAgICAgICAgICAgICAgICAgICAgIC8vIHVzZXJzXG4gICAgICAgIHVzZXJBZ2U6IDAuNSxcbiAgICAgICAgdXNlcnNUZWNoU2F2eTogMC4yLFxuICAgICAgICBicmFuZEF3ZXJlbmVzczogMC4xLFxuICAgIH0seyAgICAgICAgICAgICAgICAgICAgICAgLy8gZ29hbHMgcGFnZVxuICAgICAgICBicm93c2U6IDAuMSxcbiAgICAgICAgc2hvd09wdGlvbnM6IDAuMSxcbiAgICAgICAgcmVhZDogMC44LFxuICAgICAgICBjb252ZXJzZTogMC44LFxuICAgIH0se1x0Ly9wcm9wYSdzXG5cdCAgICBicm93c2U6W10sXG5cdCAgICBzaG93T3B0aW9uczpbXSxcblx0ICAgIHJlYWQ6W10sXG5cdCAgICBjb252ZXJzZTpbXSxcblx0fSxcbiAgICBcIjRcIi8vIHNpemVzIFMgPSAxICAgfCAgIE0gPSAyICAgfCAgIEwgPSAzXG4pO1xuZWxlbWVudHMucHVzaChjb250ZW50QnVsbGV0cyk7XG4iLCJjb250ZW50Q2FyZCA9IG5ldyBlbGVtZW50KFxuICAgIFwiY2FyZFwiLFxuICAgIHsgICAgICAgICAgICAgICAgICAgICAgIC8vIHppbmRleFxuICAgICAgICB6aW5kZXhTdGFydFZTZW5kOiAwLjAsXG4gICAgfSx7ICAgICAgICAgICAgICAgICAgICAgICAvLyBnb2Fsc1xuICAgICAgICBidXNpbmVzczogMC41LFxuICAgICAgICBjcmVhdGl2ZTogMC4zLFxuICAgICAgICBlY29tbWVyY2U6IDAuOSxcbiAgICAgICAgaW5mb3JtYXRpdmU6IDAuNSxcbiAgICAgICAgaW5zcGlyZTogMC41LFxuICAgICAgICBzZXJ2aWNlOiAwLjQsXG4gICAgfSx7ICAgICAgICAgICAgICAgICAgICAgICAvLyBwcm9qZWN0XG4gICAgICAgIHByb2plY3RTaXplOiAwLjUsXG4gICAgICAgIHNlb0ltcG9ydGFuY2U6IDAuNSxcbiAgICB9LHsgICAgICAgICAgICAgICAgICAgICAgIC8vIHVzZXJzXG4gICAgICAgIHVzZXJBZ2U6IDAuNSxcbiAgICAgICAgdXNlcnNUZWNoU2F2eTogMC4yLFxuICAgICAgICBicmFuZEF3ZXJlbmVzczogMC4xLFxuICAgIH0seyAgICAgICAgICAgICAgICAgICAgICAgLy8gZ29hbHMgcGFnZVxuICAgICAgICBicm93c2U6IDAuNCxcbiAgICAgICAgc2hvd09wdGlvbnM6IDAuOSxcbiAgICAgICAgcmVhZDogMC4xLFxuICAgICAgICBjb252ZXJzZTogMC4zLFxuICAgIH0se1x0Ly9wcm9wYSdzXG5cdCAgICBicm93c2U6W10sXG5cdCAgICBzaG93T3B0aW9uczpbXSxcblx0ICAgIHJlYWQ6W10sXG5cdCAgICBjb252ZXJzZTpbXSxcblx0fSxcbiAgICBcIjRcIi8vIHNpemVzIFMgPSAxICAgfCAgIE0gPSAyICAgfCAgIEwgPSAzXG4pO1xuZWxlbWVudHMucHVzaChjb250ZW50Q2FyZCk7XG4iLCJjdGFFbGVtZW50ID0gbmV3IGVsZW1lbnQoXG4gICAgXCJjdGFcIixcbiAgICB7ICAgICAgICAgICAgICAgICAgICAgICAvLyB6aW5kZXhcbiAgICAgICAgemluZGV4U3RhcnRWU2VuZDogMC44LFxuICAgIH0seyAgICAgICAgICAgICAgICAgICAgICAgLy8gZ29hbHNcbiAgICAgICAgYnVzaW5lc3M6IDAuNSxcbiAgICAgICAgY3JlYXRpdmU6IDUsXG4gICAgICAgIGVjb21tZXJjZTogMC41LFxuICAgICAgICBpbmZvcm1hdGl2ZTogMC41LFxuICAgICAgICBpbnNwaXJlOiAwLjUsXG4gICAgICAgIHNlcnZpY2U6IDAuNSxcbiAgICB9LHsgICAgICAgICAgICAgICAgICAgICAgIC8vIHByb2plY3RcbiAgICAgICAgcHJvamVjdFNpemU6IDAuNSxcbiAgICAgICAgc2VvSW1wb3J0YW5jZTogMC41LFxuICAgIH0seyAgICAgICAgICAgICAgICAgICAgICAgLy8gdXNlcnNcbiAgICAgICAgdXNlckFnZTogMC41LFxuICAgICAgICB1c2Vyc1RlY2hTYXZ5OiAwLjUsXG4gICAgICAgIGJyYW5kQXdlcmVuZXNzOiAwLjUsXG4gICAgfSx7ICAgICAgICAgICAgICAgICAgICAgICAvLyBnb2FscyBwYWdlXG4gICAgICAgIGJyb3dzZTogMC41LFxuICAgICAgICBzaG93T3B0aW9uczogMC41LFxuICAgICAgICByZWFkOiAwLjUsXG4gICAgICAgIGNvbnZlcnNlOiAwLjUsXG4gICAgfSx7XHQvL3Byb3BhJ3Ncblx0ICAgIGJyb3dzZTpbXSxcblx0ICAgIHNob3dPcHRpb25zOltdLFxuXHQgICAgcmVhZDpbXSxcblx0ICAgIGNvbnZlcnNlOltdLFxuXHR9LFxuICAgIFwiMlwiLy8gc2l6ZXMgUyA9IDEgICB8ICAgTSA9IDIgICB8ICAgTCA9IDNcbik7XG5lbGVtZW50cy5wdXNoKGN0YUVsZW1lbnQpO1xuIiwiZmlsdGVycyA9IG5ldyBlbGVtZW50KFxuICAgIFwiZmlsdGVyXCIsXG4gICAgeyAgICAgICAgICAgICAgICAgICAgICAgLy8gemluZGV4XG4gICAgICAgIHppbmRleFN0YXJ0VlNlbmQ6IDAuMCxcbiAgICB9LHsgICAgICAgICAgICAgICAgICAgICAgIC8vIGdvYWxzXG4gICAgICAgIGJ1c2luZXNzOiAwLjQsXG4gICAgICAgIGNyZWF0aXZlOiAwLjEsXG4gICAgICAgIGVjb21tZXJjZTogMC44LFxuICAgICAgICBpbmZvcm1hdGl2ZTogMC4xLFxuICAgICAgICBpbnNwaXJlOiAwLjIsXG4gICAgICAgIHNlcnZpY2U6IDAuMSxcbiAgICB9LHsgICAgICAgICAgICAgICAgICAgICAgIC8vIHByb2plY3RcbiAgICAgICAgcHJvamVjdFNpemU6IDAuOSxcbiAgICAgICAgc2VvSW1wb3J0YW5jZTogMC4zLFxuICAgIH0seyAgICAgICAgICAgICAgICAgICAgICAgLy8gdXNlcnNcbiAgICAgICAgdXNlckFnZTogMC4zLFxuICAgICAgICB1c2Vyc1RlY2hTYXZ5OiAwLjIsXG4gICAgICAgIGJyYW5kQXdlcmVuZXNzOiAwLjEsXG4gICAgfSx7ICAgICAgICAgICAgICAgICAgICAgICAvLyBnb2FscyBwYWdlXG4gICAgICAgIGJyb3dzZTogMC4yLFxuICAgICAgICBzaG93T3B0aW9uczogMC45LFxuICAgICAgICByZWFkOiAwLjEsXG4gICAgICAgIGNvbnZlcnNlOiAwLjEsXG4gICAgfSx7XHQvL3Byb3BhJ3Ncblx0ICAgIGJyb3dzZTpbXSxcblx0ICAgIHNob3dPcHRpb25zOltdLFxuXHQgICAgcmVhZDpbXSxcblx0ICAgIGNvbnZlcnNlOltdLFxuXHR9LFxuICAgIFwiMlwiLy8gc2l6ZXMgUyA9IDEgICB8ICAgTSA9IDIgICB8ICAgTCA9IDNcbik7XG5lbGVtZW50cy5wdXNoKGZpbHRlcnMpO1xuIiwiY29udGVudEgxID0gbmV3IGVsZW1lbnQoXG4gICAgXCJoMVwiLFxuICAgIHsgICAgICAgICAgICAgICAgICAgICAgIC8vIHppbmRleFxuICAgICAgICB6aW5kZXhTdGFydFZTZW5kOiAwLjAsXG4gICAgfSx7ICAgICAgICAgICAgICAgICAgICAgICAvLyBnb2Fsc1xuICAgICAgICBidXNpbmVzczogMC41LFxuICAgICAgICBjcmVhdGl2ZTogMC41LFxuICAgICAgICBlY29tbWVyY2U6IDAuNSxcbiAgICAgICAgaW5mb3JtYXRpdmU6IDAuNSxcbiAgICAgICAgaW5zcGlyZTogMC41LFxuICAgICAgICBzZXJ2aWNlOiAwLjUsXG4gICAgfSx7ICAgICAgICAgICAgICAgICAgICAgICAvLyBwcm9qZWN0XG4gICAgICAgIHByb2plY3RTaXplOiAwLjYsXG4gICAgICAgIHNlb0ltcG9ydGFuY2U6IDAuOSxcbiAgICB9LHsgICAgICAgICAgICAgICAgICAgICAgIC8vIHVzZXJzXG4gICAgICAgIHVzZXJBZ2U6IDAuNSxcbiAgICAgICAgdXNlcnNUZWNoU2F2eTogMC4yLFxuICAgICAgICBicmFuZEF3ZXJlbmVzczogMC4xLFxuICAgIH0seyAgICAgICAgICAgICAgICAgICAgICAgLy8gZ29hbHMgcGFnZVxuICAgICAgICBicm93c2U6IDAuMyxcbiAgICAgICAgc2hvd09wdGlvbnM6IDAuMyxcbiAgICAgICAgcmVhZDogMC44LFxuICAgICAgICBjb252ZXJzZTogMC41LFxuICAgIH0se1x0Ly9wcm9wYSdzXG5cdCAgICBicm93c2U6W10sXG5cdCAgICBzaG93T3B0aW9uczpbXSxcblx0ICAgIHJlYWQ6W10sXG5cdCAgICBjb252ZXJzZTpbXSxcblx0fSxcbiAgICBcIjNcIi8vIHNpemVzIFMgPSAxICAgfCAgIE0gPSAyICAgfCAgIEwgPSAzXG4pO1xuZWxlbWVudHMucHVzaChjb250ZW50SDEpO1xuIiwiY29udGVudEgyID0gbmV3IGVsZW1lbnQoXG4gICAgXCJoMlwiLFxuICAgIHsgICAgICAgICAgICAgICAgICAgICAgIC8vIHppbmRleFxuICAgICAgICB6aW5kZXhTdGFydFZTZW5kOiAwLjAsXG4gICAgfSx7ICAgICAgICAgICAgICAgICAgICAgICAvLyBnb2Fsc1xuICAgICAgICBidXNpbmVzczogMC41LFxuICAgICAgICBjcmVhdGl2ZTogMC41LFxuICAgICAgICBlY29tbWVyY2U6IDAuNSxcbiAgICAgICAgaW5mb3JtYXRpdmU6IDAuNSxcbiAgICAgICAgaW5zcGlyZTogMC41LFxuICAgICAgICBzZXJ2aWNlOiAwLjUsXG4gICAgfSx7ICAgICAgICAgICAgICAgICAgICAgICAvLyBwcm9qZWN0XG4gICAgICAgIHByb2plY3RTaXplOiAwLjYsXG4gICAgICAgIHNlb0ltcG9ydGFuY2U6IDAuOSxcbiAgICB9LHsgICAgICAgICAgICAgICAgICAgICAgIC8vIHVzZXJzXG4gICAgICAgIHVzZXJBZ2U6IDAuNSxcbiAgICAgICAgdXNlcnNUZWNoU2F2eTogMC4yLFxuICAgICAgICBicmFuZEF3ZXJlbmVzczogMC4xLFxuICAgIH0seyAgICAgICAgICAgICAgICAgICAgICAgLy8gZ29hbHMgcGFnZVxuICAgICAgICBicm93c2U6IDAuMyxcbiAgICAgICAgc2hvd09wdGlvbnM6IDAuMyxcbiAgICAgICAgcmVhZDogMC44LFxuICAgICAgICBjb252ZXJzZTogMC41LFxuICAgIH0se1x0Ly9wcm9wYSdzXG5cdCAgICBicm93c2U6W10sXG5cdCAgICBzaG93T3B0aW9uczpbXSxcblx0ICAgIHJlYWQ6W10sXG5cdCAgICBjb252ZXJzZTpbXSxcblx0fSxcbiAgICBcIjJcIi8vIHNpemVzIFMgPSAxICAgfCAgIE0gPSAyICAgfCAgIEwgPSAzXG4pO1xuZWxlbWVudHMucHVzaChjb250ZW50SDIpO1xuIiwiY29udGVudEgzID0gbmV3IGVsZW1lbnQoXG4gICAgXCJoM1wiLFxuICAgIHsgICAgICAgICAgICAgICAgICAgICAgIC8vIHppbmRleFxuICAgICAgICB6aW5kZXhTdGFydFZTZW5kOiAwLjAsXG4gICAgfSx7ICAgICAgICAgICAgICAgICAgICAgICAvLyBnb2Fsc1xuICAgICAgICBidXNpbmVzczogMC41LFxuICAgICAgICBjcmVhdGl2ZTogMC41LFxuICAgICAgICBlY29tbWVyY2U6IDAuNSxcbiAgICAgICAgaW5mb3JtYXRpdmU6IDAuNSxcbiAgICAgICAgaW5zcGlyZTogMC41LFxuICAgICAgICBzZXJ2aWNlOiAwLjUsXG4gICAgfSx7ICAgICAgICAgICAgICAgICAgICAgICAvLyBwcm9qZWN0XG4gICAgICAgIHByb2plY3RTaXplOiAwLjYsXG4gICAgICAgIHNlb0ltcG9ydGFuY2U6IDAuOSxcbiAgICB9LHsgICAgICAgICAgICAgICAgICAgICAgIC8vIHVzZXJzXG4gICAgICAgIHVzZXJBZ2U6IDAuNSxcbiAgICAgICAgdXNlcnNUZWNoU2F2eTogMC4yLFxuICAgICAgICBicmFuZEF3ZXJlbmVzczogMC4xLFxuICAgIH0seyAgICAgICAgICAgICAgICAgICAgICAgLy8gZ29hbHMgcGFnZVxuICAgICAgICBicm93c2U6IDAuMyxcbiAgICAgICAgc2hvd09wdGlvbnM6IDAuMyxcbiAgICAgICAgcmVhZDogMC44LFxuICAgICAgICBjb252ZXJzZTogMC41LFxuICAgIH0se1x0Ly9wcm9wYSdzXG5cdCAgICBicm93c2U6W10sXG5cdCAgICBzaG93T3B0aW9uczpbXSxcblx0ICAgIHJlYWQ6W10sXG5cdCAgICBjb252ZXJzZTpbXSxcblx0fSxcbiAgICBcIjJcIi8vIHNpemVzIFMgPSAxICAgfCAgIE0gPSAyICAgfCAgIEwgPSAzXG4pO1xuZWxlbWVudHMucHVzaChjb250ZW50SDMpO1xuIiwiY29udGVudFRleHRMaW5lSWNvbiA9IG5ldyBlbGVtZW50KFxuICAgIFwiaWNvblRleHRsaW5lXCIsXG4gICAgeyAgICAgICAgICAgICAgICAgICAgICAgLy8gemluZGV4XG4gICAgICAgIHppbmRleFN0YXJ0VlNlbmQ6IDAuMCxcbiAgICB9LHsgICAgICAgICAgICAgICAgICAgICAgIC8vIGdvYWxzXG4gICAgICAgIGJ1c2luZXNzOiAwLjUsXG4gICAgICAgIGNyZWF0aXZlOiAwLjUsXG4gICAgICAgIGVjb21tZXJjZTogMC41LFxuICAgICAgICBpbmZvcm1hdGl2ZTogMC41LFxuICAgICAgICBpbnNwaXJlOiAwLjUsXG4gICAgICAgIHNlcnZpY2U6IDAuNSxcbiAgICB9LHsgICAgICAgICAgICAgICAgICAgICAgIC8vIHByb2plY3RcbiAgICAgICAgcHJvamVjdFNpemU6IDAuNixcbiAgICAgICAgc2VvSW1wb3J0YW5jZTogMC45LFxuICAgIH0seyAgICAgICAgICAgICAgICAgICAgICAgLy8gdXNlcnNcbiAgICAgICAgdXNlckFnZTogMC41LFxuICAgICAgICB1c2Vyc1RlY2hTYXZ5OiAwLjIsXG4gICAgICAgIGJyYW5kQXdlcmVuZXNzOiAwLjEsXG4gICAgfSx7ICAgICAgICAgICAgICAgICAgICAgICAvLyBnb2FscyBwYWdlXG4gICAgICAgIGJyb3dzZTogMC4zLFxuICAgICAgICBzaG93T3B0aW9uczogMC4zLFxuICAgICAgICByZWFkOiAwLjgsXG4gICAgICAgIGNvbnZlcnNlOiAwLjUsXG4gICAgfSx7XHQvL3Byb3BhJ3Ncblx0ICAgIGJyb3dzZTpbXSxcblx0ICAgIHNob3dPcHRpb25zOltdLFxuXHQgICAgcmVhZDpbXSxcblx0ICAgIGNvbnZlcnNlOltdLFxuXHR9LFxuICAgIFwiM1wiLy8gc2l6ZXMgUyA9IDEgICB8ICAgTSA9IDIgICB8ICAgTCA9IDNcbik7XG5lbGVtZW50cy5wdXNoKGNvbnRlbnRUZXh0TGluZUljb24pO1xuIiwiY29udGVudEltYWdlID0gbmV3IGVsZW1lbnQoXG4gICAgXCJpbWFnZVwiLFxuICAgIHsgICAgICAgICAgICAgICAgICAgICAgIC8vIHppbmRleFxuICAgICAgICB6aW5kZXhTdGFydFZTZW5kOiAwLjAsXG4gICAgfSx7ICAgICAgICAgICAgICAgICAgICAgICAvLyBnb2Fsc1xuICAgICAgICBidXNpbmVzczogMC4xLFxuICAgICAgICBjcmVhdGl2ZTogMC45LFxuICAgICAgICBlY29tbWVyY2U6IDAuOCxcbiAgICAgICAgaW5mb3JtYXRpdmU6IDAuNixcbiAgICAgICAgaW5zcGlyZTogMC44LFxuICAgICAgICBzZXJ2aWNlOiAwLjEsXG4gICAgfSx7ICAgICAgICAgICAgICAgICAgICAgICAvLyBwcm9qZWN0XG4gICAgICAgIHByb2plY3RTaXplOiAwLjUsXG4gICAgICAgIHNlb0ltcG9ydGFuY2U6IDAuMSxcbiAgICB9LHsgICAgICAgICAgICAgICAgICAgICAgIC8vIHVzZXJzXG4gICAgICAgIHVzZXJBZ2U6IDAuNSxcbiAgICAgICAgdXNlcnNUZWNoU2F2eTogMC4yLFxuICAgICAgICBicmFuZEF3ZXJlbmVzczogMC4xLFxuICAgIH0seyAgICAgICAgICAgICAgICAgICAgICAgLy8gZ29hbHMgcGFnZVxuICAgICAgICBicm93c2U6IDAuMyxcbiAgICAgICAgc2hvd09wdGlvbnM6IDAuNixcbiAgICAgICAgcmVhZDogMC41LFxuICAgICAgICBjb252ZXJzZTogMC41LFxuICAgIH0se1x0Ly9wcm9wYSdzXG5cdCAgICBicm93c2U6W10sXG5cdCAgICBzaG93T3B0aW9uczpbXSxcblx0ICAgIHJlYWQ6W10sXG5cdCAgICBjb252ZXJzZTpbXSxcblx0fSxcbiAgICBcIjVcIi8vIHNpemVzIFMgPSAxICAgfCAgIE0gPSAyICAgfCAgIEwgPSAzXG4pO1xuZWxlbWVudHMucHVzaChjb250ZW50SW1hZ2UpO1xuIiwiaW5wdXRUZXh0ID0gbmV3IGVsZW1lbnQoXG4gICAgXCJpbnB1dFRleHRcIixcbiAgICB7ICAgICAgICAgICAgICAgICAgICAgICAvLyB6aW5kZXhcbiAgICAgICAgemluZGV4U3RhcnRWU2VuZDogMC4wLFxuICAgIH0seyAgICAgICAgICAgICAgICAgICAgICAgLy8gZ29hbHNcbiAgICAgICAgYnVzaW5lc3M6IDAuNSxcbiAgICAgICAgY3JlYXRpdmU6IDAuNSxcbiAgICAgICAgZWNvbW1lcmNlOiAwLjUsXG4gICAgICAgIGluZm9ybWF0aXZlOiAwLjUsXG4gICAgICAgIGluc3BpcmU6IDAuNSxcbiAgICAgICAgc2VydmljZTogMC41LFxuICAgIH0seyAgICAgICAgICAgICAgICAgICAgICAgLy8gcHJvamVjdFxuICAgICAgICBwcm9qZWN0U2l6ZTogMC41LFxuICAgICAgICBzZW9JbXBvcnRhbmNlOiAwLjUsXG4gICAgfSx7ICAgICAgICAgICAgICAgICAgICAgICAvLyB1c2Vyc1xuICAgICAgICB1c2VyQWdlOiAwLjUsXG4gICAgICAgIHVzZXJzVGVjaFNhdnk6IDAuMixcbiAgICAgICAgYnJhbmRBd2VyZW5lc3M6IDAuMSxcbiAgICB9LHsgICAgICAgICAgICAgICAgICAgICAgIC8vIGdvYWxzIHBhZ2VcbiAgICAgICAgYnJvd3NlOiAwLjUsXG4gICAgICAgIHNob3dPcHRpb25zOiAwLjMsXG4gICAgICAgIHJlYWQ6IDAuMSxcbiAgICAgICAgY29udmVyc2U6IDAuNixcbiAgICB9LHtcdC8vcHJvcGEnc1xuXHQgICAgYnJvd3NlOltdLFxuXHQgICAgc2hvd09wdGlvbnM6W10sXG5cdCAgICByZWFkOltdLFxuXHQgICAgY29udmVyc2U6W10sXG5cdH0sXG4gICAgXCIzXCIvLyBzaXplcyBTID0gMSAgIHwgICBNID0gMiAgIHwgICBMID0gM1xuKTtcbmVsZW1lbnRzLnB1c2goaW5wdXRUZXh0KTtcbiIsImxvZ29FbGVtZW50ID0gbmV3IGVsZW1lbnQoXG4gICAgXCJsb2dvXCIsXG4gICAgeyAgICAgICAgICAgICAgICAgICAgICAgLy8gemluZGV4XG4gICAgICAgIHppbmRleFN0YXJ0VlNlbmQ6IDAuMCxcbiAgICB9LHsgICAgICAgICAgICAgICAgICAgICAgIC8vIGdvYWxzXG4gICAgICAgIGJ1c2luZXNzOiAwLjgsXG4gICAgICAgIGNyZWF0aXZlOiAyLFxuICAgICAgICBlY29tbWVyY2U6IDAuNSxcbiAgICAgICAgaW5mb3JtYXRpdmU6IDAuNSxcbiAgICAgICAgaW5zcGlyZTogMC41LFxuICAgICAgICBzZXJ2aWNlOiAwLjUsXG4gICAgfSx7ICAgICAgICAgICAgICAgICAgICAgICAvLyBwcm9qZWN0XG4gICAgICAgIHByb2plY3RTaXplOiAwLjUsXG4gICAgICAgIHNlb0ltcG9ydGFuY2U6IDAuNSxcbiAgICB9LHsgICAgICAgICAgICAgICAgICAgICAgIC8vIHVzZXJzXG4gICAgICAgIHVzZXJBZ2U6IDAuNSxcbiAgICAgICAgdXNlcnNUZWNoU2F2eTogMC4yLFxuICAgICAgICBicmFuZEF3ZXJlbmVzczogMC4xLFxuICAgIH0seyAgICAgICAgICAgICAgICAgICAgICAgLy8gZ29hbHMgcGFnZVxuICAgICAgICBicm93c2U6IDAuNSxcbiAgICAgICAgc2hvd09wdGlvbnM6IDAuNSxcbiAgICAgICAgcmVhZDogMC4xLFxuICAgICAgICBjb252ZXJzZTogMC41LFxuICAgIH0se1x0Ly9wcm9wYSdzXG5cdCAgICBicm93c2U6W10sXG5cdCAgICBzaG93T3B0aW9uczpbXSxcblx0ICAgIHJlYWQ6W10sXG5cdCAgICBjb252ZXJzZTpbXSxcblx0fSxcbiAgICBcIjNcIi8vIHNpemVzIFMgPSAxICAgfCAgIE0gPSAyICAgfCAgIEwgPSAzXG4pO1xuZWxlbWVudHMucHVzaChsb2dvRWxlbWVudCk7XG4iLCJtZW51SXRlbXNFbGVtZW50ID0gbmV3IGVsZW1lbnQoXG4gICAgXCJtZW51SXRlbVwiLFxuICAgIHsgICAgICAgICAgICAgICAgICAgICAgIC8vIHppbmRleFxuICAgICAgICB6aW5kZXhTdGFydFZTZW5kOiAwLjIsXG4gICAgfSx7ICAgICAgICAgICAgICAgICAgICAgICAvLyBnb2Fsc1xuICAgICAgICBidXNpbmVzczogMC41LFxuICAgICAgICBjcmVhdGl2ZTogMC41LFxuICAgICAgICBlY29tbWVyY2U6IDAuNSxcbiAgICAgICAgaW5mb3JtYXRpdmU6IDAuNSxcbiAgICAgICAgaW5zcGlyZTogMC41LFxuICAgICAgICBzZXJ2aWNlOiAwLjUsXG4gICAgfSx7ICAgICAgICAgICAgICAgICAgICAgICAvLyBwcm9qZWN0XG4gICAgICAgIHByb2plY3RTaXplOiAwLjcsXG4gICAgICAgIHNlb0ltcG9ydGFuY2U6IDAuOSxcbiAgICB9LHsgICAgICAgICAgICAgICAgICAgICAgIC8vIHVzZXJzXG4gICAgICAgIHVzZXJBZ2U6IDAuNSxcbiAgICAgICAgdXNlcnNUZWNoU2F2eTogMC41LFxuICAgICAgICBicmFuZEF3ZXJlbmVzczogMC41LFxuICAgIH0seyAgICAgICAgICAgICAgICAgICAgICAgLy8gZ29hbHMgcGFnZVxuICAgICAgICBicm93c2U6IDAuNSxcbiAgICAgICAgc2hvd09wdGlvbnM6IDAuNSxcbiAgICAgICAgcmVhZDogMC4xLFxuICAgICAgICBjb252ZXJzZTogMC4xLFxuICAgIH0se1x0Ly9wcm9wYSdzXG5cdCAgICBicm93c2U6W10sXG5cdCAgICBzaG93T3B0aW9uczpbXSxcblx0ICAgIHJlYWQ6W10sXG5cdCAgICBjb252ZXJzZTpbXSxcblx0fSxcbiAgICBcIjNcIi8vIHNpemVzIFMgPSAxICAgfCAgIE0gPSAyICAgfCAgIEwgPSAzXG4pO1xuZWxlbWVudHMucHVzaChtZW51SXRlbXNFbGVtZW50KTtcbiIsInNoYXJlT3B0aW9ucyA9IG5ldyBlbGVtZW50KFxuICAgIFwic2hhcmVcIixcbiAgICB7ICAgICAgICAgICAgICAgICAgICAgICAvLyB6aW5kZXhcbiAgICAgICAgemluZGV4U3RhcnRWU2VuZDogMC4wLFxuICAgIH0seyAgICAgICAgICAgICAgICAgICAgICAgLy8gZ29hbHNcbiAgICAgICAgYnVzaW5lc3M6IDAuNixcbiAgICAgICAgY3JlYXRpdmU6IDAuMSxcbiAgICAgICAgZWNvbW1lcmNlOiAwLjcsXG4gICAgICAgIGluZm9ybWF0aXZlOiAwLjEsXG4gICAgICAgIGluc3BpcmU6IDAuNyxcbiAgICAgICAgc2VydmljZTogMC4xLFxuICAgIH0seyAgICAgICAgICAgICAgICAgICAgICAgLy8gcHJvamVjdFxuICAgICAgICBwcm9qZWN0U2l6ZTogMC42LFxuICAgICAgICBzZW9JbXBvcnRhbmNlOiAwLjMsXG4gICAgfSx7ICAgICAgICAgICAgICAgICAgICAgICAvLyB1c2Vyc1xuICAgICAgICB1c2VyQWdlOiAwLjIsXG4gICAgICAgIHVzZXJzVGVjaFNhdnk6IDAuNixcbiAgICAgICAgYnJhbmRBd2VyZW5lc3M6IDAuMSxcbiAgICB9LHsgICAgICAgICAgICAgICAgICAgICAgIC8vIGdvYWxzIHBhZ2VcbiAgICAgICAgYnJvd3NlOiAwLjUsXG4gICAgICAgIHNob3dPcHRpb25zOiAwLjUsXG4gICAgICAgIHJlYWQ6IDAuNixcbiAgICAgICAgY29udmVyc2U6IDAuMSxcbiAgICB9LHtcdC8vcHJvcGEnc1xuXHQgICAgYnJvd3NlOltdLFxuXHQgICAgc2hvd09wdGlvbnM6W10sXG5cdCAgICByZWFkOltdLFxuXHQgICAgY29udmVyc2U6W10sXG5cdH0sXG4gICAgXCIyXCIvLyBzaXplcyBTID0gMSAgIHwgICBNID0gMiAgIHwgICBMID0gM1xuKTtcbmVsZW1lbnRzLnB1c2goc2hhcmVPcHRpb25zKTtcbiIsImNvbnRlbnRUZXh0ID0gbmV3IGVsZW1lbnQoXG4gICAgXCJ0ZXh0XCIsXG4gICAgeyAgICAgICAgICAgICAgICAgICAgICAgLy8gemluZGV4XG4gICAgICAgIHppbmRleFN0YXJ0VlNlbmQ6IDAuMCxcbiAgICB9LHsgICAgICAgICAgICAgICAgICAgICAgIC8vIGdvYWxzXG4gICAgICAgIGJ1c2luZXNzOiAwLjUsXG4gICAgICAgIGNyZWF0aXZlOiAwLjUsXG4gICAgICAgIGVjb21tZXJjZTogMC41LFxuICAgICAgICBpbmZvcm1hdGl2ZTogMC41LFxuICAgICAgICBpbnNwaXJlOiAwLjUsXG4gICAgICAgIHNlcnZpY2U6IDAuNSxcbiAgICB9LHsgICAgICAgICAgICAgICAgICAgICAgIC8vIHByb2plY3RcbiAgICAgICAgcHJvamVjdFNpemU6IDAuNixcbiAgICAgICAgc2VvSW1wb3J0YW5jZTogMC45LFxuICAgIH0seyAgICAgICAgICAgICAgICAgICAgICAgLy8gdXNlcnNcbiAgICAgICAgdXNlckFnZTogMC41LFxuICAgICAgICB1c2Vyc1RlY2hTYXZ5OiAwLjIsXG4gICAgICAgIGJyYW5kQXdlcmVuZXNzOiAwLjEsXG4gICAgfSx7ICAgICAgICAgICAgICAgICAgICAgICAvLyBnb2FscyBwYWdlXG4gICAgICAgIGJyb3dzZTogMC4zLFxuICAgICAgICBzaG93T3B0aW9uczogMC4zLFxuICAgICAgICByZWFkOiAwLjgsXG4gICAgICAgIGNvbnZlcnNlOiAwLjUsXG4gICAgfSx7XHQvL3Byb3BhJ3Ncblx0ICAgIGJyb3dzZTpbXSxcblx0ICAgIHNob3dPcHRpb25zOltdLFxuXHQgICAgcmVhZDpbXSxcblx0ICAgIGNvbnZlcnNlOltdLFxuXHR9LFxuICAgIFwiNVwiLy8gc2l6ZXMgUyA9IDEgICB8ICAgTSA9IDIgICB8ICAgTCA9IDNcbik7XG5lbGVtZW50cy5wdXNoKGNvbnRlbnRUZXh0KTtcbiIsImNvbnRlbnRUZXh0TGluZSA9IG5ldyBlbGVtZW50KFxuICAgIFwidGV4dGxpbmVcIixcbiAgICB7ICAgICAgICAgICAgICAgICAgICAgICAvLyB6aW5kZXhcbiAgICAgICAgemluZGV4U3RhcnRWU2VuZDogMC4wLFxuICAgIH0seyAgICAgICAgICAgICAgICAgICAgICAgLy8gZ29hbHNcbiAgICAgICAgYnVzaW5lc3M6IDAuNSxcbiAgICAgICAgY3JlYXRpdmU6IDAuNSxcbiAgICAgICAgZWNvbW1lcmNlOiAwLjUsXG4gICAgICAgIGluZm9ybWF0aXZlOiAwLjUsXG4gICAgICAgIGluc3BpcmU6IDAuNSxcbiAgICAgICAgc2VydmljZTogMC41LFxuICAgIH0seyAgICAgICAgICAgICAgICAgICAgICAgLy8gcHJvamVjdFxuICAgICAgICBwcm9qZWN0U2l6ZTogMC42LFxuICAgICAgICBzZW9JbXBvcnRhbmNlOiAwLjksXG4gICAgfSx7ICAgICAgICAgICAgICAgICAgICAgICAvLyB1c2Vyc1xuICAgICAgICB1c2VyQWdlOiAwLjUsXG4gICAgICAgIHVzZXJzVGVjaFNhdnk6IDAuMixcbiAgICAgICAgYnJhbmRBd2VyZW5lc3M6IDAuMSxcbiAgICB9LHsgICAgICAgICAgICAgICAgICAgICAgIC8vIGdvYWxzIHBhZ2VcbiAgICAgICAgYnJvd3NlOiAwLjMsXG4gICAgICAgIHNob3dPcHRpb25zOiAwLjMsXG4gICAgICAgIHJlYWQ6IDAuOCxcbiAgICAgICAgY29udmVyc2U6IDAuNSxcbiAgICB9LHtcdC8vcHJvcGEnc1xuXHQgICAgYnJvd3NlOltdLFxuXHQgICAgc2hvd09wdGlvbnM6W10sXG5cdCAgICByZWFkOltdLFxuXHQgICAgY29udmVyc2U6W10sXG5cdH0sXG4gICAgXCIzXCIvLyBzaXplcyBTID0gMSAgIHwgICBNID0gMiAgIHwgICBMID0gM1xuKTtcbmVsZW1lbnRzLnB1c2goY29udGVudFRleHRMaW5lKTtcbiIsImZ1bmN0aW9uIGluaXRVSSgpe1xuICAgIGNvbnNvbGUubG9nKFwiSW5pdCBVSVwiKTtcbiAgICB1cGRhdGVCdXNpbmVzcygpO1xuICAgIHVwZGF0ZUNyZWF0aXZlKCk7XG4gICAgdXBkYXRlRWNvbW1lcmNlKCk7XG4gICAgdXBkYXRlSW5mb3JtYXRpdmUoKTtcbiAgICB1cGRhdGVJbnNwaXJlKCk7XG4gICAgdXBkYXRlU2VydmljZSgpO1xuXG4gICAgdXBkYXRlQnJvd3NlKCk7XG4gICAgdXBkYXRlU2hvd09wdGlvbnMoKTtcbiAgICB1cGRhdGVSZWFkKCk7XG4gICAgdXBkYXRlQ29udmVyc2UoKTtcblxuICAgIHVwZGF0ZXByb2plY3RTaXplKCk7XG4gICAgdXBkYXRlYnJhbmRBd2VyZW5lc3MoKTtcbiAgICB1cGRhdGVzZW9JbXBvcnRhbmNlKCk7XG4gICAgdXBkYXRldXNlckFnZSgpO1xuICAgIHVwZGF0ZXVzZXJzVGVjaFNhdnkoKTtcblxuICAgIGNoZWNrUHJvamVjdEdvYWxzU3RhdGUoKTtcbiAgICBjaGVja1BhZ2VHb2FsU3RhdGUoKTtcblxuICAgIGNvbnNvbGUubG9nKHByb2plY3RWYXJpYWJsZXMpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVQcm9qZWN0R29hbHMoKSB7XG4gICAgc3RhcnQoKTtcbn1cbiIsIiAgICB2YXIgcHJvamVjdFZhcmlhYmxlcyA9IHtcbiAgICAgICAgLy8gUHJvamVjdCBnb2FscyBkaXZpZGUgMTAwXG4gICAgICAgIGJ1c2luZXNzOiAwLjEsXG4gICAgICAgIGNyZWF0aXZlOiAwLjEsXG4gICAgICAgIGVjb21tZXJjZTogMC45LFxuICAgICAgICBpbmZvcm1hdGl2ZTogMC40LFxuICAgICAgICBpbnNwaXJlOiAwLjEsXG4gICAgICAgIHNlcnZpY2U6IDAuNCxcblxuICAgICAgICAvLyBwYWdlIGdvYWxzIGRpdmlkZSAxMDBcbiAgICAgICAgYnJvd3NlOiAwLjYsXG4gICAgICAgIHNob3dPcHRpb25zOiAwLjQsXG4gICAgICAgIHJlYWQ6IDAuMCxcbiAgICAgICAgY29udmVyc2U6IDAuMCxcblxuICAgICAgICAvL21zaWNcbiAgICAgICAgcHJvamVjdFNpemU6IDAuMixcbiAgICAgICAgYnJhbmRBd2VyZW5lc3M6IDAuMSxcbiAgICAgICAgc2VvSW1wb3J0YW5jZTogMC44LFxuICAgICAgICB1c2Vyc0FnZTogMC41LFxuICAgICAgICB1c2Vyc1RlY2hTYXZ5OiAwLjgsXG4gICAgfTtcblxuXG5cdGZ1bmN0aW9uIHVwZGF0ZUJ1c2luZXNzUmFuZ2Uodl8pIHt1cGRhdGVCdXNpbmVzcygpO2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqcy1CdXNpbmVzc1RleHQnKS52YWx1ZSA9IHZfO31cblx0ZnVuY3Rpb24gdXBkYXRlQnVzaW5lc3NUZXh0KHZfKSB7dXBkYXRlQnVzaW5lc3MoKTtkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnanMtQnVzaW5lc3NSYW5nZScpLnZhbHVlID0gdl87fVxuXHRmdW5jdGlvbiB1cGRhdGVCdXNpbmVzcygpIHtwcm9qZWN0VmFyaWFibGVzLmJ1c2luZXNzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzLUJ1c2luZXNzUmFuZ2UnKS52YWx1ZSAvIDEwMDtjaGVja1Byb2plY3RHb2Fsc1N0YXRlKCk7fVxuXG5cdGZ1bmN0aW9uIHVwZGF0ZUNyZWF0aXZlUmFuZ2Uodl8pIHt1cGRhdGVDcmVhdGl2ZSgpO2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqcy1DcmVhdGl2ZVRleHQnKS52YWx1ZSA9IHZfO31cblx0ZnVuY3Rpb24gdXBkYXRlQ3JlYXRpdmVUZXh0KHZfKSB7dXBkYXRlQ3JlYXRpdmUoKTtkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnanMtQ3JlYXRpdmVSYW5nZScpLnZhbHVlID0gdl87fVxuXHRmdW5jdGlvbiB1cGRhdGVDcmVhdGl2ZSgpIHtwcm9qZWN0VmFyaWFibGVzLmNyZWF0aXZlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzLUNyZWF0aXZlUmFuZ2UnKS52YWx1ZSAvIDEwMDtjaGVja1Byb2plY3RHb2Fsc1N0YXRlKCk7fVxuXG5cdGZ1bmN0aW9uIHVwZGF0ZUVjb21tZXJjZVJhbmdlKHZfKSB7dXBkYXRlRWNvbW1lcmNlKCk7ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzLUVjb21tZXJjZVRleHQnKS52YWx1ZSA9IHZfO31cblx0ZnVuY3Rpb24gdXBkYXRlRWNvbW1lcmNlVGV4dCh2Xykge3VwZGF0ZUVjb21tZXJjZSgpO2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqcy1FY29tbWVyY2VSYW5nZScpLnZhbHVlID0gdl87fVxuXHRmdW5jdGlvbiB1cGRhdGVFY29tbWVyY2UoKSB7cHJvamVjdFZhcmlhYmxlcy5lY29tbWVyY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnanMtRWNvbW1lcmNlUmFuZ2UnKS52YWx1ZSAvIDEwMDtjaGVja1Byb2plY3RHb2Fsc1N0YXRlKCk7fVxuXG5cdGZ1bmN0aW9uIHVwZGF0ZUluZm9ybWF0aXZlUmFuZ2Uodl8pIHt1cGRhdGVJbmZvcm1hdGl2ZSgpO2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqcy1JbmZvcm1hdGl2ZVRleHQnKS52YWx1ZSA9IHZfO31cblx0ZnVuY3Rpb24gdXBkYXRlSW5mb3JtYXRpdmVUZXh0KHZfKSB7dXBkYXRlSW5mb3JtYXRpdmUoKTtkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnanMtSW5mb3JtYXRpdmVSYW5nZScpLnZhbHVlID0gdl87fVxuXHRmdW5jdGlvbiB1cGRhdGVJbmZvcm1hdGl2ZSgpIHtwcm9qZWN0VmFyaWFibGVzLmluZm9ybWF0aXZlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzLUluZm9ybWF0aXZlUmFuZ2UnKS52YWx1ZSAvIDEwMDtjaGVja1Byb2plY3RHb2Fsc1N0YXRlKCk7fVxuXG5cdGZ1bmN0aW9uIHVwZGF0ZUluc3BpcmVSYW5nZSh2Xykge3VwZGF0ZUluc3BpcmUoKTtkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnanMtSW5zcGlyZVRleHQnKS52YWx1ZSA9IHZfO31cblx0ZnVuY3Rpb24gdXBkYXRlSW5zcGlyZVRleHQodl8pIHt1cGRhdGVJbnNwaXJlKCk7ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzLUluc3BpcmVSYW5nZScpLnZhbHVlID0gdl87fVxuXHRmdW5jdGlvbiB1cGRhdGVJbnNwaXJlKCkge3Byb2plY3RWYXJpYWJsZXMuaW5zcGlyZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqcy1JbnNwaXJlUmFuZ2UnKS52YWx1ZSAvIDEwMDtjaGVja1Byb2plY3RHb2Fsc1N0YXRlKCk7fVxuXG5cdGZ1bmN0aW9uIHVwZGF0ZVNlcnZpY2VSYW5nZSh2Xykgeztkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnanMtU2VydmljZVRleHQnKS52YWx1ZSA9IHZfO3VwZGF0ZVNlcnZpY2UoKX1cblx0ZnVuY3Rpb24gdXBkYXRlU2VydmljZVRleHQodl8pIHtkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnanMtU2VydmljZVJhbmdlJykudmFsdWUgPSB2Xzt1cGRhdGVTZXJ2aWNlKCl9XG5cdGZ1bmN0aW9uIHVwZGF0ZVNlcnZpY2UoKSB7cHJvamVjdFZhcmlhYmxlcy5zZXJ2aWNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzLVNlcnZpY2VSYW5nZScpLnZhbHVlIC8gMTAwO2NoZWNrUHJvamVjdEdvYWxzU3RhdGUoKTt9XG5cblx0ZnVuY3Rpb24gY2hlY2tQcm9qZWN0R29hbHNTdGF0ZSgpIHtcblx0XHR2YXIgYiA9IHBhcnNlSW50KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqcy1CdXNpbmVzc1RleHQnKS52YWx1ZSk7XG5cdFx0dmFyIGMgPSBwYXJzZUludChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnanMtQ3JlYXRpdmVUZXh0JykudmFsdWUpO1xuXHRcdHZhciBlID0gcGFyc2VJbnQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzLUVjb21tZXJjZVRleHQnKS52YWx1ZSk7XG5cdFx0dmFyIGkgPSBwYXJzZUludChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnanMtSW5mb3JtYXRpdmVUZXh0JykudmFsdWUpO1xuXHRcdHZhciBpMiA9IHBhcnNlSW50KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqcy1JbnNwaXJlVGV4dCcpLnZhbHVlKTtcblx0XHR2YXIgcyA9IHBhcnNlSW50KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqcy1TZXJ2aWNlVGV4dCcpLnZhbHVlKTtcblxuXHRcdHZhciB0b3RhbENvdW50ID0gYitjK2UraStpMitzO1xuXG5cdFx0dmFyIGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnanMtcHJvamVjdEdvYWxQb2ludHNMZWZ0Jyk7XG5cdFx0aWYodG90YWxDb3VudCA8PSAyMDApe1xuXHRcdFx0ZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiYmFkXCIpO1xuXHRcdFx0ZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZ29vZFwiKTtcblx0XHR9ZWxzZXtcblx0XHRcdGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImdvb2RcIik7XG5cdFx0XHRlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJiYWRcIik7XG5cdFx0fVxuXHRcdGVsZW1lbnQudmFsdWUgPSB0b3RhbENvdW50O1xuXHR9XG5cblxuXHRmdW5jdGlvbiB1cGRhdGVCcm93c2VSYW5nZSh2Xykgeztkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnanMtQnJvd3NlVGV4dCcpLnZhbHVlID0gdl87dXBkYXRlQnJvd3NlKCl9XG5cdGZ1bmN0aW9uIHVwZGF0ZUJyb3dzZVRleHQodl8pIHtkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnanMtQnJvd3NlUmFuZ2UnKS52YWx1ZSA9IHZfO3VwZGF0ZUJyb3dzZSgpfVxuXHRmdW5jdGlvbiB1cGRhdGVCcm93c2UoKSB7cHJvamVjdFZhcmlhYmxlcy5icm93c2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnanMtQnJvd3NlUmFuZ2UnKS52YWx1ZSAvIDEwMDtjaGVja1BhZ2VHb2FsU3RhdGUoKTt9XG5cblx0ZnVuY3Rpb24gdXBkYXRlU2hvd09wdGlvbnNSYW5nZSh2Xykgeztkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnanMtU2hvd09wdGlvbnNUZXh0JykudmFsdWUgPSB2Xzt1cGRhdGVTaG93T3B0aW9ucygpfVxuXHRmdW5jdGlvbiB1cGRhdGVTaG93T3B0aW9uc1RleHQodl8pIHtkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnanMtU2hvd09wdGlvbnNSYW5nZScpLnZhbHVlID0gdl87dXBkYXRlU2hvd09wdGlvbnMoKX1cblx0ZnVuY3Rpb24gdXBkYXRlU2hvd09wdGlvbnMoKSB7cHJvamVjdFZhcmlhYmxlcy5TaG93T3B0aW9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqcy1TaG93T3B0aW9uc1JhbmdlJykudmFsdWUgLyAxMDA7Y2hlY2tQYWdlR29hbFN0YXRlKCk7fVxuXG5cblx0ZnVuY3Rpb24gdXBkYXRlUmVhZFJhbmdlKHZfKSB7O2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqcy1SZWFkVGV4dCcpLnZhbHVlID0gdl87dXBkYXRlUmVhZCgpfVxuXHRmdW5jdGlvbiB1cGRhdGVSZWFkVGV4dCh2Xykge2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqcy1SZWFkUmFuZ2UnKS52YWx1ZSA9IHZfO3VwZGF0ZVJlYWQoKX1cblx0ZnVuY3Rpb24gdXBkYXRlUmVhZCgpIHtwcm9qZWN0VmFyaWFibGVzLnJlYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnanMtUmVhZFJhbmdlJykudmFsdWUgLyAxMDA7Y2hlY2tQYWdlR29hbFN0YXRlKCk7fVxuXG5cdGZ1bmN0aW9uIHVwZGF0ZUNvbnZlcnNlUmFuZ2Uodl8pIHs7ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzLUNvbnZlcnNlVGV4dCcpLnZhbHVlID0gdl87dXBkYXRlQ29udmVyc2UoKX1cblx0ZnVuY3Rpb24gdXBkYXRlQ29udmVyc2VUZXh0KHZfKSB7ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzLUNvbnZlcnNlUmFuZ2UnKS52YWx1ZSA9IHZfO3VwZGF0ZUNvbnZlcnNlKCl9XG5cdGZ1bmN0aW9uIHVwZGF0ZUNvbnZlcnNlKCkge3Byb2plY3RWYXJpYWJsZXMuY29udmVyc2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnanMtQ29udmVyc2VSYW5nZScpLnZhbHVlIC8gMTAwO2NoZWNrUGFnZUdvYWxTdGF0ZSgpO31cblxuXG5cblx0ZnVuY3Rpb24gY2hlY2tQYWdlR29hbFN0YXRlKCkge1xuXHRcdHZhciBicm93c2UgPSBwYXJzZUludChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnanMtQnJvd3NlVGV4dCcpLnZhbHVlKTtcblx0XHR2YXIgc2hvd09wdGlvbnMgPSBwYXJzZUludChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnanMtU2hvd09wdGlvbnNUZXh0JykudmFsdWUpO1xuXHRcdHZhciByZWFkID0gcGFyc2VJbnQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzLVJlYWRUZXh0JykudmFsdWUpO1xuXHRcdHZhciBjb252ZXJzZSA9IHBhcnNlSW50KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqcy1Db252ZXJzZVRleHQnKS52YWx1ZSk7XG5cblx0XHR2YXIgdG90YWxDb3VudCA9IGJyb3dzZSArIHNob3dPcHRpb25zICsgcmVhZCArIGNvbnZlcnNlO1xuXG5cdFx0dmFyIGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnanMtcGFnZUdvYWxQb2ludHNMZWZ0Jyk7XG5cdFx0aWYodG90YWxDb3VudCA8PSAxMDApe1xuXHRcdFx0Ly8gY29uc29sZS5sb2coXCJnb29kXCIpO1xuXHRcdH1lbHNle1xuXHRcdFx0Ly8gY29uc29sZS5sb2coXCJiYWRcIik7XG5cdFx0fVxuXHRcdGVsZW1lbnQudmFsdWUgPSB0b3RhbENvdW50O1xuXHR9XG5cblxuXHQvLyBtaXNjXG5cdGZ1bmN0aW9uIHVwZGF0ZXByb2plY3RTaXplUmFuZ2Uodl8pIHs7ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzLXByb2plY3RTaXplVGV4dCcpLnZhbHVlID0gdl87dXBkYXRlcHJvamVjdFNpemUoKX1cblx0ZnVuY3Rpb24gdXBkYXRlcHJvamVjdFNpemVUZXh0KHZfKSB7ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzLXByb2plY3RTaXplUmFuZ2UnKS52YWx1ZSA9IHZfO3VwZGF0ZXByb2plY3RTaXplKCl9XG5cdGZ1bmN0aW9uIHVwZGF0ZXByb2plY3RTaXplKCkge3Byb2plY3RWYXJpYWJsZXMucHJvamVjdFNpemUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnanMtcHJvamVjdFNpemVSYW5nZScpLnZhbHVlIC8gMTAwO2NoZWNrUGFnZUdvYWxTdGF0ZSgpO31cblxuXG5cdGZ1bmN0aW9uIHVwZGF0ZWJyYW5kQXdlcmVuZXNzUmFuZ2Uodl8pIHs7ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzLWJyYW5kQXdlcmVuZXNzVGV4dCcpLnZhbHVlID0gdl87dXBkYXRlYnJhbmRBd2VyZW5lc3MoKX1cblx0ZnVuY3Rpb24gdXBkYXRlYnJhbmRBd2VyZW5lc3NUZXh0KHZfKSB7ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzLWJyYW5kQXdlcmVuZXNzUmFuZ2UnKS52YWx1ZSA9IHZfO3VwZGF0ZWJyYW5kQXdlcmVuZXNzKCl9XG5cdGZ1bmN0aW9uIHVwZGF0ZWJyYW5kQXdlcmVuZXNzKCkge3Byb2plY3RWYXJpYWJsZXMuYnJhbmRBd2VyZW5lc3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnanMtYnJhbmRBd2VyZW5lc3NSYW5nZScpLnZhbHVlIC8gMTAwO2NoZWNrUGFnZUdvYWxTdGF0ZSgpO31cblxuXHRmdW5jdGlvbiB1cGRhdGVzZW9JbXBvcnRhbmNlUmFuZ2Uodl8pIHs7ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzLXNlb0ltcG9ydGFuY2VUZXh0JykudmFsdWUgPSB2Xzt1cGRhdGVzZW9JbXBvcnRhbmNlKCl9XG5cdGZ1bmN0aW9uIHVwZGF0ZXNlb0ltcG9ydGFuY2VUZXh0KHZfKSB7ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzLXNlb0ltcG9ydGFuY2VSYW5nZScpLnZhbHVlID0gdl87dXBkYXRlc2VvSW1wb3J0YW5jZSgpfVxuXHRmdW5jdGlvbiB1cGRhdGVzZW9JbXBvcnRhbmNlKCkge3Byb2plY3RWYXJpYWJsZXMuc2VvSW1wb3J0YW5jZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqcy1zZW9JbXBvcnRhbmNlUmFuZ2UnKS52YWx1ZSAvIDEwMDtjaGVja1BhZ2VHb2FsU3RhdGUoKTt9XG5cblxuXG5cdGZ1bmN0aW9uIHVwZGF0ZXVzZXJzVGVjaFNhdnlSYW5nZSh2Xykgeztkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnanMtdXNlcnNUZWNoU2F2eVRleHQnKS52YWx1ZSA9IHZfO3VwZGF0ZXVzZXJzVGVjaFNhdnkoKX1cblx0ZnVuY3Rpb24gdXBkYXRldXNlcnNUZWNoU2F2eVRleHQodl8pIHtkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnanMtdXNlcnNUZWNoU2F2eVJhbmdlJykudmFsdWUgPSB2Xzt1cGRhdGV1c2Vyc1RlY2hTYXZ5KCl9XG5cdGZ1bmN0aW9uIHVwZGF0ZXVzZXJzVGVjaFNhdnkoKSB7cHJvamVjdFZhcmlhYmxlcy51c2Vyc1RlY2hTYXZ5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzLXVzZXJzVGVjaFNhdnlSYW5nZScpLnZhbHVlIC8gMTAwO2NoZWNrUGFnZUdvYWxTdGF0ZSgpO31cblxuXHRmdW5jdGlvbiB1cGRhdGV1c2VyQWdlUmFuZ2Uodl8pIHs7ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzLXVzZXJBZ2VUZXh0JykudmFsdWUgPSB2Xzt1cGRhdGV1c2VyQWdlKCl9XG5cdGZ1bmN0aW9uIHVwZGF0ZXVzZXJBZ2VUZXh0KHZfKSB7ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzLXVzZXJBZ2VSYW5nZScpLnZhbHVlID0gdl87dXBkYXRldXNlckFnZSgpfVxuXHRmdW5jdGlvbiB1cGRhdGV1c2VyQWdlKCkge3Byb2plY3RWYXJpYWJsZXMudXNlckFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqcy11c2VyQWdlUmFuZ2UnKS52YWx1ZSAvIDEwMDtjaGVja1BhZ2VHb2FsU3RhdGUoKTt9XG4iLCIiLCJidWxsZXRJY29uID0gbmV3IGVsZW1lbnQoXG4gICAgXCJidWxsZXQtaWNvblwiLFxuICAgIHsgICAgICAgICAgICAgICAgICAgICAgIC8vIHppbmRleFxuICAgICAgICB6aW5kZXhTdGFydFZTZW5kOiAwLjksXG4gICAgfSx7ICAgICAgICAgICAgICAgICAgICAgICAvLyBnb2Fsc1xuICAgICAgICBidXNpbmVzczogMC41LFxuICAgICAgICBjcmVhdGl2ZTogNSxcbiAgICAgICAgZWNvbW1lcmNlOiAwLjUsXG4gICAgICAgIGluZm9ybWF0aXZlOiAwLjUsXG4gICAgICAgIGluc3BpcmU6IDAuNSxcbiAgICAgICAgc2VydmljZTogMC41LFxuICAgIH0seyAgICAgICAgICAgICAgICAgICAgICAgLy8gcHJvamVjdFxuICAgICAgICBwcm9qZWN0U2l6ZTogMC41LFxuICAgICAgICBzZW9JbXBvcnRhbmNlOiAwLjUsXG4gICAgfSx7ICAgICAgICAgICAgICAgICAgICAgICAvLyB1c2Vyc1xuICAgICAgICB1c2VyQWdlOiAwLjUsXG4gICAgICAgIHVzZXJzVGVjaFNhdnk6IDAuNSxcbiAgICAgICAgYnJhbmRBd2VyZW5lc3M6IDAuNSxcbiAgICB9LHsgICAgICAgICAgICAgICAgICAgICAgIC8vIGdvYWxzIHBhZ2VcbiAgICAgICAgYnJvd3NlOiAwLjUsXG4gICAgICAgIHNob3dPcHRpb25zOiAwLjUsXG4gICAgICAgIHJlYWQ6IDAuNSxcbiAgICAgICAgY29udmVyc2U6IDAuNSxcbiAgICB9LHtcdC8vcHJvcGEnc1xuXHQgICAgYnJvd3NlOltdLFxuXHQgICAgc2hvd09wdGlvbnM6W10sXG5cdCAgICByZWFkOltdLFxuXHQgICAgY29udmVyc2U6W10sXG5cdH0sXG4gICAgXCIxXCIvLyBzaXplcyBTID0gMSAgIHwgICBNID0gMiAgIHwgICBMID0gM1xuKTtcbmVsZW1lbnRzLnB1c2goYnVsbGV0SWNvbik7XG4iLCJjYXJ0SWNvbiA9IG5ldyBlbGVtZW50KFxuICAgIFwiY2FydC1pY29uXCIsXG4gICAgeyAgICAgICAgICAgICAgICAgICAgICAgLy8gemluZGV4XG4gICAgICAgIHppbmRleFN0YXJ0VlNlbmQ6IDAuOSxcbiAgICB9LHsgICAgICAgICAgICAgICAgICAgICAgIC8vIGdvYWxzXG4gICAgICAgIGJ1c2luZXNzOiAwLjUsXG4gICAgICAgIGNyZWF0aXZlOiA1LFxuICAgICAgICBlY29tbWVyY2U6IDAuNSxcbiAgICAgICAgaW5mb3JtYXRpdmU6IDAuNSxcbiAgICAgICAgaW5zcGlyZTogMC41LFxuICAgICAgICBzZXJ2aWNlOiAwLjUsXG4gICAgfSx7ICAgICAgICAgICAgICAgICAgICAgICAvLyBwcm9qZWN0XG4gICAgICAgIHByb2plY3RTaXplOiAwLjUsXG4gICAgICAgIHNlb0ltcG9ydGFuY2U6IDAuNSxcbiAgICB9LHsgICAgICAgICAgICAgICAgICAgICAgIC8vIHVzZXJzXG4gICAgICAgIHVzZXJBZ2U6IDAuNSxcbiAgICAgICAgdXNlcnNUZWNoU2F2eTogMC41LFxuICAgICAgICBicmFuZEF3ZXJlbmVzczogMC41LFxuICAgIH0seyAgICAgICAgICAgICAgICAgICAgICAgLy8gZ29hbHMgcGFnZVxuICAgICAgICBicm93c2U6IDAuNSxcbiAgICAgICAgc2hvd09wdGlvbnM6IDAuNSxcbiAgICAgICAgcmVhZDogMC41LFxuICAgICAgICBjb252ZXJzZTogMC41LFxuICAgIH0se1x0Ly9wcm9wYSdzXG5cdCAgICBicm93c2U6W10sXG5cdCAgICBzaG93T3B0aW9uczpbXSxcblx0ICAgIHJlYWQ6W10sXG5cdCAgICBjb252ZXJzZTpbXSxcblx0fSxcbiAgICBcIjFcIi8vIHNpemVzIFMgPSAxICAgfCAgIE0gPSAyICAgfCAgIEwgPSAzXG4pO1xuZWxlbWVudHMucHVzaChjYXJ0SWNvbik7XG4iLCJjaGVja0ljb24gPSBuZXcgZWxlbWVudChcbiAgICBcImNoZWNrLWljb25cIixcbiAgICB7ICAgICAgICAgICAgICAgICAgICAgICAvLyB6aW5kZXhcbiAgICAgICAgemluZGV4U3RhcnRWU2VuZDogMC45LFxuICAgIH0seyAgICAgICAgICAgICAgICAgICAgICAgLy8gZ29hbHNcbiAgICAgICAgYnVzaW5lc3M6IDAuNSxcbiAgICAgICAgY3JlYXRpdmU6IDUsXG4gICAgICAgIGVjb21tZXJjZTogMC41LFxuICAgICAgICBpbmZvcm1hdGl2ZTogMC41LFxuICAgICAgICBpbnNwaXJlOiAwLjUsXG4gICAgICAgIHNlcnZpY2U6IDAuNSxcbiAgICB9LHsgICAgICAgICAgICAgICAgICAgICAgIC8vIHByb2plY3RcbiAgICAgICAgcHJvamVjdFNpemU6IDAuNSxcbiAgICAgICAgc2VvSW1wb3J0YW5jZTogMC4wLFxuICAgIH0seyAgICAgICAgICAgICAgICAgICAgICAgLy8gdXNlcnNcbiAgICAgICAgdXNlckFnZTogMC41LFxuICAgICAgICB1c2Vyc1RlY2hTYXZ5OiAwLjUsXG4gICAgICAgIGJyYW5kQXdlcmVuZXNzOiAwLjUsXG4gICAgfSx7ICAgICAgICAgICAgICAgICAgICAgICAvLyBnb2FscyBwYWdlXG4gICAgICAgIGJyb3dzZTogMC43LFxuICAgICAgICBzaG93T3B0aW9uczogMC43LFxuICAgICAgICByZWFkOiAwLjMsXG4gICAgICAgIGNvbnZlcnNlOiAwLjcsXG4gICAgfSx7XHQvL3Byb3BhJ3Ncblx0ICAgIGJyb3dzZTpbXSxcblx0ICAgIHNob3dPcHRpb25zOltdLFxuXHQgICAgcmVhZDpbXSxcblx0ICAgIGNvbnZlcnNlOltdLFxuXHR9LFxuICAgIFwiMVwiLy8gc2l6ZXMgUyA9IDEgICB8ICAgTSA9IDIgICB8ICAgTCA9IDNcbik7XG5lbGVtZW50cy5wdXNoKGNoZWNrSWNvbik7XG4iLCJjYXJ0UHJvZmlsZSA9IG5ldyBlbGVtZW50KFxuICAgIFwicHJvZmlsZS1pY29uXCIsXG4gICAgeyAgICAgICAgICAgICAgICAgICAgICAgLy8gemluZGV4XG4gICAgICAgIHppbmRleFN0YXJ0VlNlbmQ6IDAuOSxcbiAgICB9LHsgICAgICAgICAgICAgICAgICAgICAgIC8vIGdvYWxzXG4gICAgICAgIGJ1c2luZXNzOiAwLjEsXG4gICAgICAgIGNyZWF0aXZlOiAwLjEsXG4gICAgICAgIGVjb21tZXJjZTogMC45LFxuICAgICAgICBpbmZvcm1hdGl2ZTogMC4xLFxuICAgICAgICBpbnNwaXJlOiAwLjQsXG4gICAgICAgIHNlcnZpY2U6IDAuNyxcbiAgICB9LHsgICAgICAgICAgICAgICAgICAgICAgIC8vIHByb2plY3RcbiAgICAgICAgcHJvamVjdFNpemU6IDAuOSxcbiAgICAgICAgc2VvSW1wb3J0YW5jZTogMC4xLFxuICAgIH0seyAgICAgICAgICAgICAgICAgICAgICAgLy8gdXNlcnNcbiAgICAgICAgdXNlckFnZTogMC42LFxuICAgICAgICB1c2Vyc1RlY2hTYXZ5OiAwLjYsXG4gICAgICAgIGJyYW5kQXdlcmVuZXNzOiAwLjcsXG4gICAgfSx7ICAgICAgICAgICAgICAgICAgICAgICAvLyBnb2FscyBwYWdlXG4gICAgICAgIGJyb3dzZTogMC4xLFxuICAgICAgICBzaG93T3B0aW9uczogMC4xLFxuICAgICAgICByZWFkOiAwLjEsXG4gICAgICAgIGNvbnZlcnNlOiAwLjEsXG4gICAgfSx7XHQvL3Byb3BhJ3Ncblx0ICAgIGJyb3dzZTpbXSxcblx0ICAgIHNob3dPcHRpb25zOltdLFxuXHQgICAgcmVhZDpbXSxcblx0ICAgIGNvbnZlcnNlOltdLFxuXHR9LFxuICAgIFwiMVwiLy8gc2l6ZXMgUyA9IDEgICB8ICAgTSA9IDIgICB8ICAgTCA9IDNcbik7XG5lbGVtZW50cy5wdXNoKGNhcnRQcm9maWxlKTtcbiIsInNlYXJjaEVsZW1lbnQgPSBuZXcgZWxlbWVudChcbiAgICBcInNlYXJjaC1pY29uXCIsXG4gICAgeyAgICAgICAgICAgICAgICAgICAgICAgLy8gemluZGV4XG4gICAgICAgIHppbmRleFN0YXJ0VlNlbmQ6IDAuNyxcbiAgICB9LHsgICAgICAgICAgICAgICAgICAgICAgIC8vIGdvYWxzXG4gICAgICAgIGJ1c2luZXNzOiAwLjcsXG4gICAgICAgIGNyZWF0aXZlOiAwLjEsXG4gICAgICAgIGVjb21tZXJjZTogMC43LFxuICAgICAgICBpbmZvcm1hdGl2ZTogMC4yLFxuICAgICAgICBpbnNwaXJlOiAwLjYsXG4gICAgICAgIHNlcnZpY2U6IDAuMixcbiAgICB9LHsgICAgICAgICAgICAgICAgICAgICAgIC8vIHByb2plY3RcbiAgICAgICAgcHJvamVjdFNpemU6IDAuOCxcbiAgICAgICAgc2VvSW1wb3J0YW5jZTogMC4xLFxuICAgIH0seyAgICAgICAgICAgICAgICAgICAgICAgLy8gdXNlcnNcbiAgICAgICAgdXNlckFnZTogMC40LFxuICAgICAgICB1c2Vyc1RlY2hTYXZ5OiAwLjYsXG4gICAgICAgIGJyYW5kQXdlcmVuZXNzOiAwLjEsXG4gICAgfSx7ICAgICAgICAgICAgICAgICAgICAgICAvLyBnb2FscyBwYWdlXG4gICAgICAgIGJyb3dzZTogMC44LFxuICAgICAgICBzaG93T3B0aW9uczogMC44LFxuICAgICAgICByZWFkOiAwLjEsXG4gICAgICAgIGNvbnZlcnNlOiAwLjEsXG4gICAgfSx7XHQvL3Byb3BhJ3Ncblx0ICAgIGJyb3dzZTpbXSxcblx0ICAgIHNob3dPcHRpb25zOltdLFxuXHQgICAgcmVhZDpbXSxcblx0ICAgIGNvbnZlcnNlOltdLFxuXHR9LFxuICAgIFwiMVwiLy8gc2l6ZXMgUyA9IDEgICB8ICAgTSA9IDIgICB8ICAgTCA9IDNcbik7XG5lbGVtZW50cy5wdXNoKHNlYXJjaEVsZW1lbnQpO1xuIl19
