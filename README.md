# LearnReact

Namaste React

## React - 1

let element = React.createElement(tag,{attributes},children/s)
let x= ReactDOM.createRoot(getThatid)
x.render(element)

## React-2

Npm(Package Manager) - package repository
package.json takes care of version of the dependencies/packages
`~` tilde => major upgrades
`^` caret => minor upgrades
package-lock.json => exact version of packages
transitive dependencies => package itself depends on many other packages i.e a dependency having another dependency

install parcel for bundling
parcel
=>
builds,
bundles,minification
hosts on server,
refresh pages on changes(Hot Module Replacement using File watching algorithm),
Faster Builds using caching
Image Optimization
consistent hashing
Code Splitting
Differential Bundling - support for older browsers
Tree Shaking - remove unused code

run npx parcel index.html to start application
For Prod give npm parcel build index.html (Remove entrypoint from package.json)
npm - locates and install package
npx - executes a package

import A from ./A => default Import
import {A} from ./A => named import i.e export const A = "55"

if script had imports, mention them as type = module

react-create-app internally uses webpack
