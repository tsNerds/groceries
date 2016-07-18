const MAX_STATUS : number = 3;
export class ItemModel {

    constructor(
        public name : string, 
        public status : number = 0) {

        }

    public incrementStatus() : void {
        if (this.isTaskDone() === false) {
            this.status++;
        } else {
            console.error('Max status reached! How are you doing this, you hacker?');
        }
    }

    public isTaskDone() : boolean {
        if (this.status < MAX_STATUS) {
            return false;
        }

        return true;
    }
}
