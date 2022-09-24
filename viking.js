// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack()  {
        return this.strength;
      }
      receiveDamage(damage){
       
        this.health = this.health - damage;
      }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(name, health, strength);
        this.name = name;
        this.health = health;
        this.strength = strength;
    }
    attack(){
        return this.strength;
    }
    receiveDamage(damage){
       
        this.health =this.health - damage; 
         if (health<0) {
            return  "${this.name}  has received ${this.health} points of damage" ;
         }
         if(health==0|health<0){
  return "this.name + has died in act of combat";

      } 
     
   battleCry(){
    return "Odin Owns You All!"
   }
   
}

// Saxon
class Saxon extends Soldier {
  
    receiveDamage(damage){
        this.health = this.health - damage;
        
      }
}   

// War
class War {
    
    addViking(Viking){
       let viking = new viking;
       
      

    } 
    addSaxon() {

    }
}
   
