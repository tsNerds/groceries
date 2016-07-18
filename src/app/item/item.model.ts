const MAX_STATUS : number = 3;
export class ItemModel {

    constructor(
        public name : string, 
        public status : number = 0) {

        }

    public incrementStatus() : void {
        if (this.status < MAX_STATUS) {
            this.status++;
        } else {
            console.error('max status reached! How are you doing this, you hacker?');
        }
    }
}
