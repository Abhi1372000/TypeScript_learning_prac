let sales: number = 1234_45_324;
let course: string = 'TypeScript'
let is_Published = true
let level; // if we dont declear any type the typescript compiler dectects as the "any" type later on
// but using any we loss main feature of typeScript so avoid using thr any type


function render(document: any){ 
    console.log(document)
}