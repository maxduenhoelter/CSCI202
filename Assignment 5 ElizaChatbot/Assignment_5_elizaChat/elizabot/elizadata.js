// Welcome & Farewell Messages
var elizaInitials = [
  "Duuude, you ready to ride the waffle wave? Sweet or savory?",
  "Whoa, welcome to Sweet As Waffles! Craving sweet or savory goodness?"
];

var elizaFinals = [
  "Catch ya later, waffle warrior! Stay sweet!",
  "Hang loose, dude! Come back for more waffle wisdom!",
  "Hope your belly’s happy! See ya next time!"
];

// User Exit Words
var elizaQuits = ["bye", "goodbye", "exit", "quit", "later"];

// Adjusting Pronouns for Natural Responses
var elizaPres = [
  "cant", "can't",
  "wont", "won't",
  "recollect", "remember",
  "recall", "remember",
  "certainly", "yes"
];

var elizaPosts = [
  "am", "are",
  "your", "my",
  "me", "you",
  "myself", "yourself",
  "i'm", "you are",
  "my", "your"
];

// Keyword Mapping
var elizaKeywords = [
  ["xnone", 0, [
    ["*", [
      "Whoa, dude, I totally spaced out—what waffle wisdom do you need?",
      "You're talkin' mystery waffle stuff, huh? Let's get back on track—sweet or savory?"
    ]]
  ]],

  ["waffle", 5, [
    ["* waffle *", [
      "Ohhh, waffles are my jam! You feelin' sweet or savory today?",
      "Dude, waffles are life! Let’s pick a side—sweet or savory?"
    ]]
  ]],

  // Step 1: Sweet or Savory Choice
  ["sweet", 5, [
    ["* sweet *", [
      "Gnarly choice, dude! Are you feelin’ a classic **breakfast waffle** or **dessert overload**?",
      "Sweet vibes! You want **fruity freshness** or **cheesecake magic**?"
    ]]
  ]],

  ["savory", 5, [
    ["* savory *", [
      "Nice, a waffle with a kick! Want some **bacon-loaded goodness** or **egg-packed fuel**?",
      "Savory’s solid! You diggin’ a **melted cheese sandwich** or **fresh salmon**?"
    ]]
  ]],

  // Step 2A: Sweet Waffle Choices
  ["breakfast", 5, [
    ["* breakfast *", [
      "Ohhh yeah, brunch vibes! You want somethin’ **fruity** or **full-on comfort food**?",
      "Dude, breakfast waffles are supreme! Fruity or cozy flavors?"
    ]]
  ]],

  ["dessert", 5, [
    ["* dessert *", [
      "Sugar overload, let’s go! You want **chocolate magic** or **cheesecake vibes**?",
      "Dessert dreams! Try **Happy Camper**—marshmallow-toasted greatness!"
    ]]
  ]],

    ["overload", 5, [
    ["* overload *", [
      "Sugar overload, let’s go! You want **choco magic** or **cheesecake vibes**?",
      "Dessert dreams! Try **Happy Camper**—marshmallow-toasted greatness!"
    ]]
  ]],

  // Step 3A: Sweet Breakfast Waffle Choices
  ["fruity", 5, [
    ["* fruity *", [
      "Rad pick, dude! Try **Berry Nuts**—strawberries, bananas, Nutella, graham crackers!",
      "Fruit magic, yes! Go for **Main Squeeze** with lemon curd and blueberries!"
    ]]
  ]],

    ["freshness", 5, [
    ["* freshness *", [
      "Rad pick, dude! Try **Berry Nuts**—strawberries, bananas, Nutella, graham crackers!",
      "Fruit magic, yes! Go for **Main Squeeze** with lemon curd and blueberries!"
    ]]
  ]],

    ["fruit", 5, [
    ["* fruit *", [
      "Rad pick, dude! Try **Berry Nuts**—strawberries, bananas, Nutella, graham crackers!",
      "Fruit magic, yes! Go for **Main Squeeze** with lemon curd and blueberries!"
    ]]
  ]],

  ["comfort", 5, [
    ["* comfort *", [
      "Whoa, cozy vibes! Try **Cinnamon Swell** with maple syrup and cinnamon sugar!",
      "Comfy and delicious? **Tea Bag** is infused with earl grey whipped cream!"
    ]]
  ]],

  ["cozy", 5, [
    ["* cozy *", [
      "Whoa, cozy vibes! Try **Cinnamon Swell** with maple syrup and cinnamon sugar!",
      "Comfy and delicious? **Tea Bag** is infused with earl grey whipped cream!"
    ]]
  ]],

    ["full-on", 5, [
    ["* full-on *", [
      "Whoa, cozy vibes! Try **Cinnamon Swell** with maple syrup and cinnamon sugar!",
      "Comfy and delicious? **Tea Bag** is infused with earl grey whipped cream!"
    ]]
  ]],

    ["full", 5, [
    ["* full *", [
      "Whoa, cozy vibes! Try **Cinnamon Swell** with maple syrup and cinnamon sugar!",
      "Comfy and delicious? **Tea Bag** is infused with earl grey whipped cream!"
    ]]
  ]],

    ["on", 5, [
    ["* on *", [
      "Whoa, cozy vibes! Try **Cinnamon Swell** with maple syrup and cinnamon sugar!",
      "Comfy and delicious? **Tea Bag** is infused with earl grey whipped cream!"
    ]]
  ]],

   ["flavors", 5, [
    ["* flavors *", [
      "Whoa, cozy vibes! Try **Cinnamon Swell** with maple syrup and cinnamon sugar!",
      "Comfy and delicious? **Tea Bag** is infused with earl grey whipped cream!"
    ]]
  ]],

     ["flavor", 5, [
    ["* flavor *", [
      "Whoa, cozy vibes! Try **Cinnamon Swell** with maple syrup and cinnamon sugar!",
      "Comfy and delicious? **Tea Bag** is infused with earl grey whipped cream!"
    ]]
  ]],

  // Step 3B: Sweet Dessert Waffle Choices
  ["chocolate", 5, [
    ["* chocolate *", [
      "Dude, chocolate explosion incoming! **Loam Wolf** = ice cream, Oreos, chocolate sauce!",
      "Sweet tooth on max? **Happy Camper** has toasted marshmallows and graham crackers!"
    ]]
  ]],

    ["choco", 5, [
    ["* choco *", [
      "Dude, chocolate explosion incoming! **Loam Wolf** = ice cream, Oreos, chocolate sauce!",
      "Sweet tooth on max? **Happy Camper** has toasted marshmallows and graham crackers!"
    ]]
  ]],

  ["cheesecake", 5, [
    ["* cheesecake *", [
      "Whoa, cheesecake vibes? **Baker Blast** has cheesecake spread with berry syrup!",
      "Creamy goodness! Try **Main Squeeze**—lemon curd, cheesecake, blueberries!"
    ]]
  ]],

   ["magic", 5, [
    ["* magic *", [
      "Whoa, cheesecake vibes? **Baker Blast** has cheesecake spread with berry syrup!",
      "Creamy goodness! Try **Main Squeeze**—lemon curd, cheesecake, blueberries!"
    ]]
  ]],

    ["vibes", 5, [
    ["* vibes *", [
      "Whoa, cheesecake vibes? **Baker Blast** has cheesecake spread with berry syrup!",
      "Creamy goodness! Try **Main Squeeze**—lemon curd, cheesecake, blueberries!"
    ]]
  ]],

  // Step 2B: Savory Waffle Choices
  ["bacon", 5, [
    ["* bacon *", [
      "Bacon? Heck yes! You want **cheesy magic** or **ham & turkey mix**?",
      "Bacon makes everything better, dude! Go for **Canadian Quesadilla** or **Monte Cristo & The Holy Grail**!"
    ]]
  ]],

  ["goodness", 5, [
    ["* goodness *", [
      "Bacon? Heck yes! You want **cheesy magic** or **ham & turkey mix**?",
      "Bacon makes everything better, dude! Go for **Canadian Quesadilla** or **Monte Cristo & The Holy Grail**!"
    ]]
  ]],

  ["egg", 5, [
    ["* egg *", [
      "Eggcellent choice, bro! You want **protein power** or **light and fresh**?",
      "Egg it up, dude! **Egg Zeppelin** will fuel your day!"
    ]]
  ]],

   ["packed", 5, [
    ["* packed *", [
      "Eggcellent choice, bro! You want **protein power** or **light and fresh**?",
      "Egg it up, dude! **Egg Zeppelin** will fuel your day!"
    ]]
  ]],

    ["pack", 5, [
    ["* pack *", [
      "Eggcellent choice, bro! You want **protein power** or **light and fresh**?",
      "Egg it up, dude! **Egg Zeppelin** will fuel your day!"
    ]]
  ]],

    ["fuel", 5, [
    ["* fuel *", [
      "Eggcellent choice, bro! You want **protein power** or **light and fresh**?",
      "Egg it up, dude! **Egg Zeppelin** will fuel your day!"
    ]]
  ]],

  // Step 3C: Savory Bacon Waffle Choices
  ["cheesy", 5, [
    ["* cheesy *", [
      "Dude, melted cheese dreams! **Canadian Quesadilla** has pesto cream cheese + bacon!",
      "Three cheeses, maple candied bacon? **Canadian Quesadilla** is your jam!"
    ]]
  ]],
    ["sandwich", 5, [
    ["* sandwich *", [
      "Dude, melted cheese dreams! **Canadian Quesadilla** has pesto cream cheese + bacon!",
      "Three cheeses, maple candied bacon? **Canadian Quesadilla** is your jam!"
    ]]
  ]],

      ["cheese", 5, [
    ["* cheese *", [
      "Dude, melted cheese dreams! **Canadian Quesadilla** has pesto cream cheese + bacon!",
      "Three cheeses, maple candied bacon? **Canadian Quesadilla** is your jam!"
    ]]
  ]],

      ["melted", 5, [
    ["* melted *", [
      "Dude, melted cheese dreams! **Canadian Quesadilla** has pesto cream cheese + bacon!",
      "Three cheeses, maple candied bacon? **Canadian Quesadilla** is your jam!"
    ]]
  ]],
  

  ["mix", 5, [
    ["* mix *", [
      "Legendary pick, bro! **Monte Cristo & The Holy Grail** is stacked with ham, turkey, cheddar, and berry syrup!",
      "Savory with a touch of sweetness? **Monte Cristo & The Holy Grail** is a winner!"
    ]]
  ]],

   ["ham", 5, [
    ["* ham *", [
      "Legendary pick, bro! **Monte Cristo & The Holy Grail** is stacked with ham, turkey, cheddar, and berry syrup!",
      "Savory with a touch of sweetness? **Monte Cristo & The Holy Grail** is a winner!"
    ]]
  ]],

    ["turkey", 5, [
    ["* turkey *", [
      "Legendary pick, bro! **Monte Cristo & The Holy Grail** is stacked with ham, turkey, cheddar, and berry syrup!",
      "Savory with a touch of sweetness? **Monte Cristo & The Holy Grail** is a winner!"
    ]]
  ]],

  // Step 3D: Savory Egg Waffle Choices
  ["protein", 5, [
    ["* protein *", [
      "Ohhh, fueling up? **Egg Zeppelin** = eggs, sausage/bacon, Swiss & gouda!",
      "Protein-packed waffles? **Caleggfornia** is avocado, eggs, and arugula!"
    ]]
  ]],

  ["fresh", 5, [
    ["* fresh *", [
      "Dude, you want freshness? **Loxness Monster** is smoked salmon, cream cheese, arugula!",
      "Light and flavorful! **Loxness Monster** hits the spot with salmon and pesto!"
    ]]
  ]]
];