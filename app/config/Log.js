export const LOG_SCREEN      = (screen, lifycicle, msg) => console.log(`[ ${screen} | ${lifycicle} ] ${msg}`);

export const HOME_SCREEN     = 'HOME';
export const PANTRY_SCREEN   = 'PANTRY';
export const RECIPES_SCREEN  = 'RECIPES';
export const SETTINGS_SCREEN = 'SETTINGS';

export const CONSTRUCTOR     = 'constructor()';
export const PRE_RENDER      = 'componentWillMount()';
export const RENDER          = 'render()';
export const POS_RENDER      = 'componentDidMount()';

export const LOG_TAG_OK      = (obj, msg) => console.log(`[  OK   | ${obj} ] ${msg}`);
export const LOG_TAG_ER      = (obj, msg) => console.log(`[ ERROR | ${obj} ] ${msg}`);

export const OBJ_COMUNIC     = 'Communication';
export const OBJ_ROUTE       = 'Route';
export const OBJ_DB          = 'DataBase';
export const OBJ_ACCOUNT     = 'Account';
