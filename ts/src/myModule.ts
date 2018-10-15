// myModule.ts file
export function greetingsFunction(name: string){
  console.log("hello, ", name);
}

export interface SimplePoint {
  x: number;
  y: number;
}

export class MyCurse{
  private curse: string;
  constructor(){
    this.curse = "coucouille";
  }
  getCurse(){
    console.log(this.curse);
  }
}
