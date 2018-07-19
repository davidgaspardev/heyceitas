export class Log {

  // Constants to indicate layouts
  static HOME_LAYOUT            = 'Home.js';
  static PANTRY_LAYOUT          = 'Pantry.js';
  static RECIPES_LAYOUT         = 'Recipes.js';
  static RECIPES_DETAIL_LAYOUT  = 'RecipeDetail.js';
  static CATEGORIES_LAYOUT      = 'Category.js';
  static CATEGORIES_INFO_LAYOUT = 'CategoriesInfo.js';
  static SETTINGS_LAYOUT        = 'Settings.js';

  // constants to indicate layouts
  static CONSTRUCTOR   = 'RN:constructor()';
  static RENDER_BFR    = 'RN:componentWillMount()';
  static RENDER_BFR_UP = 'RN:componentWillUpdate()';
  static RENDER        = 'RN:render()';
  static RENDER_AFT_UP = 'RN:componentDidUpdate()'
  static RENDER_AFT    = 'RN:componentDidMount()';

  // Constants to inficate objects without layouts (React/RN)
  static OBJ_COMUNIC   = 'Communication.js';
  static OBJ_ROUTE     = 'Route.js';
  static OBJ_DB        = 'DataBase.js';
  static OBJ_ACCOUNT   = 'Account.js';

  // Log to the React-Native lyfecicle
  static warn = (layout, lifycicle, msg) => console.log(`[ ${layout} | ${lifycicle} ] ${msg}`);
  static ok   = (obj, msg) => console.log(`[  OK   | ${obj} ] ${msg}`);
  static err  = (obj, msg) => console.log(`[ ERROR | ${obj} ] ${msg}`);

}
