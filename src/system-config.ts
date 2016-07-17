/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map: any = {
  '@angular2-material': 'vendor/@angular2-material'
};

/** User packages configuration. */
const materialComponents:string[] = [
  'core', 'toolbar', 'button', 'card', 'checkbox', 'icon', 'input', 'list', 'progress-bar',
  'progress-circle', 'radio', 'sidenav', 'grid-list', 'tabs', 'slide-toggle'
];

let generateMaterialPackage = function(name) {
  let obj = {};
  obj['@angular2-material/' + name] = {
    format: 'cjs',
    defaultExtension: 'js',
    main: name + '.js'
  };

  return obj;
}
const packages: any = materialComponents
  .map(generateMaterialPackage)
  .reduce(function(a, b) {
    var key = Object.keys(b)[0];

    a[key] = b[key];
    return a;
  });
// const packages: any = {
//   '@angular2-material/core': {
//     format: 'cjs',
//     defaultExtension: 'js',
//     main: 'core.js'
//   },
//   '@angular2-material/card': {
//     format: 'cjs',
//     defaultExtension: 'js',
//     main: 'card.js'
//   },
//   '@angular2-material/input': {
//     format: 'cjs',
//     defaultExtension: 'js',
//     main: 'input.js'
//   },
//   '@angular2-material/checkbox': {
//     format: 'cjs',
//     defaultExtension: 'js',
//     main: 'checkbox.js'
//   },
//   '@angular2-material/list': {
//     format: 'cjs',
//     defaultExtension: 'js',
//     main: 'list.js'
//   },
//   '@angular2-material/toolbar': {
//     format: 'cjs',
//     defaultExtension: 'js',
//     main: 'toolbar.js'
//   },
// };

////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels: string[] = [
  // Angular specific barrels.
  '@angular/core',
  '@angular/common',
  '@angular/compiler',
  '@angular/http',
  '@angular/forms',
  '@angular/router',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',

  // Thirdparty barrels.
  'rxjs',

  // App specific barrels.
  'app',
  'app/shared',
  'app/grocery-list',
  'app/grocery',
  /** @cli-barrel */
];

const cliSystemConfigPackages: any = {};
barrels.forEach((barrelName: string) => {
  cliSystemConfigPackages[barrelName] = { main: 'index' };
});

/** Type declaration for ambient System. */
declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
  map: {
    '@angular': 'vendor/@angular',
    'rxjs': 'vendor/rxjs',
    'main': 'main.js'
  },
  packages: cliSystemConfigPackages
});

// Apply the user's configuration.
System.config({ map, packages });
