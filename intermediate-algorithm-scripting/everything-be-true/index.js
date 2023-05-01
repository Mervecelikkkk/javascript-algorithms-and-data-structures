
function truthCheck(collection, pre) {
    return collection.every(function(e) { return e[pre]; });
  }

  //test case

  truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot");