const MAX_STATUS : number = 3;
export class ItemModel {
    public name    : string;
    public status  : number;

    constructor(name : string, status : number = 0) {
        this.name = name;
        this.status = status;
    }

    public incrementStatus() : void {
        if (this.isTaskDone() === false) {
            this.status++;
        } else {
            console.error('Max status reached! How are you doing this, you hacker?');
        }
    }

    public decrementStatus() : void {
        if (this.status > 0) {
            this.status--;
        } else {
            console.error('wooo, can\'t go any more \'back\' than this, m8!?');
        }
    }

    public isTaskDone() : boolean {
        if (this.status < MAX_STATUS) {
            return false;
        }

        return true;
    }

    public taskStarted() : boolean {
        if (this.status === 0) {
            return false;
        } 
        
        return true;
    }
}
