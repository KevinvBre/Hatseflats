//Let's import the library that allows us to talk with the UI
@import "MochaJSDelegate.js";
// Big thanks to MochaJSDelegate https://github.com/matt-curtis/MochaJSDelegate

// let's get a hold on the Sketch API
const sketch = require('sketch')
var libraries = require('sketch/dom').getLibraries()
const someLibrary = libraries[0];
const libURL = someLibrary.sketchObject.locationOnDisk();

//let's expose these globally
var document;
var page;

//the main function we run when we execute the plugin. It creates the webview and hooks



function onRun(context) {

  document = sketch.fromNative(context.document);

  console.log("check 0");
  var libHatseflats = "none";
  for (var i = 0; i < libraries.length; i++) {
    // console.log(libraries[i]);
    console.log(libraries[i].name);
    if(libraries[i].name == "Hatseflats"){
      libHatseflats = libraries[i];
      foundLib = true;
    }
  }
  if (libHatseflats == "none") {
    let notification = NSUserNotification.alloc().init()
    let randomNumber = Math.random()
    notification.setIdentifier("com.kevin.testNotification" + randomNumber)
    notification.setTitle("Missing 'Hatseflats' Sketch Library")
    notification.setSubtitle("You should download the 'Hatseflats' Sketch Library and install it. Use the menu for a link")
    notification.setInformativeText("Your symbol")
    notification.setSoundName = NSUserNotificationDefaultSoundName

    let notificationCenter = NSUserNotificationCenter.defaultUserNotificationCenter()
    notificationCenter.deliverNotification(notification)

    context.document.showMessage("You should download the 'Hatseflats' Sketch Library and install it. Use the menu for a link");
    return

    // big thanks too https://sketchplugins.com/d/1479-triggering-a-nsusernotification
  }

  page = document.selectedPage;

  var style = sketch.Style;
  var userDefaults = NSUserDefaults.standardUserDefaults();


	// Create a window
  var title = "Hatseflats";
  var identifier = "com.hatseflats.webviewtemplate";
  var threadDictionary = NSThread.mainThread().threadDictionary();

  if (threadDictionary[identifier]) {
        return;
  }

    var windowWidth = 320,windowHeight = 545;

    var webViewWindow = NSPanel.alloc().init();
    webViewWindow.setFrame_display(NSMakeRect(0, 0, windowWidth, windowHeight), true);
    webViewWindow.setStyleMask(NSTexturedBackgroundWindowMask | NSTitledWindowMask | NSClosableWindowMask | NSResizableWindowMask);

    //Uncomment the following line to define the app bar color with an NSColor
    //webViewWindow.setBackgroundColor(NSColor.whiteColor());
    webViewWindow.standardWindowButton(NSWindowMiniaturizeButton).setHidden(true);
    webViewWindow.standardWindowButton(NSWindowZoomButton).setHidden(true);
    webViewWindow.setTitle(title);
    webViewWindow.setTitlebarAppearsTransparent(true);
    webViewWindow.becomeKeyWindow();
    webViewWindow.setLevel(NSFloatingWindowLevel);
    threadDictionary[identifier] = webViewWindow;
    COScript.currentCOScript().setShouldKeepAround_(true);

    //Add Web View to window
      var webView = WebView.alloc().initWithFrame(NSMakeRect(0, 0, windowWidth, windowHeight - 24));
      webView.setAutoresizingMask(NSViewWidthSizable|NSViewHeightSizable);
      var windowObject = webView.windowScriptObject();

      var componentCounter = 0;
      var componentYMobile = 0;
      var componentYDesktop = 0;
      var artboardX = 0;
      var artboardY = 0;


      var runCount = 0;

      let Group = require('sketch').Group;

      var delegate = new MochaJSDelegate({

          //To get commands from the webView we observe the location hash: if it changes, we do something
          "webView:didChangeLocationWithinPageForFrame:" : (function(webView, webFrame) {


              var locationHash = windowObject.evaluateWebScript("window.location.hash");

              var hash = locationHash;
              var res = hash.replace("#", "");
              var firstRun = true;
              console.log(res);


                /*
                  Create artboards both mobile and desktop.
                */
                let theArtboardDesktop = new sketch.Artboard({
                    parent: page,
                     name: res,
                    frame: new sketch.Rectangle(artboardX,artboardY,1280,7500),
                });
                artboardX += 1480;













                var hash = locationHash;
                var res = hash.replace("#", "");
                console.log(res);


                var hashComponents = res.split("=");
                for (var i = 1; i < hashComponents.length; i++) {


                  console.log("");
                  console.log("#COMPONENT");
                  var componentValues = hashComponents[i].split(":");
                  var componentName = componentValues[0];
                  var componentY = componentValues[1];
                  componentY.replace("%", "");
                  componentY = parseInt(componentY);

                  console.log("componentName: "+ componentName);
                  console.log("componentY: "+ componentY);

                  var componentWidth = 1280;
                  var componentHeight = 1;
                  // create the group
                  var group = new Group({
                      name: 'Component ' + componentName,
                      parent: theArtboardDesktop
                  })

                  //COMPONENT BACKGROUND
                  var rectStyle = new sketch.Style()
                  rectStyle.fills = ['#C9C9C9'];
                  let myRect = new sketch.ShapePath({
                      name: 'Background: '+ componentName,
                      frame: new sketch.Rectangle(0,componentY,componentWidth,componentHeight),
                      style:rectStyle,
                      parent:group
                  })

                  //COMPONENT TEXT
                  let myTextLayer = new sketch.Text({
                      text: componentName,
                      frame: new sketch.Rectangle(0,componentY,componentWidth,50),
                      parent:group
                  })

                  group.adjustToFit()
                  console.log("check 4");



                  // // if(i == hashComponents.length-1)artboardheight += componentY;
                  // if(componentY != undefined && i == hashComponents.length-1)artboardheight += componentY;

                  var hashRows = hashComponents[i].split("%");
                  console.log("Amount of row");
                  console.log(hashRows.length);
                  for (var r = 1; r < hashRows.length; r++) {
                      console.log("#Row num: " + r);
                      console.log(hashRows[r]);

                      var rowValues = hashRows[r].split(":");

                      var rowY = parseInt(rowValues[1]);
                      var rowMargin = parseInt(rowValues[2]);
                      var rowHeight = rowValues[3].split("&");;
                      rowHeight = parseInt(rowHeight[0]);



                      console.log("rowY: "+ rowY);
                      console.log("rowMargin: "+ rowMargin);
                      console.log("rowHeight: "+ rowHeight);


                      // if(i == hashComponents.length-1 && r == hashRows.length-1){
                      //     artboardheight += rowY;
                      // }
                      // if(i == hashComponents.length-1){
                      //   artboardheight += rowHeight;
                      // }
                      //


                      var elementsOnRow = hashRows[r].split("&");
                      console.log("Elements on row");
                      console.log(elementsOnRow);

                        for (var e = 1; e < elementsOnRow.length; e++) {
                          console.log("");
                          console.log("#ELEMENT ");
                          console.log(elementsOnRow[e]);
                          var elementValues = elementsOnRow[e].split(":");


                          var eName = elementValues[0];
                          var eXpos = parseInt(elementValues[1]);
                          var eYpos = rowY;
                          var eWidth = parseInt(elementValues[2]);
                          var eHeight = parseInt(elementValues[3]);

                          console.log("eName: "+ eName);
                          console.log("eXpos: "+ eXpos);

                          console.log("eWidth: "+ eWidth);
                          console.log("eHeight: "+ eHeight);


                          // create the group
                          var elementGroup = new Group({
                              name: 'Element :' + eName,
                              parent: group
                          })

                          // //ELEMENT BACKGROUND
                          // var elementStyle = new sketch.Style();
                          // elementStyle.fills = ['#FFE5E5'];
                          // let myRect = new sketch.ShapePath({
                          //     name: 'Element: '+eName,
                          //     frame: new sketch.Rectangle(eXpos,eYpos,eWidth,eHeight),
                          //     style:elementStyle,
                          //     parent:elementGroup
                          // });
                          // console.log("check 7: ");
                          //
                          // //ELEMENT TEXT
                          // let myTextLayer2 = new sketch.Text({
                          //     text: eName,
                          //     frame: new sketch.Rectangle(eXpos,eYpos,eWidth,eHeight),
                          //     parent:elementGroup
                          // })
                          // console.log("check 8: ");
                          //
                          // var theSymbol = myRect;
                          // console.log(foundLib);
                          // console.log("check 9: ");


                                          if(foundLib){
                                            var symbolReferences = libHatseflats.getImportableSymbolReferencesForDocument(document);


                                            console.log("check 9.1: ");
                                            var focal = false;
                                            var name = eName;
                                            var eh = eHeight;


                                            var randomFocal = Math.random()*100;
                                            if(randomFocal <= 20) focal = true;



                                            if (name == "bulletlist") {
                                                if (eh == 20 || eh == 80) {
                                                    if (focal) {
                                                        theSymbol = symbolReferences.filter(symbol => {
                                                            return symbol.name == "bulletlist/desktop/1/focal"
                                                        })[0].import().createNewInstance();
                                                    } else {
                                                        theSymbol = symbolReferences.filter(symbol => {
                                                            return symbol.name == "bulletlist/desktop/2/default"
                                                        })[0].import().createNewInstance();
                                                    }
                                                } else {
                                                    if (focal) {
                                                        theSymbol = symbolReferences.filter(symbol => {
                                                            return symbol.name == "bulletlist/desktop/1/focal"
                                                        })[0].import().createNewInstance();
                                                    } else {
                                                        theSymbol = symbolReferences.filter(symbol => {
                                                            return symbol.name == "bulletlist/desktop/2/default"
                                                        })[0].import().createNewInstance();
                                                    }
                                                }
                                            }

                                            if(name == "cta"){if(eh == 20 || eh == 80){if(focal){theSymbol = symbolReferences.filter(symbol => {return symbol.name == "cta/desktop/1/focal"})[0].import().createNewInstance();
                                            }else{theSymbol = symbolReferences.filter(symbol => {return symbol.name == "cta/desktop/2/default"})[0].import().createNewInstance();}
                                            }else{if(focal){theSymbol = symbolReferences.filter(symbol => {return symbol.name == "cta/desktop/1/focal"})[0].import().createNewInstance();
                                            }else{theSymbol = symbolReferences.filter(symbol => {return symbol.name == "cta/desktop/2/default"})[0].import().createNewInstance();}}}

                                            if(name == "card"){if(eh == 20 || eh == 80){if(focal){theSymbol = symbolReferences.filter(symbol => {return symbol.name == "card/desktop/1/focal"})[0].import().createNewInstance();
                                            }else{theSymbol = symbolReferences.filter(symbol => {return symbol.name == "card/desktop/2/default"})[0].import().createNewInstance();}
                                            }else{if(focal){theSymbol = symbolReferences.filter(symbol => {return symbol.name == "card/desktop/1/focal"})[0].import().createNewInstance();
                                            }else{theSymbol = symbolReferences.filter(symbol => {return symbol.name == "card/desktop/2/default"})[0].import().createNewInstance();}}}

                                            if(name == "filter"){if(eh == 20 || eh == 80){if(focal){theSymbol = symbolReferences.filter(symbol => {return symbol.name == "filter/desktop/1/focal"})[0].import().createNewInstance();
                                            }else{theSymbol = symbolReferences.filter(symbol => {return symbol.name == "filter/desktop/2/default"})[0].import().createNewInstance();}
                                            }else{if(focal){theSymbol = symbolReferences.filter(symbol => {return symbol.name == "filter/desktop/1/focal"})[0].import().createNewInstance();
                                            }else{theSymbol = symbolReferences.filter(symbol => {return symbol.name == "filter/desktop/2/default"})[0].import().createNewInstance();}}}


                                            if(name == "h1"){if(eh == 20 || eh == 80){if(focal){theSymbol = symbolReferences.filter(symbol => {return symbol.name == "h1/desktop/1/focal"})[0].import().createNewInstance();
                                            }else{theSymbol = symbolReferences.filter(symbol => {return symbol.name == "h1/desktop/2/default"})[0].import().createNewInstance();}
                                            }else{if(focal){theSymbol = symbolReferences.filter(symbol => {return symbol.name == "h1/desktop/1/focal"})[0].import().createNewInstance();
                                            }else{theSymbol = symbolReferences.filter(symbol => {return symbol.name == "h1/desktop/2/default"})[0].import().createNewInstance();}}}

                                            if(name == "h2"){if(eh == 20 || eh == 80){if(focal){theSymbol = symbolReferences.filter(symbol => {return symbol.name == "h2/desktop/1/focal"})[0].import().createNewInstance();
                                            }else{theSymbol = symbolReferences.filter(symbol => {return symbol.name == "h2/desktop/2/default"})[0].import().createNewInstance();}
                                            }else{if(focal){theSymbol = symbolReferences.filter(symbol => {return symbol.name == "h2/desktop/1/focal"})[0].import().createNewInstance();
                                            }else{theSymbol = symbolReferences.filter(symbol => {return symbol.name == "h2/desktop/2/default"})[0].import().createNewInstance();}}}

                                            if(name == "h3"){if(eh == 20 || eh == 80){if(focal){theSymbol = symbolReferences.filter(symbol => {return symbol.name == "h3/desktop/1/focal"})[0].import().createNewInstance();
                                            }else{theSymbol = symbolReferences.filter(symbol => {return symbol.name == "h3/desktop/2/default"})[0].import().createNewInstance();}
                                            }else{if(focal){theSymbol = symbolReferences.filter(symbol => {return symbol.name == "h3/desktop/1/focal"})[0].import().createNewInstance();
                                            }else{theSymbol = symbolReferences.filter(symbol => {return symbol.name == "h3/desktop/2/default"})[0].import().createNewInstance();}}}

                                            if(name == "iconTextline"){if(eh == 20 || eh == 80){if(focal){theSymbol = symbolReferences.filter(symbol => {return symbol.name == "iconTextline/desktop/1/focal"})[0].import().createNewInstance();
                                            }else{theSymbol = symbolReferences.filter(symbol => {return symbol.name == "iconTextline/desktop/2/default"})[0].import().createNewInstance();}
                                            }else{if(focal){theSymbol = symbolReferences.filter(symbol => {return symbol.name == "iconTextline/desktop/1/focal"})[0].import().createNewInstance();
                                            }else{theSymbol = symbolReferences.filter(symbol => {return symbol.name == "iconTextline/desktop/2/default"})[0].import().createNewInstance();}}}

                                            if(name == "image"){if(eh == 20 || eh == 80){if(focal){theSymbol = symbolReferences.filter(symbol => {return symbol.name == "image/desktop/1/focal"})[0].import().createNewInstance();
                                            }else{theSymbol = symbolReferences.filter(symbol => {return symbol.name == "image/desktop/2/default"})[0].import().createNewInstance();}
                                            }else{if(focal){theSymbol = symbolReferences.filter(symbol => {return symbol.name == "image/desktop/1/focal"})[0].import().createNewInstance();
                                            }else{theSymbol = symbolReferences.filter(symbol => {return symbol.name == "image/desktop/2/default"})[0].import().createNewInstance();}}}

                                            if(name == "inputText"){if(eh == 20 || eh == 80){if(focal){theSymbol = symbolReferences.filter(symbol => {return symbol.name == "inputText/desktop/1/focal"})[0].import().createNewInstance();
                                            }else{theSymbol = symbolReferences.filter(symbol => {return symbol.name == "inputText/desktop/2/default"})[0].import().createNewInstance();}
                                            }else{if(focal){theSymbol = symbolReferences.filter(symbol => {return symbol.name == "inputText/desktop/1/focal"})[0].import().createNewInstance();
                                            }else{theSymbol = symbolReferences.filter(symbol => {return symbol.name == "inputText/desktop/2/default"})[0].import().createNewInstance();}}}

                                            if(name == "logo"){if(eh == 20 || eh == 80){if(focal){theSymbol = symbolReferences.filter(symbol => {return symbol.name == "logo/desktop/1/focal"})[0].import().createNewInstance();
                                            }else{theSymbol = symbolReferences.filter(symbol => {return symbol.name == "logo/desktop/2/default"})[0].import().createNewInstance();}
                                            }else{if(focal){theSymbol = symbolReferences.filter(symbol => {return symbol.name == "logo/desktop/1/focal"})[0].import().createNewInstance();
                                            }else{theSymbol = symbolReferences.filter(symbol => {return symbol.name == "logo/desktop/2/default"})[0].import().createNewInstance();}}}

                                            if(name == "menuItem"){if(eh == 20 || eh == 80){if(focal){theSymbol = symbolReferences.filter(symbol => {return symbol.name == "menuItem/desktop/1/focal"})[0].import().createNewInstance();
                                            }else{theSymbol = symbolReferences.filter(symbol => {return symbol.name == "menuItem/desktop/2/default"})[0].import().createNewInstance();}
                                            }else{if(focal){theSymbol = symbolReferences.filter(symbol => {return symbol.name == "menuItem/desktop/1/focal"})[0].import().createNewInstance();
                                            }else{theSymbol = symbolReferences.filter(symbol => {return symbol.name == "menuItem/desktop/2/default"})[0].import().createNewInstance();}}}

                                            if(name == "textline"){if(eh == 20 || eh == 80){if(focal){theSymbol = symbolReferences.filter(symbol => {return symbol.name == "textline/desktop/1/focal"})[0].import().createNewInstance();
                                            }else{theSymbol = symbolReferences.filter(symbol => {return symbol.name == "textline/desktop/2/default"})[0].import().createNewInstance();}
                                            }else{if(focal){theSymbol = symbolReferences.filter(symbol => {return symbol.name == "textline/desktop/1/focal"})[0].import().createNewInstance();
                                            }else{theSymbol = symbolReferences.filter(symbol => {return symbol.name == "textline/desktop/2/default"})[0].import().createNewInstance();}}}

                                            if(name == "text"){if(eh == 20 || eh == 80){if(focal){theSymbol = symbolReferences.filter(symbol => {return symbol.name == "text/desktop/1/focal"})[0].import().createNewInstance();
                                            }else{theSymbol = symbolReferences.filter(symbol => {return symbol.name == "text/desktop/2/default"})[0].import().createNewInstance();}
                                            }else{if(focal){theSymbol = symbolReferences.filter(symbol => {return symbol.name == "text/desktop/1/focal"})[0].import().createNewInstance();
                                            }else{theSymbol = symbolReferences.filter(symbol => {return symbol.name == "text/desktop/2/default"})[0].import().createNewInstance();}}}

                                            if(name == "share"){if(eh == 20 || eh == 80){if(focal){theSymbol = symbolReferences.filter(symbol => {return symbol.name == "share/desktop/1/focal"})[0].import().createNewInstance();
                                            }else{theSymbol = symbolReferences.filter(symbol => {return symbol.name == "share/desktop/2/default"})[0].import().createNewInstance();}
                                            }else{if(focal){theSymbol = symbolReferences.filter(symbol => {return symbol.name == "share/desktop/1/focal"})[0].import().createNewInstance();
                                            }else{theSymbol = symbolReferences.filter(symbol => {return symbol.name == "share/desktop/2/default"})[0].import().createNewInstance();}}}


                                            // // ICONS  = DIFFERNT SKETCH NAMES
                                            if(name == "bullet-icon"){
                                            if(focal){theSymbol = symbolReferences.filter(symbol => {return symbol.name == "bulletIcon/default"})[0].import().createNewInstance();
                                            }else{theSymbol = symbolReferences.filter(symbol => {return symbol.name == "bulletIcon/focal"})[0].import().createNewInstance();}}

                                            if(name == "cart-icon"){
                                            if(focal){theSymbol = symbolReferences.filter(symbol => {return symbol.name == "cartIcon/default"})[0].import().createNewInstance();
                                          }else{theSymbol = symbolReferences.filter(symbol => {return symbol.name == "cartIcon/focal"})[0].import().createNewInstance();}}

                                            if(name == "check-icon"){
                                            if(focal){theSymbol = symbolReferences.filter(symbol => {return symbol.name == "checkIcon/default"})[0].import().createNewInstance();
                                          }else{theSymbol = symbolReferences.filter(symbol => {return symbol.name == "checkIcon/focal"})[0].import().createNewInstance();}}

                                            if(name == "profile-icon"){
                                            if(focal){theSymbol = symbolReferences.filter(symbol => {return symbol.name == "profileIcon/default"})[0].import().createNewInstance();
                                          }else{theSymbol = symbolReferences.filter(symbol => {return symbol.name == "profileIcon/focal"})[0].import().createNewInstance();}}


                                            if(name == "search-icon"){
                                            if(focal){theSymbol = symbolReferences.filter(symbol => {return symbol.name == "searchIcon/default"})[0].import().createNewInstance();
                                            }else{theSymbol = symbolReferences.filter(symbol => {return symbol.name == "searchIcon/focal"})[0].import().createNewInstance();}}


                                            // console.log("check 10: ");
                                            //
                                            //
                                            console.log("check 11: ");



                                            theSymbol.frame.x = eXpos;
                                            theSymbol.frame.y = eYpos;
                                            theSymbol.frame.width = eWidth;
                                            theSymbol.frame.height = eHeight;
                                            theSymbol.parent = elementGroup;




                                            console.log("check 12: ");
                                          }

                          console.log("check 20: ");
                          elementGroup.adjustToFit();

                        }

                  }
                }



                console.log("check 50 ");
                console.log(artboardheight);
                // theArtboardDesktop.frame.height = artboardheight;







            let notification = NSUserNotification.alloc().init()
            let randomNumber = Math.random()
            notification.setIdentifier("com.kevin.testNotification" + randomNumber)
            notification.setTitle("Hatseflats!' 🧙🏻‍♂️✨🎇")
            notification.setSubtitle("Do you like it?")
            notification.setInformativeText("ID:" + hash)
            notification.setSoundName = NSUserNotificationDefaultSoundName

            let notificationCenter = NSUserNotificationCenter.defaultUserNotificationCenter()
            notificationCenter.deliverNotification(notification)

            context.document.showMessage("'Hatseflats!' 🧙🏻‍♂️✨🎇");

            runCount++;




          })
      });



      webView.setFrameLoadDelegate_(delegate.getClassInstance());
      webView.setMainFrameURL_(context.plugin.urlForResourceNamed("ui.html").path());
      webViewWindow.contentView().addSubview(webView);
      webViewWindow.center();
      webViewWindow.makeKeyAndOrderFront(nil);

      // Define the close window behaviour on the standard red traffic light button
      var closeButton = webViewWindow.standardWindowButton(NSWindowCloseButton);
      closeButton.setCOSJSTargetFunction(function(sender) {
          COScript.currentCOScript().setShouldKeepAround(false);
          threadDictionary.removeObjectForKey(identifier);
          webViewWindow.close();
      });
      closeButton.setAction("callAction:");
  };

  /*  Default */

  function openUrlInBrowser(url) {
      NSWorkspace.sharedWorkspace().openURL(NSURL.URLWithString(url));
  }

  function download(context) {
    openUrlInBrowser("https://www.dropbox.com/s/wd74ncmfkzczyu0/Hatseflats.sketch?dl=1");
    ga(context, "Download Hatseflats");
  }
  function website(context) {
      openUrlInBrowser("https://github.com/KevinvBre/Hatseflats/");
      ga(context, "About Hatseflats");
  };



  /*

      Everything below this line except the trackingID is a copy paste from:
      https://github.com/Ashung/Automate-Sketch

  */


  function ga(context, eventCategory) {

      var trackingID = "UA-25194603-2";

      var uuidKey = "google.analytics.uuid";
      var uuid = NSUserDefaults.standardUserDefaults().objectForKey(uuidKey);
      if (!uuid) {
          uuid = NSUUID.UUID().UUIDString();
          NSUserDefaults.standardUserDefaults().setObject_forKey(uuid, uuidKey);
      }

      var appName = encodeURI(context.plugin.name()),
          appId = context.plugin.identifier(),
          appVersion = context.plugin.version();

      var url = "https://www.google-analytics.com/collect?v=1";
      // Tracking ID
      url += "&tid=" + trackingID;
      // Source
      url += "&ds=sketch" + MSApplicationMetadata.metadata().appVersion;
      // Client ID
      url += "&cid=" + uuid;
      // User GEO location
      url += "&geoid=" + NSLocale.currentLocale().countryCode();
      // User language
      url += "&ul=" + NSLocale.currentLocale().localeIdentifier().toLowerCase();
      // pageview, screenview, event, transaction, item, social, exception, timing
      url += "&t=event";
      // App Name
      url += "&an=" + appName;
      // App ID
      url += "&aid=" + appId;
      // App Version
      url += "&av=" + appVersion;
      // Event category
      url += "&ec=" + encodeURI(eventCategory);
      // Event action
      // url += "&ea=" + encodeURI(eventAction);
      url += "&ea=" + encodeURI(context.command.identifier());
      // Event label
      // if (eventLabel) {
      //     url += "&el=" + encodeURI(eventLabel);
      // }
      // Event value
      // if (eventValue) {
      //     url += "&ev=" + encodeURI(eventValue);
      // }

      var session = NSURLSession.sharedSession();
      var task = session.dataTaskWithURL(NSURL.URLWithString(NSString.stringWithString(url)));
      task.resume();

  }


//The whole function above is run here
onRun(context);
