
class Member {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    describe() { // this will describe the members in the members class
      return `${this.name} plays ${this.instrument}.`;
    }
}

// I need to find the verbiage to make more and better notes

class Band {
        constructor(name) {
            this.name = name;
            this.members = []; // each time we create a member, will include an array that holds all the members in the band
                }
    addMember(member) {
        if (member instanceof Member) { //instance this will check to see if their part of the member 
            this.members.push(this.members);               
        } else {// this will let them know what they did wrong
            throw new Error(`You can only add an instance of member. Argument is not a member: ${member}`);  
        }
    }

    describe() {
        return `${this.name} has ${members.length} members`;
    }
}

class Menu {
    constructor() { // leave the constructor blank argument
        this.bands = []; 
        this.selectedBand = null;
    }

    start() {
    let selection = this.showMainMenuOptions();

        while (selection !='0') {
            switch (selection) {
            case '1':
                this.createBand();
                    break; 
            case '2':
                this.viewBand();
                    break;
            case '3':
                this.deleteBand();
                    break; 
            case '4':
                this.displayBands();
                    break; 
            default:
                selection = 0;   // using this inside the loop, will keep it looping until they select zero - four                                            
            }  
            selection = this.showMainMenuOptions();
        }
        alert('Exit Light !!!  - - -  Fade To Black !!!');
    }
   showMainMenuOptions() {
    return prompt(`
        1) create new band
        2) view band
        3) delete band
        4) display all bands
        0) Rush says exit...stage left
    `);
   } 

    showBandMenuOptions(memberInfo) {
        return prompt(`
            0) back
            1) create member
            -----------------------------
            ${memberInfo}
        `);   
    }
    


        displayBands() { 
        let bandString = ''; // leaving the string empty will let us create new band
            for (let i = 0; i < this.bands.length; i++) {
                // i is the index of each team
                bandString += i + ') ' + this.bands[i] .name + `\n`;
                }
    alert(bandString);
    }  

 createBand() {
    let name = prompt('Enter name for new band:');
    this.bands.push(new Band(name));
 }

 deleteBand() {
    let index = prompt('Enter the index of the band you want to delete');
    if (index > -1 && index < this.bands.length) {
        this.bands.splice(index, 1);
        alert("Knock Knock Dave: it's time to go");
    } else {
        alert("Dave Ain't Here");
    }
 }

 createMember(index) {
    let name = prompt('What is the band members name');
    let instrument = prompt('What instrument does the band member play');
    this.bands[index].members.push(new Member(name, instrument));
 }


 viewBand() {
        let index = prompt('Enter the index of the band you wish to view'); 
        if (index > -1 && index < this.bands.length) {
         this.selectedBand = this.bands[index];  
            let description = 'Band Name: ' + this.selectedBand.name + `\n`;

            for (let i = 0; i < this.selectedBand.members.length; i++) {
                description += i + ') ' + this.selectedBand.members[i].name + 
                    ' - ' + this.selectedBand.members[i].instrument + `\n`;
            }
            alert (description);
        let selection = this.showBandMenuOptions(this.selectedBand.name);
        
       
        switch (selection) {
            case "1":
                this.createMember(index);
            }      
        }
    }
}

let menu = new Menu();
menu.start();



































































































































